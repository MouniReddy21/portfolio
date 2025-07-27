// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-white text-center mb-4">
        Contact Me
      </h1>
      <p className="text-center text-zinc-400 mb-8">
        Have a question or want to work together?
      </p>
      <form
        action="https://formspree.io/f/mjkorkbw" // <-- REPLACE WITH YOUR URL
        method="POST"
        className="bg-zinc-800/50 p-8 rounded-lg space-y-6"
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
            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
            className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-blue-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}


