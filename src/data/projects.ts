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
      "A Machine Learning system that evaluates whether restaurant reviews contain enough useful information for customers and restaurant owners.",
    technologies: [
      "Python",
      "Pandas",
      "Natural Language Processing",
      "scikit-learn",
      "Linear SVC",
      "Gradio",
    ],
    featured: true,
    challenge:
      "Build a text-classification system capable of identifying useful restaurant reviews from a large real-world dataset, transforming an ambiguous concept such as review usefulness into a measurable Machine Learning problem.",
    approach: [
      "Analysed a dataset containing more than 2.3 million reviews from 100 restaurants.",
      "Explored textual, categorical and temporal characteristics of the reviews.",
      "Defined the useful-review target using measurable thresholds based on text length, character count and lexical diversity.",
      "Created features from review text and associated metadata.",
      "Trained and compared Logistic Regression and Linear Support Vector Classification models.",
      "Selected Linear SVC as the final model based on its validation performance.",
      "Built an interactive Gradio application where users can enter a review and receive a usefulness prediction.",
    ],
    results: [
      "Processed 2,356,091 restaurant reviews.",
      "Obtained an accuracy of 0.861 with the selected Linear SVC model.",
      "Obtained an F1 score of 0.852 with the selected model.",
      "Delivered a functional Gradio application for interactive predictions.",
    ],
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