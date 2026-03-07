import RevealDirectional from "../components/RevealDirectional";

export default function About() {
  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-6">
        <RevealDirectional direction="left">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>
              <p className="uppercase tracking-widest text-xs text-gray-400 mb-3">
                About
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                I build with <span className="text-indigo-400">purpose</span>
              </h2>

              <p className="text-gray-300 text-lg max-w-xl">
                I’m a data science student focused on building practical,
                reliable solutions across full-stack systems, APIs,
                and financial technology.
                <br /><br />
                I care about clarity, real-world usability, and using
                machine learning only where it genuinely adds value.
              </p>
            </div>

            {/* RIGHT */}
            <div className="glass p-8">
              <ul className="space-y-4 text-gray-200 text-sm">
                <li>• Practical data science & applied ML</li>
                <li>• Full-stack & API-driven systems</li>
                <li>• Fintech & deep-tech exploration</li>
                <li>• Consistency, logic, reliability</li>
              </ul>
            </div>

          </div>
        </RevealDirectional>
      </div>
    </section>
  );
}


 