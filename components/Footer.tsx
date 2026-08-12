import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* <div className="footer-shell">
        <div>
          <span className="eyebrow light">Open to meaningful data problems</span>
          <h2>Build reliable data. Make it useful.</h2>
          <p>
            I enjoy turning operational complexity into clean pipelines, understandable models and analytics people can act on.
          </p>
        </div>
        <div className="contact-links">
          <a href={`mailto:${site.email}`}>Email <span>↗</span></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {site.name}. Built with Next.js.</div> */}
    </footer>
  );
}
