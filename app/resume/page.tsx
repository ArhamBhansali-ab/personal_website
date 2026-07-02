import Container from "@/components/Container";

export const metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <div className="flex items-baseline justify-between mb-12">
          <h1 className="text-2xl font-semibold text-neutral-900">Resume</h1>
          <a
            href="/resume.pdf"
            download
            className="text-sm text-neutral-500 hover:text-neutral-900 hover:underline underline-offset-2 transition-colors"
          >
            Download PDF ↓
          </a>
        </div>

        <div className="space-y-12">
          <section>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-5">
              Education
            </p>
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-neutral-900">Duke University</h3>
                <span className="font-mono text-sm text-neutral-400">2022 – 2026</span>
              </div>
              <p className="text-sm text-neutral-600 mt-1">
                B.S.E. Electrical &amp; Computer Engineering · Physics
              </p>
              <p className="text-sm text-neutral-400 mt-2">
                Signals &amp; Systems · DSP · EM Fields · Quantum Mechanics ·
                Machine Learning · Embedded Systems · Linear Circuits
              </p>
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-5">
              Experience
            </p>
            <div className="space-y-8">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-medium text-neutral-900">
                    Undergraduate Research Assistant
                  </h3>
                  <span className="font-mono text-sm text-neutral-400">2023 – Present</span>
                </div>
                <p className="text-sm text-neutral-400 mt-0.5">Duke University</p>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 list-disc list-inside">
                  <li>
                    Computational lifespan model linking temperature sensitivity to cellular aging (RSI project)
                  </li>
                  <li>
                    Hourly landslide nowcasting pipeline using GraphCast reanalysis + terrain-aware ML
                  </li>
                  <li>
                    Signal acquisition firmware and intent classifier for a low-cost EEG BCI prototype
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-medium text-neutral-900">
                    Embedded Systems — BMS Project
                  </h3>
                  <span className="font-mono text-sm text-neutral-400">2024</span>
                </div>
                <p className="text-sm text-neutral-400 mt-0.5">Independent / Duke EV</p>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-600 list-disc list-inside">
                  <li>
                    Custom BMS for a multi-cell Li-ion pack with active balancing and EKF-based SoC estimation
                  </li>
                  <li>CAN bus telemetry for real-time pack monitoring on STM32</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-5">
              Skills
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6 text-sm">
              {[
                { label: "Languages", value: "C, Python, MATLAB, TypeScript" },
                { label: "Embedded", value: "STM32, Cortex-M, FreeRTOS, CAN, SPI, I²C" },
                { label: "ML / DSP", value: "PyTorch, scikit-learn, NumPy, LightGBM" },
                { label: "Hardware", value: "KiCad, SPICE, oscilloscope, logic analyzer" },
                { label: "Tools", value: "Git, Linux, Docker, LaTeX" },
                { label: "Domains", value: "Power electronics, geospatial ML, signal processing" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{label}</p>
                  <p className="text-neutral-600">{value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}
