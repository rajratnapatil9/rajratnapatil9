export const site = {
  name: "Rajratna Patil",
  shortName: "RP",
  tagline: "Data Engineer · Analytics · Product Thinking",
  email: "rajratnapatil9@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajratna-patil-46ba54103/",
  github: "https://github.com/rajratnapatil9",
};

export const skills = [
  "Databricks",
  "Azure",
  "Python",
  "SQL",
  "Power BI",
  "Data Modeling",
  "ETL / ELT",
  "Supply Chain Analytics",
  "Data Quality",
  "Automation",
];

export const featuredProjects = [
  {
    title: "Transport Delivery Precision Platform",
    category: "Data Engineering",
    description:
      "A carrier-normalization pipeline that turns inconsistent operational files into trusted dimensions, facts and Power BI delivery-precision analytics.",
    stack: ["Databricks", "Azure", "Python", "SQL", "Power BI"],
    accent: "project-violet",
  },
  {
    title: "Weekly Workforce Snapshot",
    category: "People Analytics",
    description:
      "A weekly workforce model built from daily Parquet snapshots, persisted weekly history and analytical views for headcount and employee movement reporting.",
    stack: ["SQL", "Spark", "Power BI", "Azure Blob"],
    accent: "project-blue",
  },
  {
    title: "Andon Screens",
    category: "Analytics Product",
    description:
      "A near-real-time Andon image pipeline that generates operational screens in Databricks every 10 minutes, stores them in Azure Blob Storage and streams them securely through SAS links.",
    stack: ["Databricks", "Python", "Azure Blob", "SAS"],
    accent: "project-cyan",
  },
];

export const experience = [
  {
    period: "2023 — Present",
    role: "Data Analyst",
    company: "Volvo Trucks North America",
    description:
      "Build data pipelines, analytical models and reporting products across warehouse, transportation and operations use cases.",
  },
  {
    period: "2021 — 2023",
    role: "Quality Engineer",
    company: "Volvo Trucks North America",
    description:
      "Applied structured problem solving, process improvement and data analysis to operational quality and manufacturing challenges.",
  },
];

export const education = [
  {
    school: "Wayne State University",
    degree: "M.S. Industrial Engineering — Data Analytics",
    period: "2019 — 2021",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Bachelor's Degree — Mechanical Engineering",
    period: "2013 — 2017",
  },
];

export const certifications = [
  {
    name: "Databricks Data Engineering",
    issuer: "Databricks",
    note: "Lakehouse, ingestion, transformation and production data engineering concepts.",
  },
  {
    name: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    note: "Python, SQL, analytics, visualization and applied data science foundations.",
  },
  {
    name: "Azure Data Engineering Learning Path",
    issuer: "Microsoft Azure",
    note: "Azure analytics, Spark, Synapse and modern data engineering workflows.",
  },
];
