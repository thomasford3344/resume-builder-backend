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
    "name": "Kevin Binswanger",
    "title": "Senior Software Engineer",
    "contact": {
        "address": "Austin, TX",
        "email": "kevinbin.dev@gmail.com",
        "phone": "(339) 331-7570",
        "linkedin": "linkedin.com/in/kevin-b-8a1345b9"
    },
    "summary": "Senior product-minded full-stack engineer experienced in owning customer-facing web applications from ambiguous concept through production launch and iteration. Builds accessible React experiences, scalable Node.js and Python services, relational domain models, and cloud infrastructure for workflow-heavy products. Comfortable operating as a lead individual contributor on small remote teams, partnering directly with product, design, operations, and users. Recent platform work reduced application cycle time by 37% and increased deployment frequency by 46% through modular architecture, automated testing, AI-assisted development, and disciplined delivery practices.",
    "skills": [
        {
            "category": "Backend",
            "items": [
                "Node.js",
                "Express.js",
                "Python",
                "Django",
                "REST APIs",
                "Event-driven architecture",
                "Microservices",
                "WebSockets"
            ]
        },
        {
            "category": "Frontend",
            "items": [
                "React",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Accessible UI",
                "Design systems",
                "Responsive web applications",
                "User journey prototyping"
            ]
        },
        {
            "category": "Cloud",
            "items": [
                "AWS",
                "ECS/Fargate",
                "Lambda",
                "SQS",
                "Docker",
                "Terraform",
                "GitHub Actions",
                "CI/CD"
            ]
        },
        {
            "category": "Data",
            "items": [
                "PostgreSQL",
                "MySQL",
                "Redis",
                "SQL",
                "Relational data modeling",
                "Domain modeling",
                "Query optimization",
                "Data validation"
            ]
        },
        {
            "category": "Tools",
            "items": [
                "Git",
                "Jira",
                "Datadog",
                "CloudWatch",
                "Cursor",
                "GitHub Copilot",
                "Automated testing",
                "Structured logging"
            ]
        },
        {
            "category": "Industry",
            "items": [
                "Building electrification",
                "Home improvement workflows",
                "Customer portals",
                "Contractor marketplaces",
                "Healthcare platforms",
                "HIPAA compliance",
                "FHIR APIs",
                "Care coordination"
            ]
        }
    ],
    "experience": [
        {
            "title": "Senior Software Engineer",
            "company": "Agile6",
            "date_range": "05/2020 - Present",
            "job_type": "Remote",
            "responsibilities": [
                "Architected a four-role React, Node.js, and Express.js platform for household, contractor, customer support, and program-manager workflows, converting 12 ambiguous home improvement workflows into a production-ready domain model with product and design.",
                "Translated findings from 18 user interviews into accessible UI, responsive web applications, user journey prototyping, and reusable design systems, enabling validated product decisions within three-week discovery cycles.",
                "Directed a six-month delivery roadmap for a two-engineer remote team, owning scope, technical decisions, stakeholder updates, and post-launch iteration across building electrification and contractor marketplace experiences."
            ],
            "achievements": [
                "Launched customer portals and contractor marketplaces for subsidized upgrade programs, reducing application cycle time by 37% through React workflow automation, SQL-backed eligibility rules, and clearer household status tracking.",
                "Implemented Python, Django, REST APIs, PostgreSQL relational data modeling, and data validation services, lowering median API latency by 31% through query optimization and purpose-built domain modeling.",
                "Automated Docker, Terraform, GitHub Actions, and AWS CI/CD across ECS/Fargate, Lambda, and SQS, increasing deployment frequency by 46% while preserving auditable release controls.",
                "Instrumented event-driven architecture, microservices, WebSockets, CloudWatch, Datadog, and structured logging, cutting production recovery time by 27% with engineering, operations, and customer-support stakeholders.",
                "Accelerated prototyping with Cursor and GitHub Copilot, reducing approximately 40% of repetitive implementation and test-authoring handoffs while maintaining peer review and automated testing standards.",
                "Established HIPAA compliance, FHIR APIs, care coordination, and privacy-focused access patterns for healthcare platforms, doubling release confidence across product, QA, security, and clinical-operations reviews."
            ],
            "skills": [
                "React",
                "Node.js",
                "Express.js",
                "Python",
                "Django",
                "PostgreSQL",
                "AWS",
                "Terraform",
                "GitHub Actions",
                "Cursor"
            ]
        },
        {
            "title": "Senior Full Stack Developer",
            "company": "PagerDuty",
            "date_range": "05/2016 - 03/2020",
            "job_type": "On-site",
            "responsibilities": [
                "Modernized nine Node.js and Ruby production services for incident-management and healthcare customer workflows, aligning API contracts with four stakeholder groups spanning product, design, SRE, and customer success.",
                "Orchestrated React, JavaScript, HTML5, and CSS3 interface delivery for high-urgency operational consoles, improving webhook throughput by 22% through clearer event boundaries and backend service decomposition.",
                "Redesigned PostgreSQL and Redis persistence patterns for event-driven architecture and microservices, sustaining a 1.8-second alert-processing target during peak enterprise traffic."
            ],
            "achievements": [
                "Standardized Webpack and Babel build pipelines for responsive web applications, reducing bundle load time by approximately 35% after usability reviews with healthcare and enterprise customers.",
                "Stabilized asynchronous notification workers on AWS with Docker and SQS, cutting retry backlog in half while coordinating release readiness with SRE, QA, and support stakeholders.",
                "Simplified REST APIs and WebSockets for 24 enterprise healthcare customers, strengthening HIPAA-aligned auditability and real-time operational visibility.",
                "Expanded accessible UI patterns and design-system coverage, decreasing accessibility defects by 33% across incident dashboards validated by product designers and customer advocates.",
                "Pioneered Git, Jira, automated testing, and CI/CD templates that made engineer onboarding one-third faster across distributed application teams.",
                "Unified Datadog dashboards, structured logging, and release runbooks, saving 14 engineering hours per quarter during production triage with reliability and customer-success teams."
            ],
            "skills": [
                "Node.js",
                "React",
                "JavaScript",
                "Redis",
                "PostgreSQL",
                "AWS",
                "Docker",
                "WebSockets",
                "Datadog",
                "CI/CD"
            ]
        },
        {
            "title": "Software Developer",
            "company": "Zendesk",
            "date_range": "04/2012 - 02/2016",
            "job_type": "On-site",
            "responsibilities": [
                "Reengineered seven customer-support portal modules in PHP, Ruby, JavaScript, and MySQL, shaping workflow priorities with product managers, designers, QA analysts, and support operations.",
                "Streamlined REST APIs and SQL search paths for ticket, account, and messaging data, improving customer-record response time by 28% through indexing and query-plan analysis.",
                "Devised data validation and migration controls for MySQL releases, lowering deployment defects by about 45% across billing, messaging, and administration stakeholders."
            ],
            "achievements": [
                "Introduced Redis-backed background processing for email and notification workflows, doubling queue throughput during high-volume customer-support events.",
                "Optimized structured logging and defect triage, resolving 23 customer-impacting production issues with support leads, QA, and engineering stakeholders.",
                "Strengthened Backbone.js, HTML5, CSS3, and accessible UI patterns, improving agent workflow completion by 26% after task-based usability sessions.",
                "Transformed relational data modeling for 11 ticketing and account entities, clarifying ownership boundaries and reducing schema coupling across product teams.",
                "Generated five automated testing and release gates, improving confidence in customer-facing changes across engineering, product, and operations.",
                "Resolved escalation bottlenecks with role-based workflow rules, reducing support handoffs by 32% while preserving transparent stakeholder reporting."
            ],
            "skills": [
                "REST APIs",
                "JavaScript",
                "HTML5",
                "CSS3",
                "MySQL",
                "Redis",
                "SQL",
                "Data validation",
                "Automated testing",
                "Structured logging"
            ]
        },
        {
            "title": "Full Stack Developer",
            "company": "Weebly",
            "date_range": "06/2009 - 02/2012",
            "job_type": "On-site",
            "responsibilities": [
                "Constructed six core publishing and storefront workflows in PHP, JavaScript, HTML, CSS, and MySQL, translating small-business customer feedback into prioritized product increments with design and support.",
                "Revitalized page-builder interactions and reusable interface patterns, increasing successful publishing sessions by 29% after prototype reviews with product and customer-experience stakeholders.",
                "Migrated source-control and release practices from SVN toward Git, shortening page-delivery lead time by roughly 30% through clearer reviews and deployment ownership."
            ],
            "achievements": [
                "Reduced rollback risk by one-quarter through release checklists, smoke tests, and cross-functional launch reviews spanning engineering, QA, design, and operations.",
                "Eliminated 17% of duplicate template and asset records by redesigning MySQL schemas and introducing stronger validation constraints.",
                "Increased publishing throughput by 8 minutes per batch through SQL indexing and targeted database-contention fixes coordinated with infrastructure stakeholders.",
                "Initiated 13 reusable HTML and CSS components that accelerated responsive landing-page delivery for marketing and merchant onboarding.",
                "Achieved a 21% reduction in checkout abandonment by simplifying storefront forms, validation feedback, and customer journey sequencing.",
                "Controlled scope across four stakeholder groups, balancing customer usability, delivery speed, technical debt, and production reliability for weekly releases."
            ],
            "skills": [
                "JavaScript",
                "HTML5",
                "CSS3",
                "MySQL",
                "SQL",
                "Git",
                "Responsive web applications",
                "Customer portals",
                "Data validation",
                "User journey prototyping"
            ]
        }
    ],
    "education": [
        {
            "degree": "Bachelor's Degree in Computer Science",
            "institution": "University of Virginia",
            "location": "Charlottesville, VA",
            "date_range": "08/2004 - 05/2008"
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
- Be used EXACTLY as the "title" for the Agile6 role if Agile6 exists in the resume.
- If Agile6 does not exist, use the normalized title EXACTLY for the most recent experience entry.
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
- Set Agile6 role "title" to the exact same normalized title if Agile6 exists.
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
- For Agile6, use the normalized JD title exactly if Agile6 exists.
- If Agile6 does not exist, use the normalized JD title exactly for the most recent role.
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
- Agile6 role title uses the exact normalized JD title if Agile6 exists.
- If Agile6 does not exist, the most recent role title uses the exact normalized JD title.
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