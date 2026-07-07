"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useScroll } from "@react-three/drei";

export function OverlayUI() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI Engineer & Data Scientist_";
  const scroll = useScroll();
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToPage = (pageIndex: number) => {
    if (scroll && scroll.el) {
      scroll.el.scrollTo({ top: pageIndex * window.innerHeight, behavior: 'smooth' });
    }
  };

  const panelStyle = {
    background: "rgba(15, 15, 20, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    width: "100%",
    maxWidth: "750px",
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
    <div style={{ width: "100vw", height: "1200vh", position: "relative", overflowX: "hidden" }}>
      
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(10,10,15,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "10px 20px",
          borderRadius: "30px",
          display: "flex",
          gap: "15px",
          zIndex: 1000,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}
      >
        {['Home', 'Vision', 'Exp', 'Projects', 'Activities', 'Awards'].map((item, idx) => {
          const pages = [0, 1, 3, 5, 7, 9];
          return (
            <span 
              key={item} 
              onClick={() => scrollToPage(pages[idx])}
              style={{ color: "#fff", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, opacity: 0.8 }}
              onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
              onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
            >
              {item}
            </span>
          )
        })}
      </motion.nav>

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
          Becoming a data professional with strong SQL and Python skills and a record of turning raw, unstructured data — including financial and identity documents — into measurable business outcomes. Comfortable across the full analytics workflow, from data cleaning and feature engineering to building, validating, and presenting models to non-technical stakeholders, as well as deploying production AI systems and building the software (frontend/backend) around them. Self-studying credit-risk fundamentals to build a long-term career in data science within the financial industry.
          
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

      {/* 2. Vision & Personality */}
      <section style={{ ...containerStyle, alignItems: "flex-end" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>Career Vision & Core Values</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            "Beyond building robust AI pipelines and optimizing machine learning models, I am driven by a deep passion for leveraging technology to solve real-world problems. My overarching vision is to bridge the gap between complex AI research and practical business applications—particularly within the financial and credit-risk sectors."
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
            I believe that <strong>technology is best when it brings people together</strong>. This philosophy not only guides my professional code ethics but also fuels my active participation in community service, continuous learning, and sharing knowledge with peers.
          </p>
        </motion.div>
      </section>

      {/* 3. Education & Technical Skills */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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
              <h4 style={{ color: "var(--accent-color)", marginBottom: "0.2rem" }}>AI Systems & Software</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>Conversational AI / agent integration, LangChain, LLM APIs, chatbot development; Frontend (React) & Backend (FastAPI).</p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent-color)", marginBottom: "0.2rem" }}>Analytics, BI & Tools</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>EDA, statistical modeling, Matplotlib, Power BI, Git, Docker, REST APIs.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Experience 1 */}
      <section style={{ ...containerStyle, alignItems: "flex-end" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>Recent Experience</h2>
          
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              AI Engineer (Part-time)
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Oct 2025 – Jun 2026</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>CONG TY TNHH DAU TU & KINH DOANH TRUNG VIET</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Deployed AI solutions into production to support internal business operations, from data ingestion to automated response generation.</li>
              <li>Built an automated AI video-generation pipeline, cutting content-production time by 50%.</li>
              <li>Designed and implemented end-to-end data-processing workflows to structure raw business data for downstream AI applications.</li>
              <li>Built a chatbot website (frontend + backend) integrated with LLM APIs to handle customer inquiries in real time.</li>
            </ul>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Data Science Research Assistant
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Feb 2025 – Present</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>NLP & AI Lab, University of Science</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Built an automated OCR pipeline that turns financial documents into structured, query-ready data, cutting manual processing time by 60% and improving accuracy by 20%.</li>
              <li>Created data-validation and annotation tooling that lifted team throughput by 30%.</li>
              <li>Mentored 3 juniors, owned the team's Git codebase, and introduced a code-review workflow that cut integration bugs by 15%.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 5. Experience 2 */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)" }}>Past Experience</h2>
          
          <div style={{ marginTop: "1.5rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              AI Engineer (Full-time)
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Jun 2024 – Apr 2025</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>Wooda</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Built and deployed a customer-facing conversational AI system, automating support interactions and reducing average response time by 40%.</li>
              <li>Integrated support agents into the platform to handle multi-step user requests end-to-end, improving first-contact resolution rate by 25%.</li>
              <li>Developed and maintained custom AI skills to extend agent capabilities for domain-specific tasks such as order tracking, FAQ handling, and issue escalation.</li>
              <li>Built data-processing pipelines to structure enterprise data, ensuring reliable responses at scale.</li>
            </ul>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Technology Development Intern
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Mar 2024 – May 2024</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "1rem" }}>CMT Global</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Built large-scale data-collection pipelines that aggregated market data into a query-ready SQL database for BI and reporting.</li>
              <li>Resolved critical production issues to maintain 99% system stability for the analytics team.</li>
              <li>Ran functional and manual testing for product verification, reducing post-release defects by 25%.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 6. Project 1 */}
      <section style={{ ...containerStyle, alignItems: "flex-end" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem" }}>Selected Projects</h2>
          
          <div>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Home Credit - Credit Risk Model Stability
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

      {/* 7. Project 2 */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1.5rem" }}>More Projects</h2>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              Enterprise Database & Reporting Automation
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>May 2026</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontStyle: "italic", marginBottom: "0.5rem" }}>Freelance</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Built an AI agent that automates SQL querying and financial reporting, cutting manual data-retrieval time by 40%.</li>
              <li>Integrated it with internal dashboards and led 2 interns to define business use cases with cross-functional stakeholders.</li>
              <li><strong>Tech:</strong> Python, SQL, LangChain, LLM APIs</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
              KYC Document Understanding for Fintech
              <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Oct 2025 - Nov 2025</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontStyle: "italic", marginBottom: "0.5rem" }}>CoverGO Hackathon</p>
            <ul style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Built a system that extracts key fields from Vietnamese financial and identity documents, simulating a fintech KYC flow.</li>
              <li>Tuned models to parse complex table structures, reaching 92% F1 on a held-out test set.</li>
              <li><strong>Tech:</strong> Python, PyTorch, OCR/VLM, Gradio</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 8. Social Activities 1 */}
      <section style={{ ...containerStyle, alignItems: "center" }}>
        <motion.div style={{ ...panelStyle, maxWidth: "1000px", textAlign: "center" }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>Green Summer Volunteer Campaign</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", fontStyle: "italic", marginBottom: "2rem" }}>Chiến dịch Mùa Hè Xanh</p>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              "z6724152794014_2dfa0e669136b5a86c0ee36f7b357613.jpg",
              "z6724152799317_2fcfebb063b8cfc677d10fab14586c11.jpg",
              "z6724152806621_f4d8f029499cec95e767cd5c0b9eb8cf.jpg"
            ].map((img, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)" }} 
                src={`/image/Mùa hè Xanh/${img}`} 
                alt="Mùa Hè Xanh" 
                style={{ height: "180px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", transition: "border 0.3s" }} 
              />
            ))}
          </div>

          <div style={{ marginTop: "2rem", background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "15px", borderLeft: "4px solid #3b82f6" }}>
            <p style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.7, textAlign: "left" }}>
              "Tham gia Mùa Hè Xanh không chỉ là những chuyến đi xa để cống hiến sức trẻ cho cộng đồng, mà còn là hành trình tôi tìm thấy sự gắn kết, lòng trắc ẩn và tinh thần làm việc nhóm tuyệt vời nhất. Nhìn những nụ cười rạng rỡ của người dân và sự sát cánh của đồng đội, tôi hiểu rằng giá trị lớn nhất của tri thức chính là khả năng phụng sự xã hội."
            </p>
          </div>
        </motion.div>
      </section>

      {/* 9. Social Activities 2 */}
      <section style={{ ...containerStyle, alignItems: "center" }}>
        <motion.div style={{ ...panelStyle, maxWidth: "1000px", textAlign: "center" }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>Tóc Xanh Vạt Áo Festival</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", fontStyle: "italic", marginBottom: "2rem" }}>Ngày hội Tóc Xanh Vạt Áo - Tôn vinh văn hóa truyền thống</p>
          
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              "z6724186005309_9ebbe1539ce10615c4ede6c0c26a920b.jpg",
              "z6724774125270_ac45fc35830fce9c2b8557f5a11bec8d.jpg",
              "z6724776582060_397dcca288440155350c9f212068796f.jpg"
            ].map((img, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.1, zIndex: 10, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.5)" }} 
                src={`/image/Ngày hội TXVA/${img}`} 
                alt="Ngày hội Tóc Xanh Vạt Áo" 
                style={{ height: "180px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }} 
              />
            ))}
          </div>

          <div style={{ marginTop: "2rem", background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "15px", borderLeft: "4px solid #8b5cf6" }}>
            <p style={{ color: "#e2e8f0", fontSize: "1.1rem", lineHeight: 1.7, textAlign: "left" }}>
              "Đắm chìm vào không gian của 'Tóc Xanh Vạt Áo', tôi khoác lên mình cổ phục Việt với một niềm tự hào khó tả. Những khoảnh khắc này giúp tôi sống chậm lại, kết nối sâu sắc với cội nguồn văn hóa dân tộc. Một người làm AI không chỉ nhìn về tương lai bằng những dòng code, mà còn cần sự dung dưỡng tâm hồn từ những giá trị truyền thống bền vững."
            </p>
          </div>
        </motion.div>
      </section>

      {/* 10. Awards & Publications */}
      <section style={{ ...containerStyle, alignItems: "center" }}>
        <motion.div style={{ ...panelStyle, maxWidth: "1000px", textAlign: "left" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "2rem", textAlign: "center" }}>Awards & Publications</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Bosch */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/image/Tham gia ngày hội của bosch/DSC06884.jpg" 
                style={{ width: "300px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} 
              />
              <div style={{ flex: 1, minWidth: "300px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "0.5rem" }}>🏆 2nd Prize – Bosch Innovation Day 2025</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                  Được xướng tên tại Bosch Innovation Day là minh chứng cho tư duy sáng tạo và khả năng hiện thực hóa các giải pháp kỹ thuật vào môi trường công nghiệp. Trải nghiệm tại cuộc thi giúp tôi rèn luyện kỹ năng phản biện và giải quyết vấn đề dưới áp lực cao.
                </p>
              </div>
            </div>

            <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

            {/* VCL */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center", flexDirection: "row-reverse" }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="/image/VCL hội nghị/z7559020952080_e273f94ae9feb214d3dbd8252adb8baf.jpg" 
                style={{ width: "300px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} 
              />
              <div style={{ flex: 1, minWidth: "300px" }}>
                <h3 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "0.5rem" }}>📄 Paper accepted at VCL 2025</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                  (Vietnamese Conference on Linguistics). Khẳng định niềm đam mê nghiên cứu sâu sắc trong lĩnh vực Xử lý Ngôn ngữ Tự nhiên (NLP). Đóng góp học thuật này là bước đệm vững chắc cho tư duy phân tích rành mạch và khả năng làm việc với các hệ thống AI chuyên sâu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 11. Hobbies / Interests */}
      <section style={{ ...containerStyle, alignItems: "flex-start" }}>
        <motion.div style={panelStyle} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>Beyond The Screen</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
            Một kỹ sư AI xuất sắc không chỉ biết ngồi trước màn hình 24/7. Tôi luôn tìm kiếm niềm vui từ những thứ dung dị nhất trong cuộc sống để duy trì năng lượng sáng tạo vô tận.
          </p>
          <ul style={{ color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 2, marginLeft: "1.5rem" }}>
            <li>🌟 <strong>Thích khám phá:</strong> Tìm hiểu các nền văn hóa mới và trải nghiệm các hoạt động nghệ thuật, giúp tôi có góc nhìn đa chiều.</li>
            <li>📚 <strong>Nghiên cứu tài chính:</strong> Tự học về các mô hình tín dụng (credit-risk) không chỉ là công việc, mà là niềm đam mê thực sự.</li>
            <li>👥 <strong>Người hướng ngoại:</strong> Yêu thích làm việc nhóm, truyền cảm hứng và không ngại thuyết trình trước đám đông để bảo vệ ý tưởng của mình.</li>
          </ul>
        </motion.div>
      </section>

      {/* 12. Contact */}
      <section style={{ ...containerStyle, alignItems: "center" }}>
        <motion.div style={{ ...panelStyle, textAlign: "center", maxWidth: "600px" }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-gradient" style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}>Let's Build the Future</h2>
          <p style={{ marginTop: "1rem", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Luôn tìm kiếm cơ hội để bứt phá giới hạn bản thân trong lĩnh vực Data Science và AI. Nếu bạn đang tìm một mảnh ghép đầy nhiệt huyết và trách nhiệm, chúng ta nên trò chuyện!
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
