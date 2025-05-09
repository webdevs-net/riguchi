import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SecurityTabs from "./SecurityTabs";
import MarketingTabs from "./MarketingTabs";
import {
  FaJs,
  FaProjectDiagram,
  FaShieldAlt,
  FaRobot,
  FaPhp,
  FaDatabase,
  FaPaintBrush,
  FaVideo,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaWordpress,
} from "react-icons/fa";
import {
  SiJira,
  SiSlack,
  SiTypescript,
  SiReact,
  SiSvelte,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiGraphql,
  SiWebpack,
} from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import Lottie from "lottie-react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("management");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const skillsRef = useRef(null);

  useEffect(() => {
    const storedCategory = localStorage.getItem("activeSkillCategory");
    if (storedCategory) {
      setActiveCategory(storedCategory);
    }
  }, []);

  const skills = {
    management: [
      { name: "Technical Project Management", icon: <FaProjectDiagram /> },
      { name: "Product Strategy & Roadmapping", icon: <FaProjectDiagram /> },
      { name: "Agile & Scrum Methodologies", icon: <SiJira /> },
      { name: "Backlog Prioritization & Refinement", icon: <SiJira /> },
      { name: "Cross-Functional Team Leadership", icon: <FaProjectDiagram /> },
      { name: "Risk & Resource Management", icon: <FaProjectDiagram /> },
      { name: "Customer Journey Mapping", icon: <FaProjectDiagram /> },
      { name: "User Research & Validation", icon: <FaProjectDiagram /> },
      { name: "Data-Driven Decision Making", icon: <FaProjectDiagram /> },
      { name: "Stakeholder Alignment & Communication", icon: <SiSlack /> },
      {
        name: "Brand & Customer Experience (CX) Development",
        icon: <FaProjectDiagram />,
      },
    ],
    programming: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Svelte", icon: <SiSvelte /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "API Development (REST, GraphQL)", icon: <SiGraphql /> },
      { name: "Git & Version Control", icon: <FaGitAlt /> },
      { name: "Build Tools & Task Runners", icon: <SiWebpack /> },
      { name: "Java", icon: <FaJava /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "WordPress", icon: <FaWordpress /> },
    ],
    security: {
      appsec: [
        { name: "SAST/DAST/IAST Tools", icon: <FaShieldAlt /> },
        { name: "Secure Code Review", icon: <FaShieldAlt /> },
        { name: "OWASP Top 10", icon: <FaShieldAlt /> },
        { name: "OWASP ASVS", icon: <FaShieldAlt /> },
        { name: "API Security Testing", icon: <FaShieldAlt /> },
        { name: "Threat Modeling", icon: <FaShieldAlt /> },
        { name: "Secure SDLC Implementation", icon: <FaShieldAlt /> },
        { name: "DevSecOps Integration", icon: <FaShieldAlt /> },
        { name: "Vulnerability Management", icon: <FaShieldAlt /> },
        { name: "Penetration Testing", icon: <FaShieldAlt /> },
        { name: "Security Architecture", icon: <FaShieldAlt /> },
        { name: "Container Security", icon: <FaShieldAlt /> },
        { name: "Authentication/Authorization", icon: <FaShieldAlt /> },
        { name: "Secure Coding Practices", icon: <FaShieldAlt /> },
        { name: "Security Champions Program", icon: <FaShieldAlt /> },
        { name: "Security Requirements", icon: <FaShieldAlt /> },
        { name: "Content-Security-Policy (CSP)", icon: <FaShieldAlt /> },
      ],
      infrasec: [
        { name: "Cloud Security Architecture", icon: <FaShieldAlt /> },
        { name: "AWS Security Services", icon: <FaShieldAlt /> },
        { name: "Azure Security Center", icon: <FaShieldAlt /> },
        { name: "Infrastructure as Code Security", icon: <FaShieldAlt /> },
        { name: "Network Security Controls", icon: <GiNetworkBars /> },
        { name: "Containerization Security", icon: <FaShieldAlt /> },
        { name: "Kubernetes Security", icon: <FaShieldAlt /> },
        { name: "CI/CD Pipeline Security", icon: <FaShieldAlt /> },
        { name: "Identity & Access Management", icon: <FaShieldAlt /> },
        { name: "Secrets Management", icon: <FaShieldAlt /> },
        { name: "Database Security", icon: <FaDatabase /> },
        { name: "Encryption Implementation", icon: <FaShieldAlt /> },
      ],
      governance: [
        { name: "Security Compliance Frameworks", icon: <FaShieldAlt /> },
        { name: "Application Security Policies", icon: <FaShieldAlt /> },
        { name: "Security Risk Assessment", icon: <FaShieldAlt /> },
        { name: "Vulnerability Management", icon: <FaShieldAlt /> },
        { name: "Security Metrics & Reporting", icon: <FaShieldAlt /> },
        { name: "Security Incident Response", icon: <FaShieldAlt /> },
        { name: "Security Awareness Training", icon: <FaShieldAlt /> },
        { name: "Third-Party Security Assessment", icon: <FaShieldAlt /> },
        { name: "Data Privacy Compliance", icon: <FaShieldAlt /> },
        { name: "Security Documentation", icon: <FaShieldAlt /> },
      ],
    },
    ai: [
      { name: "AIOps", icon: <FaRobot /> },
      { name: "AI Agents", icon: <FaRobot /> },
      { name: "AI Vulnerabilities", icon: <FaRobot /> },
      { name: "Vibe Programming", icon: <FaRobot /> },
    ],
    marketing: {
      visual_production: [
        { name: "Photography", icon: <FaVideo /> },
        { name: "Videography", icon: <FaVideo /> },
        { name: "Video Editing", icon: <FaVideo /> },
        { name: "Sound Engineering", icon: <FaVideo /> },
        { name: "Streaming Services", icon: <FaVideo /> },
      ],
      design_ux: [
        { name: "UX Design", icon: <FaPaintBrush /> },
        { name: "Graphic Design", icon: <FaPaintBrush /> },
      ],
      digital_marketing: [
        { name: "Email Campaigns", icon: <FaProjectDiagram /> },
        { name: "Drip Marketing", icon: <FaProjectDiagram /> },
        {
          name: "SEO (Search Engine Optimization)",
          icon: <FaProjectDiagram />,
        },
        { name: "PPC (Pay-Per-Click Advertising)", icon: <FaProjectDiagram /> },
      ],
    },
  };

  const awards = [
    {
      title: "KQL Puzzle Challenge",
      place: "2nd",
      description:
        "Demonstrated exceptional skills in Kusto Query Language, competing against 20 participants.",
    },
    {
      title: "AWS DeepRacer Contest",
      place: "2nd",
      description:
        "Developed an advanced reinforcement learning model for autonomous racing.",
    },
  ];

  const getBarColor = (category) => {
    switch (category) {
      case "technical":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        };
      case "management":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        };
      case "security":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        };
      case "ai":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        };
      default:
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        };
    }
  };

  return (
    <section ref={skillsRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h2 className="text-5xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']">
              Skills & Expertise
            </h2>
            <div className="text-lg text-gray-200 text-center md:text-left font-['Inter'] space-y-4">
              <p>
                I bring a unique blend of technical fluency, project leadership,
                and cross-disciplinary insight. With a foundation in full-stack
                and application development, I’ve built and secured web and
                mobile applications, Docker containers, networks, and servers.
              </p>
              <p>
                My experience spans product management, software engineering,
                and information security assurance. I bridge the gap between
                technical execution and creative vision—with strengths in UX
                design, digital marketing, and leading agile teams from concept
                to launch.
              </p>
              <p>
                Whether starting new ventures or refining legacy systems, I
                specialize in transforming digital complexity into clear,
                actionable plans—so you can deliver with confidence. From
                high-level architecture to fine-tuned implementation, I bring
                clarity to every layer of the build.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <Lottie
              path="/Animation1.json"
              loop={true}
              autoplay={true}
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
        </div>

        <div id="skills" className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <motion.button
              key={category}
              id={`name_${category}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 font-['Inter'] ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#FFD700] to-[#FF9400] text-gray-800"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {activeCategory === "security" ? (
          <SecurityTabs skills={skills.security} getBarColor={getBarColor} />
        ) : activeCategory === "marketing" ? (
          <MarketingTabs skills={skills.marketing} getBarColor={getBarColor} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills[activeCategory].map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                index={index}
                barColor={getBarColor(activeCategory)}
              />
            ))}
          </div>
        )}

        {/* Awards Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']">
            Awards & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-[#FFA500] hover:bg-white/10 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl text-yellow-400 mr-4">🏆</div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#FF9400] bg-clip-text text-transparent font-['Space_Grotesk']">
                    {award.title}
                  </h3>
                </div>
                <p className="text-xl font-bold text-[#FFA500] mb-2">
                  {award.place} Place
                </p>
                {award.description && (
                  <p className="text-gray-300">{award.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon, index, barColor }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`text-3xl ${barColor.iconColor} mb-3 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2 font-['Space_Grotesk']">
          {name}
        </h3>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className={`h-full bg-gradient-to-r ${barColor.gradient}`}
        />
      </div>
    </motion.div>
  );
}

export default Skills;
