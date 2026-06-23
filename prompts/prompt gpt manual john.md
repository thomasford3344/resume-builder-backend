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
    "name": "John Nevarez",
    "title": "Senior Software Engineer",
    "contact": {
        "address": "Vernon, TX 76384",
        "email": "johnnevarez97@gmail.com",
        "phone": "(940) 331 7570",
        "linkedin": ""
    },
    "summary": "Senior Software Engineer with deep production experience building Node.js and TypeScript platforms, RESTful APIs, and event-driven integrations across insurance, healthcare, and commerce. Brings end-to-end ownership from partner-spec discovery and technical planning through live-traffic validation, iteration, and maintenance. Converts complex contracts into reliable field mappings, routing logic, attribution rules, and well-tested services spanning 150+ partner API endpoints. Prioritizes product outcomes, operational excellence, concise technical documentation, constructive code review, and cross-functional decision-making while sustaining 99.95% service availability in cloud-native systems.",
    "skills": [
        {
            "category": "Backend",
            "items": [
                "Node.js",
                "TypeScript",
                "Express.js",
                "RESTful APIs",
                "Microservices",
                "Event-Driven Architecture",
                "CQRS",
                "Idempotency",
                "Business Rule Engines",
                "API Integration"
            ]
        },
        {
            "category": "Frontend",
            "items": [
                "React",
                "Next.js",
                "Redux",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Design Systems",
                "Web Accessibility"
            ]
        },
        {
            "category": "Cloud",
            "items": [
                "Google Cloud Platform",
                "Cloud Run",
                "Pub/Sub",
                "Cloud Functions",
                "Cloud SQL",
                "Firestore",
                "Secret Manager",
                "Cloud Logging",
                "Docker",
                "CI/CD"
            ]
        },
        {
            "category": "Data",
            "items": [
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "SQL",
                "Data Modeling",
                "Field Mapping",
                "Data Validation",
                "Streaming Pipelines",
                "Analytics",
                "Schema Evolution"
            ]
        },
        {
            "category": "Tools",
            "items": [
                "Git",
                "GitHub Actions",
                "Jest",
                "Playwright",
                "OpenAPI",
                "Postman",
                "Terraform",
                "Jira",
                "Technical Documentation"
            ]
        },
        {
            "category": "Industry",
            "items": [
                "Insurance Carrier Integrations",
                "Provider Routing",
                "Traffic Attribution",
                "Insurance Eligibility",
                "Healthcare Interoperability",
                "FHIR R4",
                "HL7 v2",
                "HIPAA Compliance",
                "Clinical Data Exchange",
                "Partner API Onboarding"
            ]
        }
    ],
    "experience": [
        {
            "title": "Senior Software Engineer",
            "company": "Jasper Health",
            "date_range": "02/2022 - Present",
            "job_type": "Remote",
            "responsibilities": [
                "Architected a Node.js and TypeScript integration platform connecting 150+ provider, payer, benefits, and insurance-partner API endpoints through RESTful services, Cloud Run, Pub/Sub, configurable routing, ranking, traffic attribution, field mapping, and business rule engines.",
                "Directed quality standards across 36+ pull requests per month using Git, Jest, Playwright, contract testing, actionable code reviews, mentoring, and knowledge-sharing sessions with engineering, product, compliance, and operations stakeholders.",
                "Translated 18 partner contracts and technical specifications per quarter into OpenAPI definitions, architecture decision records, Jira delivery plans, validation criteria, and concise Slack updates for product leaders, clinicians, legal teams, and external partners."
            ],
            "achievements": [
                "Instrumented event-driven microservices with Cloud Logging, distributed tracing, health checks, idempotency controls, replay-safe Pub/Sub consumers, and operational runbooks that sustained 99.95% service availability.",
                "Accelerated partner onboarding by 37% through reusable TypeScript connector templates, Postman validation suites, schema-driven field mappings, Secret Manager integration, and automated live-traffic certification workflows.",
                "Reduced p95 integration latency by 28% by redesigning Cloud SQL queries, introducing Redis caching, optimizing asynchronous Node.js processing, and removing synchronous dependencies from high-volume eligibility and benefits workflows.",
                "Resolved recurring production incidents and cut triage time in half by establishing structured alerts, correlation identifiers, dead-letter queues, ownership dashboards, and blameless reviews tied to measurable remediation work.",
                "Standardized FHIR R4, SMART on FHIR, HL7 v2, CCD/C-CDA, Epic, Cerner, Athenahealth, and Allscripts validation rules, raising automated contract coverage from 61% to 93% across clinical data exchange and care-coordination services."
            ],
            "skills": [
                "Node.js",
                "TypeScript",
                "Google Cloud Platform",
                "RESTful APIs",
                "Pub/Sub",
                "Cloud Run",
                "PostgreSQL",
                "Redis",
                "Jest",
                "Healthcare Interoperability"
            ]
        },
        {
            "title": "Senior Software Engineer",
            "company": "KeyTech Solutions",
            "date_range": "12/2019 - 01/2022",
            "job_type": "Remote",
            "responsibilities": [
                "Orchestrated delivery of 24 Node.js and TypeScript connectors for healthcare, benefits, and insurtech clients, codifying eligibility, claims processing, prior authorization, provider-directory, and partner-specific business logic over PostgreSQL and Firestore.",
                "Established weekly architecture and product reviews with 7 cross-functional stakeholder groups, converting ambiguous requirements into technical plans, API contracts, sequence diagrams, release criteria, and risk decisions documented for technical and non-technical audiences.",
                "Modernized 14 backend services into Dockerized microservices using Express.js, CQRS patterns, Cloud Functions, Cloud SQL, Terraform, and secure handling of PHI and PII through RBAC, encryption, audit logging, and privacy-by-design controls."
            ],
            "achievements": [
                "Automated GitHub Actions pipelines, Jest suites, Playwright journeys, infrastructure validation, and deployment gates, producing approximately 30% fewer production defects across healthcare SaaS releases.",
                "Expanded release cadence until the team doubled its deployment frequency by introducing trunk-based Git workflows, feature flags, repeatable Docker environments, automated rollback procedures, and clear ownership throughout the software development lifecycle.",
                "Streamlined API error handling with normalized response models, exponential backoff, circuit breakers, rate-limit controls, and idempotent retries, lowering failed partner calls by 41%.",
                "Eliminated ambiguous mapping behavior through versioned schemas, OpenAPI governance, data validation, and partner acceptance tests, resulting in one-third fewer production field-mapping defects.",
                "Stabilized clinical and claims-adjudication services at 99.9% uptime through Cloud Logging dashboards, actionable alerts, incident-response playbooks, dependency monitoring, and recurring operational-excellence reviews."
            ],
            "skills": [
                "Node.js",
                "TypeScript",
                "Express.js",
                "Cloud Functions",
                "Cloud SQL",
                "Firestore",
                "Terraform",
                "Docker",
                "OpenAPI",
                "HIPAA Compliance"
            ]
        },
        {
            "title": "Full Stack Engineer",
            "company": "ITC Management Group",
            "date_range": "01/2016 - 12/2019",
            "job_type": "On-site",
            "responsibilities": [
                "Engineered 22 REST and GraphQL endpoints with Node.js, Express.js, Koa.js, PostgreSQL, MongoDB, and Redis for customer accounts, product catalogs, transaction histories, reporting, and internal operations.",
                "Introduced event-driven processing for 2.4 million monthly order and payment events, applying CQRS, idempotency, transaction lifecycle tracking, reconciliation logic, and replay-safe consumers to protect distributed workflows.",
                "Aligned 6 product, design, operations, support, and client stakeholder groups through technical discovery, sprint planning, demonstrations, and written trade-off proposals covering roadmap scope, delivery risks, and product outcomes."
            ],
            "achievements": [
                "Optimized SQL queries, indexing, data modeling, and Redis caching to achieve roughly 25% faster response times across analytics, account-balance, inventory, and transaction-journal views.",
                "Redesigned cart, checkout, payment orchestration, authorization, settlement, and fraud-prevention workflows, reducing failed customer transactions by 27% while preserving audit trails and financial-data security.",
                "Controlled schema evolution through versioned migrations, backward-compatible contracts, data validation, and staged releases, decreasing deployment rollback frequency by 17%.",
                "Unified React, Redux, Vue, Chart.js, and D3.js components into a documented design system that tripled reusable-module adoption across customer dashboards and real-time reporting interfaces.",
                "Maintained 99.7% availability by implementing service-level dashboards, structured logging, dependency health checks, on-call runbooks, and stakeholder-facing incident communication."
            ],
            "skills": [
                "Node.js",
                "Express.js",
                "RESTful APIs",
                "GraphQL",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "React",
                "Redux",
                "Event-Driven Architecture"
            ]
        },
        {
            "title": "Frontend Developer",
            "company": "Metro Market",
            "date_range": "08/2013 - 01/2016",
            "job_type": "On-site",
            "responsibilities": [
                "Created 35 responsive customer-facing interfaces using JavaScript, HTML5, CSS3, reusable UI components, accessibility practices, and later-stage React adoption for catalog, promotions, cart, checkout, and account-management experiences.",
                "Integrated 9 payment, shipping, inventory, and analytics APIs through Node.js and Python microservices supporting SKU management, order routing, fulfillment updates, returns, refunds, and behavioral tracking.",
                "Presented biweekly product demonstrations to 4 cross-functional stakeholder groups, incorporating feedback from clients, designers, marketing, operations, and customer-service teams into prioritized release plans."
            ],
            "achievements": [
                "Improved page-load performance by about 40% through asset compression, caching, asynchronous loading, code splitting, and browser-level performance analysis across high-traffic storefront pages.",
                "Increased checkout conversion by 23% by simplifying customer journeys, improving form validation, clarifying pricing and promotion rules, and reducing friction across responsive cart and payment flows.",
                "Reduced escaped interface defects to one-quarter of the prior rate by introducing reusable test cases, browser compatibility checks, peer reviews, and release checklists.",
                "Simplified frontend build and deployment workflows, decreasing average release preparation time by 31% through reusable templates, Git branching standards, automated asset processing, and environment-specific configuration.",
                "Achieved a 96% on-time delivery rate by decomposing client requests into testable increments, documenting acceptance criteria, and maintaining transparent progress updates with technical and business stakeholders."
            ],
            "skills": [
                "JavaScript",
                "HTML5",
                "CSS3",
                "React",
                "Node.js",
                "Python",
                "RESTful APIs",
                "Web Accessibility",
                "Design Systems",
                "Analytics"
            ]
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Engineering in Computer Science",
            "institution": "University of North Texas",
            "location": "Denton, TX",
            "date_range": "08/2009 - 05/2013"
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
- Be used EXACTLY as the "title" for the Jasper Health role if Jasper Health exists in the resume.
- If Jasper Health does not exist, use the normalized title EXACTLY for the most recent experience entry.
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
- Set Jasper Health role "title" to the exact same normalized title if Jasper Health exists.
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
- For Jasper Health, use the normalized JD title exactly if Jasper Health exists.
- If Jasper Health does not exist, use the normalized JD title exactly for the most recent role.
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
- Jasper Health role title uses the exact normalized JD title if Jasper Health exists.
- If Jasper Health does not exist, the most recent role title uses the exact normalized JD title.
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