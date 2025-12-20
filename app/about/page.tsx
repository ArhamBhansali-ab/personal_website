import Container from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <Container>
      <div className="py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <section className="mb-12">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {site.bioShort}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What I&apos;m Working On</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>AI and machine learning research for healthcare applications</li>
            <li>Building scalable distributed systems</li>
            <li>Open source contributions in the ML/AI space</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Experience Highlights</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Research Assistant</h3>
              <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
              <p className="text-gray-700 dark:text-gray-300">
                Working on AI/ML research projects with focus on healthcare and systems optimization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Software Engineer Intern</h3>
              <p className="text-gray-600 dark:text-gray-400">2022 - 2023</p>
              <p className="text-gray-700 dark:text-gray-300">
                Built distributed systems and contributed to large-scale applications.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "TypeScript",
              "Go",
              "TensorFlow",
              "PyTorch",
              "React",
              "Next.js",
              "Distributed Systems",
              "Machine Learning",
              "Research",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

