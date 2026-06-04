import { useState } from "react";

const roadmapData = [
  {
    month: 1,
    label: "Foundations",
    color: "#4ade80",
    weeks: [
      {
        week: 1,
        title: "Python & Dev Setup",
        tasks: [
          "Set up Python environment and tools",
          "Learn basic Python syntax and data types",
          "Understand functions, loops, and conditionals",
          "Practice writing clean, readable code",
        ],
        build: "CLI tool or script",
      },
      {
        week: 2,
        title: "Data Structures & APIs",
        tasks: [
          "Learn lists, dicts, sets, and tuples",
          "Understand how REST APIs work",
          "Make API calls using requests library",
          "Parse JSON responses",
        ],
        build: "Weather or news fetcher CLI",
      },
      {
        week: 3,
        title: "Git & Collaboration",
        tasks: [
          "Learn Git basics: init, add, commit, push",
          "Understand branching and merging",
          "Work with GitHub repos",
          "Write meaningful commit messages",
        ],
        build: "GitHub profile + first repo",
      },
      {
        week: 4,
        title: "Async & File I/O",
        tasks: [
          "Read and write files with Python",
          "Understand sync vs async programming",
          "Use asyncio basics",
          "Handle errors gracefully",
        ],
        build: "Async file processor",
      },
    ],
  },
  {
    month: 2,
    label: "NLP & Text",
    color: "#60a5fa",
    weeks: [
      {
        week: 5,
        title: "First LLM Integration",
        tasks: [
          "Understand what LLMs are and how they work",
          "Learn prompt vs completion model",
          "Call Claude or OpenAI API",
          "Handle API keys safely",
        ],
        build: "Simple Q&A chatbot",
      },
      {
        week: 6,
        title: "Prompt Engineering",
        tasks: [
          "Learn zero-shot and few-shot prompting",
          "Understand chain-of-thought reasoning",
          "Structure prompts for consistent output",
          "Test and iterate on prompt quality",
        ],
        build: "Prompt library with 10+ templates",
      },
      {
        week: 7,
        title: "Text Preprocessing & NLP",
        tasks: [
          "Understand unstructured text data",
          "Learn tokenization, stopwords, stemming, lemmatization",
          "Practice basic NLP preprocessing pipelines",
          "Learn why raw text cannot be used directly",
        ],
        build: "Text cleaning pipeline",
      },
      {
        week: 8,
        title: "Embeddings & Similarity",
        tasks: [
          "Learn what embeddings are and why they work",
          "Understand cosine similarity intuitively",
          "Generate embeddings using APIs or libraries",
          "Perform semantic similarity search",
        ],
        build: "Text similarity search tool",
      },
    ],
  },
  {
    month: 3,
    label: "ML Foundations",
    color: "#f472b6",
    weeks: [
      {
        week: 9,
        title: "ML Basics & Problem Framing",
        tasks: [
          "Learn what Machine Learning is and what it is not",
          "Understand supervised vs unsupervised learning",
          "Learn training vs testing data",
          "Understand common ML use cases",
        ],
        build: "ML problem definition document",
      },
      {
        week: 10,
        title: "Core ML Models",
        tasks: [
          "Learn linear regression and logistic regression",
          "Understand KNN and decision trees intuitively",
          "Learn when to use which model",
          "Train simple models using scikit-learn",
        ],
        build: "House price or classification model",
      },
      {
        week: 11,
        title: "Model Evaluation",
        tasks: [
          "Learn accuracy, precision, recall, and F1 score",
          "Understand confusion matrices",
          "Learn cross-validation conceptually",
          "Analyze model failures",
        ],
        build: "Model evaluation report",
      },
      {
        week: 12,
        title: "Feature Engineering",
        tasks: [
          "Understand feature selection and extraction",
          "Handle missing data and outliers",
          "Encode categorical variables",
          "Scale and normalize features",
        ],
        build: "Feature engineering notebook",
      },
    ],
  },
  {
    month: 4,
    label: "RAG & Vector DBs",
    color: "#fb923c",
    weeks: [
      {
        week: 13,
        title: "Vector Databases",
        tasks: [
          "Understand vector storage concepts",
          "Set up ChromaDB or Pinecone",
          "Store and query embeddings",
          "Understand indexing strategies",
        ],
        build: "Personal knowledge base",
      },
      {
        week: 14,
        title: "RAG Fundamentals",
        tasks: [
          "Understand Retrieval-Augmented Generation",
          "Build a basic RAG pipeline",
          "Chunk documents effectively",
          "Evaluate retrieval quality",
        ],
        build: "Document Q&A system",
      },
      {
        week: 15,
        title: "Advanced RAG",
        tasks: [
          "Learn hybrid search (BM25 + semantic)",
          "Implement re-ranking",
          "Handle long context windows",
          "Optimize chunking strategies",
        ],
        build: "Multi-document research assistant",
      },
      {
        week: 16,
        title: "Fine-tuning Concepts",
        tasks: [
          "Understand when to fine-tune vs RAG",
          "Learn about LoRA and PEFT methods",
          "Prepare training datasets",
          "Evaluate fine-tuned models",
        ],
        build: "Fine-tuning experiment report",
      },
    ],
  },
  {
    month: 5,
    label: "APIs & Full-Stack AI",
    color: "#a78bfa",
    weeks: [
      {
        week: 17,
        title: "FastAPI Fundamentals",
        tasks: [
          "Build REST APIs with FastAPI",
          "Understand request/response models",
          "Add authentication with JWT",
          "Write API documentation",
        ],
        build: "AI-powered REST API",
      },
      {
        week: 18,
        title: "Frontend Integration",
        tasks: [
          "Build React UI that calls AI APIs",
          "Handle streaming responses",
          "Manage loading and error states",
          "Deploy to Vercel or Netlify",
        ],
        build: "Full-stack AI web app",
      },
      {
        week: 19,
        title: "Streaming & Real-time",
        tasks: [
          "Implement server-sent events (SSE)",
          "Build real-time AI chat interfaces",
          "Handle WebSocket connections",
          "Optimize for perceived performance",
        ],
        build: "Streaming chatbot interface",
      },
      {
        week: 20,
        title: "Cloud & Deployment",
        tasks: [
          "Deploy to AWS Lambda or EC2",
          "Use S3 for file storage",
          "Set up environment variables securely",
          "Monitor with CloudWatch basics",
        ],
        build: "Cloud-deployed AI service",
      },
    ],
  },
  {
    month: 6,
    label: "Agentic & Production",
    color: "#fbbf24",
    weeks: [
      {
        week: 21,
        title: "Agentic Workflows",
        tasks: [
          "Learn agent planning and reasoning",
          "Understand tool calling",
          "Learn when agents are unnecessary",
          "Build multi-step agent pipelines",
        ],
        build: "Agent-driven task automation",
      },
      {
        week: 22,
        title: "Evaluation & Optimization",
        tasks: [
          "Learn how to evaluate LLM outputs",
          "Understand cost, latency, and token usage",
          "Learn caching and optimization strategies",
          "Build evaluation frameworks",
        ],
        build: "Evaluation & cost analysis report",
      },
      {
        week: 23,
        title: "Production Readiness",
        tasks: [
          "Learn logging, monitoring, and prompt versioning",
          "Understand deployment basics",
          "Learn responsible AI practices",
          "Set up error tracking and alerts",
        ],
        build: "Production-ready AI service",
      },
      {
        week: 24,
        title: "Capstone Project",
        tasks: [
          "Design and build a complete AI system",
          "Write clean documentation and README",
          "Create architecture diagrams",
          "Record demo and explain tradeoffs",
        ],
        build: "Final AI Engineer capstone",
      },
    ],
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}>
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HammerIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

export default function AIRoadmap() {
  const [checked, setChecked] = useState({});
  const [openWeeks, setOpenWeeks] = useState({ "w1": true });
  const [activeMonth, setActiveMonth] = useState(0);

  const toggleTask = (key) => setChecked(p => ({ ...p, [key]: !p[key] }));
  const toggleWeek = (key) => setOpenWeeks(p => ({ ...p, [key]: !p[key] }));

  const getWeekProgress = (monthIdx, weekIdx) => {
    const week = roadmapData[monthIdx].weeks[weekIdx];
    const done = week.tasks.filter((_, ti) => checked[`${monthIdx}-${weekIdx}-${ti}`]).length;
    return { done, total: week.tasks.length, pct: Math.round((done / week.tasks.length) * 100) };
  };

  const getMonthProgress = (monthIdx) => {
    const m = roadmapData[monthIdx];
    let done = 0, total = 0;
    m.weeks.forEach((w, wi) => {
      w.tasks.forEach((_, ti) => {
        total++;
        if (checked[`${monthIdx}-${wi}-${ti}`]) done++;
      });
    });
    return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  };

  const totalDone = Object.values(checked).filter(Boolean).length;
  const totalTasks = roadmapData.reduce((a, m) => a + m.weeks.reduce((b, w) => b + w.tasks.length, 0), 0);
  const overallPct = Math.round((totalDone / totalTasks) * 100);

  const currentMonth = roadmapData[activeMonth];
  const mp = getMonthProgress(activeMonth);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: "#e2e2e2",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } 
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .task-row:hover { background: rgba(255,255,255,0.03) !important; }
        .week-card { transition: border-color 0.2s ease; }
        .week-card:hover { border-color: rgba(255,255,255,0.12) !important; }
        .month-tab { transition: all 0.2s ease; }
        .month-tab:hover { opacity: 1 !important; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>

      {/* Header */}
      <div style={{ padding: "40px 32px 28px", borderBottom: "1px solid #1a1a2e" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", marginBottom: 8 }}>
                6-Month Program
              </div>
              <h1 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}>
                AI Engineer Roadmap
              </h1>
            </div>
            {/* Overall progress */}
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>Overall Progress</div>
              <div style={{ fontSize: 36, fontWeight: 500, color: "#fff", lineHeight: 1 }}>{overallPct}<span style={{ fontSize: 16, color: "#555" }}>%</span></div>
              <div style={{ fontSize: 11, color: "#444", marginTop: 4 }}>{totalDone} / {totalTasks} tasks</div>
              {/* Progress bar */}
              <div style={{ width: 160, height: 3, background: "#1a1a2e", borderRadius: 2, marginTop: 10, marginLeft: "auto" }}>
                <div style={{ height: "100%", width: `${overallPct}%`, background: "linear-gradient(90deg, #4ade80, #60a5fa, #f472b6, #fbbf24)", borderRadius: 2, transition: "width 0.4s ease" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 32px 48px" }}>
        {/* Sidebar: Month tabs */}
        <div style={{ width: 170, flexShrink: 0, paddingTop: 28, paddingRight: 20 }}>
          {roadmapData.map((m, mi) => {
            const mp2 = getMonthProgress(mi);
            const isActive = activeMonth === mi;
            return (
              <button
                key={mi}
                className="month-tab"
                onClick={() => setActiveMonth(mi)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: isActive ? "rgba(255,255,255,0.05)" : "transparent",
                  border: "none",
                  borderLeft: `2px solid ${isActive ? m.color : "#222"}`,
                  padding: "10px 14px",
                  marginBottom: 4,
                  cursor: "pointer",
                  borderRadius: "0 6px 6px 0",
                  opacity: isActive ? 1 : 0.55,
                }}
              >
                <div style={{ fontSize: 10, color: m.color, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 3 }}>
                  Month {m.month}
                </div>
                <div style={{ fontSize: 12, color: isActive ? "#fff" : "#aaa", fontWeight: 500, marginBottom: 6 }}>
                  {m.label}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ flex: 1, height: 2, background: "#1a1a2e", borderRadius: 1 }}>
                    <div style={{ height: "100%", width: `${mp2.pct}%`, background: m.color, borderRadius: 1, transition: "width 0.3s" }} />
                  </div>
                  <span style={{ fontSize: 10, color: "#444" }}>{mp2.pct}%</span>
                </div>
              </button>
            );
          })}

          {/* Legend */}
          <div style={{ marginTop: 32, padding: "0 14px" }}>
            <div style={{ fontSize: 10, color: "#333", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Legend</div>
            {[["Task", "#555"], ["Done", "#4ade80"], ["Build", "#fbbf24"]].map(([l, c]) => (
              <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                <span style={{ fontSize: 10, color: "#444" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, paddingTop: 28 }}>
          {/* Month header */}
          <div style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 10, color: currentMonth.color, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>
                Month {currentMonth.month} · {currentMonth.weeks.length} Weeks
              </div>
              <h2 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 26, fontWeight: 400, fontStyle: "italic", color: "#fff" }}>
                {currentMonth.label}
              </h2>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid #222",
              borderRadius: 8,
              padding: "10px 16px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: 22, fontWeight: 500, color: currentMonth.color }}>{mp.pct}%</div>
              <div style={{ fontSize: 10, color: "#444", marginTop: 2 }}>{mp.done}/{mp.total}</div>
            </div>
          </div>

          {/* Weeks */}
          {currentMonth.weeks.map((week, wi) => {
            const wKey = `w${week.week}`;
            const isOpen = openWeeks[wKey];
            const wp = getWeekProgress(activeMonth, wi);
            const allDone = wp.done === wp.total;

            return (
              <div
                key={wi}
                className="week-card"
                style={{
                  border: `1px solid ${allDone ? currentMonth.color + "33" : "#1e1e30"}`,
                  borderRadius: 10,
                  marginBottom: 12,
                  overflow: "hidden",
                  background: allDone ? `${currentMonth.color}08` : "#0d0d1a",
                }}
              >
                {/* Week header */}
                <button
                  onClick={() => toggleWeek(wKey)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 18px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {/* Week number */}
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: allDone ? currentMonth.color : "#1a1a2e",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 500,
                    color: allDone ? "#000" : "#555",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }}>
                    {allDone ? <CheckIcon /> : `W${week.week}`}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: "#e2e2e2", fontWeight: 500 }}>{week.title}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                      <div style={{ width: 80, height: 2, background: "#1a1a2e", borderRadius: 1 }}>
                        <div style={{ height: "100%", width: `${wp.pct}%`, background: currentMonth.color, borderRadius: 1, transition: "width 0.3s" }} />
                      </div>
                      <span style={{ fontSize: 10, color: "#444" }}>{wp.done}/{wp.total} tasks</span>
                    </div>
                  </div>

                  <div style={{ color: "#333" }}>
                    <ChevronIcon open={isOpen} />
                  </div>
                </button>

                {/* Week body */}
                {isOpen && (
                  <div style={{ padding: "0 18px 16px" }}>
                    {/* Tasks */}
                    {week.tasks.map((task, ti) => {
                      const tKey = `${activeMonth}-${wi}-${ti}`;
                      const isDone = checked[tKey];
                      return (
                        <div
                          key={ti}
                          className="task-row"
                          onClick={() => toggleTask(tKey)}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            padding: "8px 10px",
                            borderRadius: 6,
                            cursor: "pointer",
                            marginBottom: 2,
                            userSelect: "none",
                          }}
                        >
                          <div style={{
                            width: 18, height: 18,
                            borderRadius: 4,
                            border: `1.5px solid ${isDone ? currentMonth.color : "#333"}`,
                            background: isDone ? currentMonth.color : "transparent",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                            color: "#000",
                            transition: "all 0.2s",
                          }}>
                            {isDone && <CheckIcon />}
                          </div>
                          <span style={{
                            fontSize: 12,
                            color: isDone ? "#555" : "#aaa",
                            textDecoration: isDone ? "line-through" : "none",
                            lineHeight: 1.5,
                            transition: "all 0.2s",
                          }}>
                            {task}
                          </span>
                        </div>
                      );
                    })}

                    {/* Build */}
                    <div style={{
                      marginTop: 12,
                      padding: "10px 14px",
                      background: "#fbbf2410",
                      border: "1px solid #fbbf2420",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}>
                      <div style={{ color: "#fbbf24", flexShrink: 0 }}><HammerIcon /></div>
                      <div>
                        <div style={{ fontSize: 9, color: "#fbbf2488", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 2 }}>Build</div>
                        <div style={{ fontSize: 12, color: "#fbbf24" }}>{week.build}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
