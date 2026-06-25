export interface CaseStudy {
  type: string;
  role: string;
  problem: string;
  approach: string;
  decisions: {
    title: string;
    description: string;
  }[];
  screenshots?: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
  screenshotLayout?: 'mobile' | 'desktop';
  techStack: {
    name: string;
    role: string;
  }[];
  links: {
    github?: string;
    demo?: string;
    blog?: string;
  };
  reflection: string;
  architectureDiagramId?: string;
}

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: { label: string; variant: 'green' | 'pink' }[];
  slug: string;
  caseStudy?: CaseStudy;
}

export interface Certification {
  name: string;
  meta: string;
  credlyUrl?: string;
  variant: 'default' | 'special' | 'community';
}

export interface EducationEntry {
  degree: string;
  school: string;
  label: string;
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Inventory & Business Operations System',
    description:
      'Client project for a small tile retailer. A full-stack business management application that digitises inventory management, sales transactions, invoice generation, and cost tracking, while providing operational and financial reporting through a centralised dashboard.',
    tags: [
      { label: 'AWS Serverless', variant: 'green' },
      { label: 'Flutter web', variant: 'green' },
      { label: 'CloudFormation', variant: 'green' },
    ],
    slug: 'inventory-and-business-operations-system',
    caseStudy: {
      type: 'Client Project',
      role: 'Solo — Full Stack',
      problem: 'The client has certain logic with domain-specific units (m2, per box conversions) and individual tiles that off-the-shelf tools don’t model well. Desktop-only, single-machine tools are the norm in the local market, which is restrictive and requires the company to manage manually backups and data security.',
      approach: 'The inventory and operations management system is a full-stack application with AWS serverless backend, which  is a meaningful shift with future remote work options and extensions to use cases such as using mobile device for yearly inventory count. The application allows the company to keep track on their stock, create sales transactions and pdf invoices for customers. They are able to record costs, monitor their financial transactions and create reports for current inventory value.',
      decisions: [
        {
          title: 'Domain-specific units',
          description:
            'Designed a unit management approach that is intuitive for users while ensuring the underlying DynamoDB data model remained functional and appropriately structured.',
        },
        {
          title: 'Cost-conscious architecture decisions',
          description:
            'Selected an AWS serverless architecture that is cost-efficient for the business’s traffic volume, including a backup strategy chosen to minimise costs while avoiding unnecessarily expensive best-practice solutions.',
        },
        {
          title: 'Extensible database model and architecture',
          description:
            'Designed the data model and system architecture to support future expansion beyond stock management, including customer accounts with credit, mobile inventory operations, and more detailed financial reporting.',
        },
      ],
      screenshots: [
        { src: '/stock-screen1.jpeg', alt: 'Home-page-stock-browsing', title: 'Homepage - Stock browsing', description: 'Homepage with stock browsing and quick access to most used functionality. Interface in French, the client\'s working language' },
        { src: '/stock-screen2.jpeg', alt: 'Dashboard-screen', title: 'Dashboard', description: 'Cost and sale statistics can be browsed based on month, quarter or current year.' },
      ],
      screenshotLayout: 'desktop',
      techStack: [
        { name: 'Cognito', role: 'Auth' },
        { name: 'API Gateway', role: 'API' },
        { name: 'Lambda', role: 'Compute' },
        { name: 'DynamoDB', role: 'Database' },
        { name: 'EventBridge', role: 'Events' },
        { name: 'Cloudformation', role: 'IaC' },
        { name: 'Github Actions', role: 'CI/CD' },
        { name: 'Flutter Web', role: 'Frontend' },
      ],
      links: {},
      reflection: 'Built for a small company transitioning from entirely paper-based operations. The interface had to be intuitive enough for non-technical users with no prior experience of digital tools, with clear feedback at every step. There were no existing data models to work from — the data architecture had to be mapped from scratch by translating how users described their own workflows into a technical model. The system is designed to accommodate planned extensions — most immediately a customer accounts module to replace the current manual credit tracking process."',
      architectureDiagramId: 'stock-management',
    },
  },
  /* COMMENTED OUT — Gardening Assistant
  {
    number: '01',
    title: 'AI-Powered Gardening Assistant',
    description:
      'Agentic AI system built on AWS Strands SDK. Retrieves plant profiles, fetches real-time weather, and synthesises personalised care recommendations autonomously.',
    tags: [
      { label: 'Strands Agents', variant: 'green' },
      { label: 'Bedrock', variant: 'green' },
      { label: 'Lambda', variant: 'green' },
      { label: 'DynamoDB', variant: 'green' },
      { label: 'Agentic AI', variant: 'pink' },
    ],
    slug: 'gardening-assistant',
    caseStudy: {
      type: 'Personal Project',
      role: 'Solo — Full Stack',
      problem:
        "Home gardeners struggle to get timely, personalised plant care advice. Generic guides don't account for local weather conditions, specific plant varieties, or the gardener's experience level.",
      approach:
        'An agentic AI system built on AWS Strands SDK that autonomously retrieves plant profiles from DynamoDB, fetches real-time weather data, and synthesises personalised care recommendations — all without manual orchestration.',
      decisions: [
        {
          title: 'AWS Strands SDK for agent orchestration',
          description:
            'Provides tool-use patterns and conversation management out of the box. Reduces boilerplate for multi-step AI workflows.',
        },
        {
          title: 'DynamoDB for plant profiles',
          description:
            'Single-table design with GSI for lookup by common name, botanical name, or care difficulty. Sub-millisecond reads at any scale.',
        },
        {
          title: 'Real-time weather integration',
          description:
            'Lambda fetches current conditions and 7-day forecast. Recommendations adapt to upcoming frost, heat waves, or rain.',
        },
        {
          title: 'Bedrock with Claude for reasoning',
          description:
            'Claude handles nuanced gardening advice that requires combining multiple data sources and applying horticultural knowledge.',
        },
      ],
      techStack: [
        { name: 'Strands SDK', role: 'Agent Framework' },
        { name: 'Bedrock', role: 'AI' },
        { name: 'Lambda', role: 'Compute' },
        { name: 'DynamoDB', role: 'Database' },
        { name: 'CDK', role: 'IaC' },
        { name: 'Python', role: 'Runtime' },
      ],
      links: {
        github: '',
      },
      reflection:
        "Building with Strands SDK showed me how much cleaner agentic workflows become when the framework handles tool orchestration. The agent genuinely reasons about which tools to call and in what order.",
      architectureDiagramId: 'gardening-assistant',
    },
  },
  END COMMENTED OUT */
  {
    number: '02',
    title: 'Tilawa — Quran Study Companion',
    description:
      'Full-stack AI app generating personalised study summaries and vocabulary flashcards before recitation sessions, adapting to Arabic proficiency and reading history. Connected to 3rd party API to enable sharing user data as part of a larger ecosystem.',
    tags: [
      { label: 'Bedrock', variant: 'green' },
      { label: 'AWS Serverless', variant: 'green' },
      { label: 'Flutter', variant: 'green' },
      { label: 'CloudFormation', variant: 'green' },
      { label: 'Nova Lite', variant: 'pink' },
      { label: 'Integration with 3rd party API for auth and data sync', variant: 'green' },
    ],
    slug: 'tilawa',
    caseStudy: {
      type: 'Personal Project',
      role: 'Solo — Full Stack',
      problem:
        "Muslims reciting the Quran often have limited context about what they're about to read — especially those still developing their Arabic. Generic apps provide translations but nothing personalised to the reader's proficiency level or reading history. There are several apps that support with memorization or tracking their progress, but nothing that would especially help them develop their understanding over time.",
      approach:
        "Tilawa generates a personalised AI briefing **before** each recitation session — a contextual summary and vocabulary flashcards filtered to words the user hasn't encountered before, based on their Arabic level and DynamoDB reading history.",
      decisions: [
        {
          title: 'Level-based keyword filtering',
          description:
            'Vocabulary filtered by Arabic level first, then against user history. Genuinely novel flashcards each session.',
        },
        {
          title: 'Single-table DynamoDB',
          description:
            'User sessions, history, and vocab colocated with PK/SK patterns. Requires discipline upfront, scales cleanly.',
        },
        {
          title: 'Syncing sessions and activity days with 3rd party api',
          description:
            'User\'s progress is portable across any app using the same authentication',
        },
      ],
      screenshots: [
        { src: '/tilawa-screen-0.jpeg', alt: 'Tilawa app — home screen', title: 'Selecting Arabic Level', description: 'The keywords for the sessions are created based on your Arabic level which can be modified in the settings.' },
        { src: '/tilawa-screen-1.jpeg', alt: 'Tilawa app — start session screen', title: 'Starting a new session', description: 'Start a new session or continue where you left off, select your familiarity with the text.' },
        { src: '/tilawa-screen-2.jpeg', alt: 'Tilawa app — session screen', title: 'Session summary and keycards', description: 'Summary of the chapter/pages and key vocabulary, adapted to your Arabic level.' },
      ],
      screenshotLayout: 'mobile',
      techStack: [
        { name: 'AWS Lambda', role: 'Backend' },
        { name: 'Bedrock', role: 'AI' },
        { name: 'Nova Lite', role: 'LLM' },
        { name: 'DynamoDB', role: 'Database' },
        { name: 'Flutter Web', role: 'Frontend' },
        { name: 'CloudFormation', role: 'IaC' },
        { name: 'Node.js 22', role: 'Runtime' },
      ],
      links: {
        github: 'https://github.com/mariberg/tilawa',
        blog: 'https://blog.marikabergman.com/personalising-llm-output-with-dynamodb-and-deterministic-filters',
      },
      reflection:
        'The most interesting aspect of this project was designing a new application that could fit naturally within an existing ecosystem and shared user data, without duplicating functionality that already existed. Building a meaningful end-to-end product within the constraints of a hackathon also required making deliberate trade-offs about scope and implementation. From a technical perspective, the most challenging part was designing the level-based filtering that allows vocabulary guidance to adapt and grow with the user\'s progress over time.',
      architectureDiagramId: 'tilawa',
    },
  },
];

export const certifications: Certification[] = [
  {
    name: 'AWS Community Builder — Serverless',
    meta: 'Selected for exclusive AWS program. Technical writing, community contribution & global collaboration.',
    variant: 'community',
  },
  {
    name: 'AWS Agentic AI Demonstrated',
    meta: 'Microcredential · Amazon Web Services',
    credlyUrl:
      'https://www.credly.com/badges/a077da08-0973-4b18-9168-f1d550468190/public_url',
    variant: 'special',
  },
  {
    name: 'AWS Certified AI Practitioner',
    meta: 'Amazon Web Services',
    credlyUrl:
      'https://www.credly.com/badges/da39866a-ef3c-43a1-b3fd-3b778ff7b16b/public_url',
    variant: 'default',
  },
  {
    name: 'AWS Certified Solutions Architect — Associate',
    meta: 'Amazon Web Services',
    credlyUrl:
      'https://www.credly.com/badges/0463f881-52e7-4b00-9467-e2e8a5d95652/public_url',
    variant: 'default',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    meta: 'Amazon Web Services',
    credlyUrl:
      'https://www.credly.com/badges/f6657bca-842d-4067-82cc-4d2ab01faf24/public_url',
    variant: 'default',
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'MSc in Economics and Business Administration',
    school: 'University of Eastern Finland · Small Business Management',
    label: 'UEF',
  },
  {
    degree: 'Web Developer Study Module',
    school: 'JAMK University of Applied Sciences · HTML/CSS, JS, Angular, NodeJS, SQL, NoSQL',
    label: 'JAMK',
  },
];

export function getAdjacentProjects(currentSlug: string): {
  prev: { slug: string; title: string };
  next: { slug: string; title: string };
} {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const prevIdx = idx <= 0 ? projects.length - 1 : idx - 1;
  const nextIdx = idx >= projects.length - 1 ? 0 : idx + 1;
  return {
    prev: { slug: projects[prevIdx].slug, title: projects[prevIdx].title },
    next: { slug: projects[nextIdx].slug, title: projects[nextIdx].title },
  };
}
