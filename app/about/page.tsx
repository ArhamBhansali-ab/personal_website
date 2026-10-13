import PageHeader from "@/components/site/PageHeader";
import { site, socialLinks } from "@/content/site";

export const metadata = {
  title: "About",
  description: site.bioShort,
};

export default function AboutPage() {
  const [lead, ...rest] = site.bioLong;

  return (
    <>
      <PageHeader
        label="About"
        title={
          <>
            hi, i&apos;m <em className="text-accent">arham.</em>
          </>
        }
      >
        {site.school}
      </PageHeader>

      <div className="shell">
        <div className="hairline grid gap-8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
          <h2 className="label">Bio</h2>
          <div>
            <p className="max-w-4xl font-serif text-display-sm leading-[1.22] text-fg">{lead}</p>
            <div className="prose-site mt-8">
              {rest.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mt-20 grid gap-8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
          <h2 className="label">Elsewhere</h2>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="link inline-block py-1"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
