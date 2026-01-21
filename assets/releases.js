// Releases page config: add versions here (newest first)
const RELEASES = [
  { version: "0.1.3", date: "2026-01-20", file: "changelog/0.1.3.md" },
  { version: "0.1.2", date: "2026-01-20", file: "changelog/0.1.2.md" },
  { version: "0.1.1", date: "2026-01-14", file: "changelog/0.1.1.md" },
  { version: "0.1.0", date: "2026-01-12", file: "changelog/0.1.0.md" },
];

const listEl = document.getElementById("releaseList");
const viewEl = document.getElementById("releaseView");

// --- safe escape ---
function esc(s) {
  return s.replace(/[&<>"']/g, (c) => (
    c === "&" ? "&amp;" :
    c === "<" ? "&lt;" :
    c === ">" ? "&gt;" :
    c === '"' ? "&quot;" : "&#39;"
  ));
}

// --- tiny markdown renderer (headings, lists, code blocks, inline code, paragraphs) ---
function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let html = "";
  let inCode = false;
  let inList = false;

  const closeList = () => {
    if (inList) { html += "</ul>"; inList = knownFalse(); }
  };

  function knownFalse(){ return false; } // keep minifier/clarity

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];

    // fenced code
    if (raw.trim().startsWith("```")) {
      if (!inCode) {
        closeList();
        inCode = true;
        html += "<pre><code>";
      } else {
        inCode = false;
        html += "</code></pre>";
      }
      continue;
    }

    if (inCode) {
      html += esc(raw) + "\n";
      continue;
    }

    // headings
    const h3 = raw.match(/^###\s+(.*)$/);
    const h2 = raw.match(/^##\s+(.*)$/);
    const h1 = raw.match(/^#\s+(.*)$/);
    if (h1) { closeList(); html += `<h1>${esc(h1[1])}</h1>`; continue; }
    if (h2) { closeList(); html += `<h2>${esc(h2[1])}</h2>`; continue; }
    if (h3) { closeList(); html += `<h3>${esc(h3[1])}</h3>`; continue; }

    // list item
    const li = raw.match(/^\s*-\s+(.*)$/);
    if (li) {
      if (!inList) { html += "<ul>"; inList = true; }
      const item = li[1].replace(/`([^`]+)`/g, (_, x) => `<code>${esc(x)}</code>`);
      html += `<li>${item}</li>`;
      continue;
    } else {
      closeList();
    }

    // empty line
    if (raw.trim() === "") {
      html += "";
      continue;
    }

    // paragraph + inline code
    const p = raw.replace(/`([^`]+)`/g, (_, x) => `<code>${esc(x)}</code>`);
    html += `<p>${esc(p).replace(/&lt;code&gt;/g,"<code>").replace(/&lt;\/code&gt;/g,"</code>")}</p>`;
  }

  if (inList) html += "</ul>";
  if (inCode) html += "</code></pre>";

  return html;
}

function setActive(version) {
  [...listEl.querySelectorAll(".release-item")].forEach((a) => {
    a.classList.toggle("active", a.dataset.version === version);
  });
}

async function loadRelease(r) {
  setActive(r.version);
  viewEl.innerHTML = `<div class="muted">Loading ${esc(r.version)}…</div>`;

  try {
    const res = await fetch(r.file, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load changelog");
    const md = await res.text();
    viewEl.innerHTML = mdToHtml(md);
    history.replaceState(null, "", `#${r.version}`);
  } catch (e) {
    viewEl.innerHTML = `
      <h2>Unable to load</h2>
      <p class="muted">Could not load <code>${esc(r.file)}</code>. Make sure the file exists in the repository.</p>
    `;
  }
}

function renderList() {
  listEl.innerHTML = "";
  RELEASES.forEach((r) => {
    const a = document.createElement("a");
    a.href = `#${r.version}`;
    a.className = "release-item";
    a.dataset.version = r.version;
    a.innerHTML = `<div><b>v${esc(r.version)}</b></div><div class="release-meta">${esc(r.date)}</div>`;
    a.addEventListener("click", (ev) => {
      ev.preventDefault();
      loadRelease(r);
    });
    listEl.appendChild(a);
  });
}

function findByHash() {
  const v = (location.hash || "").replace("#", "").trim();
  if (!v) return RELEASES[0];
  return RELEASES.find(x => x.version === v) || RELEASES[0];
}

renderList();
loadRelease(findByHash());
window.addEventListener("hashchange", () => loadRelease(findByHash()));