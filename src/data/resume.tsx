import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Astro } from "@/components/ui/svgs/astro";
import { Webflow } from "@/components/ui/svgs/webflow";
import { WordPress } from "@/components/ui/svgs/wordpress";
import { Figma } from "@/components/ui/svgs/figma";
import { Elementor } from "@/components/ui/svgs/elementor";
import { HTML } from "@/components/ui/svgs/html";
import { CSS } from "@/components/ui/svgs/css";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { PHP } from "@/components/ui/svgs/php";
import { Vercel } from "@/components/ui/svgs/vercel";
import { GitHub } from "@/components/ui/svgs/github";
import { TikTok } from "@/components/ui/svgs/tiktok";
import { Reddit } from "@/components/ui/svgs/reddit";
import { Git } from "@/components/ui/svgs/git";
import { Canva } from "@/components/ui/svgs/canva";
import { Meta } from "@/components/ui/svgs/meta";
import { Instagram } from "@/components/ui/svgs/instagram";
import { Linkedin } from "@/components/ui/svgs/linkedin";
import { Photoshop } from "@/components/ui/svgs/photoshop";
import { Lightroom } from "@/components/ui/svgs/lightroom";
import { Affinity } from "@/components/ui/svgs/affinity";
import { Microsoft } from "@/components/ui/svgs/microsoft";
import { Google } from "@/components/ui/svgs/google";
import { GoogleAnalytics } from "@/components/ui/svgs/googleanalytics";
import { Capcut } from "@/components/ui/svgs/capcut";
import { Cloudflare } from "@/components/ui/svgs/cloudflare";
import { DNS } from "@/components/ui/svgs/dns";
import { Buffer } from "@/components/ui/svgs/buffer";
import { ClientFirst } from "@/components/ui/svgs/clientfirst";
import { Raisley } from "@/components/ui/svgs/raisley";
import { ConstantContact } from "@/components/ui/svgs/constantcontact";
import { Metricool } from "@/components/ui/svgs/metricool";
import { MailChimp } from "@/components/ui/svgs/mailchimp";
import { HubSpot } from "@/components/ui/svgs/hubspot";
import { BlackbaudRaiserEdge } from "@/components/ui/svgs/blackbaud";
import { Framer } from "@/components/ui/svgs/framer";
import { Hotjar } from "@/components/ui/svgs/hotjar";
import { Illustrator } from "@/components/ui/svgs/illustrator";
import { Procreate } from "@/components/ui/svgs/procreate";

export const DATA = {
  name: "Alexa Kyler - Digital Experience Designer",
  initials: "AM",
  url: "https://alexakylercreativestudio.com",
  location: "Rochester, NY",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Storyteller, content strategist & conservation communicator building digital experiences that move people to care - and to act.",
  summary:
    `I'm a communications and digital strategist with 6+ years of experience building content, campaigns, and brand storytelling for 
    mission-driven organizations, animal welfare nonprofits, and conservation-focused work. My background spans web and CMS 
    development, social media strategy, email campaigns, fundraising, and donor/audience engagement — but at the core, I'm a storyteller first. 
    I raised $18,000+ for Cat Connections NYC in under five months through organic, story-driven campaigns. I run Wildari 
    Planet, an independent wildlife education platform, because conservation storytelling isn't just my job — it's something 
    I do out of genuine love for animals and the natural world. I bring a rare combination: the technical skill to build 
    and manage the digital infrastructure (websites, CMS, CRM, email systems) and the creative instinct to make people stop scrolling 
    and feel something. I've led end-to-end projects for nonprofits and mission-driven organizations, and I don't just execute — 
    I help shape the story and make sure it lands.`,
  avatarUrl: "/nonprofit.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },

    skillsgeneral: { 
      order: 4, 
      enabled: true, 
      heading: "Skills",
      subheading: "General",
      subheadingtwo: "Software" 
    },

    skills: { 
      order: 4, 
      enabled: true, 
      heading: "Skills",
      subheading: "General",
      subheadingtwo: "Software" 
    },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Featured Work",
      text: "I build digital experiences and fundraising campaigns for nonprofits and mission-driven organizations - combining web design, UX research, and storytelling to help causes connect with the people who care about them.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Photos",
      text: "Taken with my Sony ZV-E10",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on Linkedin and I'll respond whenever I can, or send me an e-mail.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skillsgeneral: [
    { name: "Nonprofit Marketing"},
    { name: "Fundraising" },
    { name: "Brand Storytelling" },
    { name: "Copywriting" },
    { name: "Social Media Management" },
    { name: "Content Creation"},
    { name: "Website Development" },
    { name: "UX/UI Design"},
    { name: "SEO/AEO"},
    { name: "Performance Analytics & A/B Testing"},
    { name: "Graphic Design"},
    { name: "Basic IT" },
  ],
  skills: [
    { name: "Blackbaud Raiser Edge", icon: BlackbaudRaiserEdge },
    { name: "Constant Contact", icon: ConstantContact},
    { name: "Raisley", icon: Raisley },
    { name: "MailChimp", icon: MailChimp},
    { name: "HubSpot", icon: HubSpot},
    { name: "Instagram", icon: Instagram},
    { name: "TikTok", icon: TikTok},
    { name: "Reddit", icon: Reddit},
    { name: "Meta Business Suite", icon: Meta },
    { name: "Linkedin", icon: Linkedin },
    { name: "Metricool", icon: Metricool},
    { name: "Buffer", icon: Buffer},
    { name: "Figma", icon: Figma },
    { name: "Photoshop", icon: Photoshop},
    { name: "Lightroom", icon: Lightroom},
    { name: "Illustrator", icon: Illustrator},
    { name: "Procreate", icon: Procreate},
    { name: "Affinity Designer", icon: Affinity },
    { name: "DaVinci Resolve" },
    { name: "Canva", icon: Canva },
    { name: "CapCut", icon: Capcut},
    { name: "Webflow", icon: Webflow },
    { name: "ClientFirst", icon: ClientFirst },
    { name: "WordPress", icon: WordPress },
    { name: "Elementor", icon: Elementor },
    { name: "Framer", icon: Framer },
    { name: "JavaScript", icon: JavaScript },
    { name: "PHP", icon: PHP},
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Tailwind CSS", icon: Astro },
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vercel", icon: Vercel },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: GitHub },
    { name: "Cloudflare", icon: Cloudflare },
    { name: "DNS Configuration", icon: DNS },
    { name: "Google Workspace", icon: Google },
    { name: "Microsoft 365", icon: Microsoft},
    { name: "Google Analytics", icon: GoogleAnalytics },
    { name: "Hotjar", icon: Hotjar },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "alexakylernyc@gmail.com",
    tel: "+1 646-932-1024",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/snowleopardAlexa",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aleksandra-slomska-1039681b3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alexakylernyc@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Everloving Paws",
      href: "https://everlovingpaws.com",
      location: "Rochester, NY",
      title: "Founder & Communications Lead",
      logoUrl: "/photos/everlovingpaws.png",
      start: "May 2026",
      end: undefined,
      description:
        "Founded a creative studio building websites and digital storytelling for pet businesses, veterinary clinics, and animal welfare nonprofits.",
    },
    {
      company: "Cat Connections NYC",
      href: "https://www.catconnectionsnyc.org/our-campaigns",
      badges: [],
      location: "Astoria, Queens, NY",
      title: "Digital Communications & Fundraising & Campaign Manager",
      logoUrl: "/photos/ccnyc.png",
      start: "June 2025",
      end: "March 2026",
      description:
        "Led digital fundraising and communications strategy for an animal welfare nonprofit, raising $18,000+ in under 5 months through integrated donor campaigns across email, social media, and peer-to-peer platforms.",
    },
    {
      company: "ParaGenius Foundation",
      href: "https://parageniusfoundation.org",
      badges: [],
      location: "Rochester, NY",
      title: "Website Designer & Communications Coordinator",
      logoUrl: "/photos/paragenius.png",
      start: "March 2026",
      end: "May 2026",
      description:
        "Designed and developed the organization's website to clearly communicate mission, programs, and community impact.",
    },
    {
      company: "CSJ Learning Connection",
      href: "https://thecsjlearningconnection.org",
      badges: [],
      location: "Brentwood, NY",
      title: "Web Designer & Digital Content Coordinator",
      logoUrl: "/photos/tlc.png",
      start: "Sep 2025",
      end: "Dec 2025",
      description:
        "Designed and built the organization's website, translating educational mission and programs into an accessible, user-friendly digital experience.",
    },
    {
      company: "Sisters of St. Joseph",
      href: "https://brentwoodcsj.org",
      badges: [],
      location: "Brentwood, NY",
      title: "Digital Communications & Web Manager",
      logoUrl: "/photos/sisters.png",
      start: "Dec 2023",
      end: "Dec 2025",
      description:
        "Led full redesign of 4 program websites and managed donor communications, including email campaigns and Blackbaud Raiser's Edge database management.",
    },
    {
      company: "Sean Hanna",
      href: "https://seanhanna.org",
      badges: [],
      location: "Remote",
      title: "Website Designer & Content Strategy",
      logoUrl: "/photos/hanna.png",
      start: "May 2025",
      end: "June 2025",
      description:
        "Designed the full website and content strategy, wrote copy, and advised on the best fundraising software for the organization's needs.",
    },
    {
      company: "Uptown & Boogie",
      href: "https://ubhealthyproject.org/",
      badges: [],
      location: "Remote",
      title: "Website Designer & Communications",
      logoUrl: "/photos/boogie.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "Designed the full website and content strategy in Figma and wrote copy - collaborating closely with the project director on communications strategy for the organization.",
    },
    {
      company: "aJuxt",
      href: "https://ajuxt.com/",
      badges: [],
      location: "Astoria, Queens, NY",
      title: "Communications & Content Specialist",
      logoUrl: "/photos/ajuxt.png",
      start: "Jan 2022",
      end: "Jan 2023",
      description:
        "Created content and managed social media strategy across multiple client accounts, growing one client's audience from ~300 to 630+ followers.",
    },
    {
      company: "Freelancer",
      href: "https://www.freelancer.com/",
      badges: [],
      location: "Ridgewood, Queens, NY",
      title: "Digital Communications Consultant",
      logoUrl: "/photos/freelancer.png",
      start: "Jan 2020",
      end: "Jan 2022",
      description:
        "Designed and built websites for small businesses and organizations, translating their mission and services into clear, effective digital experiences.",
    },
  ],
  education: [
    {
      school: "The City University of New York",
      href: "https://www.cuny.edu/",
      degree: "Bachelor of Arts - BA - Communication and Media Studies",
      logoUrl: "/photos/cuny.png",
      start: "2016",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Cat Connections NYC",
      href: "https://catconnectionsnyc.org",
      dates: "September 2025 - December 2025",
      active: true,
      description:
        "Designed and built a full CMS website for a small cat rescue, creating the site architecture and showcasing adoptable and adopted cats, their mission, and their community impact.",
      technologies: [
        "Webflow CMS",
        "Custom CSS & JS",
        "Built-In Interactions",
        "SEO/AEO",
        "Figma",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://catconnectionsnyc.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ccnyctwo.jpg",
      video: "",
    },
    {
      title: "18k Raised in 5 months",
      href: "https://www.catconnectionsnyc.org/our-campaigns",
      dates: "June 2025 - January 2026",
      active: true,
      description:
        "Raised $18,000 in five months for Cat Connections NYC through multi‑platform fundraising campaigns across Raisely, Zeffy, GoFundMe, Reddit, Instagram, and Facebook.",
      technologies: [
        "Raisley",
        "GoFundMe",
        "Zeffy",
        "Fidelity Corporate Giving",
        "Reddit",
        "Webflow CMS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.catconnectionsnyc.org/our-campaigns",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/ccnyc.mp4",
    },
    {
      title: "Sisters of St. Joseph",
      href: "https://brentwoodcsj.org/",
      dates: "Dec 2023 - Dec 2025",
      active: true,
      description:
        "Led full redesign and development of 3 program websites for a religious nonprofit organization, building site architecture, content, and accessibility-focused design grounded in each program's mission. Managed donor communications and database records in Blackbaud Raiser's Edge alongside email marketing campaigns.",
      technologies: [
        "WordPress",
        "Webflow",
        "WCAG Accessibility",
        "Blackbaud Raiser's Edge",
        "Constant Contact",
        "Multi-Site Management",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://csjbrentwood.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/sisters.mp4",
    },
    {
      title: "ParaGenius Foundation",
      href: "https://parageniusfoundation.org",
      dates: "March 2026 - May 2026",
      active: true,
      description:
        "Designed and built a full CMS website for a Maui-based non-profit, creating the site architecture, branding, and content, all grounded in UX research and community insights.",
      technologies: [
        "Webflow CMS",
        "Client First",
        "Built-In Interactions",
        "SEO/AEO",
        "UX Research & Strategy",
        "Figma",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://parageniusfoundation.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/paragenius.jpg",
      video: "",
    },
    {
      title: "CSJ Learning Connection",
      href: "https://thecsjlearningconnection.org",
      dates: "September 2025 - Dec 2025",
      active: false,
      description:
        "Designed and built a full website with language switcher for a Brentwood-based non-profit, creating the site architecture, branding, and content, all grounded in UX research and community insights.",
      technologies: [
        "Webflow CMS",
        "Custom CSS & JS",
        "Language Switcher",
        "Built-In Interactions",
        "SEO/AEO",
        "UX Research & Strategy",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/tlc.mp4",
    },
    {
      title: "Uptown & Boogie",
      href: "https://ubhealthyproject.org/",
      dates: "July 2025 - August 2025",
      active: false,
      description:
        "Designed the full website and content strategy in Figma and wrote copy - collaborating closely with the project director on communications strategy for the organization.",
      technologies: [
        "WordPress Elementor",
        "Figma",
        "Content Strategy",
        "Copywriting",
        "SEO/AEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://ubhealthyproject.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/uptown.jpg",
      video: "",
    },
    {
      title: "Sean Hanna Foundation",
      href: "https://www.seanhanna.org/",
      dates: "May 2025 - June 2025",
      active: false,
      description:
        "Designed and built a full website and content strategy for a non-profit, creating the site architecture, branding, and content, all grounded in UX research and community insights.",
      technologies: [
        "WordPress Elementor",
        "Content Strategy",
        "Fundraising Software",
        "Copywriting",
        "SEO/AEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.seanhanna.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sean.jpg",
      video: "",
    },
    {
      title: "TrapperAid",
      href: "https://www.behance.net/gallery/200507659/TrapperAid-UXUI-Case-Study",
      dates: "Jan 2024 - May 2024",
      active: false,
      description:
        "Researched and designed a complete UX/UI web app for Trap‑Neuter‑Return volunteers, leading the full process from user interviews and problem discovery to wireframes, prototypes, and high‑fidelity UI design.",
      technologies: [
        "UX Research",
        "Low & Hi-Fid Wireframes",
        "Prototyping",
        "User Testing",
        "UI Design",
        "Figma",
        "Photoshop",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.behance.net/gallery/200507659/TrapperAid-UXUI-Case-Study",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/trapperaid.jpg",
      video: "",
    },
    {
      title: "Everloving Paws",
      href: "https://everlovingpaws.com",
      dates: "March 2024 - Present",
      active: true,
      description:
        "Founded Everloving Paws, a boutique agency helping pet businesses, startups, rescues, and veterinary clinics grow through modern branding, web, and marketing.",
      technologies: [
        "Webflow CMS",
        "Client First",
        "Custom CSS & JS",
        "Built-In Interactions",
        "SEO/AEO",
        "Figma",
        "Canva",
        "Google Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://everlovingpaws.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/everloving.mp4",
    },
    {
      title: "Petico",
      href: "https://www.behance.net/gallery/189546417/Petico-UXUI-Case-Study",
      dates: "Jan 2022 - May 2022",
      active: false,
      description:
        "Researched and designed a full UX/UI e‑commerce web app for Petico, a custom pet‑portrait platform. Led the complete process from user interviews and surveys to competitive analysis, wireframes, prototypes, and high‑fidelity UI design.",
      technologies: [
        "UX Research",
        "Low & Hi-Fid Wireframes",
        "Prototyping",
        "User Testing",
        "UI Design",
        "Figma",
        "Photoshop",
        "Canva",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.behance.net/gallery/189546417/Petico-UXUI-Case-Study",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/petico.mp4",
    },
    {
      title: "Kawi",
      href: "https://www.behance.net/gallery/185578571/Kawi-Brand-Identity-Guidelines",
      dates: "February 2023 - May 2023",
      active: false,
      description:
        "Created the full brand identity and guidelines for Kawi, a shampoo and conditioner line — including color palette development, iconography, bottle label design, packaging system, and overall visual direction.",
      technologies: [
       "Photoshop",
       "Illustrator",
       "After Effects",
       "Premiere Pro",
       "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.behance.net/gallery/185578571/Kawi-Brand-Identity-Guidelines",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/kawi.mp4",
    },
  ],
} as const;
