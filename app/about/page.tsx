import Image from "next/image";
import Link from "next/link";

import styles from "./about.module.css";
import { education, experience } from "@/data/site";


const coreStack = [
  "Azure",
  "Databricks",
  "Synapse",
  "Python",
  "SQL",
  "Power BI",
];


function getExperienceLogo(company: string) {
  const normalized = company.toLowerCase();

  if (normalized.includes("volvo")) {
    return "/Images/volvo.png";
  }

  return "/Images/company.png";
}


function getEducationLogo(school: string) {
  const normalized = school.toLowerCase();

  if (normalized.includes("wayne")) {
    return "/images/wayne-state.png";
  }

  if (
    normalized.includes("pune") ||
    normalized.includes("savitribai")
  ) {
    return "/images/pune-university.jpg";
  }

  return "/Images/university.png";
}
const careerJourney = [
  {
    period: "2013 — 2017",
    type: "Education",
    title: "B.E. Mechanical Engineering",
    organization: "Savitribai Phule Pune University",
    image: "/images/pune-university.jpg",
    position: "10%",
    side: "top",
  },
  {
    period: "2017 — 2019",
    type: "Experience",
    title: "Sales Analyst",
    organization: "Bosch",
    image: "/images/bosch.svg",
    position: "30%",
    side: "bottom",
  },
  {
    period: "2019 — 2021",
    type: "Education",
    title: "M.S. Industrial Engineering",
    organization: "Wayne State University · Data Analytics",
    image: "/images/wayne-state.png",
    position: "50%",
    side: "top",
  },
  {
    period: "2021 — 2023",
    type: "Experience",
    title: "Quality Engineer",
    organization: "Volvo Trucks North America",
    image: "/images/volvo.svg",
    position: "70%",
    side: "bottom",
  },
  {
    period: "2023 — Present",
    type: "Experience",
    title: "Data Analyst",
    organization: "Volvo Trucks North America",
    image: "/images/volvo.svg",
    position: "90%",
    side: "top",
  },
];


export default function AboutPage() {
  return (
    <main className={styles.aboutRoot}>

      {/* =====================================================
          ABOUT INTRO
      ====================================================== */}
      <section className={`${styles.aboutIntro} ${styles.shell}`}>
        <div className={styles.aboutGrid}>

          {/* PHOTO */}
          <div className={styles.photoColumn}>
            <div className={styles.aboutPhoto}>
              <Image
                src="/Images/profile.png"
                alt="Rajratna Patil"
                width={720}
                height={820}
                priority
              />
            </div>

            <div className={styles.profileMeta}>
              <strong>Rajratna Patil</strong>

              <span>
                Data Engineering · Analytics · Operations
              </span>
            </div>
          </div>


          {/* COPY */}
          <div className={styles.aboutCopy}>
            <span className={styles.sectionEyebrow}>
              ABOUT
            </span>

            <h1>
              I like solving the problem behind the data.
            </h1>

            <p className={styles.introLead}>
              My background combines engineering, operations,
              analytics and data engineering — which means I tend
              to look at data systems from both the technical and
              operational side.
            </p>

            <p>
              I started my career working close to manufacturing
              operations and quality problems. That experience
              taught me to understand the process first: how work
              actually happens, where information breaks down and
              what decisions people are trying to make.
            </p>

            <p>
              Today I apply that same thinking to data engineering.
              I build ingestion pipelines, transformation workflows,
              analytical models and reporting products that connect
              operational systems to useful information.
            </p>

            <p>
              I&apos;m especially interested in the space where
              engineering and analytics overlap — building systems
              that are technically reliable without losing sight of
              the people and processes they support.
            </p>


            {/* PRINCIPLES */}
            <div className={styles.principleGrid}>
              <div>
                <span>01</span>

                <strong>
                  Understand the operation
                </strong>

                <p>
                  Start with the process and decision before
                  choosing the technology.
                </p>
              </div>

              <div>
                <span>02</span>

                <strong>
                  Build for reliability
                </strong>

                <p>
                  Create pipelines and models that are repeatable
                  and maintainable.
                </p>
              </div>

              <div>
                <span>03</span>

                <strong>
                  Make data usable
                </strong>

                <p>
                  Turn technical complexity into information people
                  can understand and act on.
                </p>
              </div>
            </div>


            {/* STACK */}
            <div className={styles.stackRow}>
              <span className={styles.stackLabel}>
                CORE STACK
              </span>

              <div className={styles.skillCloud}>
                {coreStack.map((item) => (
                  <span key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

{/* =====================================================
    JOURNEY
===================================================== */}
<section className={styles.journeySection}>
  <div className={styles.shell}>

    <div className={styles.journeyHeader}>
      <div>
        <span className={styles.sectionEyebrow}>
          MY JOURNEY
        </span>

        <h2>
          From Operational Experience Data Analytics and Data Engineering.
        </h2>
      </div>

      <p>
        A journey across engineering, business analysis,
        operations and data.
      </p>
    </div>


    {/* =================================================
        DESKTOP JOURNEY
    ================================================== */}
    <div className={styles.desktopJourney}>
      <div className={styles.journeyCanvas}>

        <svg
          className={styles.journeyRoad}
          viewBox="0 0 1200 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M 70 210
              C 145 115, 250 305, 335 210
              C 415 115, 520 305, 600 210
              C 680 115, 785 305, 865 210
              C 945 115, 1050 305, 1130 210
            "
            className={styles.roadOuter}
          />

          <path
            id="careerRoad"
            d="
              M 70 210
              C 145 115, 250 305, 335 210
              C 415 115, 520 305, 600 210
              C 680 115, 785 305, 865 210
              C 945 115, 1050 305, 1130 210
            "
            className={styles.roadPath}
          />

          <g className={styles.roadTraveler}>
            <circle
              r="12"
              className={styles.travelerOuter}
            />

            <circle
              r="4"
              className={styles.travelerInner}
            />

            <animateMotion
              dur="12s"
              repeatCount="indefinite"
            >
              <mpath href="#careerRoad" />
            </animateMotion>
          </g>
        </svg>


        {careerJourney.map((item, index) => (
          <article
            key={`${item.title}-${item.period}`}
            className={`
              ${styles.journeyStop}
              ${
                item.side === "top"
                  ? styles.journeyStopTop
                  : styles.journeyStopBottom
              }
            `}
            style={{
              left: item.position,
              animationDelay: `${index * 150}ms`,
            }}
          >
            <div className={styles.journeyCard}>
              <div className={styles.journeyCardTop}>
                <div className={styles.journeyLogo}>
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>

                <span className={styles.journeyType}>
                  {item.type}
                </span>
              </div>

              <span className={styles.journeyPeriod}>
                {item.period}
              </span>

              <h3>{item.title}</h3>

              <p>{item.organization}</p>
            </div>

            <div className={styles.journeyMarker}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </article>
        ))}

      </div>
    </div>


    {/* =================================================
        MOBILE JOURNEY
    ================================================== */}
    <div className={styles.mobileJourney}>

      <div className={styles.mobileJourneyHint}>
        Swipe through my journey
        <span>→</span>
      </div>

      <div className={styles.mobileJourneyScroller}>
        <div className={styles.mobileJourneyTrack}>

          {careerJourney.map((item, index) => (
            <article
              className={styles.mobileJourneyStage}
              key={`mobile-${item.title}-${item.period}`}
            >
              <div className={styles.mobileJourneyNumber}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={styles.mobileJourneyCard}>
                <div className={styles.mobileJourneyTop}>

                  <div className={styles.mobileJourneyLogo}>
                    <img
                      src={item.image}
                      alt=""
                    />
                  </div>

                  <span className={styles.mobileJourneyType}>
                    {item.type}
                  </span>

                </div>

                <span className={styles.mobileJourneyPeriod}>
                  {item.period}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.organization}
                </p>
              </div>

              <div className={styles.mobileJourneyRoad}>
                <span className={styles.mobileJourneyDot} />

                {index !== careerJourney.length - 1 && (
                  <span className={styles.mobileJourneyLine} />
                )}
              </div>

            </article>
          ))}

        </div>
      </div>

      <div className={styles.mobileJourneyProgress}>
        {careerJourney.map((item, index) => (
          <span
            key={`progress-${item.title}`}
            className={
              index === 0
                ? styles.mobileProgressActive
                : undefined
            }
          />
        ))}
      </div>

    </div>

  </div>
</section>
      {/* =====================================================
          CLOSE
      ====================================================== */}
      <section className={styles.closeSection}>
        <div className={`${styles.shell} ${styles.closeGrid}`}>

          <div>
            <span className={styles.sectionEyebrow}>
              WHAT I BUILD
            </span>

            <h2>
              Reliable underneath.
              <br />
              Useful at the end.
            </h2>
          </div>

          <div className={styles.closeCopy}>
            <p>
              Explore projects where data engineering,
              operational context and analytics come together.
            </p>

            <Link
              href="/projects/"
              className={styles.projectLink}
            >
              Projects
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}