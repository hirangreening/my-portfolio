export default function Home() {
  const projects = [
    {
      title: "SCMS Paper Insights",
      tech: "PHP, JavaScript, SQL",
      description: "Built a full-stack web app to manage 80+ university courses for the School of Computing and Mathematical Sciences. Earned an A grade.",
      link: "https://github.com/hirangreening/scms-paper-insights"
    },
    {
      title: "Java Networking & Algorithms",
      tech: "Java, Sockets, TLS",
      description: "Built a multi-client web server using sockets and threads, and implemented core algorithms like external sorting and KMP string search.",
      link: "https://github.com/hirangreening/java-networking-scripts"
    },
    {
      title: "Local AI Homelab",
      tech: "Linux, Docker, llama.cpp",
      description: "Configured a headless Linux server to host containerised applications and a fully offline, GPU-accelerated local AI coding environment.",
      link: ""
    }
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
          <a href="https://github.com/hirangreening" target="_blank" className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hiran-greening" target="_blank" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
            LinkedIn
          </a>
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
              <a href={project.link} target="_blank" className="text-sm font-semibold text-white hover:text-blue-400 underline underline-offset-4">
                View Code &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}