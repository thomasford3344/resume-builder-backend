import * as PDFKit from 'pdfkit';
import { existsSync } from 'fs';
import { join } from 'path';
import { ResumeData } from '.';

export class ResumePDFTemplate1 {
  private data: ResumeData;
  private pageWidth = 612; // Letter width in points (8.5 * 72)
  private pageHeight = 792; // Letter height in points (11 * 72)
  private marginX = 0.4 * 72; // 0.4 inch in points (horizontal)
  private marginT = 0.8 * 72; // 0.8 inch in points (vertical top)
  private marginB = 0.4 * 72; // 0.4 inch in points (vertical bottom)
  private contentWidth: number;
  private fontName = 'Times-Roman';
  private fontBold = 'Times-Bold';
  private fontItalic = 'Times-Italic';
  private fontBoldItalic = 'Times-BoldItalic';
  private fontPath: string | null = null;
  private fontBoldPath: string | null = null;
  private fontItalicPath: string | null = null;
  private fontBoldItalicPath: string | null = null;

  constructor(data: ResumeData) {
    this.data = this._normalizeData(data);
    this.contentWidth = this.pageWidth - 2 * this.marginX;
    this._findFonts();
  }

  private _normalizeData(data: ResumeData): ResumeData {
    return {
      name: data.name || '',
      title: data.title || '',
      contact: data.contact || {},
      summary: data.summary || '',
      skills: data.skills,
      experience: data.experience || [],
      education: data.education || [],
    };
  }

  private _findFonts() {
    const fontsDir = join(process.cwd(), 'assets', 'fonts', 'cambria');
    const regularVariants = [
      // 'Cambria.eot',
      'Cambria.ttf',
      // 'Cambria.woff',
      // 'Cambria.woff2',
    ];
    const boldVariants = [
      // 'Cambria-Bold.eot',
      'Cambria-Bold.ttf',
      // 'Cambria-Bold.woff',
      // 'Cambria-Bold.woff2',
    ];
    const italicVariants = [
      // 'Cambria-Italic.eot',
      'Cambria-Italic.ttf',
      // 'Cambria-Italic.woff',
      // 'Cambria-Italic.woff2',
    ];
    const boldItalicVariants = [
      // 'Cambria-BoldItalic.eot',
      'Cambria-BoldItalic.ttf',
      // 'Cambria-BoldItalic.woff',
      // 'Cambria-BoldItalic.woff2',
    ];

    if (existsSync(fontsDir)) {
      for (const variant of regularVariants) {
        const fontPath = join(fontsDir, variant);
        if (existsSync(fontPath) && !fontPath.toLowerCase().endsWith('.ttc')) {
          this.fontPath = fontPath;
          this.fontName = 'Cambria';
          break;
        }
      }

      for (const variant of boldVariants) {
        const fontPath = join(fontsDir, variant);
        if (existsSync(fontPath) && !fontPath.toLowerCase().endsWith('.ttc')) {
          this.fontBoldPath = fontPath;
          this.fontBold = 'Cambria-Bold';
          break;
        }
      }

      for (const variant of italicVariants) {
        const fontPath = join(fontsDir, variant);
        if (existsSync(fontPath) && !fontPath.toLowerCase().endsWith('.ttc')) {
          this.fontItalicPath = fontPath;
          this.fontItalic = 'Cambria-Italic';
          break;
        }
      }

      for (const variant of boldItalicVariants) {
        const fontPath = join(fontsDir, variant);
        if (existsSync(fontPath) && !fontPath.toLowerCase().endsWith('.ttc')) {
          this.fontBoldItalicPath = fontPath;
          this.fontBoldItalic = 'Cambria-BoldItalic';
          break;
        }
      }

      if (this.fontBoldPath === null && this.fontPath) {
        this.fontBoldPath = this.fontPath;
      }
      if (this.fontItalicPath === null && this.fontPath) {
        this.fontItalicPath = this.fontPath;
      }
      if (this.fontBoldItalicPath === null && this.fontBoldPath) {
        this.fontBoldItalicPath = this.fontBoldPath;
      }
    }
  }

  private _registerFonts(doc: any) {
    if (this.fontPath && existsSync(this.fontPath)) {
      try {
        doc.registerFont(this.fontName, this.fontPath);
        if (this.fontBoldPath) {
          doc.registerFont(this.fontBold, this.fontBoldPath);
        }
        if (this.fontItalicPath) {
          doc.registerFont(this.fontItalic, this.fontItalicPath);
        }
        if (this.fontBoldItalicPath) {
          doc.registerFont(this.fontBoldItalic, this.fontBoldItalicPath);
        }
      } catch (e) {
        const errorMessage = e instanceof Error ? e.message : String(e);
        console.log(`Warning: Could not register fonts: ${errorMessage}`);
        this.fontName = 'Times-Roman';
        this.fontBold = 'Times-Bold';
        this.fontItalic = 'Times-Italic';
        this.fontBoldItalic = 'Times-BoldItalic';
      }
    }
  }

  private _addName(doc: any) {
    const name = this.data.name || '';
    const title = this.data.title || '';

    doc
      .font(this.fontBold)
      .fontSize(24)
      .fillColor('#2C3E50')
      .text(name, this.marginX, this.marginT, {
        width: this.contentWidth,
        align: 'center',
      });

    doc.moveDown(0.3);

    if (title) {
      doc.font(this.fontName).fontSize(16).fillColor('#4A4A4A').text(title, {
        width: this.contentWidth,
        align: 'center',
      });
    }

    doc.moveDown(0.5);
  }

  private _addContact(doc: any) {
    const contact = this.data.contact || {};
    const address = contact.address || '';
    const email = contact.email || '';
    const phone = contact.phone || '';

    doc.fontSize(12).fillColor('#4A4A4A');

    if (address) {
      doc.font(this.fontName).text(address, {
        width: this.contentWidth,
        align: 'center',
      });
      doc.moveDown(0.3);
    }

    // Combine phone and email on one line
    if (phone || email) {
      const startY = doc.y;

      if (phone && email) {
        // Both exist - display phone, separator, and email with link
        const separator = ' | ';
        doc.font(this.fontName).fillColor('#4A4A4A');

        // Calculate center position
        const phoneText = phone;
        const emailText = email;
        const fullText = phoneText + separator + emailText;
        const textWidth = doc.widthOfString(fullText);
        const centerX = this.marginX + this.contentWidth / 2;
        const textStartX = centerX - textWidth / 2;

        // Draw phone
        doc.text(phoneText, textStartX, startY);

        // Draw separator
        const phoneWidth = doc.widthOfString(phoneText);
        doc.text(separator, textStartX + phoneWidth, startY);

        // Draw email with link
        const separatorWidth = doc.widthOfString(separator);
        doc
          .fillColor('#0066CC')
          .text(emailText, textStartX + phoneWidth + separatorWidth, startY, {
            link: `mailto:${email}`,
            underline: true,
          });

        doc.fillColor('#4A4A4A');
      } else if (phone) {
        // Only phone
        doc.font(this.fontName).text(phone, {
          width: this.contentWidth,
          align: 'center',
        });
      } else if (email) {
        // Only email
        doc
          .font(this.fontName)
          .fillColor('#0066CC')
          .text(email, {
            link: `mailto:${email}`,
            underline: true,
            width: this.contentWidth,
            align: 'center',
          });
        doc.fillColor('#4A4A4A');
      }
    }

    doc.moveDown(1);
  }

  private _addSectionHeader(doc: any, title: string) {
    // Check if there's enough space for the section header
    // Section header needs: title line + underline + spacing
    const headerFontSize = 12;
    const headerHeight = headerFontSize * 1.2; // Title line
    const underlineHeight = headerFontSize / 2; // Space for underline (lineY = startY + fontSize / 2)
    const spacingAfter = headerFontSize * 0.5; // moveDown(0.5)

    // Estimate minimum space needed for content that follows company line
    // This should be enough for at least a section title (like "Key Qualifications & Responsibilities")
    const contentFontSize = 11;
    const sectionTitleHeight = contentFontSize * 1.2; // Section title line
    const sectionTitleSpacing = contentFontSize * 0.3; // moveDown(0.3)
    const minContentLineHeight = contentFontSize * 1.2; // At least one bullet point line
    const minContentSpace =
      sectionTitleHeight +
      sectionTitleSpacing +
      minContentLineHeight +
      contentFontSize * 0.3; // Section title + spacing + one line + spacing

    const totalSpaceNeeded =
      headerHeight + underlineHeight + spacingAfter + minContentSpace;

    const currentY = doc.y;
    const spaceAvailable = this.pageHeight - this.marginB - currentY;

    if (spaceAvailable < totalSpaceNeeded) {
      // Not enough space, add a new page
      doc.addPage();
    }

    const startY = doc.y;
    const fontSize = headerFontSize;
    const titleText = title.toUpperCase();

    // Set font to measure text width
    doc.font(this.fontBold).fontSize(fontSize);
    const textWidth = doc.widthOfString(titleText);
    const padding = 8; // Space between text and line on each side

    // Calculate center position
    const centerX = this.marginX + this.contentWidth / 2;
    const textStartX = centerX - textWidth / 2;
    const textEndX = centerX + textWidth / 2;

    // Draw line in the middle of the text (vertically centered)
    const lineY = startY + fontSize / 2;

    // Draw left line segment (from margin to before text)
    doc
      .moveTo(this.marginX, lineY)
      .lineTo(textStartX - padding, lineY)
      .strokeColor('#2C3E50')
      .lineWidth(2)
      .stroke();

    // Draw right line segment (from after text to end)
    doc
      .moveTo(textEndX + padding, lineY)
      .lineTo(this.marginX + this.contentWidth, lineY)
      .strokeColor('#2C3E50')
      .lineWidth(2)
      .stroke();

    // Draw text in the center
    doc
      .font(this.fontBold)
      .fontSize(fontSize)
      .fillColor('#2C3E50')
      .text(titleText, this.marginX, startY, {
        width: this.contentWidth,
        align: 'center',
      });

    doc.moveDown(0.5);
  }

  private _estimateTextHeight(
    doc: any,
    text: string,
    width: number,
    fontSize: number,
    lineHeight?: number,
  ): number {
    const effectiveLineHeight = lineHeight || fontSize * 1.2;

    // Save current font and font size
    const savedFont = doc._font ? doc._font.name : null;
    const savedFontSize = doc._fontSize || 12;

    // Temporarily set font size for measurement
    doc.fontSize(fontSize);

    try {
      // Try to use PDFKit's widthOfString to calculate wrapping
      const words = text.split(' ');
      let currentLine = '';
      let lines = 1;

      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        let lineWidth: number;

        try {
          lineWidth = doc.widthOfString(testLine);
        } catch (e) {
          // Fallback: estimate based on average character width
          // Average character width is approximately 0.6 * fontSize for most fonts
          const avgCharWidth = fontSize * 0.6;
          lineWidth = testLine.length * avgCharWidth;
        }

        if (lineWidth > width) {
          if (currentLine) {
            lines++;
            currentLine = word;
          } else {
            // Single word is too long, estimate how many lines it needs
            let wordWidth: number;
            try {
              wordWidth = doc.widthOfString(word);
            } catch (e) {
              const avgCharWidth = fontSize * 0.6;
              wordWidth = word.length * avgCharWidth;
            }
            lines += Math.max(1, Math.ceil(wordWidth / width));
            currentLine = '';
          }
        } else {
          currentLine = testLine;
        }
      }

      // Restore font state
      if (savedFont) {
        doc.font(savedFont).fontSize(savedFontSize);
      } else {
        doc.fontSize(savedFontSize);
      }

      return lines * effectiveLineHeight;
    } catch (e) {
      // If all else fails, use a simple character-based estimation
      // Restore font state
      if (savedFont) {
        doc.font(savedFont).fontSize(savedFontSize);
      } else {
        doc.fontSize(savedFontSize);
      }

      // Estimate: average 80 characters per line for 11pt font at standard width
      const avgCharsPerLine = Math.floor(width / (fontSize * 0.6));
      const estimatedLines = Math.max(
        1,
        Math.ceil(text.length / avgCharsPerLine),
      );
      return estimatedLines * effectiveLineHeight;
    }
  }

  private _addSummary(doc: any) {
    this._addSectionHeader(doc, 'SUMMARY');
    const summary = (this.data.summary || '').replace(/\n/g, ' ');

    doc.font(this.fontName).fontSize(11).fillColor('#333333').text(summary, {
      width: this.contentWidth,
      align: 'left',
      paragraphGap: 3,
    });

    doc.moveDown(1);
  }

  private _addSkills(doc: any) {
    this._addSectionHeader(doc, 'SKILLS');
    const skills = this.data.skills;

    doc.font(this.fontName).fontSize(11).fillColor('#333333');

    for (const skill of skills) {
      const itemsText = skill.items.join(', ');
      const categoryText = `${skill.category}: `;
      const fullText = categoryText + itemsText;

      // Estimate height needed for this skill line
      const fontSize = 11;
      const estimatedHeight = this._estimateTextHeight(
        doc,
        fullText,
        this.contentWidth,
        fontSize,
      );
      const spacingAfter = fontSize * 0.3; // moveDown(0.3)
      const minSpaceNeeded = estimatedHeight + spacingAfter;

      const currentY = doc.y;
      const spaceAvailable = this.pageHeight - this.marginB - currentY;

      // Check if we need a page break before rendering the category
      if (spaceAvailable < minSpaceNeeded) {
        doc.addPage();
      }

      doc.font(this.fontBold).text(categoryText, this.marginX, doc.y, {
        width: this.contentWidth,
        align: 'left',
        continued: true,
      });
      doc.font(this.fontName).text(itemsText);
      doc.moveDown(0.3);
    }

    doc.moveDown(1);
  }

  private _addExperience(doc: any) {
    this._addSectionHeader(doc, 'WORK HISTORY');
    const experiences = this.data.experience || [];

    for (const exp of experiences) {
      // Calculate space needed for this experience entry
      const titleFontSize = 12;
      const companyFontSize = 11;
      const titleHeight = titleFontSize * 1.2;
      const companyHeight = companyFontSize * 1.2;
      const spacingAfterCompany = companyFontSize * 0.5; // moveDown(0.5)
      const minContentSpace = companyFontSize * 2.5; // At least 2 lines of content

      // Minimum space needed: title + company + spacing + at least some content
      const minSpaceNeeded =
        titleHeight + companyHeight + spacingAfterCompany + minContentSpace;

      const currentY = doc.y;
      const spaceAvailable = this.pageHeight - this.marginB - currentY;

      // Check if we need a page break before rendering the job title
      if (spaceAvailable < minSpaceNeeded) {
        doc.addPage();
      }

      // Render job title
      doc
        .font(this.fontBold)
        .fontSize(titleFontSize)
        .fillColor('#2C3E50')
        .text(exp.title || '', this.marginX, doc.y, {
          width: this.contentWidth,
          align: 'left',
        });

      const company = exp.company || '';
      const dateRange = exp.date_range || '';
      const location = exp.location || '';
      const companyText = company.trim();
      const dateLocation = location
        ? `${dateRange} | ${location}`.trim()
        : dateRange.trim();

      const col1Width = this.contentWidth * 0.5;
      const col2Width = this.contentWidth * 0.5;
      // Get current Y position
      let lineY = doc.y;
      const lineHeight = doc.currentLineHeight(true) || 13;

      // Check if we need a page break - ensure company and date stay together with content
      // Calculate if there's enough space on current page
      const spaceNeededForCompany =
        companyHeight + spacingAfterCompany + minContentSpace;
      const spaceAvailableForCompany = this.pageHeight - this.marginB - lineY;

      if (spaceAvailableForCompany < spaceNeededForCompany) {
        // Not enough space - add a new page
        doc.addPage();
        lineY = this.marginT; // Start at top margin of new page
      }

      // Render company text on the left

      doc
        .font(this.fontName)
        .fontSize(11)
        .fillColor('#555555')
        .text(companyText, this.marginX, lineY, {
          width: col1Width,
          align: 'left',
        });

      doc.text(dateLocation, this.marginX + col1Width, lineY, {
        width: col2Width,
        align: 'right',
      });

      doc.y = lineY + lineHeight;
      doc.moveDown(0.5);

      const responsibilities = exp.responsibilities || [];
      if (responsibilities.length > 0) {
        // Calculate space needed for "Key Qualifications & Responsibilities" section
        const titleFontSize = 11;
        const contentFontSize = 11;
        const titleHeight = titleFontSize * 1.2; // Title line height
        const titleSpacing = titleFontSize * 0.3; // moveDown(0.3) spacing
        const contentSpacing = contentFontSize * 0.3; // Final moveDown(0.3) spacing
        const paragraphGap = 2;

        // Estimate height for all responsibility items
        let totalContentHeight = 0;
        doc.font(this.fontName).fontSize(contentFontSize);
        for (const responsibility of responsibilities) {
          const respText = String(responsibility).replace(/\n/g, ' ');
          const bulletText = `• ${respText}`;
          const itemHeight = this._estimateTextHeight(
            doc,
            bulletText,
            this.contentWidth - 18,
            contentFontSize,
          );
          totalContentHeight += itemHeight + paragraphGap;
        }

        // Total space needed: title + title spacing + content + content spacing
        const totalSpaceNeeded =
          titleHeight + titleSpacing + totalContentHeight + contentSpacing;

        // Check if we need a page break
        const currentY = doc.y;
        const spaceAvailable = this.pageHeight - this.marginB - currentY;
        const minSpaceRequired =
          titleHeight + titleSpacing + contentFontSize * 1.2; // At least title + one line

        if (spaceAvailable < minSpaceRequired) {
          // Not enough space even for title + one line, add page break
          doc.addPage();
        } else if (spaceAvailable < totalSpaceNeeded) {
          // We have space for title but not all content
          // Check if we can fit at least the title + a few lines
          if (spaceAvailable < minSpaceRequired * 2) {
            // Not enough space for title + reasonable content, add page break
            doc.addPage();
          }
        }

        doc
          .font(this.fontBold)
          .fontSize(titleFontSize)
          .fillColor('#2C3E50')
          .text(
            'Key Qualifications & Responsibilities',
            this.marginX + 18,
            doc.y,
            {
              width: this.contentWidth,
              align: 'left',
            },
          );
        doc.moveDown(0.3);

        doc.font(this.fontName).fontSize(contentFontSize).fillColor('#333333');

        for (const responsibility of responsibilities) {
          const respText = String(responsibility).replace(/\n/g, ' ');
          const bulletX = this.marginX + 18;
          const bulletText = `• ${respText}`;
          doc.text(bulletText, bulletX, doc.y, {
            width: this.contentWidth - 18,
            align: 'left',
            paragraphGap: 2,
          });
        }
        doc.moveDown(0.3);
      }

      const achievements = exp.achievements || [];
      if (achievements.length > 0) {
        // Calculate space needed for "Key Achievements" section
        const titleFontSize = 11;
        const contentFontSize = 11;
        const titleHeight = titleFontSize * 1.2; // Title line height
        const titleSpacing = titleFontSize * 0.3; // moveDown(0.3) spacing
        const contentSpacing = contentFontSize * 0.3; // Final moveDown(0.3) spacing
        const paragraphGap = 2;

        // Estimate height for all achievement items
        let totalContentHeight = 0;
        doc.font(this.fontName).fontSize(contentFontSize);
        for (const achievement of achievements) {
          const achText = String(achievement).replace(/\n/g, ' ');
          const bulletText = `• ${achText}`;
          const itemHeight = this._estimateTextHeight(
            doc,
            bulletText,
            this.contentWidth - 18,
            contentFontSize,
          );
          totalContentHeight += itemHeight + paragraphGap;
        }

        // Total space needed: title + title spacing + content + content spacing
        const totalSpaceNeeded =
          titleHeight + titleSpacing + totalContentHeight + contentSpacing;

        // Check if we need a page break
        const currentY = doc.y;
        const spaceAvailable = this.pageHeight - this.marginB - currentY;
        const minSpaceRequired =
          titleHeight + titleSpacing + contentFontSize * 1.2; // At least title + one line

        if (spaceAvailable < minSpaceRequired) {
          // Not enough space even for title + one line, add page break
          doc.addPage();
        } else if (spaceAvailable < totalSpaceNeeded) {
          // We have space for title but not all content
          // Check if we can fit at least the title + a few lines
          if (spaceAvailable < minSpaceRequired * 2) {
            // Not enough space for title + reasonable content, add page break
            doc.addPage();
          }
        }

        doc
          .font(this.fontBold)
          .fontSize(titleFontSize)
          .fillColor('#2C3E50')
          .text('Key Achievements', this.marginX + 18, doc.y, {
            width: this.contentWidth,
            align: 'left',
          });
        doc.moveDown(0.3);

        doc.font(this.fontName).fontSize(contentFontSize).fillColor('#333333');

        for (const achievement of achievements) {
          const achText = String(achievement).replace(/\n/g, ' ');
          const bulletX = this.marginX + 18;
          const bulletText = `• ${achText}`;
          doc.text(bulletText, bulletX, doc.y, {
            width: this.contentWidth - 18,
            align: 'left',
            paragraphGap: 2,
          });
        }
        doc.moveDown(0.3);
      }

      const skillsInCompany = exp.skills;
      if (skillsInCompany) {
        const skillsText = Array.isArray(skillsInCompany)
          ? skillsInCompany.join(', ')
          : String(skillsInCompany);
        const bulletX = this.marginX + 18;
        doc.font(this.fontBoldItalic).fontSize(11).fillColor('#2C3E50');
        doc.text('Skills: ', bulletX, doc.y, {
          width: this.contentWidth - 18,
          align: 'left',
          continued: true,
        });
        doc.font(this.fontItalic).fillColor('#333333').text(skillsText);
        doc.moveDown(0.3);
      }

      doc.moveDown(0.3);
    }
    doc.moveDown(0.7);
  }

  private _addEducation(doc: any) {
    this._addSectionHeader(doc, 'EDUCATION');
    const educationList = this.data.education || [];

    for (const edu of educationList) {
      // Calculate space needed for this education entry
      const degreeFontSize = 12;
      const institutionFontSize = 11;
      const degreeHeight = degreeFontSize * 1.2;
      const institutionHeight = institutionFontSize * 1.2;
      const spacingAfterInstitution = institutionFontSize * 1; // moveDown(1)
      const minContentSpace = institutionFontSize * 1; // At least 1 line of spacing

      // Minimum space needed: degree + institution + spacing
      const minSpaceNeeded =
        degreeHeight +
        institutionHeight +
        spacingAfterInstitution +
        minContentSpace;

      const currentY = doc.y;
      const spaceAvailable = this.pageHeight - this.marginB - currentY;

      // Check if we need a page break before rendering the degree
      if (spaceAvailable < minSpaceNeeded) {
        doc.addPage();
      }

      // Render degree title
      doc
        .font(this.fontBold)
        .fontSize(degreeFontSize)
        .fillColor('#2C3E50')
        .text(edu.degree || '', this.marginX, doc.y, {
          width: this.contentWidth,
          align: 'left',
        });

      const institution = edu.institution || '';
      const dateRange = edu.date_range || '';
      const location = edu.location || '';
      const institutionText = institution.trim();
      const dateLocation = location
        ? `${dateRange} | ${location}`.trim()
        : dateRange.trim();

      const col1Width = this.contentWidth * 0.5;
      const col2Width = this.contentWidth * 0.5;
      // Get current Y position
      let lineY = doc.y;
      const lineHeight = doc.currentLineHeight(true) || 13;

      // Check if we need a page break - ensure institution and date stay together
      // Calculate if there's enough space on current page
      const spaceNeededForInstitution =
        institutionHeight + spacingAfterInstitution + minContentSpace;
      const spaceAvailableForInstitution =
        this.pageHeight - this.marginB - lineY;

      if (spaceAvailableForInstitution < spaceNeededForInstitution) {
        // Not enough space - add a new page
        doc.addPage();
        lineY = this.marginT; // Start at top margin of new page
      }

      doc
        .font(this.fontName)
        .fontSize(11)
        .fillColor('#555555')
        .text(institutionText, this.marginX, lineY, {
          width: col1Width,
          align: 'left',
        });

      doc.text(dateLocation, this.marginX + col1Width, lineY, {
        width: col2Width,
        align: 'right',
      });

      doc.y = lineY + lineHeight;
      doc.moveDown(1);
    }
  }

  async generate(): Promise<Buffer> {
    return new Promise(async (resolve, reject) => {
      try {
        const PDFDoc = (PDFKit as any).default || PDFKit;
        const doc = new PDFDoc({
          size: 'LETTER',
          margins: {
            top: this.marginT,
            bottom: this.marginB,
            left: this.marginX,
            right: this.marginX,
          },
        });

        this._registerFonts(doc);

        const buffers: Buffer[] = [];

        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
          const pdfBuffer = Buffer.concat(buffers);
          resolve(pdfBuffer);
        });
        doc.on('error', reject);

        this._addName(doc);
        this._addContact(doc);
        this._addSummary(doc);
        this._addSkills(doc);
        this._addExperience(doc);
        this._addEducation(doc);

        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }
}
