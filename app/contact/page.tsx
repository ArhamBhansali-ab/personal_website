import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  const { socials } = site;

  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      value: socials.email,
      href: `mailto:${socials.email}`,
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/arhambhansali",
      href: socials.github,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/arhambhansali",
      href: socials.linkedin,
    },
    {
      icon: GraduationCap,
      title: "Google Scholar",
      value: "View Publications",
      href: socials.scholar,
    },
  ];

  return (
    <Container>
      <div className="py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          I&apos;m always open to discussing new projects, research
          opportunities, or collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactCards.map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
            >
              <Icon className="w-8 h-8 mb-4" />
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Or connect via social media:
          </p>
          <SocialLinks />
        </div>
      </div>
    </Container>
  );
}

