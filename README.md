# 🇰🇭 KhmerStack

> **Practical open-source tools, built for everyday workflow.**

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/MuyleangIng)
[![Framework](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![Made in](https://img.shields.io/badge/Made%20in-Cambodia-red.svg)](https://en.wikipedia.org/wiki/Cambodia)

**KhmerStack** is a community-driven open-source organization rooted in **Cambodia**. We build modern web applications with a focus on performance, clarity, and maintainability.

This repository is the official platform for KhmerStack, built with **Next.js (App Router)** and deployed on **Vercel** with **Cloudflare** security.

---

## 🛠️ Tech Stack

We use a modern, opinionated stack optimized for performance and developer experience:

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |
| **Deployment** | [Vercel](https://vercel.com/) |
| **DNS & Security** | [Cloudflare](https://www.cloudflare.com/) |

---

## 📂 Repository Structure

Based on our `app` router architecture:

```text
/
├── app/              # Next.js App Router (Pages & Layouts)
├── components/       # Reusable UI components (shadcn/ui, custom)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
├── public/           # Static assets (images, fonts, favicon)
├── styles/           # Global CSS and Tailwind directives
├── next.config.mjs   # Next.js configuration
├── postcss.config.mjs# Tailwind PostCSS config
└── package.json      # Project dependencies

```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/MuyleangIng/khmerstack.git](https://github.com/MuyleangIng/khmerstack.git)
cd khmerstack

```

### 2. Install dependencies

We use `pnpm` for fast installation.

```bash
pnpm install

```

### 3. Run the development server

```bash
pnpm dev

```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

---

## ☁️ Deployment

### 1. Deploy to Vercel

This project is optimized for Vercel.

1. Push your code to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import this repository.
4. **Framework Preset:** Select `Next.js`.
5. **Build Command:** `next build` (default).
6. Click **Deploy**.

### 2. Configure Cloudflare (DNS)

To use your custom domain with Vercel and Cloudflare:

1. **In Vercel:** Go to `Settings` > `Domains` and add your domain (e.g., `khmerstack.com`).
2. **In Cloudflare:**
* Add a `CNAME` record.
* **Name:** `@` (or `www`)
* **Target:** `cname.vercel-dns.com`
* **Proxy Status:** ensure it is **Proxied (Orange Cloud)** for SSL/DDOS protection, or **DNS Only (Grey Cloud)** if Vercel issues SSL certificates automatically.
* *Recommended:* Use **Full (Strict)** SSL mode in Cloudflare settings.



---

## 🤝 Contributing

We welcome contributions! Please see our [Contribution Guide](https://www.google.com/search?q=CONTRIBUTING.md) for details.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add: some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License & Maintainers

**Maintained by:** [Muyleang Ing](https://github.com/MuyleangIng)

**Location:** Phnom Penh, Cambodia 🇰🇭

*Open to contributors. Let's build something great together.*
