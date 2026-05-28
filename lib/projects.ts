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
    slug: "ghostssh",
    title: "GhostSSH",
    tagline: "Autonomous AI Job Agent built on Next.js orchestrating multi-LLM workflows for profile extraction and job hunting.",
    overview: "GhostSSH is an intelligent job-hunting agent that seamlessly extracts developer profiles from GitHub, LinkedIn, and personal websites, and autonomously routes structured queries across multiple LLM providers (Claude, GPT-4o, Gemini, Minimax, OpenRouter) to identify top-tier job opportunities.",
    problem: "Job searching is manual and fragmented. Developers waste hours aggregating their profiles and parsing through irrelevant job boards instead of letting an AI agent synthesize their identity and actively hunt for matches.",
    solution: "A dynamic AI application that automates the recruitment pipeline. By passing target URLs into a robust extraction engine, the agent builds a comprehensive knowledge graph of the user's skillset and executes multi-model prompts to surface highly relevant, high-signal job matches.",
    bullets: [
      "Engineered an autonomous profile extraction pipeline scraping GitHub, LinkedIn, and personal domains",
      "Integrated a multi-model orchestration layer interacting with Claude 3.5, GPT-4o, and Gemini APIs",
      "Built a modern Next.js frontend with real-time Kanban board tracking for job applications",
      "Implemented a dynamic parameter routing system allowing users to define Top K results, locations, and target titles",
      "Deployed fully serverless on Vercel with resilient API route handling for long-running LLM processes"
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Claude", "OpenRouter"],
    architecture: "Frontend UI → URL Extractor Service → LLM Router (Claude/GPT/Gemini) → Aggregated Output → Kanban State",
    liveUrl: "https://dashboard-tau-three-30.vercel.app/",
    repoUrl: "https://github.com/sixscripts-ai/ghostssh",
    featured: true,
    category: "AI Agent System",
  },
  {
    slug: "aqentix",
    title: "Aqentix",
    tagline: "AI-powered enterprise inventory intelligence platform for demand prediction and stock optimization.",
    overview: "Aqentix is a comprehensive inventory management platform designed for multi-location businesses. It automates reordering, visualizes trends, and integrates seamlessly with accounting software while offering predictive forecasting and real-time analytics.",
    problem: "Multi-location businesses struggle with tracking inventory movements, preventing stockouts, and reducing overstock without a centralized, intelligent system.",
    solution: "A robust platform that utilizes AI-driven demand planning and natural language agent chat to optimize stock, automate reordering, and provide smart customizable dashboards.",
    bullets: [
      "Engineered an enterprise inventory intelligence platform with real-time analytics for multi-location businesses",
      "Integrated an AI Agent Chat for natural language queries and proactive inventory insights",
      "Developed predictive forecasting models to prevent stockouts and reduce overstock",
      "Implemented role-based access control and smart customizable dashboards",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Agents", "Vercel"],
    architecture: "User Dashboard → Inventory Data Engine → AI Predictive Model → Real-time Analytics & Agent Chat",
    liveUrl: "https://aqentix.me/",
    repoUrl: "",
    featured: true,
    category: "Enterprise AI Platform",
  },
  {
    slug: "campus-compass",
    title: "Campus Compass",
    tagline: "AI-powered campus navigation assistant featuring semantic course search and interactive prerequisite graphs.",
    overview: "Campus Compass interprets natural language requests, retrieves relevant campus information, and returns source-aware responses along with graph-oriented guidance — making fragmented campus data actually navigable.",
    problem: "Students waste time navigating campus resources, buildings, and schedules when information is fragmented across static documents and disconnected sources.",
    solution: "An assistant that combines semantic search with LLM reasoning to give users accurate, conversational answers tied to navigational context. Built on Next.js with a Pinecone vector database.",
    bullets: [
      "Natural language query handling with intent detection",
      "Semantic search using Pinecone Vector Database",
      "Interactive prerequisite visualization via DAGs",
      "Course and requirement tracking with modern glassmorphic UI",
      "Full serverless deployment on Vercel"
    ],
    stack: ["Next.js", "React", "Pinecone", "OpenAI", "Tailwind CSS"],
    architecture: "User Query → Semantic Layer → Context Injection → LLM Response → Source-Aware Output",
    liveUrl: "https://campuscompass-next.vercel.app",
    repoUrl: "https://github.com/sixscripts-ai/campuscompass-next",
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
    liveUrl: "https://bet.vivapicks.tech/",
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
