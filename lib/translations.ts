export const translations = {
  en: {
    nav: {
      Home: 'Home',
      Vision: 'Vision',
      Experience: 'Experience',
      Projects: 'Projects',
      Thesis: 'Thesis',
      Activities: 'Activities',
      Awards: 'Awards',
      Hobbies: 'Hobbies',
      Contact: 'Contact',
    },
    home: {
      systemInit: "> System initialized...",
      name: "BUI HONG PHUC",
      nickname: "(Ethan)",
      subtitle: "Becoming a data professional with strong SQL and Python skills and a record of turning raw, unstructured data — including financial and identity documents — into measurable business outcomes.",
      downloadResume: "📄 Download Resume",
    },
    vision: {
      title: "Career Vision & Core Values",
      p1: "\"Beyond building robust AI pipelines and optimizing machine learning models, I am driven by a deep passion for leveraging technology to solve real-world problems. My overarching vision is to bridge the gap between complex AI research and practical business applications—particularly within the financial and credit-risk sectors.\"",
      p2: "I believe that <strong>technology is best when it brings people together</strong>. This philosophy not only guides my professional code ethics but also fuels my active participation in community service, continuous learning, and sharing knowledge with peers.",
    },
    experience: {
      jobs: [
        {
          title: "AI Engineer (Part-time)",
          date: "Oct 2025 – Jun 2026",
          company: "TRUNG VIET INVESTMENT",
          bullets: [
            "Deployed AI solutions into production to support internal business operations, from data ingestion to automated response generation.",
            "Built an automated AI video-generation pipeline, cutting content-production time by 50%.",
            "Designed and implemented end-to-end data-processing workflows to structure raw business data for downstream AI applications.",
            "Built a chatbot website (frontend + backend) integrated with LLM APIs to handle customer inquiries in real time.",
          ]
        },
        {
          title: "Data Science Research Assistant",
          date: "Feb 2025 – Present",
          company: "NLP & AI Lab, University of Science",
          bullets: [
            "Built an automated OCR pipeline that turns financial documents into structured, query-ready data, cutting manual processing time by 60% and improving accuracy by 20%.",
            "Created data-validation and annotation tooling that lifted team throughput by 30% while keeping training data clean and representative.",
            "Mentored 3 juniors, owned the team's Git codebase, and introduced a code-review workflow that cut integration bugs by 15%.",
          ]
        },
        {
          title: "AI Engineer (Full-time)",
          date: "Jun 2024 – Apr 2025",
          company: "Wooda",
          bullets: [
            "Built and deployed a customer-facing conversational AI system, automating support interactions and reducing average response time by 40%.",
            "Integrated support agents into the platform to handle multi-step user requests end-to-end, improving first-contact resolution rate by 25%.",
            "Developed and maintained custom AI skills to extend agent capabilities for domain-specific tasks such as order tracking, FAQ handling, and issue escalation.",
            "Built data-processing pipelines to structure enterprise data, ensuring the AI system delivered consistent, reliable responses at scale.",
          ]
        }
      ]
    },
    projects: {
      items: [
        {
          title: "Enterprise Database & Reporting Automation (AI Agent)",
          date: "May 2026",
          bullets: [
            "Built an AI agent that automates SQL querying and financial-report generation across enterprise databases, cutting manual data-retrieval time by 40%.",
            "Integrated the agent with internal dashboards and led a 2-person team to define business use cases.",
            "<strong>Tech:</strong> OpenClaw, Python, SQL, LangChain, LLM APIs",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/Enterprise_Database_Reporting_Automation\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/Enterprise_Database_Reporting_Automation</a>"
          ]
        },
        {
          title: "Home Credit - Credit Risk Model Stability",
          date: "2024",
          bullets: [
            "Built and evaluated gradient-boosting models to predict client repayment, holding performance stable as data distributions shifted over time.",
            "Ran EDA and feature engineering on large, imbalanced financial data to surface meaningful credit-risk signals.",
            "<strong>Tech:</strong> Python, pandas, scikit-learn, LightGBM, XGBoost",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/Credit_Risk_Model-_Stability\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/Credit_Risk_Model-_Stability</a>"
          ]
        },
        {
          title: "KYC Document Understanding for Fintech",
          date: "Oct 2025 – Nov 2025",
          bullets: [
            "Built a system to automatically extract key fields from Vietnamese financial and identity documents (invoices, ID cards).",
            "Tuned document-understanding models to parse complex table structures, reaching 92% F1 on a held-out test set.",
            "<strong>Tech:</strong> Python, PyTorch, OCR/VLM, Gradio",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/CoverHackatho-project\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/CoverHackatho-project</a>"
          ]
        },
        {
          title: "Model Reliability for Risk-Sensitive Applications",
          date: "Aug 2025 – Oct 2025",
          bullets: [
            "Designed a reward model to detect factual errors in model outputs, targeting reliability for risk-sensitive domains such as finance.",
            "Built automated evaluation pipelines to measure error rates across model versions, reaching 86% accuracy and reducing false positives by 18%.",
            "<strong>Link:</strong> <a href=\"https://github.com/monster1909/Detect-hallucination-using-LoRa-and-GRPO\" target=\"_blank\" style=\"color: #3b82f6\">GitHub Repository</a>"
          ]
        },
        {
          title: "End-to-End Data Labeling Pipeline (Published)",
          date: "Feb 2024 – Aug 2024",
          bullets: [
            "Built an automated data-labeling system (OCR + CV) reaching 90% character-level accuracy and cutting annotation workload by 60%.",
            "Implemented an error-correction algorithm (Levenshtein matching) to improve data quality for downstream models.",
            "Published a paper on the methodology at VCL 2025.",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/ocr_corrector\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/ocr_corrector</a>"
          ]
        }
      ]
    },
    thesis: {
      title1: "ABSTRACT MEANING REPRESENTATION IN VIETNAMESE-ENGLISH MACHINE TRANSLATION",
      title2: "ON CLASSICAL LITERATURE DOMAIN",
      problemTitle: "The Problem: Translation of Classical Texts",
      problemDesc: "Automated translation for classical Chinese literature (The Four Great Classical Novels) into Vietnamese and English faces significant challenges due to <strong>pro-drop phenomena</strong> and complex Sino-Vietnamese grammar structures. Modern Large Language Models (LLMs) often mistranslate meanings or lose context when processing these data.",
      solutionTitle: "The Solution: Structure-Aware Fine-Tuning (SAFT)",
      solutionDesc: "We propose the <strong>SAFT</strong> architecture, integrating <strong>Abstract Meaning Representation (AMR)</strong> graphs into the Qwen2.5 model. By utilizing <em>Magnetic Laplacian Eigenvectors</em> to generate positional embeddings (BFS-PE) and passing them through a small MLP into the embedding layer, the system gains a deep understanding of sentence structure while only increasing computational parameters by <strong>≈ 1.18%</strong>.",
      contributionsTitle: "Key Contributions",
      contributions: [
        {
          title: "ViAMR Dataset",
          desc: "Constructed the first AMR dataset for Vietnamese with <strong>22,055 high-quality graphs</strong>."
        },
        {
          title: "AMR Parser",
          desc: "Specialized fine-tuning of the AMRBART model for Vietnamese semantic parsing."
        },
        {
          title: "State-of-the-Art",
          desc: "Significantly improved <strong>BLEU and COMET</strong> scores, setting a new benchmark for machine translation of classical texts."
        }
      ]
    },
    activities: {
      title: "Social & Cultural Activities",
      items: [
        {
          title: "🌱 Green Summer Volunteer Campaign (Mùa Hè Xanh)",
          desc: "\"Seeing the bright smiles of the local people and working side by side with teammates, I learned that the greatest value of knowledge is the ability to serve society.\""
        },
        {
          title: "🎎 Tóc Xanh Vạt Áo Festival",
          desc: "\"Wearing Vietnamese traditional costumes helps me connect deeply with cultural roots. An AI engineer needs the soul nourishment that comes from enduring traditional values.\""
        }
      ]
    },
    awards: {
      title: "Awards & Publications",
      boschTitle: "🏆 2nd Prize – Bosch Innovation Day 2025",
      boschDesc: "A testament to creative thinking and the ability to actualize technical solutions into industrial environments. The experience in this competition helped me hone my critical thinking under high pressure.",
      vclTitle: "📄 Paper accepted at VCL 2025",
      vclDesc: "(Vietnamese Conference on Linguistics). This academic contribution is a solid stepping stone for clear analytical thinking and the ability to work with in-depth AI systems.",
      academicTitle: "🏅 Academic Achievements",
      achievements: [
        { label: "3rd Prize - Provincial Science Fair" },
        { label: "Excellent Student in Math" },
        { label: "Study Encouragement Scholarship" }
      ]
    },
    hobbies: {
      title: "Beyond The Screen",
      desc: "I always seek joy from the simplest things in life to maintain endless creative energy.",
      items: [
        "🌟 <strong>Love exploring:</strong> Learning about new cultures and experiencing artistic activities.",
        "📚 <strong>Financial research:</strong> Self-studying credit-risk models is not just work, but a passion.",
        "👥 <strong>Extrovert:</strong> Enjoy teamwork, inspiring others, and public speaking."
      ]
    },
    contact: {
      title: "Let's Build the Future",
      desc: "If you are looking for a passionate and responsible team player in the fields of Data Science and AI, we should talk!",
      email: "Email Me",
      github: "GitHub",
      cv: "Download CV"
    }
  },
  vi: {
    nav: {
      Home: 'Trang chủ',
      Vision: 'Tầm nhìn',
      Experience: 'Kinh nghiệm',
      Projects: 'Dự án',
      Thesis: 'Khóa luận',
      Activities: 'Hoạt động',
      Awards: 'Giải thưởng',
      Hobbies: 'Sở thích',
      Contact: 'Liên hệ',
    },
    home: {
      systemInit: "> Hệ thống đã khởi tạo...",
      name: "BÙI HỒNG PHÚC",
      nickname: "(Ethan)",
      subtitle: "Đang trên con đường trở thành chuyên gia dữ liệu với kỹ năng SQL và Python vững chắc, cùng bề dày kinh nghiệm chuyển hóa dữ liệu thô (kể cả tài liệu tài chính và định danh) thành các kết quả kinh doanh đo lường được.",
      downloadResume: "📄 Tải CV",
    },
    vision: {
      title: "Tầm Nhìn & Giá Trị Cốt Lõi",
      p1: "\"Vượt lên trên việc xây dựng các pipeline AI mạnh mẽ và tối ưu hóa mô hình học máy, tôi được thúc đẩy bởi niềm đam mê mãnh liệt trong việc ứng dụng công nghệ để giải quyết các vấn đề thực tế. Tầm nhìn bao quát của tôi là thu hẹp khoảng cách giữa nghiên cứu AI phức tạp và các ứng dụng kinh doanh thực tiễn — đặc biệt là trong lĩnh vực tài chính và rủi ro tín dụng.\"",
      p2: "Tôi tin rằng <strong>công nghệ đạt giá trị cao nhất khi nó kết nối con người lại với nhau</strong>. Triết lý này không chỉ dẫn lối cho đạo đức nghề nghiệp của tôi mà còn là động lực để tôi tích cực tham gia các hoạt động cộng đồng, không ngừng học hỏi và chia sẻ kiến thức với đồng nghiệp.",
    },
    experience: {
      jobs: [
        {
          title: "Kỹ sư AI (Part-time)",
          date: "Tháng 10/2025 – Tháng 6/2026",
          company: "TRUNG VIET INVESTMENT",
          bullets: [
            "Triển khai các giải pháp AI vào môi trường production để hỗ trợ vận hành doanh nghiệp nội bộ, từ khâu nạp dữ liệu đến tự động phản hồi.",
            "Xây dựng pipeline tạo video tự động bằng AI, giảm 50% thời gian sản xuất nội dung.",
            "Thiết kế và triển khai quy trình xử lý dữ liệu toàn trình (end-to-end) nhằm cấu trúc hóa dữ liệu doanh nghiệp thô phục vụ cho các ứng dụng AI.",
            "Xây dựng website chatbot (cả frontend và backend) tích hợp LLM APIs để xử lý yêu cầu khách hàng theo thời gian thực.",
          ]
        },
        {
          title: "Trợ lý Nghiên cứu Data Science",
          date: "Tháng 2/2025 – Hiện tại",
          company: "NLP & AI Lab, Trường ĐH Khoa học Tự nhiên",
          bullets: [
            "Xây dựng pipeline OCR tự động chuyển hóa tài liệu tài chính thành dữ liệu cấu trúc sẵn sàng cho truy vấn, giảm 60% thời gian xử lý thủ công và tăng 20% độ chính xác.",
            "Tạo bộ công cụ xác thực và gán nhãn dữ liệu giúp tăng năng suất nhóm lên 30% đồng thời giữ cho dữ liệu huấn luyện luôn sạch và mang tính đại diện cao.",
            "Hướng dẫn 3 thực tập sinh, quản lý mã nguồn Git của nhóm, và áp dụng quy trình code-review giúp giảm 15% lỗi tích hợp.",
          ]
        },
        {
          title: "Kỹ sư AI (Full-time)",
          date: "Tháng 6/2024 – Tháng 4/2025",
          company: "Wooda",
          bullets: [
            "Xây dựng và triển khai hệ thống AI đàm thoại phục vụ khách hàng, tự động hóa tương tác hỗ trợ và giảm 40% thời gian phản hồi trung bình.",
            "Tích hợp các support agents vào nền tảng để xử lý trọn vẹn yêu cầu nhiều bước của người dùng, cải thiện 25% tỷ lệ giải quyết ở lần liên hệ đầu tiên.",
            "Phát triển và bảo trì các kỹ năng AI tùy biến để mở rộng khả năng của agent cho các tác vụ đặc thù (theo dõi đơn hàng, xử lý FAQ, báo cáo lỗi).",
            "Xây dựng quy trình xử lý dữ liệu để cấu trúc hóa dữ liệu doanh nghiệp, đảm bảo hệ thống AI đưa ra phản hồi nhất quán và đáng tin cậy trên quy mô lớn.",
          ]
        }
      ]
    },
    projects: {
      items: [
        {
          title: "Tự động hóa Báo cáo & Cơ sở dữ liệu Doanh nghiệp (AI Agent)",
          date: "Tháng 5/2026",
          bullets: [
            "Xây dựng một AI agent tự động hóa việc truy vấn SQL và tạo báo cáo tài chính trên các cơ sở dữ liệu doanh nghiệp, giảm 40% thời gian trích xuất dữ liệu thủ công.",
            "Tích hợp agent với bảng điều khiển nội bộ và dẫn dắt nhóm 2 người xác định các use-case kinh doanh.",
            "<strong>Công nghệ:</strong> OpenClaw, Python, SQL, LangChain, LLM APIs",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/Enterprise_Database_Reporting_Automation\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/Enterprise_Database_Reporting_Automation</a>"
          ]
        },
        {
          title: "Home Credit - Mô hình Đánh giá Rủi ro Tín dụng",
          date: "2024",
          bullets: [
            "Xây dựng và đánh giá các mô hình gradient-boosting để dự đoán khả năng trả nợ của khách hàng, duy trì hiệu suất ổn định khi phân phối dữ liệu thay đổi theo thời gian.",
            "Thực hiện EDA và kỹ nghệ đặc trưng trên dữ liệu tài chính lớn, mất cân bằng để tìm ra các tín hiệu rủi ro tín dụng có ý nghĩa.",
            "<strong>Công nghệ:</strong> Python, pandas, scikit-learn, LightGBM, XGBoost",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/Credit_Risk_Model-_Stability\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/Credit_Risk_Model-_Stability</a>"
          ]
        },
        {
          title: "Đọc hiểu Tài liệu Định danh & Tài chính (KYC)",
          date: "Tháng 10/2025 – Tháng 11/2025",
          bullets: [
            "Xây dựng hệ thống tự động trích xuất các trường thông tin quan trọng từ tài liệu tài chính và định danh tiếng Việt (hóa đơn, CMND/CCCD).",
            "Tinh chỉnh các mô hình đọc hiểu tài liệu để phân tích cấu trúc bảng phức tạp, đạt 92% F1 trên tập kiểm thử.",
            "<strong>Công nghệ:</strong> Python, PyTorch, OCR/VLM, Gradio",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/CoverHackatho-project\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/CoverHackatho-project</a>"
          ]
        },
        {
          title: "Độ tin cậy Mô hình cho các Ứng dụng nhạy cảm (Risk-Sensitive)",
          date: "Tháng 8/2025 – Tháng 10/2025",
          bullets: [
            "Thiết kế mô hình phần thưởng (reward model) để phát hiện các lỗi sai sự thật trong kết quả đầu ra của AI, hướng tới độ tin cậy cho các lĩnh vực nhạy cảm như tài chính.",
            "Xây dựng quy trình đánh giá tự động để đo lường tỷ lệ lỗi trên các phiên bản mô hình, đạt độ chính xác 86% và giảm 18% cảnh báo sai.",
            "<strong>Link:</strong> <a href=\"https://github.com/monster1909/Detect-hallucination-using-LoRa-and-GRPO\" target=\"_blank\" style=\"color: #3b82f6\">GitHub Repository</a>"
          ]
        },
        {
          title: "Quy trình Gán nhãn Dữ liệu Toàn trình (Đã xuất bản)",
          date: "Tháng 2/2024 – Tháng 8/2024",
          bullets: [
            "Xây dựng hệ thống gán nhãn dữ liệu tự động (OCR + CV) đạt độ chính xác 90% ở cấp độ ký tự và giảm 60% khối lượng công việc gán nhãn.",
            "Triển khai thuật toán sửa lỗi (khoảng cách Levenshtein) để cải thiện chất lượng dữ liệu cho các mô hình sau đó.",
            "Xuất bản bài báo về phương pháp này tại hội nghị VCL 2025.",
            "<strong>Link:</strong> <a href=\"https://github.com/Phucgiacat/ocr_corrector\" target=\"_blank\" style=\"color: #3b82f6\">github.com/Phucgiacat/ocr_corrector</a>"
          ]
        }
      ]
    },
    thesis: {
      title1: "MÔ HÌNH NGỮ NGHĨA TRỪU TƯỢNG TRONG DỊCH MÁY VIỆT-ANH",
      title2: "TRÊN MIỀN TƯ LIỆU CỔ",
      problemTitle: "Vấn đề: Dịch thuật Tư liệu Cổ",
      problemDesc: "Dịch thuật tự động cho các tác phẩm văn học cổ điển Trung Hoa (Tứ Đại Danh Tác) sang tiếng Việt và tiếng Anh gặp nhiều thách thức lớn do <strong>hiện tượng lược bỏ chủ ngữ (pro-drop)</strong> và cấu trúc ngữ pháp Hán-Việt phức tạp. Các mô hình ngôn ngữ lớn (LLM) hiện đại thường dịch sai ngữ nghĩa hoặc mất bối cảnh khi xử lý các dữ liệu này.",
      solutionTitle: "Giải pháp: Structure-Aware Fine-Tuning (SAFT)",
      solutionDesc: "Chúng tôi đề xuất kiến trúc <strong>SAFT</strong> tích hợp biểu diễn đồ thị <strong>Abstract Meaning Representation (AMR)</strong> vào mô hình Qwen2.5. Bằng cách sử dụng <em>Magnetic Laplacian Eigenvectors</em> để tạo vector nhúng vị trí (BFS-PE) và đưa qua một mạng MLP nhỏ vào tầng embedding, hệ thống có thể hiểu sâu sắc cấu trúc câu mà chỉ tăng <strong>≈ 1.18%</strong> tham số tính toán.",
      contributionsTitle: "Đóng góp Chính",
      contributions: [
        {
          title: "Bộ dữ liệu ViAMR",
          desc: "Xây dựng bộ dữ liệu AMR đầu tiên cho tiếng Việt với <strong>22.055 đồ thị</strong> chất lượng cao."
        },
        {
          title: "AMR Parser",
          desc: "Fine-tune mô hình AMRBART chuyên biệt cho phân tích cú pháp tiếng Việt."
        },
        {
          title: "State-of-the-Art",
          desc: "Cải thiện đáng kể điểm <strong>BLEU và COMET</strong>, tạo benchmark mới cho dịch máy ngữ liệu cổ."
        }
      ]
    },
    activities: {
      title: "Hoạt động Xã hội & Văn hóa",
      items: [
        {
          title: "🌱 Chiến dịch Tình nguyện Mùa Hè Xanh",
          desc: "\"Nhìn những nụ cười rạng rỡ của người dân và sự sát cánh của đồng đội, tôi hiểu rằng giá trị lớn nhất của tri thức chính là khả năng phụng sự xã hội.\""
        },
        {
          title: "🎎 Ngày hội Tóc Xanh Vạt Áo",
          desc: "\"Khoác lên mình cổ phục Việt giúp tôi kết nối sâu sắc với cội nguồn văn hóa. Một người làm AI cần sự dung dưỡng tâm hồn từ những giá trị truyền thống bền vững.\""
        }
      ]
    },
    awards: {
      title: "Giải thưởng & Công bố",
      boschTitle: "🏆 Giải Nhì – Bosch Innovation Day 2025",
      boschDesc: "Minh chứng cho tư duy sáng tạo và khả năng hiện thực hóa các giải pháp kỹ thuật vào môi trường công nghiệp. Trải nghiệm tại cuộc thi giúp tôi rèn luyện kỹ năng phản biện dưới áp lực cao.",
      vclTitle: "📄 Bài báo được chấp nhận tại VCL 2025",
      vclDesc: "(Vietnamese Conference on Linguistics). Đóng góp học thuật này là bước đệm vững chắc cho tư duy phân tích rành mạch và khả năng làm việc với các hệ thống AI chuyên sâu.",
      academicTitle: "🏅 Thành tích Học thuật",
      achievements: [
        { label: "Giải Ba Cuộc thi KHKT cấp Tỉnh" },
        { label: "Học sinh Giỏi Toán" },
        { label: "Học bổng Khuyến học" }
      ]
    },
    hobbies: {
      title: "Ngoài Giờ Làm Việc",
      desc: "Tôi luôn tìm kiếm niềm vui từ những thứ dung dị nhất trong cuộc sống để duy trì năng lượng sáng tạo vô tận.",
      items: [
        "🌟 <strong>Thích khám phá:</strong> Tìm hiểu các nền văn hóa mới và trải nghiệm các hoạt động nghệ thuật.",
        "📚 <strong>Nghiên cứu tài chính:</strong> Tự học về các mô hình tín dụng (credit-risk) không chỉ là công việc, mà là niềm đam mê.",
        "👥 <strong>Người hướng ngoại:</strong> Yêu thích làm việc nhóm, truyền cảm hứng và thuyết trình."
      ]
    },
    contact: {
      title: "Cùng Kiến Tạo Tương Lai",
      desc: "Nếu bạn đang tìm một mảnh ghép đầy nhiệt huyết và trách nhiệm trong lĩnh vực Data Science và AI, chúng ta nên trò chuyện!",
      email: "Gửi Email",
      github: "GitHub",
      cv: "Tải CV"
    }
  }
};
