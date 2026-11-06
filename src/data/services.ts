export interface ServiceOffering {
  icon: string;
  label: string;
  href: string;
  // Drafted for the /services/[slug] capabilities accordion — original
  // one-line copy in MOBILISE's voice, not sourced from
  // product-context.md or mobilise-website-content.md (no offering-level
  // body copy exists there). Flagging for review, not final copy.
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  index: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  offerings: ServiceOffering[];
  // Real, already-published figures — mirrors the per-service stat in
  // RunAds.astro's `mock.stat`, matched by title, not invented here.
  stat: ServiceStat;
  // Drafted for the /services/[slug] FAQ accordion — original copy in
  // MOBILISE's voice, not sourced from product-context.md or
  // mobilise-website-content.md (no FAQ copy exists there). Flagging for
  // review rather than treating as final published copy.
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'full-service-marketing',
    index: '01',
    icon: 'target',
    title: 'Full Service Marketing',
    description:
      'Implement data-driven marketing and sales programs that increase customers, revenue, and profitability.',
    image: '/images/services-full-service-marketing.webp',
    imageAlt: 'A team reviewing marketing and sales performance data together around a laptop',
    offerings: [
      {
        icon: 'crosshair',
        label: 'Demand Generation & ABM',
        href: '/services/full-service-marketing#demand-gen',
        description: 'Target the accounts that matter and build pipeline with programs built around how they actually buy.',
        image: '/images/offering-demand-gen.webp',
        imageAlt: 'A dashboard showing account engagement trends and key metrics',
      },
      {
        icon: 'mail',
        label: 'Content & Campaign Programs',
        href: '/services/full-service-marketing#campaigns',
        description: 'Email, content and integrated campaigns planned and produced as one connected system, not one-off sends.',
        image: '/images/offering-campaigns.webp',
        imageAlt: 'A close-up of an email app icon on a phone',
      },
      {
        icon: 'trending-up',
        label: 'Performance Reporting',
        href: '/services/full-service-marketing#reporting',
        description: 'Reporting that ties spend to pipeline, so budget keeps moving toward what is actually working.',
        image: '/images/offering-reporting.webp',
        imageAlt: 'Graphs of performance analytics on a laptop screen',
      },
    ],
    stat: { value: '6', label: 'Industry specializations' },
    faqs: [
      {
        question: 'What does Full Service Marketing actually cover?',
        answer:
          'Demand generation and account-based marketing, content and campaign programs, and the performance reporting that ties spend back to pipeline — run as one connected program, not separate hand-offs.',
      },
      {
        question: 'Do you work alongside our in-house marketing team?',
        answer:
          "Yes. Most engagements extend an existing team rather than replace it — we slot into your stack and cadence, and hand off reporting in the format your leadership already expects.",
      },
      {
        question: 'How long before we see results?',
        answer:
          'Campaign infrastructure is typically live within weeks; pipeline impact depends on your sales cycle, but our reporting surfaces leading indicators from the first campaign cycle onward.',
      },
    ],
  },
  {
    slug: 'creative-production',
    index: '02',
    icon: 'clapperboard',
    title: 'Creative Production',
    description:
      "From creative content that compels action, to videos that share your story – our team delivers unparalleled design. Fast, accurate, and guidelines-aligned production at scale.",
    image: '/images/services-creative-production.webp',
    imageAlt: 'A video production crew operating cameras and lighting on a studio set',
    offerings: [
      {
        icon: 'layers',
        label: 'Campaign Concepts & Assets',
        href: '/services/creative-production#concepts',
        description: 'On-brand concepts and multi-format assets, built to scale across every channel a campaign needs.',
        image: '/images/offering-concepts.webp',
        imageAlt: 'A tablet displaying a project management board with task cards',
      },
      {
        icon: 'video',
        label: 'Video & Motion Graphics',
        href: '/services/creative-production#video',
        description: 'Video and motion content that tells your story, produced fast without cutting corners on craft.',
        image: '/images/offering-video.webp',
        imageAlt: 'Video editing software interface with a timeline and media clips',
      },
      {
        icon: 'globe',
        label: 'Regional Adaptation',
        href: '/services/creative-production#localisation',
        description: 'One creative system, adapted and localised per market, so every region ships on-brand.',
        image: '/images/offering-localisation.webp',
        imageAlt: 'A wooden block with the word translation on it',
      },
    ],
    stat: { value: '3', label: 'Regions served' },
    faqs: [
      {
        question: 'What kind of creative do you produce?',
        answer:
          'Campaign concepts and multi-format assets, video and motion graphics, and presentation design — built guidelines-aligned so every market ships on-brand without a separate review pass.',
      },
      {
        question: 'Can you adapt one campaign across multiple regions?',
        answer:
          'Yes — regional adaptation and localisation is built into the production process, not bolted on after. One system of templates, adapted per market.',
      },
      {
        question: 'How fast can you turn around a campaign?',
        answer:
          'Production is built for scale and speed without sacrificing accuracy — exact timelines depend on asset count and markets, but fast turnaround is the baseline, not the exception.',
      },
    ],
  },
  {
    slug: 'design-development',
    index: '03',
    icon: 'layout-panel-left',
    title: 'Design & Development',
    description:
      'UI/UX and SEO-optimized websites that tell your story, and showcases your value proposition.',
    image: '/images/services-design-development.webp',
    imageAlt: 'A computer screen displaying front-end code in an editor',
    offerings: [
      {
        icon: 'compass',
        label: 'UX Strategy & IA',
        href: '/services/design-development#ux-strategy',
        description: 'Information architecture and interface strategy built around how your buyers actually navigate.',
        image: '/images/offering-ux-strategy.webp',
        imageAlt: 'A person planning information architecture at a desk with a laptop',
      },
      {
        icon: 'code',
        label: 'Front-End & Technical SEO',
        href: '/services/design-development#development',
        description: 'Responsive front-end builds with technical SEO handled at launch, not retrofitted after.',
        image: '/images/offering-development.webp',
        imageAlt: 'A turned-on MacBook Pro used for front-end development',
      },
      {
        icon: 'gauge',
        label: 'Analytics-Ready Pages',
        href: '/services/design-development#analytics',
        description: 'Pages instrumented for tracking from day one, so performance data is there when you need it.',
        image: '/images/offering-analytics.webp',
        imageAlt: 'A computer screen displaying a bar chart of analytics data',
      },
    ],
    stat: { value: '4', label: 'Global studios' },
    faqs: [
      {
        question: 'Do you handle both design and development?',
        answer:
          'Yes — UX strategy and information architecture through front-end build and technical SEO, as one connected scope, so the design that ships is the design that was approved.',
      },
      {
        question: 'Will the site be optimized for search from day one?',
        answer:
          "Technical SEO and analytics-ready pages are part of the build, not an afterthought — structured data, performance, and tracking are in place at launch.",
      },
      {
        question: 'Can you work within our existing CMS or design system?',
        answer:
          'Generally yes — tell us what you run on and we scope the build around it rather than asking you to migrate platforms first.',
      },
    ],
  },
  {
    slug: 'sales-enablement',
    index: '04',
    icon: 'presentation',
    title: 'Sales Enablement',
    description:
      'Kits, collateral, plans, tools, and content that empowers sales teams to lead from the front.',
    image: '/images/services-sales-enablement.webp',
    imageAlt: 'Two colleagues discussing sales playbooks and ideas at a whiteboard',
    offerings: [
      {
        icon: 'book-open',
        label: 'Playbooks & Conversation Guides',
        href: '/services/sales-enablement#playbooks',
        description: 'Guides built around how your reps actually sell, not a generic script nobody follows.',
        image: '/images/offering-playbooks.webp',
        imageAlt: 'An open book with pages turning, representing a sales playbook',
      },
      {
        icon: 'handshake',
        label: 'Partner Enablement Portals',
        href: '/services/sales-enablement#partners',
        description: 'A self-serve hub that keeps channel partners equipped with current materials, without the email chain.',
        image: '/images/offering-partners.webp',
        imageAlt: 'Two businesspeople collaborating over a tablet and laptop',
      },
      {
        icon: 'message-square',
        label: 'Buyer-Stage Messaging',
        href: '/services/sales-enablement#messaging',
        description: 'Messaging mapped to each stage of the buyer journey, so reps say the right thing at the right time.',
        image: '/images/offering-messaging.webp',
        imageAlt: 'A message icon representing buyer-stage communication',
      },
    ],
    stat: { value: '10', label: 'Global client brands' },
    faqs: [
      {
        question: 'What does a sales enablement engagement typically include?',
        answer:
          'Playbooks and conversation guides, partner enablement portals, and buyer-stage messaging — built to match how your reps actually sell, not a generic template library.',
      },
      {
        question: 'Can you build enablement for a partner or channel network, not just direct sales?',
        answer:
          'Yes — partner enablement portals are part of the core scope, so channel teams get the same quality of materials as direct reps.',
      },
      {
        question: 'How do you keep messaging consistent across regions?',
        answer:
          'Buyer-stage messaging is built as one system with regional adaptation layered on top, the same approach we use for creative — so every market speaks from the same playbook.',
      },
    ],
  },
  {
    slug: 'strategy',
    index: '05',
    icon: 'map',
    title: 'Marketing/Sales Strategy',
    description:
      'Discovery and assessment process, combined with decades of experience ensures your marketing/sales strategy delivers results.',
    image: '/images/services-strategy.webp',
    imageAlt: 'A team collaborating around a whiteboard during a strategy planning session',
    offerings: [
      {
        icon: 'flag',
        label: 'Go-To-Market Planning',
        href: '/services/strategy#gtm',
        description: 'A market-entry plan grounded in discovery, not a template with your logo dropped in.',
        image: '/images/offering-gtm.webp',
        imageAlt: 'A rocket launching, representing a go-to-market launch',
      },
      {
        icon: 'users-round',
        label: 'Sales & Marketing Alignment',
        href: '/services/strategy#alignment',
        description: 'Workshops that get sales and marketing working from the same definition of a qualified lead.',
        image: '/images/offering-alignment.webp',
        imageAlt: 'Four people collaborating around a table with charts',
      },
      {
        icon: 'sliders-horizontal',
        label: 'Measurement Frameworks',
        href: '/services/strategy#measurement',
        description: 'Success criteria defined before execution starts, so you know if the strategy is working.',
        image: '/images/offering-measurement.webp',
        imageAlt: 'A magnifying glass over a target with a bullseye',
      },
    ],
    stat: { value: '+10', label: 'Years of word-of-mouth relationships' },
    faqs: [
      {
        question: 'Is this a one-off strategy document or an ongoing engagement?',
        answer:
          'Both models work — a discovery and assessment engagement that ends in a go-to-market plan, or an ongoing partnership where we keep the strategy current as your market moves.',
      },
      {
        question: 'Do you work with internal sales and marketing teams or replace them?',
        answer:
          'We work alongside them — sales and marketing alignment is a core deliverable, not something we route around your existing teams.',
      },
      {
        question: 'How do you measure whether the strategy is working?',
        answer:
          'Measurement frameworks are part of the engagement from the start, so success criteria are defined before execution begins, not retrofitted afterward.',
      },
    ],
  },
];
