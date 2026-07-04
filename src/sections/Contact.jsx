import { useMemo, useState } from "react";
import Alert from "../components/Alert";
import { profile } from "../constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || "visitor"}`);
    const body = encodeURIComponent(
      `Hi Amogh,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3500);
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <div className="pointer-events-none absolute inset-0 -z-50 bg-[radial-gradient(circle_at_30%_25%,rgba(87,219,150,0.12),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(51,194,204,0.12),transparent_26%)]" />
      {showAlert && <Alert type="success" text="Opening your email app." />}
      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel flex flex-col justify-between p-6 md:p-8">
          <div>
            <div className="section-kicker">Contact</div>
            <h2 className="mt-4 text-4xl font-bold text-white">Build something precise.</h2>
            <p className="mt-4 leading-7 text-neutral-300">
              I am open to AI/product collaborations, data engineering work,
              startup-style builds, and serious hackathon-grade prototypes.
            </p>
          </div>
          <div className="mt-10 space-y-4 text-sm text-neutral-300">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <form className="glass-panel p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="field-input field-input-focus"
              placeholder="Tell me what you are building."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <a href={mailtoHref} onClick={handleMailClick} className="btn-primary w-full">
            Connect with me
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
