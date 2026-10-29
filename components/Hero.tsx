import { GithubIcon, LinkedinIcon, EmailIcon } from './Icons';

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto mb-24 text-center">
      <h1 className="text-5xl font-bold mb-4 tracking-tight">Hiran Greening</h1>
      <p className="text-xl text-gray-400 mb-8">
        Computer Science Graduate | Full-Stack Developer | IT Support
      </p>
      
      <div className="flex justify-center gap-4 flex-wrap">
        <a href="https://github.com/hirangreening" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition flex items-center gap-2">
          <GithubIcon />
          <span>GitHub</span>
        </a>
        
        <a href="https://linkedin.com/in/hiran-greening" target="_blank" rel="noopener noreferrer" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition flex items-center gap-2">
          <LinkedinIcon />
          <span>LinkedIn</span>
        </a>
        
        <a href="mailto:hirangreening@pm.me" className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
          <EmailIcon />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}