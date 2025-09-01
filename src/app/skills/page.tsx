import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";


export default function SkillsPage() {
  return (
    <main>
      <section>
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill-card">
            <FaHtml5 color="#E44D26" />
            <span>HTML</span>
          </div>
          <div className="skill-card">
            <FaCss3Alt color="#264de4" />
            <span>CSS</span>
          </div>
          <div className="skill-card">
            <FaJs color="#F0DB4F" />
            <span>JavaScript</span>
          </div>
          <div className="skill-card">
            <FaReact color="#61DBFB" />
            <span>React</span>
          </div>
          <div className="skill-card">
            <SiNextdotjs color="white" />
            <span>Next.js</span>
          </div>
          <div className="skill-card">
            <FaGithub color="#000000ff" />
            <span>GitHub</span>
          </div>
        </div>
      </section>
    </main>
  );
}
