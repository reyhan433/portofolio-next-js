export default function ProjectsPage() {
  return (
    <main>
      <section>
        <h2>Projects</h2>
        <div className="projects">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Website pribadi untuk menampilkan data diri.</p>
            <a
              href="https://abdoel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
                Lihat Project
            </a>
          </div>

          <div className="project-card">
            <h3>Todo App</h3>
            <p>Membuat website portoflio dengan tampilan yang lebih bagus lagi.</p>
            <a
              href="https://www.tiktok.com/@carpybaraz/photo/7543683391426710790/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
               Lihat Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
