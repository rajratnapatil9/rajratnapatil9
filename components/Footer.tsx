import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div>
          <div className="eyebrow">Contact</div>
          <h2>Have an idea worth discussing?</h2>
          <p>I&apos;m always open to thoughtful conversations around data, engineering, analytics and collaboration.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:rajratnapatil9@gmail.com"><Icon name="mail" /> Email me</a>
          <a href="https://www.linkedin.com/in/rajratna-patil-46ba54103/" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
          <a href="https://github.com/rajratnapatil9" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Rajratna Patil · RajSavvy</div>
    </footer>
  );
}
