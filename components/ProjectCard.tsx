interface ProjectProps {
  title: string;
  tech: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, tech, description, link }: ProjectProps) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors duration-200">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-blue-400 mb-3 font-mono">{tech}</p>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400 underline underline-offset-4">
          View Code &rarr;
        </a>
      )}
    </div>
  );
}