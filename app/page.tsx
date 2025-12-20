import Container from "@/components/Container";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/components/ProjectCard";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Home",
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m Arham.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {site.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/projects">View Projects</Button>
              <Button href="/resume" variant="secondary">
                Download Resume
              </Button>
            </div>
            <SocialLinks />
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Currently Section */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold mb-6">Currently</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            {site.bioShort}
          </p>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind or want to collaborate?
            </p>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
