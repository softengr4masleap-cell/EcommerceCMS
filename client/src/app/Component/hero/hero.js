export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Build Your <span className="text-yellow-300">Dream Project</span> Faster
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-8">
            Supercharge your workflow with modern tools. Fast, reliable, and beautifully designed for developers & teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition">
              Learn More
            </button>
          </div>
        </div>


        <div className="flex justify-center lg:justify-end">
          <img
            src=""
            alt="image here"
            className="w-4/5 sm:w-3/4 lg:w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
