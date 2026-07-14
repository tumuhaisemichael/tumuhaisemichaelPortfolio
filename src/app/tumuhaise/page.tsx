import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TUMUHAISE MICHAEL ANOLD - CV / Resume",
  description: "Detailed Curriculum Vitae of Tumuhaise Michael Anold, Software Engineer based in Kampala, Uganda.",
};

export default function ResumePage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-4 sm:px-6 min-h-screen text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden print:shadow-none print:bg-white print:text-black">
        {/* Header */}
        <header className="bg-gray-900 text-white p-8 text-center print:bg-slate-900 print:text-white">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight">TUMUHAISE MICHAEL</h1>
          <div className="text-emerald-400 font-semibold text-lg mt-1">Software Engineer</div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <i className="ri-map-pin-line"></i> Kampala, Uganda
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-phone-line"></i> +256 782711856 / +256 759909831
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-mail-line"></i> michaeltumuhaise11@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <i className="ri-github-line"></i> github.com/tumuhaisemichael
            </span>
          </div>
        </header>

        {/* Content Section */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Summary */}
          <section className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-950 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
              PROFESSIONAL SUMMARY
            </h2>
            <div className="text-sm leading-relaxed space-y-3 text-gray-600 dark:text-gray-300">
              <p>
                I&apos;m an innovative and multidisciplinary Software Engineer with a Bachelor&apos;s degree in Software Engineering from Makerere University. I have hands-on experience in full-stack development, mobile app creation, IoT systems, embedded devices, and AI/ML deployment. I&apos;m currently working as a Web Developer at Afrisoft and WildMed Safaris, where I contribute to building powerful and user-centric digital solutions.
              </p>
              <p>
                I&apos;ve developed cross-platform applications, real-time energy monitoring systems, and agricultural intelligence platforms that solve real-world problems. I&apos;m skilled in technologies like React, Django, Flutter, Laravel, FastAPI, Firebase, Supabase, and more. Alongside my software engineering skills, I have a strong foundation in digital marketing and SEO, which helps me build products that not only work but also reach and impact users effectively. I thrive on turning ideas into practical solutions across industries like healthcare, education, agriculture, e-commerce, and tourism.
              </p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold text-gray-950 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">
                  Bachelor of Science in Software Engineering
                </h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Makerere University, Uganda | 2021 – 2025 (Completed)
                </div>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <h3 className="font-bold text-base text-gray-900 dark:text-white">
                  Diploma in Computer Science
                </h3>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Makerere University Business School | 2018 – 2020
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-xl font-bold text-gray-950 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="divide-y divide-gray-100 dark:divide-gray-700 space-y-6">
              {/* Afrisoft */}
              <div className="pt-2">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Afrisoft</h3>
                  <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded">
                    2024 – Present
                  </span>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Web Developer</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Lead frontend/backend development of scalable apps</li>
                  <li>Integrated real-time APIs and deployed cross-platform systems</li>
                  <li>Worked with Django, Laravel, and React-based solutions</li>
                </ul>
              </div>

              {/* WildMed */}
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">WildMed Safaris</h3>
                  <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded">
                    2024 – Present
                  </span>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Web Developer</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Designed and maintained tourism platforms</li>
                  <li>Managed SEO and digital marketing campaigns, improving online visibility</li>
                  <li>Developed user-focused web solutions for booking and client engagement</li>
                </ul>
              </div>

              {/* Tattuintel */}
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Tattuintel Ltd</h3>
                  <span className="text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded">
                    2023 – 2024
                  </span>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Software Developer</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Built and deployed high-impact mobile and web solutions</li>
                  <li>Collaborated on ML-driven logistics and wedding planning apps</li>
                </ul>
              </div>

              {/* NITA-U */}
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">NITA-U</h3>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Intern</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Created intelligent chatbots, internal dashboards, and automation tools</li>
                </ul>
              </div>

              {/* NARO */}
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">NARO</h3>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Intern</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Performed software installations and provided technical support</li>
                </ul>
              </div>

              {/* Kagoma Tech */}
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Kagoma Tech</h3>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">IT Officer</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Delivered IT support, system maintenance, and networking services</li>
                </ul>
              </div>

              {/* Excel High School */}
              <div className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Excel High School</h3>
                </div>
                <div className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">Volunteer</div>
                <ul className="list-disc pl-5 text-sm space-y-1.5 text-gray-600 dark:text-gray-300">
                  <li>Set up IT infrastructure and supported systems management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold text-gray-950 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
              PROJECTS
            </h2>
            <div className="space-y-6">
              {/* Op Energy */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">🚀 Op Energy</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Laravel</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Supabase</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">IoT</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Energy usage monitoring system for households</li>
                  <li>Converts money to Yaka units and vice versa; controls sockets remotely</li>
                  <li>Physical embedded device placed at sockets; app connects to it via API</li>
                </ul>
              </div>

              {/* Smart Farming */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">🌱 Smart Farming System</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Embedded</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Python</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Sensors</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>IoT-based device collects soil data (pH, moisture, nutrients)</li>
                  <li>Advises farmers on what crops to grow and manure to apply</li>
                  <li>Live data dashboard for agricultural insights</li>
                </ul>
              </div>

              {/* RouteWise */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">🚌 RouteWise</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">React Native</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Django</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Supabase</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>School shuttle tracking with ML for route optimization</li>
                  <li>Displays live traffic, weather, and crash data using external APIs</li>
                </ul>
              </div>

              {/* WonderWedding */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">💍 WonderWedding</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Flutter</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Firebase</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Mobile app for complete wedding planning</li>
                  <li>Manages budgets, guest lists, schedules, and vendors</li>
                </ul>
              </div>

              {/* TheShop */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">🛒 TheShop</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">React</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">FastAPI</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Full-featured e-commerce platform inspired by Jumia & Amazon</li>
                  <li>Features cart, checkout, admin panel, and recommendation engine</li>
                </ul>
              </div>

              {/* Chatbots */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">💬 Various Chatbots</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Python</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Dialogflow</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Customer service bots for education, business, and info services</li>
                  <li>Integrated into websites and apps for automation</li>
                </ul>
              </div>

              {/* Matendo */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">🧑‍⚕️ Matendo Medical System</h3>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">Laravel</span>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">MySQL</span>
                </div>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Connects patients with health workers and stores personal medical data</li>
                  <li>Secured system for consultations and digital health records</li>
                </ul>
              </div>

              {/* Websites */}
              <div>
                <h3 className="font-bold text-base text-gray-900 dark:text-white">🌐 Websites &amp; Portals</h3>
                <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 dark:text-gray-300">
                  <li>Developed custom websites for educational institutions, NGOs, startups, and tourism firms using Laravel, WordPress, and React</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xl font-bold text-gray-950 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
              TECHNICAL SKILLS
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Languages</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>JavaScript / TypeScript</p>
                  <p>Python</p>
                  <p>Java</p>
                  <p>PHP</p>
                  <p>Dart</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Frameworks/Libraries</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>React / Next.js</p>
                  <p>React Native</p>
                  <p>Flutter</p>
                  <p>Django</p>
                  <p>Laravel</p>
                  <p>FastAPI</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Databases</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>PostgreSQL</p>
                  <p>MySQL</p>
                  <p>Firebase</p>
                  <p>Supabase</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">DevOps/Tools</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>Docker</p>
                  <p>Git / GitHub</p>
                  <p>REST APIs</p>
                  <p>cPanel</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Embedded Systems</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>IoT integration with sensors for smart agriculture and energy monitoring</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">AI/ML</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>TensorFlow</p>
                  <p>Scikit-learn</p>
                  <p>ML model deployment</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Digital Marketing</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>SEO</p>
                  <p>Keyword optimization</p>
                  <p>Google Search Console</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Others</h4>
                <div className="space-y-1 text-gray-600 dark:text-gray-400">
                  <p>Web hosting</p>
                  <p>Chatbot development</p>
                  <p>Cloud deployment</p>
                </div>
              </div>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-xl font-bold text-gray-950 dark:text-white border-b-2 border-emerald-500 pb-2 mb-4">
              REFERENCES
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg text-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white">Rweju M Julian</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Manager, E-Government Services, NITA-U</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">📞 +256 772 428292</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg text-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white">Masserejje Mark Nathan</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">System Developer, NITA-U</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">📞 +256 774 427036</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg text-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white">Mr. Agatu Nathan</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Manager, Kagoma Tech</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">📞 +256 775 781157</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/20 p-4 rounded-lg text-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white">Ms. Bukenya Sophia</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Lecturer, Makerere University Business School</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">📞 +256 777 229478</p>
              </div>
            </div>
          </section>

          {/* Socials & Portals */}
          <section className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <ul className="text-sm space-y-1.5 text-gray-600 dark:text-gray-400">
              <li>
                <strong className="text-gray-900 dark:text-white">GitHub:</strong>{" "}
                <a href="https://github.com/tumuhaisemichael" className="text-primary hover:underline">
                  https://github.com/tumuhaisemichael
                </a>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Portfolio:</strong>{" "}
                <a href="https://tumuhaise.com/" className="text-primary hover:underline">
                  https://tumuhaise.com/
                </a>
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/tumuhaise-michael-225515352/" className="text-primary hover:underline">
                  https://www.linkedin.com/in/tumuhaise-michael-225515352/
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
