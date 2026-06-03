import type { ImageMetadata } from 'astro';

type Service = {
  title: string;
  description: string;
  tags: string[];
  image: ImageMetadata;
};

import img1 from '../assets/services/brandexperiencegraphic.png';
import img2 from '../assets/services/digitalexperiencegraphic.png';
import img3 from '../assets/services/integratedcommunicationsgraphic.png';
import img4 from '../assets/services/growthmarketinggraphic.png';
import img5 from '../assets/services/corporatereportinggraphic.png';

export const services: Service[] = [
  {
    title: 'Brand Experience',
    description:
      'We help brands shine through thoughtful positioning, compelling messaging, and creative storytelling that leave a lasting impression.',
    tags: [
      'Brand Strategy',
      'Stakeholder Insights',
      'Messaging Framework',
      'Visual Identity',
      'Creative Direction',
      'Brand Guidelines',
    ],
    image: img1,
  },
  {
    title: 'Digital Experience',
    description:
      'From high-performance websites to optimised platforms, we build credible, intuitive digital ecosystems powered by the latest technology.',
    tags: [
      'Websites',
      'Web Applications',
      'Custom Platforms',
      'AI Solutions & Systems',
      'SEO & GEO',
      'Performance Analytics',
    ],
    image: img2,
  },
  {
    title: 'Integrated Communications',
    description:
      'We blend editorial, creative, and digital expertise to create coherent, platform-native communications across every touchpoint.',
    tags: [
      'Integrated Campaigns',
      'Thought Leadership',
      'Executive Messaging',
      'Social Media',
      'Video Storytelling',
      'Event Communications',
    ],
    image: img3,
  },
  {
    title: 'Growth Marketing',
    description:
      'We leverage digital advertising and social media to help brands stay ahead of the curve through targeted, impactful campaigns.',
    tags: [
      'SEO & GEO',
      'Social Media',
      'Paid Media',
      'Content Strategy',
      'Community Management',
      'Demand Generation',
    ],
    image: img4,
  },
  {
    title: 'Corporate Reporting',
    description:
      'We deliver annual, sustainability, and impact reports that communicate long-term value creation through clear narratives and engaging design.',
    tags: [
      'Reporting Standards',
      'Disclosures',
      'Materiality Assessments',
      'Report Writing',
      'Report Design',
      'Reporting Microsites',
    ],
    image: img5,
  },
];