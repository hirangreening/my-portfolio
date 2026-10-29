import { skills } from '@/lib/data';

export default function Skills() {
  return (
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
  );
}