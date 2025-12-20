import Container from "@/components/Container";
import Button from "@/components/Button";
import { Download } from "lucide-react";

export const metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <Container>
      <div className="py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>

        <div className="mb-8">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">University Name</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Degree Program • 2020 - 2024
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Relevant coursework and achievements.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Research Assistant</h3>
                <p className="text-gray-600 dark:text-gray-400">2023 - Present</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Working on AI/ML research projects with focus on healthcare
                  applications and systems optimization.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Software Engineer Intern</h3>
                <p className="text-gray-600 dark:text-gray-400">2022 - 2023</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Built distributed systems and contributed to large-scale
                  applications.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Selected Work</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Published research papers in AI/ML conferences</li>
              <li>Open source contributions to major projects</li>
              <li>Built scalable systems handling millions of requests</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  );
}

