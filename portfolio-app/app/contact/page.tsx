import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="relative min-h-full w-full">
      
      <div className="fixed inset-0 -z-10">
        <Image
          src="/pages-bg.svg" 
          alt="Contact Page Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-zinc-950/90" />
      </div>

      {/* PAGE CONTENT CONTAINER */}
      <div className="relative z-10 max-w-2xl mx-auto p-8 md:p-0">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Contact Me
        </h1>
        <p className="text-center text-zinc-400 mb-8">
          Have a question or want to work together?
        </p>

        <form
          action="https://formspree.io/f/mjkorkbw" 
          method="POST"
          className="bg-zinc-900/90 p-8 rounded-lg space-y-6 border border-zinc-800 backdrop-blur-md shadow-2xl"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full bg-zinc-800/50 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full bg-zinc-800/50 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="mt-1 block w-full bg-zinc-800/50 border border-zinc-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-amber-400 transition-all active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}