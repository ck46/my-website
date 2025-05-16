import React, { useEffect, useState } from "react";

import { Analytics } from "@vercel/analytics/react"

/**
 * Personal website for CK (ck46) — 2025‑05‑15
 * Adds a RESEARCH section that pulls public models from Hugging Face Hub.
 * TailwindCSS & primary color #342d3b are assumed.
 */

export default function App() {
  /* ---------------- GitHub Projects ---------------- */
  const [repos, setRepos] = useState([]);
  const GITHUB_USERNAME = "ck46";

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const data = await res.json();
        const originals = data.filter((repo) => !repo.fork);
        const sorted = originals.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        setRepos(sorted.slice(0, 6));
      } catch (err) {
        console.error(err);
      }
    }
    fetchRepos();
  }, []);

  /* ---------------- Hugging Face Models ---------------- */
  const [models, setModels] = useState([]);
  const HF_USERNAME = "ck46";

  useEffect(() => {
    async function fetchModels() {
      try {
        const res = await fetch(
          `https://huggingface.co/api/models?author=${HF_USERNAME}&full=true`
        );
        const data = await res.json();
        // sort by downloads descending (if available)
        const sorted = data.sort((a, b) => (b.downloads || 0) - (a.downloads || 0));
        setModels(sorted.slice(0, 6));
      } catch (err) {
        console.error(err);
      }
    }
    fetchModels();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans flex">
      <Analytics />
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 px-4 py-12 space-y-20">
        <Hero />

        {/* Projects Section */}
        <section id="projects">
          <SectionTitle title="Highlighted Projects" />
          <ProjectGrid repos={repos} />
        </section>

        {/* Research Section */}
        <section id="research">
          <SectionTitle title="Research Models" />
          <ModelGrid models={models} />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <SectionTitle title="Get in Touch" />
          <ContactSection />
        </section>
      </main>

      <ChatWidget />
    </div>
  );
}

/* ---------------- Sidebar ---------------- */
function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed top-0 left-0 bg-white border-r border-gray-200 shadow-md z-50">
      <div className="px-6 py-6 flex items-center border-b border-gray-200">
        <h1 className="text-2xl font-bold tracking-wider">
          {/* CK<span className="text-primary">46</span> */}
          {/* <img src="/logo.png" alt="CK46" className="h-12" /> */}
          <img src="/logo_2.png" alt="CK46" className="h-12" />

        </h1>
      </div>
      <nav className="flex-1 flex flex-col space-y-2 mt-8 px-6 overflow-y-auto">
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#research" className="nav-link">Research</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </aside>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="pt-24 pb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">
        Chansa Kabwe
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        AI Engineer • Researcher • Innovator — On a quest for the AI Singularity.
      </p>
    </section>
  );
}

/* ---------------- Reusable ---------------- */
function SectionTitle({ title }) {
  return (
    <h3 className="text-2xl font-semibold mb-6 border-b border-gray-300 inline-block pb-1">
      {title}
    </h3>
  );
}

/* ---------------- GitHub Project Components ---------------- */
function ProjectGrid({ repos }) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {repos.length === 0 ? <Loader /> : repos.map((r) => <ProjectCard key={r.id} repo={r} />)}
    </div>
  );
}

function ProjectCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform border border-gray-200"
    >
      <h4 className="text-lg font-bold mb-2 text-primary-light truncate">
        {repo.name}
      </h4>
      <p className="text-sm mb-4 line-clamp-3 text-gray-700 min-h-[48px]">
        {repo.description || "No description provided."}
      </p>
      <div className="flex items-center text-sm space-x-4 text-gray-500">
        <span>⭐ {repo.stargazers_count}</span>
        <span>{repo.language}</span>
      </div>
    </a>
  );
}

/* ---------------- Hugging Face Model Components ---------------- */
function ModelGrid({ models }) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {models.length === 0 ? <Loader /> : models.map((m) => <ModelCard key={m.id} model={m} />)}
    </div>
  );
}

function ModelCard({ model }) {
  return (
    <a
      href={`https://huggingface.co/${model.modelId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform border border-gray-200"
    >
      <h4 className="text-lg font-bold mb-2 text-primary-light truncate">
        {model.modelId.split("/").pop()}
      </h4>
      <p className="text-sm mb-4 line-clamp-3 text-gray-700 min-h-[48px]">
        {model.cardData?.summary ?? "No description provided."}
      </p>
      <div className="flex items-center text-sm space-x-4 text-gray-500">
        <span>⬇️ {model.downloads ?? 0}</span>
        <span>{model.pipeline_tag ?? "model"}</span>
      </div>
    </a>
  );
}

/* ---------------- Contact Section ---------------- */
function ContactSection() {
  return (
    <div className="max-w-md space-y-4 text-gray-700">
      <p>Drop me a line—whether it's a project proposal, a research collaboration, or just to say hi.</p>

      <ul className="space-y-2 text-sm">
        {/* <li className="flex items-center space-x-3">
          <span role="img" aria-label="email">📧</span>
          {/* TODO: Replace with your real email address */}
          {/* <a className="hover:text-primary underline" href="mailto:hello@ck46.com">
            hello@ck46.com
          </a>
        </li> */}
        <li className="flex items-center space-x-3">
          <span className="w-5 h-5 text-gray-500" aria-label="github">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
          </span>
          <a className="hover:text-primary underline" href="https://github.com/ck46" target="_blank" rel="noopener noreferrer">
            github.com/ck46
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <span role="img" aria-label="huggingface">🤗</span>
          <a className="hover:text-primary underline" href="https://huggingface.co/ck46" target="_blank" rel="noopener noreferrer">
            huggingface.co/ck46
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <span className="w-5 h-5 text-gray-500" aria-label="linkedin">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.28h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </span>
          <a className="hover:text-primary underline" href="https://www.linkedin.com/in/ck46">
            linkedin.com/in/ck46
          </a>
        </li>
      </ul>
    </div>
  );
}

/* ---------------- Misc ---------------- */
function Loader() {
  return <p>Loading...</p>;
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        aria-label="Open chat"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg border border-gray-300 hover:shadow-xl animate-bounce"
      >
        <span className="text-2xl">💬</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[70vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="flex items-center p-4 bg-gray-100">
            <span className="mr-3">🤖</span>
            <h5 className="font-semibold">AI Chat</h5>
            <button className="ml-auto" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto" id="chat-window">
            <p className="text-sm text-gray-500">This is a placeholder chat interface.</p>
          </div>
          <form
            className="p-4 border-t border-gray-200 flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-gray-100 rounded-l-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="bg-primary px-4 rounded-r-xl text-white">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

/* ---------------- Tailwind Helpers ---------------- */
// nav-link style (apply via tailwind @apply if using a CSS file)
/*
.nav-link {
  @apply py-2 px-3 rounded hover:bg-primary/10 hover:text-primary transition-colors;
}
*/
