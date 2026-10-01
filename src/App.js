import "./App.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
  AiOutlineMail,
} from "react-icons/ai";
import profilePhoto from "./images/profile-photo.JPG";

const resumePdf = `${process.env.PUBLIC_URL}/Julia_Gontijo_Lopes_Resume.pdf`;

const projects = [
  {
    year: "2026",
    title: "Agentic Video Editing Tools",
    desc: "An MCP-based pipeline that understands raw footage, identifies scenes and atomic action boundaries, turns natural-language creative direction into frame-accurate edit plans, and renders and validates social-media videos.",
    tags: ["Codex", "MCP", "multimodal AI", "video tooling"],
  },
  {
    year: "2025-26",
    title: "Visual Attention Modeling for AR/VR Edge Deployment",
    desc: "Used real-time eye gaze to isolate a user's region of attention in egocentric Meta Quest images, reducing the visual input processed by a vision-language model for on-device question answering.",
    result:
      "88.2% fewer downstream tokens - 70.6% lower GPU memory - presented at NYU Research Excellence Exhibition 2026",
    tags: ["PyTorch", "ONNX", "Unity", "Meta Quest"],
    link: "https://github.com/juliagontijo/VIP_Unity_Gaze_VLM",
  },
  {
    year: "2025",
    title: "Vision-Language Model Efficiency via Token Pruning",
    desc: "Designed a plug-and-play visual token pruning method for multimodal VLMs, combining SparseVLM and FastV with latency and FLOPs profiling to balance efficiency and output quality.",
    result: "20% lower latency - up to 65% fewer FLOPs - output quality preserved",
    tags: ["PyTorch", "Hugging Face", "VLMs", "profiling"],
    link: "https://github.com/juliagontijo/PaliGemma_SparseVLM",
  },
  {
    year: "2025",
    title: "Model-Based Testing for RL Policies",
    desc: "Replicated and evaluated a model-based testing framework for reinforcement learning policies, focusing on states where an agent's decisions influence safety outcomes.",
    tags: ["Python", "Gymnasium", "reinforcement learning", "safety"],
  },
  {
    year: "2024",
    title: "Model Compression and Knowledge Distillation",
    desc: "Trained and fine-tuned VGG16 for image classification, then compared pruning and teacher-student distillation across accuracy, inference time, sparsity, and model size.",
    tags: ["Python", "PyTorch", "TorchVision", "VGG16"],
  },
  {
    year: "2024",
    title: "DensePCP: Plausible Counterfactual Explanations",
    desc: "Improved a generative counterfactual explanation method by ranking candidates for plausibility and achievability, producing more realistic explanations and feasible paths to desired outcomes.",
    tags: ["Python", "explainable AI", "counterfactuals"],
    link: "https://github.com/juliagontijo/Plausible_CF",
  },
];

const experience = [
  {
    period: "Jun-Aug 2026",
    role: "Machine Learning Research Intern",
    org: "Brahma AI",
    orgLink: "https://www.brahma.ai/",
    details: [
      "Contributing to a multimodal video extraction pipeline, improving reliability, reproducibility, and scalability.",
      "Profiled and optimized a Ray-based landmark extraction pipeline across 816K frames and 5,122 clips, cutting runtime from 28 to 12 minutes and increasing throughput 2.5x.",
      "Evaluated reduced-precision landmark storage for rendering fidelity and built tooling to detect mouth-audio timing offsets.",
    ],
  },
  {
    period: "May-Sep 2024",
    role: "Software Engineering Intern",
    org: "Neurau",
    details: [
      "Led customer discovery for a ChatGPT-powered WhatsApp chatbot platform and translated the findings into a redesigned onboarding and chatbot-personality setup experience.",
    ],
  },
  {
    period: "Aug 2023-Jun 2024",
    role: "Scientific Researcher",
    org: "PUC Minas",
    details: [
      "Improved CSSE, a generative counterfactual explanation method, by ranking outputs for plausibility and achievability.",
    ],
  },
  {
    period: "2022-2023",
    role: "Software Engineering Intern",
    org: "Bwtech",
    details: [
      "Developed scalable architecture for Netchart PM, a cloud analytics platform for monitoring mobile network operator performance.",
    ],
  },
  {
    period: "2020-2021",
    role: "Founder",
    org: "Maju Beachwear",
    details: [
      "Founded and scaled an online women's clothing brand, managing product, finance, inventory, vendors, quality, and marketing.",
    ],
  },
];

const education = [
  {
    period: "Expected May 2027",
    school: "New York University",
    detail: "M.S. in Computer Science - Courant Institute of Mathematical Sciences",
  },
  {
    period: "Aug 2024",
    school: "Pontifical Catholic University of Minas Gerais",
    detail:
      "B.S. in Computer Science - Teaching Assistant, Algorithms and Data Structures III",
  },
  {
    period: "Jul-Dec 2022",
    school: "Hanyang University, South Korea",
    detail:
      "Exchange program - data science with R, 3D user interfaces, and embedded software design",
  },
];

const skills = [
  {
    label: "ML and systems",
    value:
      "PyTorch, TensorFlow, TorchVision, ONNX Runtime profiling, NVIDIA Nsight Systems, Ray, Apache Spark",
  },
  {
    label: "Languages",
    value: "Python, R, Java, C, C#, C++, Scala, SQL, JavaScript, HTML, CSS",
  },
  {
    label: "Spoken",
    value: "Portuguese (fluent), English (fluent)",
  },
];

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="header-name" href="#top">
            Julia Gontijo Lopes
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#projects">Work</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container" id="top">
        <section className="hero">
          <img
            src={profilePhoto}
            alt="Julia Gontijo Lopes"
            className="hero-photo"
          />
          <div>
            <p className="hero-kicker">Machine learning systems</p>
            <h1 className="hero-name">Julia Gontijo Lopes</h1>
            <p className="hero-affiliation">
              M.S. Computer Science - NYU Courant
              <br />
              Machine Learning Research Intern - Brahma AI
            </p>
            <p className="hero-bio">
              I build efficient, deployable AI systems across the model-to-hardware
              stack - from production video pipelines and vision-language model
              inference to resource-constrained edge deployments. My work connects
              model architecture, systems profiling, and hardware-aware optimization
              to make image, video, and world-understanding applications faster,
              leaner, and more reliable.
            </p>
            <p className="hero-interests">
              <strong>Focus:</strong> ML systems - hardware-software co-design -
              efficient inference - computer vision and VLMs - robotics and
              physical AI - image and video understanding and generation
            </p>
            <div className="hero-links">
              <a href="mailto:juliagontijolopes@gmail.com">
                <AiOutlineMail /> Email
              </a>
              <a
                href="https://github.com/juliagontijo"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/julia-gontijo-lopes-303b86205/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin /> LinkedIn
              </a>
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineFileText /> Resume
              </a>
            </div>
          </div>
        </section>

        <section id="focus">
          <h2 className="section-title">Current focus</h2>
          <p className="research-statement">
            I work where machine learning research meets hardware and systems:
            profiling real pipelines, reducing unnecessary visual compute, and
            turning improvements in latency, memory, throughput, and model quality
            into deployable multimodal applications.
          </p>
          <ul className="research-list">
            <li>
              Profile end-to-end systems to find the actual bottleneck - from
              data movement and runtime behavior to model architecture - before
              choosing the optimization.
            </li>
            <li>
              Reduce visual compute through attention-aware input selection,
              token pruning, compression, and knowledge distillation.
            </li>
            <li>
              Build reliable tools for image and video understanding and
              generation, with deployment constraints spanning edge devices and
              production-scale infrastructure.
            </li>
          </ul>
        </section>

        <section id="projects">
          <h2 className="section-title">Selected work</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-item" key={project.title}>
                <span className="project-year">{project.year}</span>
                <div className="project-body">
                  <h3 className="project-title">
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="project-desc">{project.desc}</p>
                  {project.result && (
                    <p className="project-result">{project.result}</p>
                  )}
                  <div className="project-tags" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="exp-list">
            {experience.map((item) => (
              <article className="exp-item" key={`${item.period}-${item.role}`}>
                <span className="exp-period">{item.period}</span>
                <div className="exp-body">
                  <h3 className="exp-role">{item.role}</h3>
                  <div className="exp-org">
                    {item.orgLink ? (
                      <a href={item.orgLink} target="_blank" rel="noreferrer">
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </div>
                  <ul className="exp-details">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.school}>
                <span className="education-period">{item.period}</span>
                <div>
                  <h3 className="education-school">{item.school}</h3>
                  <p className="education-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills">
          <h2 className="section-title">Technical toolkit</h2>
          <dl className="skills-list">
            {skills.map((item) => (
              <div className="skills-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="honors">
            <p className="honors-label">Honors</p>
            <p>
              Standout Student National Distinction, Brazilian Computing Society
              (2024) - Academic Prominence Distinction, PUC Minas (2020)
            </p>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">
            I&apos;m open to conversations and opportunities at the intersection
            of hardware, ML systems, and visual intelligence - including efficient
            inference, computer vision and VLMs, robotics and physical AI, and
            image and video generation.
          </p>
          <div className="contact-links">
            <a href="mailto:juliagontijolopes@gmail.com">
              <AiOutlineMail /> juliagontijolopes@gmail.com
            </a>
            <a
              href="https://github.com/juliagontijo"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/julia-gontijo-lopes-303b86205/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>Julia Gontijo Lopes - NYU Courant - {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
