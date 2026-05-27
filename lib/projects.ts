export interface Project {
  slug: string
  title: string
  tagline: string
  overview: string
  problem: string
  solution: string
  bullets: string[]
  stack: string[]
  architecture: string
  liveUrl?: string
  repoUrl?: string
  featured: boolean
  category: string
}

export const projects: Project[] = [
  {
    slug: "alphaxai-enterprise",
    title: "AlphaXAI",
    tagline: "Enterprise microservices architecture with an API gateway, multi-service Node.js backend, and a Python-based ML/Agentic worker.",
    overview: "AlphaXAI is an enterprise-grade AI SaaS platform designed for high scalability. It orchestrates multiple specialized microservices under a centralized API gateway, integrating autonomous agent workflows with internal data services.",
    problem: "Monolithic AI applications struggle to scale when ML inference tasks compete with standard business logic and data processing operations.",
    solution: "A decoupled, fully containerized microservice architecture. Heavy ML and agentic workflows are offloaded to a specialized Python FastAPI worker connected to local LLMs, while core business logic and database operations are handled by independent Node.js services.",
    bullets: [
      "Architected a full-stack microservices ecosystem utilizing Turborepo and pnpm workspaces",
      "Built a centralized Python API Gateway (FastAPI) routing to 6 independent Node.js/Express services",
      "Engineered a dedicated Python Worker Service executing Agentic workflows and LLM Tool Calling via Ollama",
      "Implemented strict REST API specifications (OpenAPI/JSON) and inter-service JWT authentication",
      "Fully containerized infrastructure deployed via GitOps (Render IaC, Docker Compose) featuring PostgreSQL and Redis"
    ],
    stack: ["Python", "FastAPI", "Node.js", "Express", "Docker", "PostgreSQL", "Ollama", "Microservices"],
    architecture: "API Gateway → Internal Network → Specialized Microservices ↔ Python ML Worker ↔ Database Cluster",
    featured: true,
    category: "Enterprise AI Infrastructure",
  },
  {
    slug: "diveai-trading-agent",
    title: "DiveAI Trading Agent",
    tagline: "Autonomous trading intelligence platform utilizing agentic workflows to encode ICT methodology into a structured execution pipeline.",
    overview: "DiveAI is a full-stack market intelligence system that operationalizes ICT-based trading logic. It captures how real traders think—market structure, confluence stacking—and leverages generative AI tool-calling workflows to turn subjective logic into repeatable, auditable software.",
    problem: "Complex discretionary frameworks like ICT are difficult to encode in a way that is structured, repeatable, and scalable without advanced LLM orchestration.",
    solution: "A full-stack platform that translates advanced trading logic into software utilizing production-level LLM Tool Calling workflows. The system captures multi-timeframe alignment and risk constraints in an integrated agentic workflow.",
    bullets: [
      "Encoded ICT-based market logic utilizing advanced generative AI tool-calling workflows",
      "Multi-timeframe alignment analysis across HTF, ITF, and LTF",
      "Risk guardrails and setup scoring for execution-ready evaluations",
      "Psychological trader profiling integrated into analysis workflow",
      "Deployed via Vercel with custom Python backend services",
    ],
    stack: ["Next.js", "TypeScript", "React", "Python", "Gemini AI", "Docker", "Vercel"],
    architecture: "Market Data → Pattern Detection → ICT Logic Engine → Setup Scoring → Risk Guardrails → Dashboard / Execution Layer",
    liveUrl: "https://diveai-trading-analysis.vercel.app",
    repoUrl: "https://github.com/sixscripts-ai/diveai-trading-analysis",
    featured: true,
    category: "AI System",
  },
  {
    slug: "panther-finder-ccc",
    title: "Panther Finder",
    tagline: "AI-powered campus navigation assistant using retrieval-augmented generation and AWS Bedrock.",
    overview: "Panther Finder interprets natural language requests, retrieves relevant campus information, and returns source-aware responses along with map-oriented guidance — making fragmented campus data actually navigable.",
    problem: "Students waste time navigating campus resources, buildings, and schedules when information is fragmented across static documents and disconnected sources.",
    solution: "An assistant that combines document-grounded retrieval with LLM reasoning to give users accurate, conversational answers tied to navigational context. Built on AWS Bedrock Knowledge Base with a Streamlit frontend.",
    bullets: [
      "Natural language query handling with intent detection",
      "Retrieval workflow using AWS Bedrock Knowledge Base",
      "Source-aware response generation with citation links",
      "Route and location support through integrated map links",
      "Full ingestion pipeline: S3 → Bedrock → LLM → structured output",
      "Chatbot interface built in Streamlit",
    ],
    stack: ["Python", "Streamlit", "AWS Bedrock", "Claude 3 Sonnet", "S3", "IAM"],
    architecture: "User Query → Retrieval Layer → Context Injection → LLM Response → Source-Aware Output → Navigation Link",
    repoUrl: "https://github.com/sixscripts-ai/panther-pathfinder-aws",
    featured: true,
    category: "RAG Application",
  },
  {
    slug: "ict-knowledge-engine",
    title: "ICT Knowledge Engine",
    tagline: "Semantic knowledge graph and Retrieval-Augmented Generation (RAG) system based on financial ontologies.",
    overview: "The ICT Knowledge Engine organizes specialized trading knowledge into an ontology-driven structure that can be searched, visualized, and queried—combining graph modeling, semantic retrieval, and interactive exploration.",
    problem: "Traditional search cannot expose how interconnected concepts compound across a trading framework. Standard NLP lacks the ontological structure required for deep domain reasoning.",
    solution: "An AI-driven knowledge system that maps concepts into entities and relationships. It leverages a rigorous ontology and vector databases to make the domain navigable through graph interaction and semantic data discovery.",
    bullets: [
      "Designed and validated knowledge graphs based on strict domain ontologies for 100+ concepts",
      "Built a production-level Retrieval-Augmented Generation (RAG) pipeline for natural language Q&A",
      "Implemented semantic data discovery utilizing vector embedding search architectures",
      "Interactive graph visualization for non-linear exploration",
      "AI-assisted reasoning grounded in structured knowledge and LLM APIs",
    ],
    stack: ["Next.js", "React", "TypeScript", "Graph Visualization", "Semantic Search"],
    architecture: "Knowledge Sources → Entity Extraction → Relationship Graph → Search Layer → Interactive UI + Q&A",
    liveUrl: "https://ict-knowledge-engine.vercel.app",
    featured: true,
    category: "Knowledge System",
  },
  {
    slug: "viva-picks",
    title: "Viva Picks",
    tagline: "Real-time sports betting analytics platform with microservice architecture and live odds processing.",
    overview: "A sports betting analytics platform built for performance — real-time odds ingestion, live data processing, and a clean interface surfacing the numbers that matter.",
    problem: "Sports bettors lack a clean, fast platform that aggregates and surfaces real-time data without noise.",
    solution: "A full-stack platform with microservice architecture, live odds pipelines, and a data-first interface targeting 99.9% uptime under continuous load.",
    bullets: [
      "Real-time odds processing with live data ingestion pipelines",
      "Microservice architecture targeting 99.9% uptime",
      "Full-stack build: Turso database through API layer to React frontend",
      "State management under continuous live data load",
    ],
    stack: ["React", "Node.js", "Turso", "TypeScript"],
    architecture: "Live Data Feed → Ingestion Service → API Layer → React Dashboard",
    liveUrl: "https://vivapicks.tech",
    featured: false,
    category: "Full-Stack Product",
  },
  {
    slug: "reaper",
    title: "REAPER",
    tagline: "Operator-style cybersecurity automation workspace with modular tooling and script orchestration.",
    overview: "A unified security-focused workspace combining terminal-inspired interaction, modular automation, analytics surfaces, and operator-facing controls for technical task execution.",
    problem: "Cybersecurity workflows live across disconnected terminals, scripts, dashboards, and note systems — creating friction and weakening operational clarity.",
    solution: "A single environment where automation, script orchestration, and operator interaction live together with a cohesive control surface.",
    bullets: [
      "Terminal-inspired UX optimized for operator workflows",
      "Modular script orchestration architecture",
      "Analytics surfaces and task-oriented workflow environment",
      "Extensible plugin architecture for security tooling modules",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js"],
    architecture: "Operator Interface → Task Router → Script Engine → Automation Layer → Output / Analytics",
    featured: false,
    category: "Security Tool",
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeatured(): Project[] {
  return projects.filter(p => p.featured)
}
