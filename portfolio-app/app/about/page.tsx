// // app/about/page.tsx

// import Image from 'next/image';
// import { Code, Bot, Cog, Cpu, Database, Cloud } from 'lucide-react';

// export default function AboutPage() {
//   const skills = [
//     { name: 'React', icon: <Cog size={32} /> },
//     { name: 'Next.js', icon: <Cog size={32} /> },
//     { name: 'Node.js', icon: <Cog size={32} /> },
//     { name: 'Python', icon: <Code size={32} /> },
//     { name: 'TensorFlow', icon: <Cpu size={32} /> },
//     { name: 'SQL', icon: <Database size={32} /> },
//     { name: 'AWS', icon: <Cloud size={32} /> },
//     // will Add more skills...
//   ];

//   return (
//     <div className="relative min-h-full w-full">
      
//       {/* BACKGROUND IMAGE CONTAINER */}
//       <div className="fixed inset-0 -z-10">
//         <Image
//           src="/pages-bg.svg" // <-- Make sure this matches your filename in /public
//           alt="About Page Background"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-zinc-950/90" />
//       </div>

//       <div className="relative z-10 max-w-4xl space-y-16 p-8 md:p-0">
//         {/* --- About Me Section --- */}
//         <section>
//           <h1 className="text-4xl font-bold text-white">About Me</h1>
//           <div className="w-24 h-1 bg-amber-400 rounded-full mt-2 mb-6"></div>
//           <p className="text-zinc-300 text-lg leading-relaxed">
//             I am a Computer Science Graduate Student at Kent State University (GPA 4.0). With over three years of experience in Backend & Distributed Systems, my engineering philosophy is centered on Operational Excellence and Reliability.
            
//             I specialize in bridging the gap between hardware-level precision and cloud-scale complexity. Whether I am optimizing RAG pipelines to reduce inference latency by 60% or architecting Zero-Trust security layers for cloud databases, I focus on building systems that are inherently secure, performant, and scalable.
//           </p>
//         </section>

//         {/* --- What I'm Doing Section --- */}
//         <section>
//           <h2 className="text-3xl font-bold text-white mb-6">What I'm Doing</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400/50 transition-colors backdrop-blur-md">
//               <div className="flex items-start">
//                 <Code className="text-amber-400 mr-4 mt-1" size={32} />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">Software Engineering</h3>
//                   <p className="text-zinc-400 mt-2">
//                     Engineering reliable backend systems that scale from prototype to production. I design clean APIs, optimize data ingestion pipelines, and build PostgreSQL-backed platforms in Django capable of handling terabyte-scale datasets while maintaining fast analytical performance and strong data guarantees.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-colors backdrop-blur-sm">
//               <div className="flex items-start">
//                 <Bot className="text-amber-400 mr-4 mt-1" size={32} />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">AI/ML Engineering</h3>
//                   <p className="text-zinc-400 mt-2">
//                     Developing scalable ML inference pipelines and RAG systems. I focus on the infrastructure layer, optimizing vector storage, implementing fault-tolerant asynchronous processing on AWS, and enhancing model interpretability via SHAP
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-colors backdrop-blur-sm">
//               <div className="flex items-start">
//                 <Bot className="text-amber-400 mr-4 mt-1" size={32} />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">Identity & Data Security</h3>
//                   <p className="text-zinc-400 mt-2">
//                     Architecting Zero-Trust layers for cloud storage. Implementing robust security protocols including AES-GCM encryption, RBAC, and HMAC to ensure data integrity in high-traffic, compliance-sensitive environments.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-colors backdrop-blur-sm">
//               <div className="flex items-start">
//                 <Bot className="text-amber-400 mr-4 mt-1" size={32} />
//                 <div>
//                   <h3 className="text-xl font-semibold text-white">Supply Chain Mapping (Rust Belt Fibershed)</h3>
//                   <p className="text-zinc-400 mt-2">
//                     Collaborating with the Rust Belt Fibershed through the Kent State DI Hub to research and map place-based textile systems. My work focuses on identifying underutilized waste streams and designing solutions to foster collaboration between local agriculture and sustainable manufacturing.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* --- Skills Section --- */}
//         <section>
//           <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
//           <div className="flex flex-wrap gap-4">
//             {skills.map((skill) => (
//               <div key={skill.name} className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg px-4 py-2 backdrop-blur-sm">
//                 <div className="text-amber-400 mr-3">{skill.icon}</div>
//                 <span className="text-white font-medium">{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import { 
  Code, Bot, Server, Cpu, Database, Cloud, 
  ShieldCheck, Layout, Boxes, Terminal 
} from 'lucide-react';

export default function AboutPage() {
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
    <div className="relative min-h-full w-full">
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
            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400/50 transition-all duration-300 backdrop-blur-md group">
              <div className="flex items-start">
                <Boxes className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Software Engineering</h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    Engineering reliable backend systems that scale from prototype to production. I design clean APIs, optimize data ingestion pipelines, and build PostgreSQL-backed platforms in Django capable of handling terabyte-scale datasets while maintaining fast analytical performance and strong data guarantees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <Cpu className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white">AI/ML Engineering</h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    Developing scalable ML inference pipelines and RAG systems. I focus on the infrastructure layer, optimizing vector storage and implementing fault-tolerant asynchronous processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <ShieldCheck className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Identity & Data Security</h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    Architecting Zero-Trust layers for cloud storage. Implementing robust security protocols including AES-GCM encryption, RBAC, and HMAC to ensure data integrity in high-traffic, compliance-sensitive environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/90 p-6 rounded-lg border border-zinc-800 hover:border-amber-400 transition-all duration-300 backdrop-blur-sm group">
              <div className="flex items-start">
                <Layout className="text-amber-400 mr-4 mt-1 group-hover:scale-110 transition-transform" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Supply Chain Mapping</h3>
                  <p className="text-zinc-400 mt-2 text-sm">
                    Collaborating with the Rust Belt Fibershed through the Kent State DI Hub to research and map place-based textile systems. My work focuses on identifying underutilized waste streams and designing solutions to foster collaboration between local agriculture and sustainable manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Categorized Skills Section --- */}
        <section className="pb-20">
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
                className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl backdrop-blur-md hover:border-zinc-700 transition-all group"
              >
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
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/30 border border-zinc-700/50 rounded-full hover:border-amber-400/40 hover:text-white hover:bg-zinc-800/80 transition-all cursor-default"
                    >
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