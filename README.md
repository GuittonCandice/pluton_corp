# Dev.Duo - Full Stack Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern design with gradient backgrounds and smooth animations
- Fully responsive layout
- Dark theme with purple/cyan/emerald color scheme
- Interactive sections with scroll animations
- Font Awesome icons integration
- Custom fonts (JetBrains Mono, Inter)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main page with sections
│   └── globals.css      # Global styles and animations
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Builds.tsx       # What we build section
│   ├── Stack.tsx        # Tech stack section
│   ├── Profiles.tsx     # Team profiles section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer component
└── ...
```

## Build for Production

```bash
npm run build
npm start
```
