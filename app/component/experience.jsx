import React, { useState, useRef, useEffect } from "react";
import { Banner } from "./banner";


const education = [
  {
    date: "2018 — 2022",
    title: "B.Sc. Accounting",
    school: "Prince Abubakar Audu University",
    description:
      "Studied core accounting principles, business management, and finance.",
    tags: ["Accounting", "Finance", "Business"],
  },
  {
    date: "2020 — 2022",
    title: "Software Engineering",
    school: "Aksol Global Systems",
    description:
      "Completed a comprehensive software engineering program focusing on full-stack development, including frontend and backend technologies.",
    tags: ["Frontend", "Backend", "Software Development"],
  },
  {
    date: "2020 — Present",
    title: "Software Engineering",
    school: "Freecodecamp",
    description:
      "Engaged in self-paced learning through Freecodecamp, covering various aspects of software engineering including web development, algorithms, and data structures.",
    tags: ["Frontend", "Backend", "Software Development"],
  },
  {
    date: "2022 — Present",
    title: "Software Engineering",
    school: "Odin Project",
    description:
      "Participated in Odin Project's curriculum, focusing on hands-on projects and real-world applications of software engineering principles.",
    tags: ["Frontend", "Software Development"],
  },
];

const experiences = [
  {
    date: "2024 — PRESENT",
    title: "Frontend Engineer",
    company: "Digital Marketing Square (Remote)",
    companyUrl: "",
    description: [
      "Crafting responsive and interactive web pages using NextJs, Tailwind to ensure a seamless user experience across different devices and browsers.",
      "Working closely with UI/UX designers to translate design mock-ups into functional interfaces and partnering with back-end developers to integrate server-side functionalities.",
      "Enhancing website performance by minimizing load times, optimizing images, and implementing caching strategies to improve site speed and user engagement.",
      "Writing clean, efficient, and well-documented code, utilizing version control systems like Git for collaboration and tracking changes.",
    ],
    tags: ["JavaScript", "TypeScript", "React", "Nextjs"],
  },
  {
    date: "Sept 2024 – Mar 2025",
    title: "Frontend Developer",
    company: "Telematics System Limited (Contract)",
    companyUrl: "",
    description: [
      "Developed dynamic and responsive web applications using HTML, CSS, JavaScript, ReactJS, Bootstrap, and Tailwind.",
      "Built reusable UI components and optimized front-end performance.",
      "Ensured seamless cross-browser compatibility and mobile responsiveness.",
      "Collaborated with designers to implement modern and user-friendly interfaces.",
      "Worked with Tailwind CSS and other frameworks to enhance styling efficiency.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap", "Tailwind"],
  },
  {
    date: "March 2022 - June 2022",
    title: "Front End Developer Intern",
    company: "ALX, Surulere, Lagos",
    companyUrl: "",
    description: [
      "Utilized version control systems like Git for efficient teamwork and code management.",
      "Estimated project scope and participated in design discussions and code reviews.",
      "Participated in code reviews to improve code quality and share knowledge among teammates.",
      "Evaluated new technologies, frameworks and libraries to support high-level products.",
      "Assisted with maintenance and upkeep of front-end applications.",
      "Developed user-friendly website interfaces using HTML, CSS, and JavaScript.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    date: "Jul 2021 - Sept 2021",
    title: "Front End Developer Intern",
    company: "HNG ZURI",
    companyUrl: "",
    description: [
      "Implemented designs and collaborated with the marketing and design team to create the designs and contents for our website.",
      "Collaborated with others on group projects and established work-flows.",
      "Participated in code reviews to improve code quality and share knowledge among teammates.",
      "Evaluated new technologies, frameworks and libraries to support high-level products.",
      "Engaged in daily remote communication and learning through collaborative work using technologies like Slack, Zoom, Google Meet etc.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Teamwork"],
  },
  {
    date: "Aug 2024 – Present",
    title: "Accountant",
    company: "Fajam Farms Enterprises, Ota Ogun State",
    companyUrl: "",
    description: [
      "Maintained accurate records of all financial transactions including sales, expenses, and payroll.",
      "Reconciled farm bank statements with internal records to ensure accuracy and identify discrepancies.",
      "Analyzed production costs and advised on cost-saving strategies to increase profitability.",
      "Assisted in preparing budgets for farm operations and forecasted cash flows to ensure effective resource management.",
      "Entered transactions into accounting software (QuickBooks and Excel); generated financial insights for management.",
    ],
    tags: ["Accounting", "Finance", "QuickBooks", "Excel"],
  },
  {
    date: "Aug 2023 - July 2024",
    title: "Accounts Officer (NYSC)",
    company: "Targfit Experiential Limited, Surulere, Lagos",
    companyUrl: "",
    description: [
      "Assisted with accounts payable transactions, including data entry and payment processing.",
      "Investigated and resolved issues related to vendor invoices and payments.",
      "Supported the preparation of financial statements and reports, ensuring accuracy and compliance with accounting standards.",
      "Reconciled bank and credit card statements, identifying and resolving discrepancies to ensure accurate financial records.",
      "Conducted margin analysis for cost structures, providing detailed reports to clients to aid in decision-making and cost optimization.",
      "Gained hands-on experience in processing tax with-holdings (LIRS, FIRS).",
      "Assisted in the preparation and filing of tax documents, ensuring compliance with relevant regulations.",
      "Utilized accounting software (Sage) to manage financial data and streamline accounting processes.",
    ],
    tags: ["Accounting", "Finance", "Sage", "Tax"],
  },
];

// Split experiences into tech and accounting
const techExperiences = experiences.filter(
  (exp) =>
    exp.tags.includes("JavaScript") ||
    exp.tags.includes("React") ||
    exp.tags.includes("Frontend") ||
    exp.tags.includes("Software Development") ||
    exp.tags.includes("Git") ||
    exp.tags.includes("Teamwork")
);

const accountingExperiences = experiences.filter(
  (exp) =>
    exp.tags.includes("Accounting") ||
    exp.tags.includes("Finance") ||
    exp.tags.includes("QuickBooks") ||
    exp.tags.includes("Sage") ||
    exp.tags.includes("Tax") ||
    exp.tags.includes("Excel")
);

// Animated date component
const AnimatedDate = ({ date, inView }) => (
  <span
    className={`block transition-all duration-700 ease-in-out text-teal-300 font-mono text-xs tracking-widest min-w-[90px] mb-2 sm:mb-0 ${
      inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
    }`}
  >
    {date}
  </span>
);

// TimelineItem with animated date
const TimelineItem = ({
  date,
  title,
  company,
  companyUrl,
  school,
  description,
  tags,
  isLast,
}) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-start gap-6 mb-10 group">
      {/* Animated Date on the left */}
      <div className="flex flex-col items-center min-w-[110px]">
        <AnimatedDate date={date} inView={inView} />
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 border-4 border-white shadow-lg z-10 my-2" />
        {!isLast && (
          <div className="flex-1 w-1 bg-gradient-to-b from-teal-300/60 to-[#151e2e] my-1" />
        )}
      </div>
      {/* Card */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#151e2e] rounded-2xl p-8 shadow-2xl w-full border border-[#334155]/40 transition-all duration-300 group-hover:scale-[1.025] group-hover:shadow-teal-900/40">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <span className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
            <svg
              className="w-5 h-5 text-teal-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {title}
            {company && (
              <>
                {" · "}
                <a
                  href={companyUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white inline-flex items-center"
                >
                  {company}
                  {companyUrl && (
                    <svg
                      className="ml-1 w-4 h-4 inline-block"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </a>
              </>
            )}
            {school && (
              <span>
                <br /> {school}
              </span>
            )}
          </span>
        </div>
        {/* Description: handle string or array */}
        <div className="text-gray-300 text-base mb-4">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5 space-y-1">
              {description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          ) : (
            description
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [tab, setTab] = useState("tech");

  return (
    <>
      <Banner />
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all ${
              tab === "education"
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow"
                : "bg-[#1e293b] text-purple-200"
            }`}
            onClick={() => setTab("education")}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all ${
              tab === "tech"
                ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow"
                : "bg-[#1e293b] text-teal-300"
            }`}
            onClick={() => setTab("tech")}
          >
            Tech Experience
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all ${
              tab === "accounting"
                ? "bg-gradient-to-r from-cyan-600 to-teal-500 text-white shadow"
                : "bg-[#1e293b] text-cyan-300"
            }`}
            onClick={() => setTab("accounting")}
          >
            Accounting Experience
          </button>
        </div>
        {/* Timeline */}
        <div>
          {tab === "education" &&
            education.map((item, idx) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === education.length - 1}
              />
            ))}
          {tab === "tech" &&
            techExperiences.map((item, idx, arr) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === arr.length - 1}
              />
            ))}
          {tab === "accounting" &&
            accountingExperiences.map((item, idx, arr) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === arr.length - 1}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
