import { cacheLife } from 'next/cache';

async function getCopyrightYear() {
  'use cache';
  cacheLife('max');
  return new Date().getFullYear();
}

export default async function Home() {
  const currentYear = await getCopyrightYear();

  const projects = [
    {
      title: "SCMS Paper Insights",
      tech: "PHP, JavaScript, SQL",
      description: "Built a full-stack web app to manage 80+ university courses for the School of Computing and Mathematical Sciences. Earned an A grade.",
      link: "https://github.com/hirangreening"
    },
    {
      title: "Java Networking & Algorithms",
      tech: "Java, Sockets, TLS",
      description: "Built a multi-client web server using sockets and threads, and implemented core algorithms like external sorting and KMP string search.",
      link: "https://github.com/hirangreening"
    },
    {
      title: "Local AI Homelab",
      tech: "Linux, Docker, llama.cpp",
      description: "Configured a headless Linux server to host containerised applications and a fully offline, GPU-accelerated local AI coding environment.",
      link: ""
    }
  ];

  const skills = [
    { category: "Languages", items: ["Java", "C#", "JavaScript", "PHP", "SQL"] },
    { category: "Web & Frameworks", items: ["React", "Next.js", "HTML/CSS", "REST APIs", "Tailwind"] },
    { category: "Tools & Systems", items: ["Git", "Docker", "Linux", "VS Code", "Figma"] },
  ];

  return (
    <main className="min-h-screen p-8 md:p-24 bg-gray-900 text-white font-sans flex flex-col">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mb-24 text-center">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Hiran Greening</h1>
        <p className="text-xl text-gray-400 mb-8">
          Computer Science Graduate | Full-Stack Developer | IT Support
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://github.com/hirangreening" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/hiran-greening" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
            LinkedIn
          </a>

          {/* The updated Email button with icon */}
          <a href="mailto:hirangreening@pm.me" className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
        </div>
      </section>

      {/* Projects Section - First */}
      <section className="max-w-3xl mx-auto mb-24 w-full">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-blue-400 mb-3 font-mono">{project.tech}</p>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400 underline underline-offset-4">
                  View Code &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section - Second */}
      <section className="max-w-3xl mx-auto mb-24 w-full">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - Third */}
      <section className="max-w-3xl mx-auto mb-24 w-full">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">About Me</h2>
        <div className="text-gray-300 space-y-4 text-lg">
          <p>
            I'm a Computer Science graduate based in Cambridge, Waikato. I enjoy building full-stack applications, troubleshooting IT systems, and experimenting with AI tools in my homelab.
          </p>
          <p>
            I'm currently looking for junior developer roles where I can contribute to meaningful projects and build useful tools for the community.
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="max-w-3xl mx-auto w-full border-t border-gray-700 pt-8 pb-4 text-center mt-auto">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} Hiran Greening. Built with Next.js & Tailwind.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          <a href="mailto:hirangreening@pm.me" className="hover:text-blue-400 transition">hirangreening@pm.me</a>
        </p>
      </footer>
    </main>
  );
}