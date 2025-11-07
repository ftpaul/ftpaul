// app/resume2/page.tsx
import resume from "../../content/resume2.json";
import styles from "./resume.module.css";
import PrintButton from "./PrintButton";

export default function Page() {
  const basics = resume?.basics ?? {};
  const s = resume?.sections ?? {};

  return (
    <>
    <div id="cv-root" className={styles.stage}>
      <main className={styles.page}>
        {/* LEFT SIDEBAR (grey background) */}
        <section className={styles.content}>
        <header className={styles.sideHeader}>
            <h1 className={styles.name}>{basics.name}</h1>
            {basics.headline && <div className={styles.headline}>{basics.headline}</div>}
          </header>
          {s.summary?.content && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Profile</h2>
              <p className={styles.summary}>{s.summary.content}</p>
            </section>
          )}

          {s.experience?.items?.length > 0 && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              {s.experience.items
                .filter((it: any) => it?.visible !== false)
                .map((role: any, i: number) => (
                  <article key={i} className={styles.role}>
                    <div className={styles.roleHeader}>
                      <h3 className={styles.roleTitle}>
                        {role.position} - {role.company}
                      </h3>
                      <div className={styles.roleMeta}>
                        {[role.location, role.date].filter(Boolean).join(" · ")}
                      </div>
                    </div>
                    {role.summary && <p className={styles.roleSummary}>{role.summary}</p>}
                    {Array.isArray(role.highlights) && role.highlights.length > 0 && (
                      <ul className={styles.bullets}>
                        {role.highlights.map((h: string, idx: number) => (
                          <li key={idx}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
            </section>
          )}
        </section>

        {/* RIGHT CONTENT (white) */}
        
        <aside className={styles.side}>
          

          {/* Contact */}
          <section className={styles.block}>
            <h3 className={styles.blockTitle}>Contact</h3>
            <ul className={styles.kv}>
              {basics.location && <li><span>Location</span><span>{basics.location}</span></li>}
              {basics.email && (
                <li><span>Email</span><span><a href={`mailto:${basics.email}`}>{basics.email}</a></span></li>
              )}
              {basics.url?.href && (
                <li><span>Website</span><span><a href={basics.url.href} target="_blank">{basics.url.label || basics.url.href}</a></span></li>
              )}
              {basics.linkedin?.href && (
                <li><span>LinkedIn</span><span><a href={basics.url.href} target="_blank">{basics.linkedin.label || basics.linkedin.href}</a></span></li>
              )}
            </ul>
          </section>

          {/* Profiles 
          {s.profiles?.items?.length > 0 && (
            <section className={styles.block}>
              <h3 className={styles.blockTitle}>Profiles</h3>
              <ul className={styles.listTight}>
                {s.profiles.items
                  .filter((p: any) => p?.visible !== false)
                  .map((p: any, i: number) => (
                    <li key={i}>
                      <a href={p.url?.href || p.url} target="_blank">
                        {p.username || p.network}
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          )}*/}

          {/* Skills */}
          {s.skills?.items?.length > 0 && (
            <section className={styles.block}>
              <h3 className={styles.blockTitle}>Skills</h3>
              <ul className={styles.listTight}>
                {s.skills.items
                  .filter((it: any) => it?.visible !== false)
                  .map((sk: any, i: number) => (
                    <li key={i}>
                      <strong>{sk.name}:</strong> {(sk.keywords || []).join(", ")}
                    </li>
                  ))}
              </ul>
            </section>
          )}

          {/* Languages */}
          {s.languages?.items?.length > 0 && (
            <section className={styles.block}>
              <h3 className={styles.blockTitle}>Languages</h3>
              <ul className={styles.listTight}>
                {s.languages.items.map((lng: any, i: number) => (
                  <li key={i}>
                    {lng.name} - {lng.description}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {s.education?.items?.length > 0 && (
            <section className={styles.block}>
              <h3 className={styles.blockTitle}>Education</h3>
              {s.education.items.map((ed: any, i: number) => (
                <div key={i} className={styles.eduItem}>
                  <div className={styles.eduInst}>{ed.institution}</div>
                  <div className={styles.eduMeta}>
                    {[ed.studyType, ed.area].filter(Boolean).join(" ")}
                    {ed.date ? ` · ${ed.date}` : ""}
                  </div>
                </div>
              ))}
            </section>
          )}
        </aside>
      </main>

      
    </div>
    
    <div className={styles.actions}>
        <PrintButton />
      </div>
    </>
  );
}
