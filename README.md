# 🍔 All-American Food Fest

[![Next.js](https://img.shields.io/badge/Next.js-16%2B-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.1%2B-f9f1e1?logo=bun)](https://bun.sh/)
[![Biome](https://img.shields.io/badge/Biome-Lint%20%26%20Format-60A5FA?logo=biome)](https://biomejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the **All-American Food Fest**! A premium, high-performance web application built to deliver an immersive and visually stunning festival experience. From sizzling BBQ to live rock 'n' roll, this platform brings the spirit of the ultimate food fest to your screen.

---

## ✨ Visual Experience

> [!TIP]
> Add your project screenshots here to showcase the vibrant design!

| Hero Section (Parallax) | Premium Lineup Carousel | Real-time Ticket Tracker |
| :--- | :--- | :--- |
| ![Hero Placeholder](https://via.placeholder.com/400x250?text=Hero+Section+Parallax) | ![Lineup Placeholder](https://via.placeholder.com/400x250?text=Premium+Lineup+Carousel) | ![Tickets Placeholder](https://via.placeholder.com/400x250?text=Real-time+Tickets) |

---

## 🎯 Key Features

- **🚀 Immersive Hero**: Dynamic parallax effects and bold, oversized typography using Framer Motion.
- **🎡 Premium Carousel**: A sleek "What's On" section featuring custom starburst shapes and smooth Embla-powered navigation.
- **⚡ Real-time Tickets**: Live synchronization with Supabase to track ticket sales as they happen across the world.
- **🎨 Modern UI/UX**: Built with **Tailwind CSS 4**, featuring glassmorphism, backdrop blurs, and a vibrant "festival-yellow" palette.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **🛠️ Developer Experience**: Ultra-fast development with **Bun** and high-standard code quality via **Biome**.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Runtime**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database & Realtime**: [Supabase](https://supabase.com/)
- **Linting & Formatting**: [Biome](https://biomejs.dev/)
- **Components**: Radix UI Primitives

---

## ⚙️ Supabase Setup

To enable the **Real-time Ticket Tracker**, you need a Supabase project with the following configuration:

1. **Table Name**: `stats`
2. **Columns**:
   - `id`: int8 (Primary Key)
   - `tickets_sold`: int8 (Default: 0)
3. **Initial Data**: Insert a row with `id: 1` and `tickets_sold: 0`.
4. **Realtime**: Enable **Replication** for the `stats` table (broadcast `UPDATE` events).

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed.

### Installation

1. **Clone & Enter**:
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install Dependencies**:
   ```bash
   bun install
   ```

3. **Environment Variables**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   SUPABASE_SERVICE_ROLE_KEY=your_private_service_role_key
   ```

### Development

```bash
bun dev
```
Visit [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

- `bun dev`: Run the development server.
- `bun run build`: Build for production.
- `bun run lint`: Run Biome linter.
- `bun run format`: Format code with Biome.
- `bun run check`: Run all Biome checks (lint + format).

---

## 📁 Project Structure

```bash
├── app/            # Next.js App Router (Routes & Layouts)
├── components/     # Feature-specific components (Hero, Lineup, etc.)
│   └── ui/         # Atomic UI components (Radix + Tailwind)
├── hooks/          # Custom React hooks (Ticket tracking logic)
├── lib/            # Shared utilities and Supabase clients
├── public/         # Static assets (Images, SVGs)
└── styles/         # Global styles and Tailwind config
```

---

## 🤝 Contributing

This project follows strict coding standards. Please refer to [AGENTS.md](./AGENTS.md) for detailed guidelines. 

- Use **Functional Components** and hooks.
- Maintain **Type Safety** (TypeScript 5.7).
- Run `bun run check` before pushing.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---
Built with ❤️ for the All-American Food Fest.
