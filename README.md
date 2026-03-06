# Training And Placement Cell Website - IIIT Raichur

This is the production branch and main repository for the Training and Placement Cell website of the Indian Institute of Information Technology (IIIT) Raichur.

**Live at:** [https://tnp.iiitr.ac.in/](https://tnp.iiitr.ac.in/)

---

## Getting Started

To get the website running locally on your machine for development and testing, follow these steps.

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed, as this project uses it extensively as the package manager and test runner.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd tnp.iiitr.ac.in
   ```

2. **Install dependencies**:
   ```bash
   bun install
   ```

3. **Start the development server**:
   ```bash
   bun run dev
   ```

4. **View the website**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the outcome. With the development server running, any edits you make will automatically reload the page.

---

## Editing Content & Data

The website is designed to be easily configurable without delving deep into the React/Next.js component code. Almost all text, headings, images, and repeating blocks you see on the website are driven by data files.

**You can find all data files in the `data/` directory.**

Here is a breakdown of the primary data files you might need to edit:

- `data/Home.ts`: Controls the hero section, introductory text, and main landing page highlights.
- `data/Companies.ts`: Contains the lists of collaborating companies, past recruiters, and their respective logos.
- `data/Team.ts`: Manages the profiles, descriptions, and images of the Training & Placement Cell team members.
- `data/Contact.ts`: Holds contact information such as email addresses, phone numbers, location details, and social links (like LinkedIn).
- `data/WhatWeOffer.ts`: The text, icons, and summaries explaining the various offerings and services of the curriculum.
- `data/TimelineSteps.ts`: Workflow, steps, and timeline progression data.
- `data/BarItems.ts`: Navigation bar items and routing strings.
- `data/footerInfo.ts`: Quick links and details for the website's footer.

*Note: Whenever you need to update a stat, add a new team member, or change a company logo, directly update the relevant `.ts` file inside `data/` instead of hardcoding changes in the UI components.*

---

## Architecture and Stack Info (For Developers)

If you are a new developer taking over or contributing to the functionality of this site, orient yourself with the following technical details:

- **Framework**: [Next.js](https://nextjs.org/) (App Router configuration). The main routes and pages are managed within the `app/` directory (specifically `app/(main)` for the core structure).
- **Language**: [TypeScript](https://www.typescriptlang.org/). We enforce strict typings wherever possible.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/). Configuration is in `tailwind.config.ts`. Utility classes are used exclusively for styles.
- **UI Components**: The project uses [Radix UI](https://www.radix-ui.com/) and features pre-styled and accessible components (like Accordions, Tabs, and Menus) stored in `components/ui/`.
- **Icons**: Vector icons are provided via [Lucide React](https://lucide.dev/).

### Typical Developer Workflows

- **Creating a New Page**: Add a new folder in `app/(main)/` and create a `page.tsx` file inside it. For example, `app/(main)/about/page.tsx` will route to `/about`.
- **Modifying Global Styles**: Most global changes should happen within the Tailwind config or `app/globals.css`.
- **Checking Project Health**: Run `bun run lint` to enforce the codebase's ESLint rules and ensure next.js compilation passes correctly before pushing.

### Building for Production

To test a production build locally:
```bash
bun run build
bun run start
```