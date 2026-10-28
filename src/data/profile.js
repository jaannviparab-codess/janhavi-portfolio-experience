// Central content file — everything here is sourced directly from
// Janhavi's resume. Update the facts here and every section that
// references them updates automatically.

export const personal = {
  name: 'Janhavi Prashant Parab',
  firstName: 'Janhavi',
  headline: 'AI Automation Specialist | Python Developer | B.Sc. IT Graduate',
  tagline: 'Building practical backend, API, web and automation solutions with Python.',
  location: 'Mumbai, Maharashtra',
  email: 'jaannviparab@gmail.com',
  phone: '+91 87791 50297',
  phoneHref: 'tel:+918779150297',
  github: 'https://github.com/jaannviparab-codess',
  githubHandle: '@jaannviparab-codess',
  // Navbar, Hero, Contact and Footer all read this field and show the
  // LinkedIn link/button whenever it is set.
  linkedin: 'https://www.linkedin.com/in/janhavi-parab20092005',
  resumeUrl: '/resume/Janhavi_Prashant_Parab_Resume.pdf',
}

export const about = {
  paragraph:
    "I'm a B.Sc. Information Technology graduate with a CGPA of 9.10, currently working as an AI Automation Specialist at MCM Pvt. Ltd. within the Compliance Team. My day-to-day work involves Python, APIs, backend development with Django and Flask, and database work with SQLite, alongside HTML/CSS for the interfaces that sit on top of them. Outside of work, I'm building on that foundation with Data Science, Artificial Intelligence and Machine Learning — I like turning practical problems into working software.",
  highlights: [
    { label: 'B.Sc. Information Technology', value: 'CGPA 9.10' },
    { label: 'AI Automation Specialist', value: 'MCM Pvt. Ltd.' },
    { label: 'Compliance Team', value: '3 Months experience' },
    { label: 'Currently learning', value: 'Data Science, AI & ML' },
  ],
}

export const experience = {
  role: 'AI Automation Specialist',
  company: 'MCM Pvt. Ltd.',
  duration: '3 Months',
  team: 'Compliance Team',
  bullets: [
    'Develop Python-based backend functionality and automation supporting technology-driven workflows within the Compliance Team.',
    'Work with APIs and implement integrations between backend services and application workflows.',
    'Build web applications and backend features using Django and Flask.',
    'Handle database work with SQLite, including data storage, retrieval and management.',
    'Develop user interfaces with HTML and CSS, working across backend, database, API and UI components.',
  ],
}

export const skillGroups = [
  {
    category: 'Programming',
    items: ['Python'],
  },
  {
    category: 'Backend & Web',
    items: [
      'Django',
      'Flask',
      'HTML',
      'CSS',
      'Web Development',
      'Backend Development',
      'APIs',
      'API Integration',
    ],
  },
  {
    category: 'Database',
    items: ['SQLite', 'Database Management'],
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Claude', 'Git', 'GitHub', 'MS Office', 'PowerPoint', 'Canva'],
  },
]

export const currentlyLearning = [
  {
    name: 'Data Science',
    note: 'Exploring data cleaning, analysis and visualization workflows.',
  },
  {
    name: 'Artificial Intelligence',
    note: 'Building a foundation in AI-driven problem solving.',
  },
  {
    name: 'Machine Learning',
    note: 'Learning core ML concepts to apply alongside backend work.',
  },
]

export const projects = [
  {
    id: 'ai-nivaran',
    name: 'AI Nivaran',
    tagline: 'AI-Powered Civic Issue Reporting Platform',
    description:
      'A web platform that lets citizens report public infrastructure problems — potholes, garbage, faulty streetlights and more. AI is used to detect and classify each report, assign a priority score, and track it through to resolution.',
    features: [
      'AI-assisted issue detection, classification and priority scoring',
      'User registration and sign-in, with a demo mode for quick evaluation',
      'Multilingual interface available in English, Hindi and Marathi',
      'Live and deployed on Vercel',
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'AI-Based Classification', 'Vercel'],
    liveUrl: 'https://ai-nivaran.vercel.app',
    githubUrl: 'https://github.com/jaannviparab-codess/ai-nivaran',
    featured: true,
  },
  {
    id: 'automated-wheelchair',
    name: 'Automated Wheelchair',
    tagline: 'Arduino-Based Assistive Mobility Prototype',
    date: 'April 2026',
    description:
      'A functional automated wheelchair prototype combining obstacle-aware hardware with wireless control, built around Arduino and programmed in C/C++.',
    features: [
      'Ultrasonic sensors for obstacle detection',
      'Motor drivers for movement control',
      'Bluetooth module for wireless control',
      'Firmware programmed in C/C++',
    ],
    tech: ['Arduino', 'C/C++', 'Ultrasonic Sensors', 'Motor Drivers', 'Bluetooth'],
    featured: false,
  },
]

export const simulations = [
  {
    company: 'Deloitte',
    title: 'Data Analytics Job Simulation',
    platform: 'Forage',
    description:
      'Performed data cleaning, analysis and visualization, and translated insights into business recommendations.',
  },
  {
    company: 'TATA',
    title: 'GenAI Powered Data Analytics Job Simulation',
    platform: 'Forage',
    description:
      'Conducted exploratory data analysis and risk profiling, AI-based delinquency prediction and data storytelling.',
  },
  {
    company: 'JPMorgan Chase & Co.',
    title: 'Quantitative Research Job Simulation',
    platform: 'Forage',
    // First sentence is the supplied description; the second lists only the
    // practical tasks named on the JPMorgan certificate PDF.
    description:
      'Completed a Quantitative Research job simulation with JPMorgan Chase & Co. through Forage, gaining practical exposure to quantitative analysis, financial data, and research-oriented problem solving. Practical tasks: Investigate and analyze price data; Price a commodity storage contract; Credit risk analysis; Bucket FICO scores.',
  },
]

export const education = {
  degree: 'B.Sc. in Information Technology',
  cgpa: '9.10',
  status: 'Completed 2026',
}

export const certification = {
  name: 'Advanced Excel',
  date: 'September 2025',
}

// Job-simulation certificates. Every value is copied from the certificate PDF
// itself. The PDFs live in /public/certificates and each preview image in
// /public/certificates/previews was rendered from page 1 of its PDF.
export const certificates = [
  {
    id: 'deloitte-data-analytics',
    company: 'Deloitte',
    title: 'Data Analytics Job Simulation',
    credential: 'Certificate of Completion',
    date: 'June 25th, 2026',
    period: 'April 2026 to June 2026',
    issuedBy: 'Forage',
    pdfUrl: '/certificates/deloitte-data-analytics-job-simulation.pdf',
    previewUrl: '/certificates/previews/deloitte-data-analytics-job-simulation.png',
  },
  {
    id: 'tata-genai-data-analytics',
    company: 'TATA',
    title: 'GenAI Powered Data Analytics Job Simulation',
    credential: 'Certificate of Completion',
    date: 'July 11th, 2026',
    period: 'June 2026 to July 2026',
    issuedBy: 'Forage',
    pdfUrl: '/certificates/tata-genai-powered-data-analytics-job-simulation.pdf',
    previewUrl: '/certificates/previews/tata-genai-powered-data-analytics-job-simulation.png',
  },
  {
    id: 'jpmorgan-quantitative-research',
    company: 'JPMorgan Chase & Co.',
    title: 'Quantitative Research Job Simulation',
    credential: 'Certificate of Completion',
    date: 'June 25th, 2026',
    period: 'June 2026',
    issuedBy: 'Forage',
    pdfUrl: '/certificates/jpmorgan-quantitative-research-job-simulation.pdf',
    previewUrl: '/certificates/previews/jpmorgan-quantitative-research-job-simulation.png',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
