// // app/projects/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, AlertCircle, Dna, ScanFace, Activity, Terminal, BarChart3, PenSquare } from 'lucide-react';

const myProjects = [
  {
    name: 'Secure Cloud Database Proxy',
    description: 'A zero-trust intermediary for healthcare data protection in untrusted clouds. Implements AES-GCM for confidentiality, HMAC for integrity, and Hash Chains for query completeness, featuring RBAC for PII redaction.',
    image: '/portfolio/security-proxy.png', 
    tags: ['Security', 'AES-GCM', 'RBAC', 'Python'],
    link: 'https://github.com/MouniReddy21/SecureCloud', 
    icon: <ShieldCheck className="text-amber-400" size={20} />
  },
  {
    name: 'ScamGuard: Fraud Detection',
    description: 'Engineered a production ML service achieving 98.6% accuracy in detecting job fraud across 29K+ records. Deployed via CI/CD with sub-second inference latency.',
    details:
    'Trained XGBoost and Logistic Regression models on 29K+ records. Built feature pipelines, tuned hyperparameters, and deployed via CI/CD with sub-second inference latency.',
    image: '/portfolio/scamguard.jpeg',
    tags: ['ML', 'Flask', 'React', 'CI/CD'],
    link: 'https://github.com/MouniReddy21/ScamGuard',
    icon: <AlertCircle className="text-amber-400" size={20} />
  },
  {
    name: 'Multi-User Blogging Platform',
    description:
      'Built a full-stack blogging platform with secure authentication, role-based post management, image uploads, and threaded comments. Designed RESTful routes and normalized schemas for scalable user-generated content.',
    image: '/portfolio/blog-platform.png',
    tags: ['Flask', 'SQLite', 'Auth', 'MVC', 'Full Stack'],
    link: 'https://github.com/MouniReddy21/multi-user-blog',
    icon: <PenSquare className="text-amber-400" size={20} />
  },
  {
    name: 'CodeTheGenome',
    description:   'Built a distributed ML inference pipeline for terabyte-scale genomic datasets, achieving 91% ROC-AUC and reducing processing time from hours to minutes through query compilation and vectorized execution.',
    image: '/portfolio/genomics.png',
    tags: ['Distributed Systems', 'PyTorch', 'HPC'],
    link: 'https://github.com/MouniReddy21/CodeTheGenome',
    icon: <Dna className="text-amber-400" size={20} />
  },
  {
    name: 'Facial Expression CNN',
    description: 'CNN-based classifier recognizing 7 emotional categories with 81.5% accuracy. Optimized via data augmentation and L2 regularization to minimize overfitting.',
    image: '/portfolio/cnn-facial.jpeg',
    tags: ['CNN', 'Computer Vision', 'TensorFlow'],
    link: 'https://github.com/MouniReddy21/Facial-Expression-Recognition-using-CNN',
    icon: <ScanFace className="text-amber-400" size={20} />
  },
  {
    name: 'Task Tracker CLI System',
    description:   'High-performance Java CLI application supporting thousands of concurrent operations through optimized data structures and efficient file-based persistence.',
    image: '/portfolio/task-tracker.png',
    tags: ['Java', 'OOD', 'Concurrency', 'Systems'],
    link: 'https://github.com/MouniReddy21/TaskTrackCLI',
    icon: <Terminal className="text-amber-400" size={20} />
  },
  {
    name: 'ADL Unsupervised Recognition',
    description: 'Applied unsupervised learning (Agglomerative Clustering & GMM) to recognize Activities of Daily Living in smart homes using binary sensor data and PCA.',
    image: '/portfolio/adl-home.jpeg',
    tags: ['Unsupervised ML', 'PCA', 'Clustering'],
    link: 'https://github.com/MouniReddy21/ADL-Recognition-Using-Unsupervised-Learning',
    icon: <Activity className="text-amber-400" size={20} />
  },
  {
    name: 'Interactive Cereal Visualizer',
    description: 'Built a visual analytics system using D3.js to explore nutritional patterns. Features PCA-based clustering, interactive dendrograms, and manufacturer comparisons to support multi-dimensional analysis.',
    image: '/portfolio/cereal-viz.jpeg',
    tags: ['D3.js', 'PCA', 'Data Visualization'],
    link: 'https://github.com/MouniReddy21/cereal_visualization',
    demo: 'https://mounireddy21.github.io/cereal_visualization/',
    icon: <BarChart3 className="text-amber-400" size={20} />
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-full w-full">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/portfolio/pages-bg.svg" 
          alt="Projects Page Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      {/* PAGE CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl space-y-8 p-8 md:p-0 mx-auto pb-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
          <div className="w-24 h-1 bg-amber-400 rounded-full mb-4"></div>
          <p className="text-zinc-400 max-w-2xl">
            A showcase of my work in Distributed Systems, Security, and Machine Learning, focused on scalability, reliability, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {myProjects.map((project) => (
            <div 
              key={project.name} 
              className="group relative bg-zinc-900/90 rounded-xl overflow-hidden border border-zinc-800 backdrop-blur-md shadow-2xl transition-all duration-500 hover:border-amber-400/50 hover:-translate-y-2">
              {/* Image Section */}
              <div className="relative h-48 w-full border-b border-zinc-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                {/* Project Icon */}
                <div className="absolute top-4 left-4 bg-zinc-950/80 p-2 rounded-lg backdrop-blur-sm border border-zinc-800">
                  {project.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.name}
                </h3>

                {/* Description with smooth expand on hover */}
                <div
                  className="
                    overflow-hidden
                    max-h-14
                    opacity-90
                    transition-all
                    duration-500
                    ease-in-out
                    group-hover:max-h-40
                    group-hover:opacity-100
                    max-md:max-h-none
                  "
                >
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-800/50 text-zinc-300 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {/* GitHub link (always shown) */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-xs font-semibold px-3 py-1.5 rounded-md border border-zinc-700
                              text-zinc-300 hover:border-amber-400 hover:text-amber-400 transition"
                  >
                    GitHub
                  </Link>

                  {/* Demo link (only if exists) */}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="text-xs font-semibold px-3 py-1.5 rounded-md
                                bg-amber-400 text-zinc-950 hover:bg-amber-300 transition"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}