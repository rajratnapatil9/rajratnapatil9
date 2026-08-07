import Image from "next/image";
import { certifications } from "@/data/site";
import { Icon } from "@/components/Icon";

export const metadata = { title: "Certifications | RajSavvy" };

export default function CertificationsPage() {
  return (
    <>
      <section className="page-hero section-shell">
        <div className="eyebrow">Certifications</div>
        <h1>Keep learning. <span>Keep sharpening the toolkit.</span></h1>
        <p>The certification collection from the original portfolio, rebuilt as a clean responsive gallery.</p>
      </section>
      <section className="section-shell section-block certification-grid">
        {certifications.map(([title, image, href]) => (
          <article className="certificate-card" key={title}>
            <a href={href} target="_blank" rel="noreferrer" className="certificate-image-wrap">
              <Image src={image} alt={`${title} certificate`} width={800} height={600} className="certificate-image" />
            </a>
            <div><h3>{title}</h3><a href={href} target="_blank" rel="noreferrer">View certificate <Icon name="external" size={16}/></a></div>
          </article>
        ))}
      </section>
    </>
  );
}
