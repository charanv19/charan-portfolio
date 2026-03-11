import RevealDirectional from "../components/RevealDirectional";

export default function About() {
  return (
    <section id="about" className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <RevealDirectional direction="left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div>
              <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
                About
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                I build with <span className="text-indigo-400">purpose</span>
              </h2>

              <p className="text-gray-300 text-lg max-w-xl">
                I’m a data science student focused on building practical,
                reliable solutions across full-stack systems, APIs,
                and financial technology.
              </p>
            </div>

            <div className="glass p-6 md:p-8">
              <ul className="space-y-4 text-gray-200 text-sm">
                <li>• Practical data science & ML</li>
                <li>• Full-stack engineering</li>
                <li>• Fintech systems</li>
                <li>• Reliability & logic</li>
              </ul>
            </div>

          </div>
        </RevealDirectional>

      </div>
    </section>
  );
}

