import { site } from "@/content/site";
import SocialLinks from "./SocialLinks";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20">
      <Container>
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400">
            © {currentYear} {site.name}
          </p>
          <SocialLinks />
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with Next.js
          </p>
        </div>
      </Container>
    </footer>
  );
}

