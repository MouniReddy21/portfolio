import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// You can create an array of your projects like this
const myProjects = [
  {
    name: 'ClassEdge',
    image: '/projects/class-edge.png', // Path to your image in the public folder
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
  // Add more projects here
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl">
      <h1 className="text-4xl font-bold text-white">Projects</h1>
      <div className="w-24 h-1 bg-amber-400 rounded-full mt-2 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div key={project.name} className="bg-zinc-800/50 rounded-lg overflow-hidden group">
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={project.link}>
                <div className="absolute top-4 right-4 bg-zinc-900/50 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200">
                  <ArrowRight className="text-white" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}