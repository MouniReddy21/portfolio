import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const myProjects = [
  {
    name: 'ClassEdge',
    image: '/projects/class-edge.png', 
    tags: ['Django', 'Web Dev'],
    link: '#', // Link to the project
  },
  {
    name: 'Taylrd',
    image: '/projects/taylrd.png',
    tags: ['Flask', 'ML'],
    link: '#',
  },
  {
    name: 'Flight Delay',
    image: '/projects/flight-delay.png',
    tags: ['Analytics', 'ML'],
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-full w-full">
      
      {/* BACKGROUND IMAGE CONTAINER*/}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/pages-bg.svg" 
          alt="Projects Page Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      {/* PAGE CONTENT CONTAINER:*/}
      <div className="relative z-10 max-w-6xl space-y-8 p-8 md:p-0 mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <div className="w-24 h-1 bg-amber-400 rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            // PROJECT CARD
            <div 
              key={project.name} 
              className="bg-zinc-900/90 rounded-lg overflow-hidden group border border-zinc-800 backdrop-blur-md shadow-xl transition-all hover:border-amber-400/50"
            >
              <div className="relative h-48 w-full border-b border-zinc-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-zinc-800 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full border border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={project.link}>
                  <div className="absolute top-4 right-4 bg-zinc-900/90 p-2 rounded-full border border-zinc-700 transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-amber-400">
                    <ArrowRight className="text-white group-hover:text-zinc-950 h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}