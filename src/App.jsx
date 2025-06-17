import { useCallback, useEffect } from "react";
import "./App.css";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import profileImg from "./assets/profile.png";
import ttcLogo from "./assets/ttc-logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import projectImage from "./assets/stmproj.jpeg";
import footyImage from "./assets/footyimg.gif";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0d1117",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#646cff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.2,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
            },
            shadow: {
              enable: true,
              color: "#646cff",
              blur: 5,
            },
            zIndex: {
              value: 1,
              opacityRate: 0.5,
            },
            grow: {
              enable: true,
              speed: 2,
              size_min: 2,
              size_max: 4,
            },
          },
          detectRetina: false,
          fullScreen: {
            enable: false,
          },
          interactivity: {
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
        }}
      />
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <div className="profile-container">
          <div className="left-section">
            <h1 className="name-text">Samir Sarwar</h1>
            <div className="position-info">
              <div className="position-container">
                <p className="position-text">Software Engineer Intern @ TTC</p>
                <img src={ttcLogo} className="ttc-logo" alt="TTC Logo" />
              </div>
              <p className="position-subtext">
                Leveraging my Technical Skills and Product Sense from Building
                Profitable apps with Hundreds of Users to pursue Product
                Management in Software.
              </p>
            </div>
          </div>

          <div className="image-section">
            <img src={profileImg} className="profile" alt="Profile" />
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/samir-sarwar-pm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:samir.sarwar@uwaterloo.ca">
                <MdEmail />
              </a>
              <a
                href="https://github.com/samir-sarwar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="status-section">
            <div className="status-text">
              <p>
                <span className="status-label">studying:</span> Computer
                Engineering @ University of Waterloo
              </p>
              <p>
                <span className="status-label">learning:</span> Product Strategy
                & Java Backends
              </p>
              <p>
                <span className="status-label">eating:</span> Caramel Churro
                Protein Bar
              </p>
              <p>
                <span className="status-label">playing:</span> GTA Vice City on
                PSP
              </p>
              <p>
                <span className="status-label">watching:</span> Vinland Saga &
                Fifa Club World Cup
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>AI-Powered Diagram & Equation Digitizer</h3>
            <div className="project-tech">
              React.js, Python (Flask), Gemeni API
            </div>
            <ul>
              <li>
                Both Developed and Led product strategy for an AI-powered SaaS
                platform, focusing on digitizing handwritten diagrams and
                mathematical equations.
              </li>
              <li>
                Navigated the full product lifecycle, from discovery and
                ideation to development, launch, and retirement.
              </li>
              <li>
                Achieved a peak User Base of 500+, validating strong
                product-market fit and user adoption
              </li>
              <li>
                Generated $4,500 in gross revenue, leveraging user feedback and
                A/B testing to optimize features and drive monetization.
              </li>
            </ul>
          </div>

          <div className="project-card">
            <h3>AI Agent for Live Stream Content Automation</h3>
            <div className="project-tech">
              React.js, Python (Flask), OpenAI API
            </div>
            <ul>
              <li>
                Led the full product lifecycle, both Development and Strategy
                for an agnostic software solution designed to automatically
                clip, subtitle, and format live stream content.
              </li>
              <li>
                Achieved 20+ renewing clients through targeted user acquisition
                strategies and continuous feedback loops.
              </li>
              <li>
                Successfully navigated a strategic product exit, selling the
                software to a large, prominent streamer.
              </li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Visual Cue Indicator</h3>
            <div className="project-tech">C++, STM32, UART Communication</div>
            <ul>
              <li>
                Designed an assistive device using infrared sensors and STM32
                Nucleo boards to detect and communicate human presence via UART
                connection.
              </li>
              <li>
                Engineered the solution to enhance accessibility for individuals
                with hearing impairments, focusing on affordability and ease of
                implementation.
              </li>
            </ul>
            <img
              src={projectImage}
              className="project-image"
              alt="Image of Visual Cue Indicator Project"
            />
            <a
              href="https://github.com/samir-sarwar/Visual-Cue-Indicator"
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              <FaGithub />
            </a>
          </div>

          <div className="project-card">
            <h3>Football Analysis System</h3>
            <div className="project-tech">Python (PyTorch), OpenCV</div>
            <ul>
              <li>
                Developed a real-time object detection and tracking system using
                YOLOv8, fine-tuning a custom model for sports analysis.
              </li>
              <li>
                Implemented KMeans clustering and optical flow techniques for
                player segmentation and team classification.
              </li>
              <li>
                Applied OpenCV for perspective transformation and motion
                analysis, enabling precise player metrics.
              </li>
              <li>
                Achieved 100% increase in team win rate through enhanced game
                film analysis as varsity soccer team captain.
              </li>
            </ul>
            <img
              src={footyImage}
              alt="Animation of the Football Analysis System"
              className="project-image"
            />
            <a
              href="https://github.com/samir-sarwar/Soccer-Analysis-using-OpenCV-YOLO"
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <a
          href="https://github.com/samir-sarwar"
          target="_blank"
          rel="noopener noreferrer"
          className="github-projects-link"
        >
          Click Here to go to my Github which has more of my open source coding
          projects!
        </a>
      </section>

      <section id="experience" className="content-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h3 className="timeline-title">Software Engineer Intern</h3>
              <p className="timeline-date">May 2025 - Sep 2025</p>
              <p className="timeline-location">
                Toronto Transit Commission | Toronto, ON
              </p>
              <div className="timeline-description">
                <ul>
                  <li>
                    Developed internal asset management tools, directly
                    impacting the effective and efficient operations across the
                    commission by delivering user-centric solutions.
                  </li>
                  <li>
                    Collaborated cross-functionally with engineers and diverse
                    stakeholders (Directors to technicians) to gather
                    requirements, iterate on designs, and drive product
                    improvements.
                  </li>
                  <li>
                    Actively engaged in the full software lifecycle for internal
                    tools and proactively joined the ideation process for
                    external products on the TTC app and webpage.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3 className="timeline-title">
                Future Product Manager Intern 👀
              </h3>
              <p className="timeline-date">Soon ⏳...</p>
              <p className="timeline-location">Your Company</p>
              <div className="timeline-description">
                <ul>
                  <li>
                    Description of future accomplishments at YOUR company 😎 ...
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/samir-sarwar-pm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:samir.sarwar@uwaterloo.ca">
              <MdEmail />
            </a>
            <a
              href="https://github.com/samir-sarwar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="footer-copyright">Made by Samir Sarwar 2025</div>
        </div>
      </footer>
    </>
  );
}

export default App;
