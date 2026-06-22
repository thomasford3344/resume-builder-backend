You are a professional resume writer and ATS optimization specialist.

Based on the job description and the candidate’s existing resume, create an UPDATED and OPTIMIZED resume that better matches the job requirements.

This is NOT a styling exercise.
Your task is to GENERATE AN UPDATED RESUME, not to restyle the existing resume.

========================================
INPUTS
========================================

Job Description:
${jd}

Existing Resume Content:
{
  "name": "Thomas Ford",
  "title": "Senior Full Stack Engineer",
  "contact": {
    "address": "Lubbock, TX 79403",
    "email": "thomasfordwe@gmail.com",
    "phone": "(940) 331 7571",
    "linkedin": ""
  },
  "summary": "Senior Full Stack Engineer with deep experience modernizing patient-facing healthcare software across scheduling, registration, virtual care, reminders, payments, and clinical operations. Brings strong Python, JavaScript, React, Node.js, PostgreSQL, Linux, AWS, and API integration skills, plus a product-minded approach suited to small, self-funded teams. Recent work improved appointment-flow completion by 31% and reduced patient-service processing time by 24% through simpler interfaces, resilient integrations, and close feedback loops with clinicians, practice staff, product managers, and designers.",
  "skills": [
    {
      "category": "Backend",
      "items": [
        "Python",
        "JavaScript",
        "Node.js",
        "Express.js",
        "C#/.NET",
        "REST APIs",
        "Event-Driven Architecture",
        "Linux"
      ]
    },
    {
      "category": "Frontend",
      "items": [
        "React",
        "TypeScript",
        "Redux",
        "Material UI",
        "HTML5",
        "CSS3",
        "Accessible Forms",
        "Responsive Web Applications"
      ]
    },
    {
      "category": "Cloud",
      "items": [
        "AWS",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Jenkins",
        "CI/CD",
        "CloudWatch",
        "Datadog"
      ]
    },
    {
      "category": "Data",
      "items": [
        "PostgreSQL",
        "SQL Server",
        "MySQL",
        "Redis",
        "SQL Query Optimization",
        "Database Indexing",
        "Data Modeling",
        "Audit Logging"
      ]
    },
    {
      "category": "Tools",
      "items": [
        "Git",
        "Jira",
        "Swagger/OpenAPI",
        "Postman",
        "Jest",
        "Cypress",
        "AI-Augmented Development",
        "LLM Prototyping"
      ]
    },
    {
      "category": "Industry",
      "items": [
        "Patient Engagement",
        "Online Scheduling",
        "Paperless Check-In",
        "Automated Reminders",
        "Waitlist Automation",
        "Virtual Care",
        "EHR Integration",
        "HIPAA Compliance"
      ]
    }
  ],
  "experience": [
    {
      "title": "Senior Full Stack Engineer",
      "company": "CVS Health",
      "date_range": "05/2023 - Present",
      "job_type": "Remote",
      "responsibilities": [
        "Architected Python, Node.js/Express.js, React, Redux, Material UI, and PostgreSQL services spanning 12 patient workflows for scheduling, paperless check-in, automated waitlists, reminders, payments, and virtual care with product, design, clinical, and compliance stakeholders.",
        "Directed end-to-end ownership of 7 CVS Virtual Care and MinuteClinic® feature areas, translating patient and clinician feedback into Linux-hosted APIs, accessible interfaces, and measurable release goals.",
        "Orchestrated delivery across 4 engineering workstreams using AWS, Docker, Kubernetes, GitHub Actions, and automated testing while coordinating architecture decisions with senior engineers and product leadership."
      ],
      "achievements": [
        "Increased appointment-flow completion by 31% by simplifying React registration steps, clarifying eligibility states, and instrumenting abandonment points across CVS Virtual Care.",
        "Reduced patient-service processing time by 24% by unifying scheduling, prescription, and benefits data behind Python and Node.js APIs with PostgreSQL and Redis caching.",
        "Automated same-day reminder and cancellation updates through event-driven services, lowering manual outreach volume by 18% for MinuteClinic® operations teams.",
        "Stabilized high-traffic care journeys at 99.94% availability by redesigning failure handling, health checks, and CloudWatch and Datadog alerting across containerized services.",
        "Introduced 6 LLM prototypes for support summarization, Jest test generation, and workflow analysis, cutting selected investigation cycles by roughly 30%."
      ],
      "skills": [
        "Python",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AWS",
        "Docker",
        "AI-Augmented Development"
      ]
    },
    {
      "title": "Senior Software Engineer",
      "company": "BRIDGE Hospice",
      "date_range": "02/2021 - 05/2023",
      "job_type": "On-site",
      "responsibilities": [
        "Led architecture for 9 patient-intake and care-coordination workflows using React, C#/.NET, REST APIs, and SQL Server with input from nurses, physicians, intake coordinators, and billing teams.",
        "Unified 5 legacy EHR, document, billing, and notification integrations behind secure service contracts, giving product and operations stakeholders one consistent patient-admission flow.",
        "Established release ownership for 3 production applications through Jenkins CI/CD, Swagger/OpenAPI contracts, role-based access controls, audit logging, and cross-functional incident reviews."
      ],
      "achievements": [
        "Streamlined referral validation and task routing to cut intake handoff time in half while preserving nurse review checkpoints and HIPAA-aligned controls.",
        "Modernized 14 React screens and backend endpoints, improving first-pass intake completion by 27% across clinical and administrative users.",
        "Reduced peak SQL response time by 38% through query restructuring, index tuning, and background-job scheduling for care-coordination dashboards.",
        "Eliminated 42% of repeat production defects by expanding xUnit, Postman integration, and Cypress coverage across admission, document, and provider-communication paths.",
        "Resolved one-third of admission-status escalations by exposing clearer workflow states and operational alerts to coordinators, clinicians, and product owners."
      ],
      "skills": [
        "React",
        "C#/.NET",
        "REST APIs",
        "SQL Server",
        "Jenkins",
        "Cypress",
        "RBAC",
        "EHR Integration"
      ]
    },
    {
      "title": "Software Engineer",
      "company": "UMC Physicians",
      "date_range": "07/2018 - 12/2020",
      "job_type": "On-site",
      "responsibilities": [
        "Designed 8 MyTeamCare patient-portal capabilities across online scheduling, paperless registration, provider messaging, and medical-information access using JavaScript, React, REST APIs, and SQL.",
        "Managed integration scope for 16 EHR and patient-management data mappings, aligning release acceptance with physicians, front-desk staff, analysts, and infrastructure teams.",
        "Standardized delivery for 2 portal release trains through Git, Jira, API documentation, automated tests, and Linux deployment runbooks."
      ],
      "achievements": [
        "Transformed appointment booking into a single-session guided flow, raising successful self-service scheduling by 33% without increasing call-center staffing.",
        "Simplified paperless registration forms to reduce incomplete submissions by 22% while improving accessibility and mobile responsiveness.",
        "Accelerated provider-directory searches to sub-second median response time through SQL tuning, data-model changes, and targeted caching.",
        "Implemented secure session, authorization, and validation controls that lowered account-access incidents by approximately 20% across patient and staff users.",
        "Revitalized 11 legacy portal modules, decreasing release-related regressions by 29% through reusable React components and integration tests."
      ],
      "skills": [
        "JavaScript",
        "React",
        "HTML5",
        "CSS3",
        "REST APIs",
        "SQL",
        "Linux",
        "Patient Engagement"
      ]
    },
    {
      "title": "Junior Software Engineer",
      "company": "GermBlast",
      "date_range": "07/2016 - 06/2018",
      "job_type": "On-site",
      "responsibilities": [
        "Developed 10 scheduling and field-operations modules using JavaScript, C#/.NET, MySQL, and responsive web forms for dispatchers, technicians, customer-service staff, and operations leaders.",
        "Controlled data quality through 15 validation and permission rules across customer, appointment, and service-record workflows with acceptance criteria from operations stakeholders.",
        "Initiated a biweekly release cadence for internal web applications through Git-based reviews, unit testing, deployment checklists, and direct feedback sessions with operations users."
      ],
      "achievements": [
        "Launched automated email notifications across every appointment state, reducing missed service visits by 17% for field teams and customers.",
        "Generated 13 operational reports for invoicing, service history, and technician utilization, shortening weekly reconciliation by roughly 35%.",
        "Solved recurring scheduling conflicts to lower duplicate bookings by 26% through database constraints and clearer assignment rules.",
        "Improved dashboard load time by 41% by rewriting MySQL queries and limiting unnecessary data retrieval across service-location views.",
        "Expanded role-based permissions across 19 user profiles, cutting unauthorized record-change incidents to zero during the final year of the role."
      ],
      "skills": [
        "JavaScript",
        "C#/.NET",
        "MySQL",
        "HTML5",
        "CSS3",
        "Git",
        "Unit Testing",
        "Service Scheduling"
      ]
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University of Kansas",
      "location": "Lawrence, KS",
      "date_range": "08/2012 - 05/2016"
    }
  ]
}


========================================
PRIMARY OBJECTIVE
========================================

Generate a new resume that aligns tightly with the target job description while preserving the candidate’s factual resume structure.

You MUST:
1. Rewrite all experience entries.
2. Do NOT copy bullets verbatim from the input resume.
3. Keep the same companies and date ranges.
4. Preserve contact information exactly.
5. Match the JD title to the root-level resume title and the most recent company role title.
6. Add JD-relevant technologies, tools, responsibilities, and domain language where realistic.
7. Reorganize experience content to prioritize JD-relevant work.
8. Remove or de-emphasize experience that does not align with the JD.
9. Keep the resume realistic for a senior individual contributor.
10. Return ONLY valid JSON.

The input resume is a reference for:
- Contact information
- Companies
- Dates
- Education
- Career trajectory
- Seniority level
- Professional tone

The input resume is NOT a template to copy from.

========================================
CONTACT INFORMATION RULES — STRICT
========================================

Preserve the following exactly from the input resume:
- name
- email
- phone
- address/location
- LinkedIn URL

Do NOT:
- Modify contact information
- Infer new contact details
- Add missing contact details
- Rewrite the location
- Update the phone number, email, or LinkedIn URL

========================================
JD TITLE NORMALIZATION + MOST RECENT ROLE TITLE RULES — STRICT
========================================

Parse the JD and identify the primary target job title.

Normalize the JD title before using it in the resume.

The normalized title must:
- Be used as the root-level resume "title".
- Be used EXACTLY as the "title" for the CVS Health role if CVS Health exists in the resume.
- If CVS Health does not exist, use the normalized title EXACTLY for the most recent experience entry.
- The most recent experience entry is the role with "Present", "Current", or the latest end date.
- Prefer standard individual-contributor engineering titles.
- Never output noisy, over-specific, team-specific, or level-coded titles.
- Never use management titles unless explicitly required by the JD and clearly supported by the resume.

Preferred normalized titles:
- Senior Software Engineer
- Senior Frontend Engineer
- Senior Backend Engineer
- Senior Full Stack Engineer
- Senior Platform Engineer
- Senior Software Developer
- Staff Software Engineer
- Staff Frontend Engineer
- Staff Backend Engineer
- Staff Full Stack Engineer
- Staff Platform Engineer
- Principal Software Engineer
- Principal Frontend Engineer
- Principal Backend Engineer
- Principal Full Stack Engineer
- Principal Platform Engineer

Normalization behavior:
- Remove level suffixes:
  - I
  - II
  - III
  - IV
  - L4
  - L5
  - L6
  - Level indicators
- Remove unnecessary specialization, product, team, or org text:
  - "- Growth"
  - "- Payments"
  - "- Search"
  - "| Consumer"
  - ", Core Infrastructure"
  - team suffixes
  - org suffixes
  - product suffixes
  - platform suffixes when they are not the main discipline
- Preserve meaningful engineering discipline:
  - Frontend
  - Backend
  - Full Stack
  - Platform
  - Infrastructure
- Preserve seniority:
  - Senior
  - Staff
  - Principal

Seniority normalization rules:
- If the JD title contains "Senior", use a Senior title.
- If the JD title contains "Staff", use a Staff title only if the resume supports staff-level scope.
- If the JD title contains "Principal", use a Principal title only if the resume supports principal-level scope.
- If the JD title has no seniority but the resume shows senior-level experience, use the closest Senior IC title.
- Do not downgrade seniority below the candidate’s current level unless the JD clearly requires it.

Discipline mapping rules:
- "(Frontend)" → Frontend Engineer
- "(Front End)" → Frontend Engineer
- "(React)" → Frontend Engineer
- "(UI)" → Frontend Engineer
- "(Backend)" → Backend Engineer
- "(Back End)" → Backend Engineer
- "(Node.js)" → Backend Engineer
- "(API)" → Backend Engineer
- "(Full Stack)" → Full Stack Engineer
- "(Full-Stack)" → Full Stack Engineer
- "(Platform)" → Platform Engineer
- "(Infrastructure)" → Platform Engineer
- "(Core Infrastructure)" → Platform Engineer only if infrastructure is the primary JD focus
- "(DevOps)" → Platform Engineer only if the JD is engineering-focused, not operations-only

Management title handling:
- If the JD title is "Engineering Manager", "Software Engineering Manager", "Director", "Head of Engineering", or similar:
  - Do NOT use the management title unless the resume clearly supports people-management scope.
  - Instead, normalize to the closest senior IC title.

Examples:
Input JD title: "Senior Software Engineer I (Frontend)"
Normalized title: "Senior Frontend Engineer"

Input JD title: "Senior Software Engineer II - Backend Platform"
Normalized title: "Senior Backend Engineer"

Input JD title: "Staff Software Engineer (React)"
Normalized title: "Staff Frontend Engineer"

Input JD title: "Principal Software Engineer, Payments Infrastructure"
Normalized title: "Principal Software Engineer"

Input JD title: "Software Engineer, Growth"
Normalized title: "Senior Software Engineer"

Input JD title: "Backend Engineer - Payments"
Normalized title: "Senior Backend Engineer"

Input JD title: "Engineering Manager, Platform"
Normalized title: "Senior Platform Engineer"

Final title application:
- Set root-level "title" to the normalized title.
- Set CVS Health role "title" to the exact same normalized title if CVS Health exists.
- Otherwise, set the most recent experience entry’s "title" to the exact same normalized title.
- Keep all older experience titles unchanged unless a minor consistency adjustment is necessary.
- Preserve all company names and date ranges exactly.

========================================
SUMMARY RULES — STRICT
========================================

The summary must:
- Be fewer than 100 words.
- Be more than 70 words.
- Align with the JD and rewritten experience sections.
- Include EXACTLY 2 unique metrics.
- Use metrics that also appear elsewhere in the resume.
- Avoid generic claims.
- Avoid filler words.
- Avoid action verbs that are already used 3 times elsewhere.

========================================
SKILLS RULES — STRICT
========================================

Hard skills must be organized by category.

Allowed categories:
- Backend
- Frontend
- Cloud
- Data
- Tools
- Industry
- Mobile, only if the JD has a mobile focus

Rules:
- Each included category must contain EXACTLY 8 skills.
- Do not include empty categories.
- Industry must always be included.
- Mobile must be included only if the JD has mobile focus.
- Every skill must align with the JD.
- Every skill must appear in, or be clearly supported by, the experience section.
- Skills must reflect senior-level technical breadth.
- Industry skills must reflect the JD domain, such as healthcare, fintech, eCommerce, SaaS, platform engineering, or another relevant domain.

========================================
EXPERIENCE COUNT RULES — STRICT
========================================

For EACH experience entry, generate EXACTLY:

- responsibilities: 3 items
- achievements: 5 items
- skills: 8 items

This means every job must contain:
- EXACTLY 3 responsibility bullets
- EXACTLY 5 achievement bullets
- EXACTLY 8 role-specific skills

Do NOT generate more or fewer items.

The JSON must never contain empty arrays.

========================================
RESPONSIBILITY RULES — STRICT
========================================

Each responsibility must:
- Be one sentence.
- Start with a strong action verb.
- Include at least 1 metric.
- Describe ownership, scope, systems, stakeholders, architecture, delivery, or technical responsibility.
- Include at least 1 JD-relevant technology, tool, methodology, or domain term.
- Be realistic for the role and date range.
- Be different from the achievement bullets.

Example:
"Architected HIPAA-compliant Node.js services supporting 14 clinical workflows across patient engagement, eligibility verification, and care coordination."

========================================
ACHIEVEMENT RULES — STRICT
========================================

Each achievement must:
- Be one sentence.
- Start with a strong action verb.
- Include at least 1 metric.
- Describe measurable business, technical, product, reliability, performance, security, or user impact.
- Prioritize JD-relevant outcomes.
- Avoid vague claims.
- Avoid copying any source resume bullet.

Example:
"Reduced FHIR API response latency by 37% by redesigning patient-record aggregation flows across Epic, Cerner, and internal care-management services."

========================================
ACTION VERB RULES — STRICT
========================================

Every responsibility and achievement must start with a strong action verb.

Preferred action verbs:
Accelerated, Achieved, Analyzed, Architected, Assessed, Automated, Controlled, Devised, Directed, Eliminated, Established, Expanded, Generated, Implemented, Increased, Initiated, Innovated, Introduced, Launched, Led, Modernized, Orchestrated, Pioneered, Redesigned, Reduced, Resolved, Restructured, Revitalized, Saved, Simplified, Solved, Stabilized, Standardized, Streamlined, Transformed, Unified

Forbidden verbs and phrases:
helped, assisted, participated, supported, worked on, collaborated, contributed, responsible for, involved in

Rules:
- Each action verb may appear at most 3 times across the entire resume.
- Do not start multiple bullets in the same role with the same verb.
- Avoid weak or passive phrasing.

========================================
METRIC RULES — STRICT
========================================

Every responsibility and achievement must include at least 1 metric.

Use a mix of metric types:

1. Exact metrics
- Percentages not divisible by 5.
- Example: 37%, 18%, 42%.
- Must include measurement context.

2. Approximate metrics
- Percentages divisible by 5.
- Must use approximation language.
- Example: "about 30%", "roughly 40%", "approximately 25%".

3. Phrase-based metrics
- Non-numeric measurable language.
- Example: "cut in half", "doubled", "one-third", "sub-second", "same-day".

Global metric rules:
- Do not reuse the same metric value or phrase.
- Metrics must be believable.
- Metrics must be contextual.
- Metrics must not contradict the role, timeline, or seniority level.
- Metrics in the summary must also appear in experience.

========================================
WORK HISTORY RULES — GLOBAL
========================================

For each role:
- Keep the original company name.
- Keep the original date range.
- Keep the original job title for older roles unless a minor consistency adjustment is necessary.
- For CVS Health, use the normalized JD title exactly if CVS Health exists.
- If CVS Health does not exist, use the normalized JD title exactly for the most recent role.
- Rewrite every responsibility.
- Rewrite every achievement.
- Do NOT copy bullets from the input resume.
- Do NOT duplicate experience entries.
- Do NOT create extra jobs.
- Do NOT invent promotions unless already present.
- Include JD-required tools and technologies where realistic.
- Include optional, preferred, bonus, and nice-to-have JD items when relevant.
- Make stakeholder interaction explicit in every role.
- Include cross-functional work in every role.
- Do not introduce managerial scope unless the JD explicitly requires it.
- Keep all work realistic for a senior IC with comparable experience.

========================================
TECHNOLOGY TIMELINE RULES — STRICT
========================================

- Technologies must be realistic for each role’s date range.
- Do not use tools before they were industry-realistic.
- Older roles should show appropriate technical evolution.
- Newer roles should carry the strongest JD alignment.
- Avoid anachronistic cloud, AI, frontend, mobile, or DevOps claims.

========================================
JD ALIGNMENT RULES — STRICT
========================================

You must parse the JD and identify:
- Mandatory requirements
- Optional requirements
- Preferred requirements
- Nice-to-have requirements
- Bonus requirements
- Tools
- Technologies
- Frameworks
- Methodologies
- Domain language
- Business outcomes
- Collaboration expectations

Then reflect them across:
- summary
- skills
- responsibilities
- achievements

The resume must read as highly aligned with the JD while remaining realistic and recruiter-trustworthy.

========================================
INDUSTRY VOCABULARY RULES
========================================

Use industry vocabulary only when relevant to the JD.

Healthcare vocabulary examples:
HL7 v2, FHIR R4, SMART on FHIR, FHIR APIs, Clinical Data Exchange, Healthcare Messaging, Interoperability, EMR/EHR Systems, Epic, Cerner, Oracle Health, Athenahealth, Allscripts, Clinical Workflows, Longitudinal Patient Records, Care Coordination, Provider Directory, Clinical Decision Support, HIPAA Compliance, PHI, PII, Audit Logging, Privacy-by-Design, RBAC, Data Encryption, SOC 2, Claims Processing, Eligibility & Benefits, Prior Authorization, Utilization Management, Revenue Cycle Management, Patient Engagement, Telehealth, Virtual Care, Behavioral Health Technology, Event-Driven Architecture, CQRS, Microservices, FHIR-First Architecture, Real-Time Clinical Data Streaming.

Fintech vocabulary examples:
Payment Processing, Payment Orchestration, Authorization, Capture, Settlement, Payment Gateways, ACH, SEPA, SWIFT, Real-Time Payments, Idempotent Payments, Transaction Lifecycle, Reconciliation, PCI DSS, PSD2, Strong Customer Authentication, Tokenization, Fraud Prevention, Risk Controls, Secure Payment Flows, Audit Trails, Ledger Systems, Double-Entry Accounting, Clearing & Settlement, Fraud Detection, Risk Scoring, Transaction Monitoring, AML, KYC, KYB, Distributed Transactions, Exactly-Once Processing, High-Throughput Systems, Low-Latency Systems.

eCommerce vocabulary examples:
Product Catalog, SKU Management, Inventory Management, Pricing Engine, Promotions, Cart & Checkout, Order Management System, Order Lifecycle, Fulfillment, Returns, Checkout Optimization, Payment Gateways, Conversion Rate Optimization, Abandoned Cart Recovery, Fraud Prevention, Marketplace Platforms, Catalog Ingestion, Search & Discovery, Product Recommendations, Personalization, A/B Testing, Warehouse Management Systems, Carrier Integrations, Order Routing, Split Shipments, Reverse Logistics, High-Traffic Systems, Clickstream Data, Customer Retention, Loyalty Programs.

========================================
CONSISTENCY & REALISM RULES
========================================

The resume must have no contradictions between:
- Skills and experience
- Summary and experience
- Metrics and achievements
- Technologies and dates
- JD title and resume seniority
- Responsibilities and role scope

The resume must:
- Read as a polished senior-level profile.
- Align tightly with the JD.
- Stay recruiter-trustworthy.
- Avoid exaggerated or implausible claims.
- Avoid filler words such as very, highly, really, various, multiple, numerous, significant, some, many, things, and stuff.
- Prefer precise verbs such as re-architected, instrumented, standardized, orchestrated, stabilized, and automated.

========================================
OUTPUT JSON STRUCTURE
========================================

Return ONLY this JSON object.

Do not include markdown.
Do not include comments.
Do not include explanations.
Do not include trailing commas.
Do not include extra keys.
Field ordering must match this structure exactly.

{
  "name": "Full Name",
  "title": "Senior Software Engineer",
  "contact": {
    "address": "City, State",
    "email": "email@example.com",
    "phone": "Phone Number",
    "linkedin": "LinkedIn URL"
  },
  "summary": "Professional summary optimized for this job",
  "skills": [
    {
      "category": "Backend",
      "items": [
        "skill 1",
        "skill 2",
        "skill 3",
        "skill 4",
        "skill 5",
        "skill 6",
        "skill 7",
        "skill 8"
      ]
    },
    {
      "category": "Frontend",
      "items": [
        "skill 1",
        "skill 2",
        "skill 3",
        "skill 4",
        "skill 5",
        "skill 6",
        "skill 7",
        "skill 8"
      ]
    }
  ],
  "experience": [
    {
      "title": "Title",
      "company": "Company Name",
      "date_range": "MM/YYYY - MM/YYYY or MM/YYYY - Present",
      "job_type": "On-site",
      "responsibilities": [
        "Responsibility 1 with metric",
        "Responsibility 2 with metric",
        "Responsibility 3 with metric"
      ],
      "achievements": [
        "Achievement 1 with metric",
        "Achievement 2 with metric",
        "Achievement 3 with metric",
        "Achievement 4 with metric",
        "Achievement 5 with metric"
      ],
      "skills": [
        "skill 1",
        "skill 2",
        "skill 3",
        "skill 4",
        "skill 5",
        "skill 6",
        "skill 7",
        "skill 8"
      ]
    }
  ],
  "education": [
    {
      "degree": "Degree Name",
      "institution": "University Name",
      "location": "University Location",
      "date_range": "MM/YYYY - MM/YYYY"
    }
  ]
}

========================================
FINAL VALIDATION BEFORE OUTPUT
========================================

Before returning the JSON, silently verify:
- The output is valid JSON.
- There is no markdown formatting.
- There are no comments.
- There are no trailing commas.
- There are no extra keys.
- Field order matches the required structure.
- Contact information is preserved exactly.
- Root-level "title" uses the normalized JD title.
- CVS Health role title uses the exact normalized JD title if CVS Health exists.
- If CVS Health does not exist, the most recent role title uses the exact normalized JD title.
- Every experience entry has EXACTLY 3 responsibilities.
- Every experience entry has EXACTLY 5 achievements.
- Every experience entry has EXACTLY 8 skills.
- Every responsibility includes at least 1 metric.
- Every achievement includes at least 1 metric.
- Every responsibility starts with a strong action verb.
- Every achievement starts with a strong action verb.
- No forbidden verbs or phrases are used.
- No action verb appears more than 3 times across the resume.
- No copied bullets from the input resume appear in the output.
- No duplicate jobs exist.
- Skills are supported by experience.
- JD-required technologies are represented.
- Metrics are not reused.
- The resume is realistic, senior-level, and tightly aligned with the JD.

Return ONLY valid JSON.