export const RESUME_JSON_SCHEMA = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1,
    },
    title: {
      type: 'string',
      minLength: 1,
    },
    contact: {
      type: 'object',
      properties: {
        address: {
          type: 'string',
          minLength: 1,
        },
        email: {
          type: 'string',
          minLength: 1,
        },
        phone: {
          type: 'string',
          minLength: 1,
        },
        linkedin: {
          type: 'string',
          minLength: 1,
        },
      },
      required: ['address', 'email', 'phone', 'linkedin'],
      additionalProperties: false,
    },
    summary: {
      type: 'string',
      minLength: 1,
    },
    skills: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            enum: [
              'Backend',
              'Frontend',
              'Cloud',
              'Data',
              'Tools',
              'Industry',
              'Mobile',
              'AI',
              'DevOps',
              'Security',
              'Data Engineering',
              'Platform',
            ],
          },
          items: {
            type: 'array',
            items: { type: 'string' },
            minItems: 6,
          },
        },
        required: ['category', 'items'],
        additionalProperties: false,
      },
      minItems: 3,
    },
    experience: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            minLength: 1,
          },
          company: {
            type: 'string',
            minLength: 1,
          },
          date_range: {
            type: 'string',
            minLength: 1,
          },
          job_type: {
            type: 'string',
            minLength: 1,
          },
          responsibilities: {
            type: 'array',
            items: {
              type: 'string',
            },
            minItems: 5,
          },
          achievements: {
            type: 'array',
            items: {
              type: 'string',
            },
            minItems: 4,
          },
          skills: {
            type: 'array',
            items: {
              type: 'string',
            },
            minItems: 3,
          },
        },
        required: [
          'title',
          'company',
          'date_range',
          'job_type',
          'responsibilities',
          'achievements',
          'skills',
        ],
        additionalProperties: false,
      },
      minItems: 1,
    },
    education: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          degree: {
            type: 'string',
            minLength: 1,
          },
          institution: {
            type: 'string',
            minLength: 1,
          },
          location: {
            type: 'string',
            minLength: 1,
          },
          date_range: {
            type: 'string',
            minLength: 1,
          },
        },
        required: ['degree', 'institution', 'location', 'date_range'],
        additionalProperties: false,
      },
      minItems: 1,
    },
    cover_letter: {
      type: 'string',
      minLength: 1,
    },
  },
  required: [
    'name',
    'title',
    'contact',
    'summary',
    'skills',
    'experience',
    'education',
    'cover_letter',
  ],
  additionalProperties: false,
};
