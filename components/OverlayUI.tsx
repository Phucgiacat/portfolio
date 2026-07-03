"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function OverlayUI() {
  const [typedText, setTypedText] = useState("");
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

  const panelStyle = {
    background: "rgba(15, 15, 20, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    width: "100%",
    maxWidth: "700px",
  };

  const containerStyle: React.CSSProperties = { 
    height: "100vh", 
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    padding: "0 5vw",
    boxSizing: "border-box"
  };

  return (
    <div style={{ width: "100vw", height: "800vh", position: "relative", overflowX: "hidden" }}>
      
      {/* 1. Hero */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ ...panelStyle, display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap" }}
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ width: "120px", height: "120px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", overflow: "hidden", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.2)" }}
          >
            <img src="/image/avatar.png" alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.currentTarget.style.display = 'none' }} />
          </motion.div>
          <div>
            <h2 style={{ fontSize: "1.2rem", color: "var(--accent-color)", marginBottom: "0.5rem", fontFamily: "monospace" }}>&gt; System initialized...</h2>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, lineHeight: 1.1 }} className="text-gradient">BÙI HỒNG PHÚC<br/><span style={{fontSize: "clamp(1.5rem, 3vw, 2rem)"}}>(Ethan)</span></h1>
            <h3 style={{ fontSize: "1.2rem", color: "#3b82f6", marginTop: "0.5rem", fontFamily: "monospace", minHeight: "1.5rem" }}>{typedText}</h3>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ maxWidth: "700px", marginTop: "2rem", lineHeight: 1.8, color: "var(--text-secondary)", fontSize: "1.1rem" }}
        >
          Becoming a data professional with strong SQL and Python skills and a record of turning raw, unstructured data — including financial and identity documents — into measurable business outcomes. Comfortable across the full analytics workflow, from data cleaning and feature engineering to building, validating, and presenting models to non-technical stakeholders. Self-studying credit-risk fundamentals to build a long-term career in data science within the financial industry.
          
          <div style={{ marginTop: "1.5rem" }}>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px var(--accent-glow)" }}
              whileTap={{ scale: 0.95 }}
              href="/Bui_Hong_Phuc_CV.pdf" 
              target="_blank" 
              style={{ display: "inline-block", padding: "0.8rem 1.5rem", background: "var(--accent-color)", color: "#fff", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}
            >
              📄 Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ position: "absolute", bottom: "5vh", left: "50%", transform: "translateX(-50%)", color: "var(--text-secondary)", textAlign: "center", opacity: 0.5 }}
        >
          <div style={{ fontSize: "0.9rem", marginBottom: "0.5rem", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</div>
          <div style={{ fontSize: "1.5rem" }}>↓</div>
        </motion.div>
      </section>

      {/* 2. Education & Technical Skills */}
      <section style={{ ...containerStyle, alignItems: "flex-end" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>Education & Skills</h2>
          
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "0.5rem" }}>🎓 Bachelor of Information Technology</h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>University of Science, Ho Chi Minh City (Sep 2022 – Aug 2026)</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginLeft: "1.5rem" }}>
              <li><strong>GPA: 3.2/4.0</strong> (Major GPA: 3.6/4.0 in AI/ML courses)</li>
              <li><strong>Coursework:</strong> Probability & Statistics, Machine Learning, Data Mining, Database Systems, Deep Learning</li>
            </ul>
          </div>

          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <h4 style={{ color: "var(--accent-color)", marginBottom: "0.2rem" }}>Programming & Data</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Python (pandas, NumPy), SQL.</p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent-color)", marginBottom: "0.2rem" }}>Machine Learning</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>scikit-learn, LightGBM, XGBoost, PyTorch; feature engineering, model validation & evaluation.</p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent-color)", marginBottom: "0.2rem" }}>Analytics, BI & Tools</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>EDA, statistical modeling, Matplotlib, Power BI, Git, Docker, REST APIs.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Experience 1 */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>Experience</h2>
          
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Data Science Research Assistant
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Feb 2025 – Present</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>NLP & AI Lab, University of Science</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Built an automated OCR pipeline that turns financial documents into structured, query-ready data, cutting manual processing time by 60% and improving accuracy by 20%.</li>
              <li>Created data-validation and annotation tooling that lifted team throughput by 30% while keeping training data clean and representative.</li>
              <li>Mentored 3 juniors, owned the team's Git codebase, and introduced a code-review workflow that cut integration bugs by 15%.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 4. Experience 2 */}
      <section style={{ ...containerStyle, alignItems: "flex-end" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>Experience</h2>
          
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Technology Development Intern
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Feb 2025 – Aug 2025</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>CMT Global</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Built large-scale data-collection pipelines that aggregated market data into a query-ready SQL database for BI and reporting.</li>
              <li>Resolved critical production issues to maintain 99% system stability for the analytics team.</li>
              <li>Ran functional and manual testing for product verification, reducing post-release defects by 25%.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 5. Project 1 */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem" }}>Selected Projects</h2>
          
          <div>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Home Credit - Credit Risk Model
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Jun 2026</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontStyle: "italic", marginBottom: "1rem" }}>Kaggle Competition</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Built and evaluated gradient-boosting models to predict client repayment, holding performance stable as data distributions shifted over time.</li>
              <li>Ran EDA and feature engineering on large, imbalanced financial data to surface meaningful credit-risk signals.</li>
              <li><strong>Tech:</strong> Python, pandas, scikit-learn, LightGBM, XGBoost</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 6. Project 2 */}
      <section style={{ ...containerStyle, alignItems: "flex-end" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem" }}>More Projects</h2>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Database & Reporting Automation
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>May 2026</span>
            </h3>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Built an AI agent that automates SQL querying and financial reporting, cutting manual data-retrieval time by 40%.</li>
              <li>Integrated it with internal dashboards and led 2 interns to define business use cases.</li>
              <li><strong>Tech:</strong> Python, SQL, LangChain, LLM APIs</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              KYC Document Understanding
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Oct 2025</span>
            </h3>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Built a system that extracts key fields from Vietnamese documents, simulating a fintech KYC flow.</li>
              <li>Tuned models to parse complex table structures, reaching 92% F1 on a held-out test set.</li>
              <li><strong>Tech:</strong> Python, PyTorch, OCR/VLM, Gradio</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 7. Achievements */}
      <section style={{ ...containerStyle, alignItems: "center" }}>
        <motion.div style={{ textAlign: "center", width: "100%", maxWidth: "1200px" }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)", marginBottom: "2rem" }}>Certifications & Gallery</h2>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { src: "/image/DataScienceChallenge.jpg", alt: "Data Science Challenge" },
              { src: "/image/Giải ba cuộc thi khoa học kỹ thuật.jpg", alt: "Giải ba cuộc thi KHKT" },
              { src: "/image/Học Sinh giỏi toán.jpg", alt: "Học sinh giỏi Toán" },
              { src: "/image/Học bổng khuyến học 2021-2022.jpg", alt: "Học bổng khuyến học 21-22" },
              { src: "/image/Đại điểm thi THPT-QG cao nhất trường.jpg", alt: "Điểm cao nhất THPT Quốc gia" },
              { src: "/image/Đạt thành tích tốt trong mhx.jpg", alt: "Mùa hè xanh" }
            ].map((img, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 3 : -3, zIndex: 10 }} 
                src={img.src} 
                alt={img.alt} 
                style={{ height: "150px", borderRadius: "10px", objectFit: "cover", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", transition: "border 0.3s" }} 
              />
            ))}
          </div>

          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            <p>🏆 2nd Prize – Bosch Innovation Day 2025</p>
            <p>🏆 3rd Prize – Provincial Science Fair</p>
            <p>📄 Publication: Paper accepted at VCL 2025</p>
          </div>
        </motion.div>
      </section>

      {/* 8. Contact */}
      <section style={{ ...containerStyle, alignItems: "center" }}>
        <motion.div style={{ ...panelStyle, textAlign: "center", maxWidth: "600px" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}>Let's Build the Future</h2>
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Currently seeking opportunities to build a long-term career in data science and AI. Let's discuss new projects and creative ideas.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent-glow)" }} whileTap={{ scale: 0.95 }} href="mailto:duyphuc2425@gmail.com" style={{ 
              padding: "1rem 2rem", background: "var(--accent-color)", color: "#fff", borderRadius: "30px", fontWeight: 600, textDecoration: "none"
            }}>
              Email Me
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }} whileTap={{ scale: 0.95 }} href="https://github.com/Phucgiacat" target="_blank" rel="noreferrer" style={{ 
              padding: "1rem 2rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "30px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none"
            }}>
              GitHub
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }} whileTap={{ scale: 0.95 }} href="/Bui_Hong_Phuc_CV.pdf" target="_blank" style={{ 
              padding: "1rem 2rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "30px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none"
            }}>
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
