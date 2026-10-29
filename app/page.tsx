export default function Home() {
  const projects = [
    {
      title: "SCMS Paper Insights",
      tech: "PHP, JavaScript, SQL",
      description: "Built a full-stack web app to manage 80+ university courses for the School of Computing and Mathematical Sciences. Earned an A grade.",
      link: "https://github.com/hirangreening" // Update this to your specific repo
    },
    {
      title: "Java Networking & Algorithms",
      tech: "Java, Sockets, TLS",
      description: "Built a multi-client web server using sockets and threads, and implemented core algorithms like external sorting and KMP string search.",
      link: "https://github.com/hirangreening" // Update this to your specific repo
    },
    {
      title: "Local AI Homelab",
      tech: "Linux, Docker, llama.cpp",
      description: "Configured a headless Linux server to host containerised applications and a fully offline, GPU-accelerated local AI coding environment.",
      link: "" 
    }
  ];

  // The Skills Section Data
  const skills = [
    { category: "Languages", items: ["Java", "C#", "JavaScript", "PHP", "SQL"] },
    { category: "Web & Frameworks", items: ["React", "Next.js", "HTML/CSS", "REST APIs", "Tailwind"] },
    { category: "Tools & Systems", items: ["Git", "Docker", "Linux", "VS Code", "Figma"] },
  ];

  return (
    <main className="min-h-screen p-8 md:p-24 bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Hiran Greening</h1>
        <p className="text-xl text-gray-400 mb-8">
          Computer Science Graduate | Full-Stack Developer | Homelab Tinkerer
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/hirangreening" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hiran-greening" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
            LinkedIn
          </a>
          {/* Email Icon Button */}
          <a href="mailto:hirangreening@pm.me" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition flex items-center justify-center" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">About Me</h2>
        <div className="text-gray-300 space-y-4">
          <p>
            I'm a Computer Science graduate based in Cambridge, Waikato. I enjoy building full-stack applications, troubleshooting IT systems, and experimenting with AI tools in my homelab.
          </p>
          <p>
            I'm currently looking for junior developer roles where I can contribute to meaningful projects and build useful tools for the community.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="font-semibold text-blue-400 mb-3">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-300 border border-gray-700">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-blue-400 mb-3">{project.tech}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400 underline underline-offset-4">
                  View Code &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}