export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Hiran Greening</h1>
      <p className="text-xl text-gray-400 mb-8 text-center max-w-2xl">
        Computer Science Graduate | Full-Stack Web Developer | AI Tooling
      </p>
      
      <div className="flex gap-4">
        <a href="https://github.com/hirangreening" target="_blank" className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          GitHub
        </a>
        <a href="https://linkedin.com/in/hiran-greening" target="_blank" className="bg-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
          LinkedIn
        </a>
      </div>
    </main>
  );
}