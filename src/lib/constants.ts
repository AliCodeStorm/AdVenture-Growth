
import type { LucideIcon } from 'lucide-react';
import { BarChartBig, Megaphone, Target, TrendingUp, Instagram, Mail, Pin, FileText, Youtube, Code, Search, MousePointerClick, PenTool, Users, HandCoins, FileSpreadsheet, Landmark, Briefcase, Zap, ShieldCheck, Info } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Me' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export type ExpertiseItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const EXPERTISE_ITEMS: ExpertiseItem[] = [
  {
    id: 'google-ads',
    icon: Megaphone,
    title: 'Google Ads Mastery',
    description: 'Strategic campaign management to maximize visibility and conversions on the world\'s largest search engine.',
  },
  {
    id: 'meta-ads',
    icon: Target,
    title: 'Meta Ads Precision',
    description: 'Leveraging Facebook and Instagram\'s powerful ad platforms to reach your ideal audience and drive engagement.',
  },
  {
    id: 'data-analytics',
    icon: BarChartBig,
    title: 'Data Analytics & Insights',
    description: 'Transforming raw data into actionable strategies for informed decision-making and continuous optimization.',
  },
  {
    id: 'roas-achievements',
    icon: TrendingUp,
    title: 'Exceptional ROAS',
    description: 'Consistently delivering high Return On Ad Spend through meticulous planning and execution.',
  },
];

export type SkillItem = {
  id: string;
  icon: LucideIcon;
  name: string;
  category: string;
};

export const SKILL_ITEMS: SkillItem[] = [
  { id: 'instagram', icon: Instagram, name: 'Instagram Marketing', category: 'Social Media' },
  { id: 'email', icon: Mail, name: 'Email Marketing', category: 'Direct Marketing' },
  { id: 'google-ads-skill', icon: Megaphone, name: 'Google Ads', category: 'PPC Advertising' },
  { id: 'pinterest', icon: Pin, name: 'Pinterest Marketing', category: 'Social Media' },
  { id: 'content-marketing', icon: FileText, name: 'Content Marketing', category: 'Content' },
  { id: 'video-marketing', icon: Youtube, name: 'Video Marketing', category: 'Content' },
  { id: 'web-development', icon: Code, name: 'Web Development', category: 'Technical' },
  { id: 'seo', icon: Search, name: 'SEO (Search Engine Optimization)', category: 'Technical' },
  { id: 'sem', icon: MousePointerClick, name: 'SEM (Search Engine Marketing)', category: 'PPC Advertising' },
  { id: 'content-creation', icon: PenTool, name: 'Content Creation', category: 'Content' },
  { id: 'social-media-management', icon: Users, name: 'Social Media Management', category: 'Social Media' },
  { id: 'ppc-advertising', icon: HandCoins, name: 'PPC Advertising', category: 'PPC Advertising' },
  { id: 'analytics-reporting', icon: FileSpreadsheet, name: 'Analytics & Reporting', category: 'Data' },
];

export type CaseStudy = {
  id: string;
  clientName: string;
  title: string;
  challenge: string;
  solution: string;
  imageUrl: string;
  imageHint: string;
  results: { metric: string; value: string; icon: LucideIcon }[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'study-1',
    clientName: 'E-commerce Innovators Inc.',
    title: 'Scaling Online Sales by 250%',
    challenge: 'Stagnant online sales and low brand visibility in a competitive market.',
    solution: 'Implemented a multi-channel strategy involving targeted Google Ads, engaging Meta Ads campaigns, and SEO optimization to enhance organic reach.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'business growth',
    results: [
      { metric: 'ROAS Increased', value: '+180%', icon: TrendingUp },
      { metric: 'Conversion Rate', value: '+65%', icon: Zap },
      { metric: 'Organic Traffic', value: '+120%', icon: Search },
    ],
  },
  {
    id: 'study-2',
    clientName: 'Tech Solutions Ltd.',
    title: 'Boosting Lead Generation for SaaS',
    challenge: 'Difficulty in generating qualified leads for a new SaaS product.',
    solution: 'Developed a content marketing strategy combined with LinkedIn Ads and Google Ads focused on B2B decision-makers, supported by analytics.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'software interface',
    results: [
      { metric: 'Qualified Leads', value: '+300%', icon: Users },
      { metric: 'Cost Per Lead', value: '-40%', icon: HandCoins },
      { metric: 'Website Engagement', value: '+80%', icon: MousePointerClick },
    ],
  },
  {
    id: 'study-3',
    clientName: 'Local Services Co.',
    title: 'Dominating Local Market Search',
    challenge: 'Low visibility in local search results and inconsistent customer inquiries.',
    solution: 'Revamped Google My Business profile, launched targeted local Google Ads campaigns, and implemented a local SEO strategy focusing on high-intent keywords.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'local map',
    results: [
      { metric: 'Local Pack Rankings', value: 'Top 3', icon: Landmark },
      { metric: 'Customer Inquiries', value: '+150%', icon: Briefcase },
      { metric: 'Click-Through Rate', value: '+90%', icon: Target },
    ],
  },
   {
    id: 'study-4',
    clientName: 'Brand Builders Agency',
    title: 'Elevating Brand Awareness Nationwide',
    challenge: 'A new consumer brand struggled to gain national recognition and market share.',
    solution: 'Crafted compelling video content for YouTube and Meta platforms, ran broad awareness campaigns on Google Display Network, and utilized influencer collaborations.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'brand logo',
    results: [
      { metric: 'Brand Mentions', value: '+500%', icon: Megaphone },
      { metric: 'Social Engagement', value: '+220%', icon: Instagram },
      { metric: 'Ad Recall Lift', value: '+45%', icon: ShieldCheck },
    ],
  },
];

