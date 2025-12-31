// // app/about/page.tsx
"use client"; 

import { useEffect } from 'react'; // Move this import up with the others
import Image from 'next/image';
import { 
  Code, Bot, Server, Cpu, Database, Cloud, 
  ShieldCheck, Layout, Boxes, Terminal, Palette 
} from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    // Check if the URL has #skills when the page loads
    if (window.location.hash === '#skills') {
      const element = document.getElementById('skills');
      if (element) {
        // Delay slightly to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);
  // Categorized Skills Data
  const skillCategories = [
    {
      title: "Distributed Systems & Backend",
      icon: <Server className="text-amber-400" size={24} />,
      skills: [
        "Java (SpringBoot)", "Python (Django/Flask)", "C++", "C", "Kotlin", "Go (Familiar)", 
        "PHP", "Microservices", "REST/gRPC APIs", "Express.js", "Node.js"
      ]
    },
    {
      title: "AI/ML Infrastructure & Data",
      icon: <Bot className="text-amber-400" size={24} />,
      skills: [
        "PyTorch", "TensorFlow", "RAG Systems", "Vector DBs", "PostgreSQL", "MongoDB", 
        "MySQL", "DynamoDB", "Redis", "Pandas", "NumPy", "OpenCV", "Scikit-Learn"
      ]
    },
    {
      title: "Cloud, DevOps & Reliability",
      icon: <Cloud className="text-amber-400" size={24} />,
      skills: [
        "AWS (EC2, Lambda, S3)", "Kubernetes", "Docker", "Terraform", "CI/CD (GitHub/GitLab)", 
        "Jenkins", "Ansible", "Linux/Shell", "Git"
      ]
    },
    {
      title: "Security & UI Engineering",
      icon: <ShieldCheck className="text-amber-400" size={24} />,
      skills: [
        "RBAC", "OAuth 2.0", "AES-GCM Encryption", "Zero-Trust", "React", "Angular", 
        "Vue.js", "Flutter", "React Native", "TypeScript", "HTML5/CSS3"
      ]
    }
  ];

  return (
    <div className="relative min-h-full w-full scroll-smooth">
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/pages-bg.svg"
          alt="About Page Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-16 p-8 md:p-0 mx-auto">
        {/* --- About Me Section --- */}
        <section>
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-2 mb-6"></div>
          <p className="text-zinc-300 text-lg leading-relaxed">
            I am a Computer Science Graduate Student at Kent State University (GPA 4.0). With over three years of experience in Backend & Distributed Systems, my engineering philosophy is centered on Operational Excellence and Reliability.
            <br /><br />
            I specialize in bridging the gap between hardware-level precision and cloud-scale complexity. Whether I am optimizing RAG pipelines to reduce inference latency by 60% or architecting Zero-Trust security layers for cloud databases, I focus on building systems that are inherently secure, performant, and scalable.
          </p>
        </section>

        {/* --- What I'm Doing Section --- */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">What I'm Doing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Software Engineering */}
            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-md group">
              <div className="flex items-start">
                {/* Icon size increased to 40 */}
                <Boxes className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={60} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Engineering</h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    Engineering reliable backend systems that scale from prototype to production. I design clean APIs, optimize data ingestion pipelines, and build PostgreSQL-backed platforms in Django capable of handling terabyte-scale datasets while maintaining fast analytical performance and strong data guarantees.
                  </p>
                </div>
              </div>
            </div>
            {/* AI/ML Engineering */}
            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <Cpu className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={60} />
                <div>
                  <h3 className="text-xl font-semibold text-white">AI/ML Engineering</h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    Developing scalable ML inference pipelines and RAG systems. I focus on the infrastructure layer, optimizing vector storage and implementing fault-tolerant asynchronous processing.
                  </p>
                </div>
              </div>
            </div>

            {/* Identity and data security */}
            {/* <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <ShieldCheck className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Identity & Data Security</h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    Architecting Zero-Trust layers for cloud storage. Implementing robust security protocols including AES-GCM encryption, RBAC, and HMAC to ensure data integrity in high-traffic, compliance-sensitive environments.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Sketching & Realistic Drawing (Replaced Security) */}
            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <Palette className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={60} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Realistic Drawing</h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    Outside of coding, I am passionate about realistic pencil sketching. I focus on detail-oriented portraiture and observational drawing, a hobby that hones my patience and attention to fine details.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <Layout className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={60} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Supply Chain Mapping</h3>
                  <p className="text-zinc-400 mt-2 text-sm leading-relaxed">
                    Collaborating with the Rust Belt Fibershed through the Kent State DI Hub to research and map place-based textile systems. My work focuses on identifying underutilized waste streams and designing solutions to foster collaboration between local agriculture and sustainable manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Categorized Skills Section --- */}
        <section id="skills" className="scroll-mt-24 md:scroll-mt-32 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white">Skills</h2>
              <p className="text-zinc-400 mt-2 text-sm max-w-xl">
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div 
                key={cat.title} 
                className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl backdrop-blur-md hover:border-zinc-700 transition-all group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-zinc-800/50 rounded-lg group-hover:bg-amber-400/10 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/30 border border-zinc-700/50 rounded-full hover:border-amber-400/40 hover:text-white hover:bg-zinc-800/80 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}