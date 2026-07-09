"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PageSection } from "@/app/page";
import { translations } from "@/lib/translations";

export function OverlayUI({ currentPage, setCurrentPage }: { currentPage: PageSection, setCurrentPage: (page: PageSection) => void }) {
  const [typedText, setTypedText] = useState("");
  const [language, setLanguage] = useState<'en' | 'vi'>('en'); // Default is English
  
  const fullText = "AI Engineer & Data Scientist_";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const navItems: PageSection[] = ['Home', 'Vision', 'Experience', 'Projects', 'Thesis', 'Activities', 'Awards', 'Hobbies', 'Contact'];

  const t = translations[language];

  const panelStyle = {
    background: "rgba(15, 15, 20, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    width: "100%",
    maxWidth: "900px",
    pointerEvents: "auto" as any,
    maxHeight: "75vh",
    overflowY: "auto" as any,
  };

  const containerStyle: React.CSSProperties = { 
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center",
    padding: "0 5vw",
    boxSizing: "border-box"
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: { opacity: 0, scale: 1.05, y: -20, transition: { duration: 0.3, ease: "easeIn" as const } }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          position: "fixed",
          top: "20px",
          left: 0,
          right: 0,
          margin: "0 auto",
          width: "fit-content",
          maxWidth: "95vw",
          background: "rgba(10,10,15,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "8px 15px",
          borderRadius: "30px",
          display: "flex",
          gap: "8px",
          zIndex: 1000,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          pointerEvents: "auto",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {navItems.map((item) => {
          const isActive = currentPage === item;
          return (
            <span 
              key={item} 
              onClick={() => setCurrentPage(item)}
              style={{ 
                color: isActive ? "#fff" : "#94a3b8", 
                cursor: "pointer", 
                fontSize: "0.85rem", 
                fontWeight: isActive ? 600 : 400,
                padding: "5px 10px",
                borderRadius: "15px",
                background: isActive ? "rgba(59, 130, 246, 0.3)" : "transparent",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap"
              }}
              onMouseOver={(e) => {
                if (!isActive) e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                if (!isActive) e.currentTarget.style.color = '#94a3b8';
              }}
            >
              {t.nav[item as keyof typeof t.nav]}
            </span>
          )
        })}
        <div style={{ borderLeft: "1px solid rgba(255,255,255,0.2)", height: "20px", margin: "0 4px" }} />
        <span
          onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
          style={{
            color: "#fff",
            cursor: "pointer",
            fontSize: "0.85rem",
            fontWeight: 600,
            padding: "5px 10px",
            borderRadius: "15px",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5))",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🌐 {language === 'en' ? 'EN' : 'VI'}
        </span>
      </motion.nav>

      <AnimatePresence mode="wait">
        {currentPage === 'Home' && (
          <motion.section key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{...containerStyle, alignItems: "flex-start", justifyContent: "center"}}>
            <div style={{ ...panelStyle, display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap", maxWidth: "800px" }}>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{ width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.2)" }}
              >
                <img src="/image/avatar.png" alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </motion.div>
              <div>
                <h2 style={{ fontSize: "1.2rem", color: "var(--accent-color)", marginBottom: "0.5rem", fontFamily: "monospace" }}>{t.home.systemInit}</h2>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, lineHeight: 1.1 }} className="text-gradient">{t.home.name}<br/><span style={{fontSize: "clamp(1.5rem, 3vw, 2rem)"}}>{t.home.nickname}</span></h1>
                <h3 style={{ fontSize: "1.2rem", color: "#3b82f6", marginTop: "0.5rem", fontFamily: "monospace", minHeight: "1.5rem" }}>{typedText}</h3>
              </div>
              <div style={{ width: "100%", marginTop: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", fontSize: "1.1rem" }}>
                {t.home.subtitle}
                <div style={{ marginTop: "1.5rem" }}>
                  <motion.a 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--accent-glow)" }}
                    whileTap={{ scale: 0.95 }}
                    href="/Bui_Hong_Phuc_CV.pdf" 
                    target="_blank" 
                    style={{ display: "inline-block", padding: "0.8rem 1.5rem", background: "var(--accent-color)", color: "#fff", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}
                  >
                    {t.home.downloadResume}
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Vision' && (
          <motion.section key="vision" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={panelStyle}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>{t.vision.title}</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                {t.vision.p1}
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: t.vision.p2 }} />
            </div>
          </motion.section>
        )}

        {currentPage === 'Experience' && (
          <motion.section key="exp" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, display: "flex", flexDirection: "column", gap: "2rem"}}>
              {t.experience.jobs.map((job, idx) => (
                <div key={idx}>
                  <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    {job.title}
                    <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>{job.date}</span>
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>{job.company}</p>
                  <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem" }}>
                    {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {currentPage === 'Projects' && (
          <motion.section key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "1000px"}}>
              {t.projects.items.map((proj, idx) => {
                const images = [
                  "/image/projects/ai_agent_db_1783425925918.png",
                  "/image/projects/kyc_fintech_1783425937612.png",
                  "/image/projects/risk_model_1783425947474.png",
                  "/image/projects/data_pipeline_1783425957299.png"
                ];
                return (
                  <div key={idx} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", background: "rgba(255,255,255,0.03)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <img src={images[idx]} style={{ width: "220px", height: "150px", objectFit: "cover", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)" }} />
                    <div style={{ flex: 1, minWidth: "250px" }}>
                      <h3 style={{ fontSize: "1.2rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                        {proj.title}
                        <span style={{ fontSize: "0.9rem", color: "var(--accent-color)", fontWeight: "normal" }}>{proj.date}</span>
                      </h3>
                      <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                        {proj.bullets.map((b, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {currentPage === 'Thesis' && (
          <motion.section key="thesis" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, maxWidth: "1000px"}}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "1.5rem", textAlign: "center", lineHeight: 1.3 }}>{t.thesis.title1}<br/><span style={{fontSize: "1.2rem", color: "var(--text-secondary)"}}>{t.thesis.title2}</span></h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
                  <img src="/image/thesis/amr_graph_1783426364334.png" style={{ width: "300px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: "300px" }}>
                    <h3 style={{ color: "#3b82f6", marginBottom: "0.5rem" }}>{t.thesis.problemTitle}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: t.thesis.problemDesc }} />
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center", flexDirection: "row-reverse" }}>
                  <img src="/image/thesis/saft_architecture_1783426375243.png" style={{ width: "300px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: "300px" }}>
                    <h3 style={{ color: "#8b5cf6", marginBottom: "0.5rem" }}>{t.thesis.solutionTitle}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: t.thesis.solutionDesc }} />
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem", textAlign: "center" }}>{t.thesis.contributionsTitle}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "1rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(59, 130, 246, 0.3)", flex: "1 1 200px", textAlign: "center" }}>
                      <h4 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>{t.thesis.contributions[0].title}</h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: t.thesis.contributions[0].desc }} />
                    </div>
                    <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "1rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.3)", flex: "1 1 200px", textAlign: "center" }}>
                      <h4 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>{t.thesis.contributions[1].title}</h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: t.thesis.contributions[1].desc }} />
                    </div>
                    <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "1rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)", flex: "1 1 200px", textAlign: "center" }}>
                      <h4 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>{t.thesis.contributions[2].title}</h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }} dangerouslySetInnerHTML={{ __html: t.thesis.contributions[2].desc }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Activities' && (
          <motion.section key="activities" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, maxWidth: "1000px"}}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>{t.activities.title}</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>{t.activities.items[0].title}</h3>
                  <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "10px" }}>
                    {["z6724152794014_2dfa0e669136b5a86c0ee36f7b357613.jpg", "z6724152799317_2fcfebb063b8cfc677d10fab14586c11.jpg"].map(img => (
                      <img key={img} src={`/image/Mùa hè Xanh/${img}`} alt="Mùa Hè Xanh" style={{ height: "150px", borderRadius: "8px", objectFit: "cover" }} />
                    ))}
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    {t.activities.items[0].desc}
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>{t.activities.items[1].title}</h3>
                  <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "10px" }}>
                    {["z6724186005309_9ebbe1539ce10615c4ede6c0c26a920b.jpg", "z6724774125270_ac45fc35830fce9c2b8557f5a11bec8d.jpg"].map(img => (
                      <img key={img} src={`/image/Ngày hội TXVA/${img}`} alt="Tóc Xanh Vạt Áo" style={{ height: "150px", borderRadius: "8px", objectFit: "cover" }} />
                    ))}
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    {t.activities.items[1].desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Awards' && (
          <motion.section key="awards" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{ ...panelStyle, maxWidth: "1000px" }}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", marginBottom: "2rem", textAlign: "center" }}>{t.awards.title}</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <img src="/image/Tham gia ngày hội của bosch/DSC06884.jpg" style={{ width: "250px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "0.5rem" }}>{t.awards.boschTitle}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                      {t.awards.boschDesc}
                    </p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center", flexDirection: "row-reverse" }}>
                  <img src="/image/VCL hội nghị/z7559020952080_e273f94ae9feb214d3dbd8252adb8baf.jpg" style={{ width: "250px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "0.5rem" }}>{t.awards.vclTitle}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                      {t.awards.vclDesc}
                    </p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div>
                    <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "1rem", textAlign: "center" }}>{t.awards.academicTitle}</h3>
                    <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "10px", justifyContent: "center" }}>
                      <div style={{ textAlign: "center" }}>
                        <img src="/image/Giải ba cuộc thi khoa học kỹ thuật.jpg" style={{ height: "150px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>{t.awards.achievements[0].label}</p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img src="/image/Học Sinh giỏi toán.jpg" style={{ height: "150px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>{t.awards.achievements[1].label}</p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img src="/image/Học bổng khuyến học 2021-2022.jpg" style={{ height: "150px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>{t.awards.achievements[2].label}</p>
                      </div>
                    </div>
                </div>

              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Hobbies' && (
          <motion.section key="hobbies" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={panelStyle}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>{t.hobbies.title}</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                {t.hobbies.desc}
              </p>
              <ul style={{ color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 2, marginLeft: "1.5rem" }}>
                {t.hobbies.items.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {currentPage === 'Contact' && (
          <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{ ...panelStyle, textAlign: "center", maxWidth: "600px" }}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}>{t.contact.title}</h2>
              <p style={{ marginTop: "1rem", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                {t.contact.desc}
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:duyphuc2425@gmail.com" style={{ padding: "0.8rem 1.5rem", background: "var(--accent-color)", color: "#fff", borderRadius: "30px", fontWeight: 600, textDecoration: "none" }}>{t.contact.email}</a>
                <a href="https://github.com/Phucgiacat" target="_blank" rel="noreferrer" style={{ padding: "0.8rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "30px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>{t.contact.github}</a>
                <a href="/Bui_Hong_Phuc_CV.pdf" target="_blank" style={{ padding: "0.8rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "30px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>{t.contact.cv}</a>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
