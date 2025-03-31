
export interface Project {
  id: string;
  title: string;
  category: 'UX Case Study' | 'Website' | 'Book Design' | 'Marketing' | 'Branding';
  thumbnail: string;
  description: string;
  content: {
    introduction: string;
    images: {
      url: string;
      caption: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    id: 'ux-case-study-1',
    title: 'Finance App Redesign',
    category: 'UX Case Study',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'A comprehensive UX case study for a finance application redesign',
    content: {
      introduction: 'This case study focused on improving the user experience of a financial management application. The goal was to simplify complex financial data visualization and make the app more accessible to users with varying levels of financial literacy.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Initial wireframes showing the financial dashboard'
        },
        {
          url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'User testing session results with heatmap overlay'
        },
        {
          url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Final design implementation showing improved data visualization'
        }
      ]
    }
  },
  {
    id: 'ux-case-study-2',
    title: 'Healthcare Portal',
    category: 'UX Case Study',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'UX redesign for a patient healthcare portal',
    content: {
      introduction: 'This healthcare portal redesign focused on creating an intuitive interface for patients to access their medical records, schedule appointments, and communicate with healthcare providers. The primary challenge was to present complex medical information in an accessible way while maintaining privacy and security standards.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'User journey map for patient appointment scheduling'
        },
        {
          url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Information architecture diagram'
        },
        {
          url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Final UI design showing the patient dashboard'
        }
      ]
    }
  },
  {
    id: 'website-1',
    title: 'Artisan Bakery Site',
    category: 'Website',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Website design for an artisan bakery',
    content: {
      introduction: 'This website was designed for a local artisan bakery looking to expand their online presence. The design focuses on showcasing their handcrafted products with a warm and inviting aesthetic that reflects their brand philosophy of quality and tradition.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Homepage showcasing featured products'
        },
        {
          url: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Product catalog with filtering options'
        },
        {
          url: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Mobile responsive design views'
        }
      ]
    }
  },
  {
    id: 'website-2',
    title: 'Architecture Portfolio',
    category: 'Website',
    thumbnail: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Minimalist portfolio site for an architectural firm',
    content: {
      introduction: 'This minimalist portfolio website was designed for an award-winning architectural firm. The clean layout puts focus on their projects while the intuitive navigation allows visitors to easily explore their extensive body of work across different architectural categories.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Homepage with project showcase grid'
        },
        {
          url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Individual project page layout'
        },
        {
          url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Contact page with interactive map'
        }
      ]
    }
  },
  {
    id: 'book-design-1',
    title: 'Culinary Arts Annual',
    category: 'Book Design',
    thumbnail: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Editorial design for a culinary arts publication',
    content: {
      introduction: 'This annual publication for a prestigious culinary institute showcases student achievements, faculty research, and culinary trends. The design balances sophisticated typography with vibrant food photography to create an engaging reading experience that celebrates the art of cuisine.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Cover design and binding details'
        },
        {
          url: 'https://images.unsplash.com/photo-1553545204-5a46ae787c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Chapter opening spread with custom typography'
        },
        {
          url: 'https://images.unsplash.com/photo-1512045482940-f37f5216f639?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Recipe feature pages with photography'
        }
      ]
    }
  },
  {
    id: 'book-design-2',
    title: 'Literary Journal',
    category: 'Book Design',
    thumbnail: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Design for a quarterly literary publication',
    content: {
      introduction: 'This quarterly literary journal features emerging and established writers with a focus on experimental fiction and poetry. The design employs a flexible grid system that accommodates various content types while maintaining visual cohesion throughout the publication.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Cover series showing seasonal variations'
        },
        {
          url: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Typography system and grid layout examples'
        },
        {
          url: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Feature article spread with custom illustrations'
        }
      ]
    }
  },
  {
    id: 'marketing-1',
    title: 'Eco-Product Campaign',
    category: 'Marketing',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Integrated marketing campaign for sustainable products',
    content: {
      introduction: 'This integrated marketing campaign was developed for a company launching a new line of eco-friendly home products. The campaign included digital and print advertising, social media content, packaging design, and point-of-sale materials, all unified by a cohesive visual identity that emphasized sustainability and conscious consumption.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Campaign key visual and logo variations'
        },
        {
          url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Social media content calendar and templates'
        },
        {
          url: 'https://images.unsplash.com/photo-1530036846522-74f9e3b19d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Product packaging and in-store display designs'
        }
      ]
    }
  },
  // New branding projects
  {
    id: 'branding-1',
    title: 'Luxury Resort Rebrand',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Complete brand refresh for an upscale resort destination',
    content: {
      introduction: 'This comprehensive rebrand for a luxury resort chain included a new visual identity system, custom typography, brand guidelines, and collateral materials. The goal was to position the resort as a premier destination for discerning travelers seeking authentic, immersive experiences.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Brand identity system and logo variations'
        },
        {
          url: 'https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Custom typography and color palette applications'
        },
        {
          url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Brand collateral and print materials'
        }
      ]
    }
  },
  {
    id: 'branding-2',
    title: 'Tech Startup Identity',
    category: 'Branding',
    thumbnail: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Brand identity for an emerging technology company',
    content: {
      introduction: 'This brand identity project for a tech startup focused on creating a modern, distinctive visual language that would help the company stand out in a competitive market. The approach emphasized innovation and forward-thinking through geometric shapes, bold typography, and a vibrant color palette.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Logo development process and final mark'
        },
        {
          url: 'https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Digital brand applications and UI elements'
        },
        {
          url: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
          caption: 'Marketing materials and social media presence'
        }
      ]
    }
  }
];
