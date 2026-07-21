# Alberto Fernández — Professional Portfolio

Professional personal website built to present my experience as a software developer, my academic background in Applied Data Science, my technical projects, and my progression towards Data Science, Machine Learning and AI Engineering.

The website serves as the central hub of my professional profile and is designed to be used across my CV, LinkedIn, GitHub and professional applications.

## Project Status

The portfolio is currently under active development. The core structure, visual system and main content pages are already implemented.

Current features include:

- Responsive Home page
- Professional About page
- Projects listing
- Individual project detail pages
- Contact page with professional links
- Reusable component system
- Light and dark themes
- Persistent theme preference
- Responsive navigation
- Static route generation
- SEO metadata foundations
- Accessible focus and interaction states

Production deployment and custom domain configuration are still pending.

## Main Objectives

The website is designed to communicate clearly:

- Who I am
- My professional experience
- My academic background
- My technical skills
- My transition towards Data Science and Artificial Intelligence
- The projects I am building
- My professional direction
- How to contact me

## Technology Stack

### Frontend

- Next.js 16
- React 19
- TypeScript
- Next.js App Router
- Tailwind CSS 4
- next-themes

### Development and Quality

- ESLint
- Git
- GitHub
- Static generation
- Responsive design
- TypeScript type checking
- Production build validation
- Feature branches and pull requests
- Responsive testing
- Accessible interaction states

## Main Routes

| Route | Description |
|---|---|
| `/` | Professional profile and featured projects |
| `/about` | Experience, education and career direction |
| `/projects` | Technical project listing |
| `/projects/[slug]` | Individual project case studies |
| `/contact` | Email, LinkedIn and GitHub contact channels |

## Current Projects

The initial portfolio structure supports case studies for:

- LoanOps
- Ganivet Reviewer
- Professional Portfolio

Project information is stored as structured TypeScript data and used across both the Home page and Projects section.

Each project can support:

- Title and description
- Category
- Technologies
- Development status
- Challenge
- Technical approach
- Results
- GitHub repository
- Live demo

Final project selection, repositories and demos will be expanded as the portfolio evolves.

## Design System

The website includes a reusable design system based on CSS variables and Tailwind CSS.

It provides:

- Light and dark themes
- Persistent theme selection
- Semantic color tokens
- Responsive layouts
- Shared typography rules
- Consistent spacing
- Reusable buttons
- Reusable page introductions
- Reusable project cards
- Visible keyboard focus states
- Consistent hover states

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── projects/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   ├── layout/
│   ├── projects/
│   ├── theme/
│   └── ui/
└── data/
    └── projects.ts
```

## Local Development

### Requirements

- Node.js 22
- npm

### Installation

Clone the repository:

```bash
git clone git@github.com:alfergal/alberto-fernandez-portfolio.git
```

Enter the project directory:

```bash
cd alberto-fernandez-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Available Commands

Start the local development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Generate an optimized production build:

```bash
npm run build
```

Run the production server after generating the build:

```bash
npm run start
```

## Validation

Before committing changes or opening a pull request, run:

```bash
npm run lint && npm run build
```

The validation process checks:

- ESLint rules
- TypeScript compilation
- Next.js production build
- Static page generation
- Dynamic project route generation

## Git Workflow

Development is organized through feature branches and pull requests.

Create a new branch from the latest version of `main`:

```bash
git switch main
git pull origin main
git switch -c feature/example-feature
```

After completing and validating the work:

```bash
git add .
git commit -m "Describe the completed change"
git push -u origin feature/example-feature
```

The feature branch is then reviewed and merged into `main` through a pull request.

## Deployment

The website is being prepared for deployment through IONOS.

The intended deployment workflow is:

```text
Local development
→ Git commit
→ GitHub
→ Production deployment
→ Custom domain
```

The production environment must support:

- Next.js production builds
- HTTPS
- Custom domain configuration
- Environment-specific settings
- Repeatable deployments

The final production URL and complete deployment instructions will be added after the website is deployed.

## Planned Improvements

- Complete the final project selection
- Add real GitHub repository links
- Add live demo links where available
- Expand individual project case studies
- Add project screenshots and visual assets
- Add a downloadable CV
- Complete SEO configuration
- Add Open Graph metadata
- Generate a sitemap
- Configure `robots.txt`
- Run Lighthouse audits
- Complete accessibility checks
- Optimize images and loading performance
- Deploy the website to production
- Configure the custom domain
- Enable HTTPS
- Add the future Technical Blog & Publications section

## Contact

- LinkedIn: [Alberto Fernández Gálvez](https://www.linkedin.com/in/alberto-fernandez-galvez/)
- GitHub: [alfergal](https://github.com/alfergal)
- Email: [albertofer1997@gmail.com](mailto:albertofer1997@gmail.com)

## Author

**Alberto Fernández Gálvez**

Software developer and Applied Data Science student building towards Data Science, Machine Learning and AI Engineering, with a particular interest in financial technology and banking.

## License

This project is available for portfolio and educational review. The personal content and branding remain the property of Alberto Fernández Gálvez.