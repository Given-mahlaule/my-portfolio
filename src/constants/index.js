import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I consider myself a creative problem solver with a passion for IT, Data Analytics, and 
Engineering. I believe in honesty, punctuality, and maintaining positive relationships 
with colleagues and peers. I approach challenges with a unique perspective and a 
desire to find effective solutions that make a positive impact I am hard-working, 
broad-minded, enthusiastic, adaptive, and striving to make a difference. Currently, I 
am undergoing training to become a professional in the innovation and digitalization 
space, expanding my knowledge, and sharpening my skills. I am excited to apply 
this new expertise to tackle complex challenges and create innovative solutions.`;

export const ABOUT_TEXT = `I am a dedicated and aspiring full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, MongoDB TensorFlow, YOLO, AWS, Microsoft Azure, Power Bi, Power Apps. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Innovation and Digitalization Graduate ",
    company: "BMW Group SA",
    description: `Lead various quality related projects, with the use of BMW’s Artificial IntelligenceQuality Next (AIQX) technology. Automated processes by developing Mcrosott Power Bl dashboards, 
    streamlining Month-End processes for KPI reporting for various such 
    as Finance & all the plants tæhnologies. Plant lead for the development of business PowerApps applications and Power Bi 
    dashboards.`,
    technologies: ["Python", "MongoDB", "React.js", "AWS","Azure","C#", "SQL", "TensorFlow", "YOLO", "PowerApps", "PowerBi"],
  },
  {
    year: "2022",
    role: "Data Coordinator",
    company: "Sustainable Energy Africa",
    description: ` contributed to the establishment of secure, adequate, and low-carbon energy 
    solutions for municipalities and the Western Cape economy, through the 
    Western Cape Provincial Government's Municipal Energy Resilience 
    Programme (MER)`,
    technologies: ["Microsoft 365"],
  },
  {
    year: "2021-2022",
    role: "Data Analyst/Consultant",
    company: "Data4MIA",
    description: ` Internship program hosted by Engineers Without Borders South Africa (EWBSA) in collaboration with the Municipal Infrastructure Support Agency (MISA).
    A project, DATA4MIA, was developed to assist local government with the collection, updating, and analysis of data relating to water, electricity, and sanitation assets and infrastructure.
    My contribution was a comprehensive evaluation of the appropriateness of municipal service delivery and budget plans.
    `,
    technologies: ["Microsoft 365"],
  },
];

export const PROJECTS = [
  {
    title: "Conversation AI (AI Indaba Hackathon - 2023)",
    image: project1,
    description:
      "Participated in the AI Indaba Hackathon, as part of the conversation AI team which came in 1st Place. Developed a chat-bot specifically for breakdowns in the plant. Resulted in reduced downtime, since solutions to breakdown issues can be found quickly using the chat-bot."
    ,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "BMW's AIQX",
    image: project2,
    description:
      "Steering various quality related projects, with the use of BMW’s Artificial Intelligence Quality Next (AIQX) technology. Contribution to strategy development for innovation and digitalization for the plant. Analysis of current AIQX process, eliminating wasteful steps,  conjuring prospective solutions before digitalization. Resulted in reduced downtime and rework time.",
    technologies: ["TensorFLow", "YOLO", "React", "Python", "AWS", "MongoDB", "SQL"],
  },
  {
    title: "Microsoft Power Platform",
    image: project3,
    description:
      "Automated reporting processes by developing Microsoft Power BI dashboards, streamlining Month-End processes for KPI reporting for various departments such as Finance & all the plant’s technologies.This resulted in increased operational efficiency and timely delivery of critical performance data. Plant lead for the development of business PowerApps applications and Power Bi dashboards. Apps developed include Work Organization Toolset App which streamlines processes such as Shift-handover, Attendance Register, Versatility Metrix, 5-minute Communication and Process Confirmation and the Near-Hits app. Designed Power Bi dashboards and QlikSense Applications to visualize the data collected from apps and Oracle Database.",
    technologies: ["PowerApps", "PowerBi", "Python", "Qliksense"],
  },
];

export const CONTACT = {
  address: "Pretoria Central, Pretoria",
  phoneNo: "+27 63 972 3210",
  email: "givennyiko1223@gmail.com",
};
