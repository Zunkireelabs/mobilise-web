export interface ServiceOffering {
  icon: string;
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  index: string;
  icon: string;
  title: string;
  description: string;
  offerings: ServiceOffering[];
}

export const services: Service[] = [
  {
    slug: 'full-service-marketing',
    index: '01',
    icon: 'target',
    title: 'Full Service Marketing',
    description:
      'Implement data-driven marketing and sales programs that increase customers, revenue, and profitability.',
    offerings: [
      { icon: 'crosshair', label: 'Demand Generation & ABM', href: '/services/full-service-marketing#demand-gen' },
      { icon: 'mail', label: 'Content & Campaign Programs', href: '/services/full-service-marketing#campaigns' },
      {
        icon: 'trending-up',
        label: 'Performance Reporting',
        href: '/services/full-service-marketing#reporting',
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
    offerings: [
      { icon: 'layers', label: 'Campaign Concepts & Assets', href: '/services/creative-production#concepts' },
      { icon: 'video', label: 'Video & Motion Graphics', href: '/services/creative-production#video' },
      { icon: 'globe', label: 'Regional Adaptation', href: '/services/creative-production#localisation' },
    ],
  },
  {
    slug: 'design-development',
    index: '03',
    icon: 'layout-panel-left',
    title: 'Design & Development',
    description:
      'UI/UX and SEO-optimized websites that tell your story, and showcases your value proposition.',
    offerings: [
      { icon: 'compass', label: 'UX Strategy & IA', href: '/services/design-development#ux-strategy' },
      { icon: 'code', label: 'Front-End & Technical SEO', href: '/services/design-development#development' },
      { icon: 'gauge', label: 'Analytics-Ready Pages', href: '/services/design-development#analytics' },
    ],
  },
  {
    slug: 'sales-enablement',
    index: '04',
    icon: 'presentation',
    title: 'Sales Enablement',
    description:
      'Kits, collateral, plans, tools, and content that empowers sales teams to lead from the front.',
    offerings: [
      { icon: 'book-open', label: 'Playbooks & Conversation Guides', href: '/services/sales-enablement#playbooks' },
      { icon: 'handshake', label: 'Partner Enablement Portals', href: '/services/sales-enablement#partners' },
      { icon: 'message-square', label: 'Buyer-Stage Messaging', href: '/services/sales-enablement#messaging' },
    ],
  },
  {
    slug: 'strategy',
    index: '05',
    icon: 'map',
    title: 'Marketing/Sales Strategy',
    description:
      'Discovery and assessment process, combined with decades of experience ensures your marketing/sales strategy delivers results.',
    offerings: [
      { icon: 'flag', label: 'Go-To-Market Planning', href: '/services/strategy#gtm' },
      { icon: 'users-round', label: 'Sales & Marketing Alignment', href: '/services/strategy#alignment' },
      { icon: 'sliders-horizontal', label: 'Measurement Frameworks', href: '/services/strategy#measurement' },
    ],
  },
];
