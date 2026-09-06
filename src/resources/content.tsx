import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import { LocalizedText } from "@/components/LocalizedText";

const person: Person = {
  firstName: "Al-Tayeb",
  lastName: "Khaled Sayed",
  name: "Al-Tayeb Khaled Sayed",
  role: "Frontend Developer",
  avatar: "/images/avatar.jpg",
  email: "altayeb.kha@gmail.com",
  location: "Africa/Cairo",
  languages: ["Arabic — Native", "English — Professional"],
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/EngEltayib",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/altayeb-khaled",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} — Frontend Developer`,
  description: "Frontend Developer building production web applications with React.js, Next.js, and TypeScript, with experience in SaaS dashboards, authentication, payments, APIs, and bilingual interfaces.",
  headline: <LocalizedText en={<>Frontend Developer building reliable interfaces for real products.</>} ar={<>مطور واجهات أمامية أبني واجهات موثوقة لمنتجات حقيقية.</>} />,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4"><LocalizedText en="Available" ar="متاح للعمل" /></strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          <LocalizedText en="Full-time · Part-time · Freelance · Remote" ar="دوام كامل · جزئي · عمل حر · عن بُعد" />
        </Text>
      </Row>
    ),
    href: "mailto:altayeb.kha@gmail.com",
  },
  subline: (
    <>
      <LocalizedText
        en={<>I work with <Text as="span" size="xl" weight="strong">React.js, Next.js, and TypeScript</Text> to build SaaS dashboards, authentication flows, payment experiences, bilingual interfaces, and business-driven frontend workflows.</>}
        ar={<>أعمل باستخدام <Text as="span" size="xl" weight="strong">React.js وNext.js وTypeScript</Text> لبناء لوحات تحكم SaaS، أنظمة المصادقة والصلاحيات، تدفقات الدفع، الواجهات ثنائية اللغة، وتجارب Frontend مرتبطة باحتياجات العمل الفعلية.</>}
      />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About — ${person.name}`,
  description: `Meet ${person.name}, a frontend developer based in Cairo, Egypt.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "mailto:altayeb.kha@gmail.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <LocalizedText
          en={<>Frontend Developer with 1.5+ years of hands-on experience building production SaaS applications using React.js, Next.js, and TypeScript. Experienced in REST API integration, multi-role dashboards, authentication and RBAC, payment flows, bilingual interfaces, and business-driven workflows.</>}
          ar={<>مطور واجهات أمامية بخبرة عملية تزيد عن عام ونصف في بناء تطبيقات SaaS حقيقية باستخدام React.js وNext.js وTypeScript، مع خبرة في تكامل REST APIs، لوحات التحكم متعددة الصلاحيات، المصادقة وRBAC، عمليات الدفع، الواجهات ثنائية اللغة، وتدفقات العمل المرتبطة باحتياجات المنتج.</>}
        />
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Saudi Car Auctions Platform",
        timeframe: "May 2026 — Present",
        role: "Frontend Developer · Remote · Confidential startup",
        achievements: [
          <LocalizedText key="auction-1" en="Built and maintained frontend features across customer-facing and dashboard workflows using Next.js, React, TypeScript, and Material UI." ar="بنيت وطورت خصائص Frontend لواجهات العملاء ولوحات التحكم باستخدام Next.js وReact وTypeScript وMaterial UI." />,
          <LocalizedText key="auction-2" en="Implemented complex workflows for car listing, inspection, payments, auctions, user actions, and multi-step forms." ar="نفذت تدفقات عمل معقدة لإدراج السيارات والفحص والمدفوعات والمزادات وإجراءات المستخدم والنماذج متعددة الخطوات." />,
          <LocalizedText key="auction-3" en="Integrated REST APIs and handled server-driven data, validation, filtering, status-based interfaces, and bilingual AR/EN requirements." ar="ربطت REST APIs وتعاملت مع البيانات القادمة من الخادم والتحقق والتصفية والواجهات المعتمدة على الحالات ومتطلبات العربية والإنجليزية." />,
          <LocalizedText key="auction-4" en="Worked directly with backend and product stakeholders and supported frontend deployment across local, testing, and production environments." ar="عملت مباشرة مع فرق Backend والمنتج، وساهمت في نشر الواجهة وحل الاختلافات بين بيئات Local وTesting وProduction." />,
        ],
        images: [],
      },
      {
        company: "AlexApps",
        timeframe: "May 2025 — Present",
        role: "Frontend Developer · Full-time Remote",
        achievements: [
          <LocalizedText key="alex-1" en="Built React.js and Next.js SaaS dashboards across service management, offers, and restaurant platforms, integrating REST APIs and business workflows." ar="بنيت لوحات تحكم SaaS باستخدام React.js وNext.js لمنصات إدارة الخدمات والعروض والمطاعم، مع ربط REST APIs وتدفقات العمل." />,
          <LocalizedText key="alex-2" en="Implemented OTP authentication, protected routes, RBAC, permission-based navigation, and user actions for multi-role applications." ar="نفذت المصادقة باستخدام OTP والمسارات المحمية وRBAC والتنقل والإجراءات المبنية على صلاحيات المستخدم." />,
          <LocalizedText key="alex-3" en="Integrated Tap Payments and delivered validated multi-step onboarding and registration workflows." ar="ربطت Tap Payments ونفذت تدفقات تسجيل وتهيئة مستخدم متعددة الخطوات مع التحقق وإدارة الحالة." />,
          <LocalizedText key="alex-4" en="Developed server-side filtering, pagination, debounced search, bilingual AR/EN interfaces, and approval workflows." ar="طورت التصفية من جهة الخادم وتقسيم الصفحات والبحث المؤجل وواجهات عربية وإنجليزية وتدفقات الموافقة." />,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Minya University — Faculty of Computers and Informatics",
        description: <LocalizedText en="Bachelor’s degree in Computer Science · Oct 2020 — Jul 2024 · Minya, Egypt." ar="بكالوريوس علوم الحاسب · أكتوبر 2020 — يوليو 2024 · المنيا، مصر." />,
      },
      {
        name: "Graduation Project — Used Books Marketplace",
        description: <LocalizedText en="Full-stack marketplace for reselling used books with AI-powered quality assessment · Awarded A+." ar="منصة Full-stack لإعادة بيع الكتب المستعملة مع تقييم الجودة بالذكاء الاصطناعي · التقدير A+." />,
      },
      {
        name: "Information Technology Institute (ITI) — ICC Full-Stack",
        description: <LocalizedText en="Intensive Full-Stack training · Nov 2024 — Apr 2025." ar="تدريب مكثف في مسار Full-Stack · نوفمبر 2024 — أبريل 2025." />,
      },
      {
        name: "Digital Egypt Pioneers Initiative (MCIT) — Full-Stack",
        description: <LocalizedText en="Full-Stack development track · May 2024 — Oct 2024." ar="مسار تطوير Full-Stack · مايو 2024 — أكتوبر 2024." />,
      },
      {
        name: "Microsoft Azure Fundamentals",
        description: <>AZ-900 · Completed.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Core",
        description: (
          <>React.js, Next.js App Router, TypeScript, JavaScript ES6+, HTML5 and CSS3.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "State, Forms & Data",
        description: (
          <>Context API, React Hook Form, Yup, Axios and RESTful APIs.</>
        ),
        tags: [
          {
            name: "REST APIs",
            icon: "javascript",
          },
          {
            name: "React Hook Form",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Rendering & Application Engineering",
        description: <>Server Components, SSR, CSR, authentication, RBAC and business-driven workflows.</>,
        tags: [{ name: "Next.js", icon: "nextjs" }],
        images: [],
      },
      {
        title: "UI & Internationalization",
        description: <>Material UI, Bootstrap, Responsive Design, next-intl and RTL/LTR support.</>,
        tags: [{ name: "Material UI" }, { name: "next-intl" }],
        images: [],
      },
      {
        title: "Tooling & Workflow",
        description: <>Git, GitHub, Figma, Jira, Agile and Postman.</>,
        tags: [
          {
            name: "Git & GitHub",
            icon: "github",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Frontend notes and case studies",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Selected Work — ${person.name}`,
  description: `Frontend and SaaS projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
