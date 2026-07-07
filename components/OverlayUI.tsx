"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PageSection } from "@/app/page";

export function OverlayUI({ currentPage, setCurrentPage }: { currentPage: PageSection, setCurrentPage: (page: PageSection) => void }) {
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

  const navItems: PageSection[] = ['Home', 'Vision', 'Experience', 'Projects', 'Thesis', 'Activities', 'Awards', 'Hobbies', 'Contact'];

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
    pointerEvents: "auto" as any, // allow clicking inside panel
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

  // Variants for smooth page transitions
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
    exit: { opacity: 0, scale: 1.05, y: -20, transition: { duration: 0.3, ease: "easeIn" as const } }
  };

  return (
    <>
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
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          pointerEvents: "auto", // make nav clickable
          flexWrap: "nowrap",
          overflowX: "auto",
          maxWidth: "95vw",
          scrollbarWidth: "none", // Firefox
          justifyContent: "flex-start",
          WebkitOverflowScrolling: "touch"
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
                fontSize: "0.9rem", 
                fontWeight: isActive ? 600 : 400,
                padding: "5px 10px",
                borderRadius: "15px",
                background: isActive ? "rgba(59, 130, 246, 0.3)" : "transparent",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                if (!isActive) e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                if (!isActive) e.currentTarget.style.color = '#94a3b8';
              }}
            >
              {item}
            </span>
          )
        })}
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
                <h2 style={{ fontSize: "1.2rem", color: "var(--accent-color)", marginBottom: "0.5rem", fontFamily: "monospace" }}>&gt; System initialized...</h2>
                <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: 0, lineHeight: 1.1 }} className="text-gradient">BÙI HỒNG PHÚC<br/><span style={{fontSize: "clamp(1.5rem, 3vw, 2rem)"}}>(Ethan)</span></h1>
                <h3 style={{ fontSize: "1.2rem", color: "#3b82f6", marginTop: "0.5rem", fontFamily: "monospace", minHeight: "1.5rem" }}>{typedText}</h3>
              </div>
              <div style={{ width: "100%", marginTop: "1rem", lineHeight: 1.8, color: "var(--text-secondary)", fontSize: "1.1rem" }}>
                Becoming a data professional with strong SQL and Python skills and a record of turning raw, unstructured data — including financial and identity documents — into measurable business outcomes.
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
              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Vision' && (
          <motion.section key="vision" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={panelStyle}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>Career Vision & Core Values</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                "Beyond building robust AI pipelines and optimizing machine learning models, I am driven by a deep passion for leveraging technology to solve real-world problems. My overarching vision is to bridge the gap between complex AI research and practical business applications—particularly within the financial and credit-risk sectors."
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
                I believe that <strong>technology is best when it brings people together</strong>. This philosophy not only guides my professional code ethics but also fuels my active participation in community service, continuous learning, and sharing knowledge with peers.
              </p>
            </div>
          </motion.section>
        )}

        {currentPage === 'Experience' && (
          <motion.section key="exp" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, display: "flex", flexDirection: "column", gap: "2rem"}}>
              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  AI Engineer (Part-time)
                  <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Oct 2025 – Jun 2026</span>
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>TRUNG VIET INVESTMENT</p>
                <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem" }}>
                  <li>Deployed AI solutions into production to support internal business operations, from data ingestion to automated response generation.</li>
                  <li>Built an automated AI video-generation pipeline, cutting content-production time by 50%.</li>
                  <li>Designed and implemented end-to-end data-processing workflows to structure raw business data for downstream AI applications.</li>
                  <li>Built a chatbot website (frontend + backend) integrated with LLM APIs to handle customer inquiries in real time.</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  Data Science Research Assistant
                  <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Feb 2025 – Present</span>
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>NLP & AI Lab, University of Science</p>
                <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem" }}>
                  <li>Built an automated OCR pipeline that turns financial documents into structured, query-ready data, cutting manual processing time by 60% and improving accuracy by 20%.</li>
                  <li>Created data-validation and annotation tooling that lifted team throughput by 30% while keeping training data clean and representative.</li>
                  <li>Mentored 3 juniors, owned the team's Git codebase, and introduced a code-review workflow that cut integration bugs by 15%.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: "1.3rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                  AI Engineer (Full-time)
                  <span style={{ fontSize: "1rem", color: "var(--accent-color)", fontWeight: "normal" }}>Jun 2024 – Apr 2025</span>
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>Wooda</p>
                <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem" }}>
                  <li>Built and deployed a customer-facing conversational AI system, automating support interactions and reducing average response time by 40%.</li>
                  <li>Integrated support agents into the platform to handle multi-step user requests end-to-end, improving first-contact resolution rate by 25%.</li>
                  <li>Developed and maintained custom AI skills to extend agent capabilities for domain-specific tasks such as order tracking, FAQ handling, and issue escalation.</li>
                  <li>Built data-processing pipelines to structure enterprise data, ensuring the AI system delivered consistent, reliable responses at scale.</li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Projects' && (
          <motion.section key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "1000px"}}>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", background: "rgba(255,255,255,0.03)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/image/projects/ai_agent_db_1783425925918.png" style={{ width: "220px", height: "150px", objectFit: "cover", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3 style={{ fontSize: "1.2rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    Enterprise Database & Reporting Automation (AI Agent)
                    <span style={{ fontSize: "0.9rem", color: "var(--accent-color)", fontWeight: "normal" }}>May 2026</span>
                  </h3>
                  <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                    <li>Built an AI agent that automates SQL querying and financial-report generation across enterprise databases, cutting manual data-retrieval time by 40%.</li>
                    <li>Integrated the agent with internal dashboards and led a 2-person team to define business use cases.</li>
                    <li><strong>Tech:</strong> OpenClaw, Python, SQL, LangChain, LLM APIs</li>
                  </ul>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", background: "rgba(255,255,255,0.03)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/image/projects/kyc_fintech_1783425937612.png" style={{ width: "220px", height: "150px", objectFit: "cover", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3 style={{ fontSize: "1.2rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    KYC Document Understanding for Fintech
                    <span style={{ fontSize: "0.9rem", color: "var(--accent-color)", fontWeight: "normal" }}>Oct 2025 – Nov 2025</span>
                  </h3>
                  <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                    <li>Built a system to automatically extract key fields from Vietnamese financial and identity documents (invoices, ID cards).</li>
                    <li>Tuned document-understanding models to parse complex table structures, reaching 92% F1 on a held-out test set.</li>
                    <li><strong>Tech:</strong> Python, PyTorch, OCR/VLM, Gradio</li>
                    <li><strong>Link:</strong> <a href="https://github.com/Phucgiacat/CoverHackatho-project" target="_blank" style={{ color: "#3b82f6" }}>github.com/Phucgiacat/CoverHackatho-project</a></li>
                  </ul>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", background: "rgba(255,255,255,0.03)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/image/projects/risk_model_1783425947474.png" style={{ width: "220px", height: "150px", objectFit: "cover", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3 style={{ fontSize: "1.2rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    Model Reliability for Risk-Sensitive Applications
                    <span style={{ fontSize: "0.9rem", color: "var(--accent-color)", fontWeight: "normal" }}>Aug 2025 – Oct 2025</span>
                  </h3>
                  <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                    <li>Designed a reward model to detect factual errors in model outputs, targeting reliability for risk-sensitive domains such as finance.</li>
                    <li>Built automated evaluation pipelines to measure error rates across model versions, reaching 86% accuracy and reducing false positives by 18%.</li>
                    <li><strong>Link:</strong> <a href="https://github.com/monster1909/Detect-hallucination-using-LoRa-and-GRPO" target="_blank" style={{ color: "#3b82f6" }}>GitHub Repository</a></li>
                  </ul>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", background: "rgba(255,255,255,0.03)", padding: "1.5rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <img src="/image/projects/data_pipeline_1783425957299.png" style={{ width: "220px", height: "150px", objectFit: "cover", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)" }} />
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3 style={{ fontSize: "1.2rem", color: "#fff", display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                    End-to-End Data Labeling Pipeline (Published)
                    <span style={{ fontSize: "0.9rem", color: "var(--accent-color)", fontWeight: "normal" }}>Feb 2024 – Aug 2024</span>
                  </h3>
                  <ul style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginLeft: "1.5rem", marginTop: "0.5rem" }}>
                    <li>Built an automated data-labeling system (OCR + CV) reaching 90% character-level accuracy and cutting annotation workload by 60%.</li>
                    <li>Implemented an error-correction algorithm (Levenshtein matching) to improve data quality for downstream models.</li>
                    <li>Published a paper on the methodology at VCL 2025.</li>
                    <li><strong>Link:</strong> <a href="https://github.com/Phucgiacat/ocr_corrector" target="_blank" style={{ color: "#3b82f6" }}>github.com/Phucgiacat/ocr_corrector</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </motion.section>
        )}

        {currentPage === 'Thesis' && (
          <motion.section key="thesis" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{...panelStyle, maxWidth: "1000px"}}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", marginBottom: "1.5rem", textAlign: "center", lineHeight: 1.3 }}>MÔ HÌNH NGỮ NGHĨA TRỪU TƯỢNG TRONG DỊCH MÁY VIỆT-ANH<br/><span style={{fontSize: "1.2rem", color: "var(--text-secondary)"}}>TRÊN MIỀN TƯ LIỆU CỔ</span></h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                
                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
                  <img src="/image/thesis/amr_graph_1783426364334.png" style={{ width: "300px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: "300px" }}>
                    <h3 style={{ color: "#3b82f6", marginBottom: "0.5rem" }}>The Problem: Translation of Classical Texts</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                      Dịch thuật tự động cho các tác phẩm văn học cổ điển Trung Hoa (Tứ Đại Danh Tác) sang tiếng Việt và tiếng Anh gặp nhiều thách thức lớn do <strong>hiện tượng lược bỏ chủ ngữ (pro-drop)</strong> và cấu trúc ngữ pháp Hán-Việt phức tạp. Các mô hình ngôn ngữ lớn (LLM) hiện đại thường dịch sai ngữ nghĩa hoặc mất bối cảnh khi xử lý các dữ liệu này.
                    </p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center", flexDirection: "row-reverse" }}>
                  <img src="/image/thesis/saft_architecture_1783426375243.png" style={{ width: "300px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: "300px" }}>
                    <h3 style={{ color: "#8b5cf6", marginBottom: "0.5rem" }}>The Solution: Structure-Aware Fine-Tuning (SAFT)</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                      Chúng tôi đề xuất kiến trúc <strong>SAFT</strong> tích hợp biểu diễn đồ thị <strong>Abstract Meaning Representation (AMR)</strong> vào mô hình Qwen2.5. Bằng cách sử dụng <em>Magnetic Laplacian Eigenvectors</em> để tạo vector nhúng vị trí (BFS-PE) và đưa qua một mạng MLP nhỏ vào tầng embedding, hệ thống có thể hiểu sâu sắc cấu trúc câu mà chỉ tăng <strong>≈ 1.18%</strong> tham số tính toán.
                    </p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem", textAlign: "center" }}>Key Contributions</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "1rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(59, 130, 246, 0.3)", flex: "1 1 200px", textAlign: "center" }}>
                      <h4 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>ViAMR Dataset</h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>Xây dựng bộ dữ liệu AMR đầu tiên cho tiếng Việt với <strong>22.055 đồ thị</strong> chất lượng cao.</p>
                    </div>
                    <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "1rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.3)", flex: "1 1 200px", textAlign: "center" }}>
                      <h4 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>AMR Parser</h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>Fine-tune mô hình AMRBART chuyên biệt cho phân tích cú pháp tiếng Việt.</p>
                    </div>
                    <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "1rem 1.5rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)", flex: "1 1 200px", textAlign: "center" }}>
                      <h4 style={{ color: "#fff", margin: "0 0 0.5rem 0" }}>State-of-the-Art</h4>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>Cải thiện đáng kể điểm <strong>BLEU và COMET</strong>, tạo benchmark mới cho dịch máy ngữ liệu cổ.</p>
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
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", marginBottom: "1rem", textAlign: "center" }}>Social & Cultural Activities</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>🌱 Green Summer Volunteer Campaign (Mùa Hè Xanh)</h3>
                  <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "10px" }}>
                    {["z6724152794014_2dfa0e669136b5a86c0ee36f7b357613.jpg", "z6724152799317_2fcfebb063b8cfc677d10fab14586c11.jpg"].map(img => (
                      <img key={img} src={`/image/Mùa hè Xanh/${img}`} alt="Mùa Hè Xanh" style={{ height: "150px", borderRadius: "8px", objectFit: "cover" }} />
                    ))}
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    "Nhìn những nụ cười rạng rỡ của người dân và sự sát cánh của đồng đội, tôi hiểu rằng giá trị lớn nhất của tri thức chính là khả năng phụng sự xã hội."
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "#fff", marginBottom: "1rem" }}>🎎 Tóc Xanh Vạt Áo Festival</h3>
                  <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "10px" }}>
                    {["z6724186005309_9ebbe1539ce10615c4ede6c0c26a920b.jpg", "z6724774125270_ac45fc35830fce9c2b8557f5a11bec8d.jpg"].map(img => (
                      <img key={img} src={`/image/Ngày hội TXVA/${img}`} alt="Tóc Xanh Vạt Áo" style={{ height: "150px", borderRadius: "8px", objectFit: "cover" }} />
                    ))}
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    "Khoác lên mình cổ phục Việt giúp tôi kết nối sâu sắc với cội nguồn văn hóa. Một người làm AI cần sự dung dưỡng tâm hồn từ những giá trị truyền thống bền vững."
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {currentPage === 'Awards' && (
          <motion.section key="awards" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{ ...panelStyle, maxWidth: "1000px" }}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", marginBottom: "2rem", textAlign: "center" }}>Awards & Publications</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                  <img src="/image/Tham gia ngày hội của bosch/DSC06884.jpg" style={{ width: "250px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "0.5rem" }}>🏆 2nd Prize – Bosch Innovation Day 2025</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                      Minh chứng cho tư duy sáng tạo và khả năng hiện thực hóa các giải pháp kỹ thuật vào môi trường công nghiệp. Trải nghiệm tại cuộc thi giúp tôi rèn luyện kỹ năng phản biện dưới áp lực cao.
                    </p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", alignItems: "center", flexDirection: "row-reverse" }}>
                  <img src="/image/VCL hội nghị/z7559020952080_e273f94ae9feb214d3dbd8252adb8baf.jpg" style={{ width: "250px", borderRadius: "12px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "0.5rem" }}>📄 Paper accepted at VCL 2025</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                      (Vietnamese Conference on Linguistics). Đóng góp học thuật này là bước đệm vững chắc cho tư duy phân tích rành mạch và khả năng làm việc với các hệ thống AI chuyên sâu.
                    </p>
                  </div>
                </div>

                <hr style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                <div>
                    <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "1rem", textAlign: "center" }}>🏅 Academic Achievements</h3>
                    <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "10px", justifyContent: "center" }}>
                      <div style={{ textAlign: "center" }}>
                        <img src="/image/Giải ba cuộc thi khoa học kỹ thuật.jpg" style={{ height: "150px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>3rd Prize - Provincial Science Fair</p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img src="/image/Học Sinh giỏi toán.jpg" style={{ height: "150px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>Excellent Student in Math</p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <img src="/image/Học bổng khuyến học 2021-2022.jpg" style={{ height: "150px", borderRadius: "8px", objectFit: "cover", border: "1px solid rgba(255,255,255,0.1)" }} />
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.5rem" }}>Study Encouragement Scholarship</p>
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
              <h2 className="text-gradient" style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", marginBottom: "1rem" }}>Beyond The Screen</h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                Tôi luôn tìm kiếm niềm vui từ những thứ dung dị nhất trong cuộc sống để duy trì năng lượng sáng tạo vô tận.
              </p>
              <ul style={{ color: "#e2e8f0", fontSize: "1.05rem", lineHeight: 2, marginLeft: "1.5rem" }}>
                <li>🌟 <strong>Thích khám phá:</strong> Tìm hiểu các nền văn hóa mới và trải nghiệm các hoạt động nghệ thuật.</li>
                <li>📚 <strong>Nghiên cứu tài chính:</strong> Tự học về các mô hình tín dụng (credit-risk) không chỉ là công việc, mà là niềm đam mê.</li>
                <li>👥 <strong>Người hướng ngoại:</strong> Yêu thích làm việc nhóm, truyền cảm hứng và thuyết trình.</li>
              </ul>
            </div>
          </motion.section>
        )}

        {currentPage === 'Contact' && (
          <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit" style={containerStyle}>
            <div style={{ ...panelStyle, textAlign: "center", maxWidth: "600px" }}>
              <h2 className="text-gradient" style={{ fontSize: "clamp(2.5rem, 5vw, 3rem)" }}>Let's Build the Future</h2>
              <p style={{ marginTop: "1rem", color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1.1rem", lineHeight: 1.6 }}>
                Nếu bạn đang tìm một mảnh ghép đầy nhiệt huyết và trách nhiệm trong lĩnh vực Data Science và AI, chúng ta nên trò chuyện!
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:duyphuc2425@gmail.com" style={{ padding: "0.8rem 1.5rem", background: "var(--accent-color)", color: "#fff", borderRadius: "30px", fontWeight: 600, textDecoration: "none" }}>Email Me</a>
                <a href="https://github.com/Phucgiacat" target="_blank" rel="noreferrer" style={{ padding: "0.8rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "30px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>GitHub</a>
                <a href="/Bui_Hong_Phuc_CV.pdf" target="_blank" style={{ padding: "0.8rem 1.5rem", background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "30px", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>Download CV</a>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}
