export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  status?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "LoanOps",
    slug: "loanops",
    category: "Machine Learning · Risk Analytics",
    description:
      "An end-to-end Machine Learning project for loan risk analysis, including modelling, API development, testing and an interactive dashboard.",
    technologies: ["Python", "FastAPI", "scikit-learn", "Streamlit"],
    featured: true,
  },
  {
    title: "Ganivet Reviewer",
    slug: "ganivet-reviewer",
    category: "Natural Language Processing",
    description:
      "A text classification system that evaluates the usefulness of restaurant reviews using NLP, feature engineering and supervised learning.",
    technologies: ["Python", "NLP", "Linear SVC", "Gradio"],
    featured: true,
  },
  {
    title: "Professional Portfolio",
    slug: "professional-portfolio",
    category: "Software Engineering",
    description:
      "This professional personal website, built to present my experience, projects, academic background and transition towards Data Science and AI.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "In progress",
    featured: true,
  },
];