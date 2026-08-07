export const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "R",
  "Machine Learning",
  "Project Management",
  "FMEA",
  "SPC",
  "Lean Six Sigma",
  "Process Improvement",
  "Supply Chain",
];

export const experience = [
  {
    company: "Bosch Chassis Systems",
    role: "Senior Project Engineer",
    location: "Chakan, Maharashtra, India",
    period: "Aug 2017 — Mar 2019",
    description:
      "Cross-functional automotive project work spanning commercial planning, audit support, product engineering and production engineering.",
  },
  {
    company: "Cummins India",
    role: "Project Intern",
    location: "Pune, Maharashtra, India",
    period: "Jul 2016 — Jan 2017",
    description:
      "Early-career project experience in an automotive and manufacturing environment.",
  },
];

export const education = [
  {
    school: "Wayne State University",
    degree: "M.S. Industrial Engineering",
    period: "Aug 2019 — May 2021",
    detail: "GPA 3.7",
    image: "/images/wayne-state.png",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Bachelor's Degree",
    period: "Aug 2013 — Jun 2017",
    detail: "GPA 3.1",
    image: "/images/pune-university.jpg",
  },
];

export const projects = [
  {
    title: "Adaptive Headlight System",
    category: "Automotive Engineering",
    description:
      "An adaptive headlight concept for automobiles combining mechanical design, research and system-level thinking.",
    image: "/images/adaptive-headlight.png",
    links: [
      {
        label: "Full project",
        href: "https://github.com/rajratnapatil9/Adaptive-Headlight-system-for-Automobile-/blob/master/Final%20%20Black%20Book%20.pdf",
      },
      {
        label: "Research paper",
        href: "https://ijisrt.com/adaptive-headlight-system-for-automobiles",
      },
    ],
  },
  {
    title: "Inventory Management Dashboard",
    category: "Power BI",
    description:
      "Interactive inventory dashboard for brake components, focused on visualizing stock and inventory management information.",
    image: "/images/inventory-dashboard.gif",
    links: [
      {
        label: "Open dashboard",
        href: "https://app.powerbi.com/view?r=eyJrIjoiODA1ZWRjYzktZTg2OS00YTE0LWFiZTUtY2IxNGNmYWM5ODI5IiwidCI6ImU1MWNkZWM5LTgxMWQtNDcxZC1iYmU2LWRkM2Q4ZDU0YzI4YiIsImMiOjN9&embedImagePlaceholder=true&pageName=ReportSection",
      },
    ],
  },
  {
    title: "Traffic Queue Prediction",
    category: "Data Science",
    description:
      "A data-science project exploring traffic queue prediction and analytical modeling.",
    image: "/images/traffic-queue.png",
    links: [
      {
        label: "View notebook",
        href: "https://github.com/rajratnapatil9/TRAFFIC-QUEUE-PREDICTION/blob/main/Queue%20Prediction.ipynb",
      },
    ],
  },
  {
    title: "JCB Reservoir Benchmarking",
    category: "Industrial Engineering",
    description:
      "Benchmarking study focused on a JCB reservoir with product and engineering comparison analysis.",
    image: "/images/benchmarking.png",
    links: [{ label: "View presentation", href: "/pdfs/Benchmarking Project.pdf" }],
  },
  {
    title: "Pareto Dashboard",
    category: "Power BI",
    description:
      "A visual Pareto analysis dashboard for finding the vital few contributors behind operational issues.",
    image: "/images/pareto-dashboard.gif",
    links: [
      {
        label: "Open dashboard",
        href: "https://app.powerbi.com/view?r=eyJrIjoiNGNlZjgzNzctZDY1Yi00YTY2LTk5NjgtM2ZlZmQ2NzM3OGQyIiwidCI6ImU1MWNkZWM5LTgxMWQtNDcxZC1iYmU2LWRkM2Q4ZDU0YzI4YiIsImMiOjN9",
      },
    ],
  },
  {
    title: "Olympic Games Analysis",
    category: "Tableau",
    description:
      "A Tableau dashboard exploring Olympic Games trends and historical performance data.",
    image: "/images/olympics-dashboard.gif",
    links: [
      {
        label: "Open dashboard",
        href: "https://public.tableau.com/profile/rajratna.patil#!/vizhome/OlympicGames_16169769820040/Dashboard2",
      },
    ],
  },
];

export type Project = (typeof projects)[number];

export const certifications = [
  ["Project Management Foundations", "/certificates/project-management.jpg", "/certificates/project-management.jpg"],
  ["Process Improvement Foundations", "/certificates/process-improvement.jpg", "/pdfs/Process Improvement Foundations.pdf"],
  ["Master SQL for Data Science", "/certificates/master-sql.jpg", "/pdfs/Master SQL for Data Science.pdf"],
  ["Lean Six Sigma Foundations", "/certificates/lean-six-sigma.jpg", "/pdfs/Lean Six Sigma Foundations.pdf"],
  ["Quality Management Foundations", "/certificates/quality-management.jpg", "/pdfs/Quality Management Foundations.pdf"],
  ["Inventory Management Foundations", "/certificates/inventory-management.jpg", "/pdfs/Inventory Management Foundations.pdf"],
  ["Regression, Text Mining & Forecasting in R", "/certificates/r-forecasting.jpg", "/pdfs/Regression, Text Mining, Forecasting in R.pdf"],
  ["Python for Beginners", "/certificates/python-beginners.jpg", "/pdfs/Python for Begineers.pdf"],
  ["Excel VBA", "/certificates/excel-vba.jpg", "/pdfs/EXCEL VBA.pdf"],
  ["FMEA Basics", "/certificates/fmea-basics.jpg", "/pdfs/FMEA B.pdf"],
  ["Phase-out Course", "/certificates/phase-out.jpg", "/pdfs/PHASE OUT 1.pdf"],
  ["Product Safety & Product Liability", "/certificates/product-liability.jpg", "/pdfs/PRODUCT LIABILITY.pdf"],
  ["Environment, Health & Safety", "/certificates/ehs.jpg", "/pdfs/ENVIRONMENT, HEALTH AND SAFETY.pdf"],
] as const;
