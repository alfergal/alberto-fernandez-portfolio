export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  status?: string;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  challenge?: string;
  approach?: string[];
  results?: string[];
};

export const projects: Project[] = [
  {
    title: "LoanOps",
    slug: "loanops",
    category: "Machine Learning · Risk Analytics",
    description:
      "An end-to-end Machine Learning project for loan risk analysis, including modelling, API development, testing and an interactive dashboard.",
    technologies: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Pandas",
      "Streamlit",
      "Pytest",
    ],
    featured: true,
    challenge:
      "Build a complete Machine Learning solution capable of analysing loan applications, identifying early risk segments and exposing the results through a usable software product.",
    approach: [
      "Prepared and enriched the modelling dataset.",
      "Created features for early credit-risk segmentation.",
      "Trained and evaluated supervised Machine Learning models.",
      "Built a FastAPI service for model inference.",
      "Created an interactive Streamlit dashboard.",
      "Added automated tests for the main application components.",
    ],
    results: [
      "Created a complete workflow from data preparation to model consumption.",
      "Exposed predictions through a documented API.",
      "Built an interactive interface for exploring loan risk.",
      "Validated the project with nine automated tests passing successfully.",
    ],
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