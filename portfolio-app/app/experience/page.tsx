// app/experience/page.tsx
export default function ExperiencePage() {
  return (
    // This container keeps your content organized within the main area
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-8 border-b border-zinc-700 pb-4">
        Work Experience
      </h1>
      <div className="space-y-8">
        <div className="bg-zinc-800/50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-white">
            Senior Developer - Tech Inc.
          </h3>
          <p className="text-md text-zinc-400 italic">Jan 2022 - Present</p>
          <ul className="list-disc list-inside mt-4 text-zinc-300 space-y-2">
            <li>Led development of a new client-facing portal using React.</li>
            <li>Mentored three junior developers.</li>
            <li>Optimized application performance, reducing load times by 30%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
