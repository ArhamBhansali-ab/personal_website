import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-8">About</h1>

        <div className="space-y-5 text-base text-neutral-600 leading-relaxed">
          <p>
            I&apos;m Arham, an Electrical &amp; Computer Engineering and Physics
            student at Duke University. I build things at the intersection of
            hardware and software — sensing systems, embedded firmware, and
            machine learning for problems where the physics is hard and the data
            is scarce.
          </p>
          <p>
            Most of my projects start with a real sensor and end with a model
            running close to the edge. The work in between — feature engineering,
            analog front-end design, dataset construction, embedded inference —
            is where I spend most of my time.
          </p>
          <p>
            Outside of engineering, I think a lot about how physical-world
            constraints shape what machine learning can actually do in practice,
            and I&apos;m interested in building tools that make that gap smaller.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-8 text-sm">
            {[
              { label: "Education", value: "Duke University" },
              { label: "Degree", value: "ECE + Physics, B.S.E." },
              { label: "Location", value: "Durham, NC" },
              { label: "Focus", value: "Embedded systems, ML" },
              { label: "Status", value: "Undergrad, Class of 2026" },
              { label: "Open to", value: "Research, internships" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">
                  {label}
                </p>
                <p className="text-neutral-700">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">
            Links
          </p>
          <SocialLinks />
        </div>
      </div>
    </Container>
  );
}
