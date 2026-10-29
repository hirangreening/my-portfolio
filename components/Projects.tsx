import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto mb-24 w-full">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}