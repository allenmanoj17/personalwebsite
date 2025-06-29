export type Project = {
  title: string;
  description: string;
  github?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Histopathology Image Classification",
    description:
      "Built ML and deep learning models (SVM, MLP, CNN) to classify colorectal cancer tissue samples. Used stratified 5-fold CV and hyperparameter tuning.",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn"],
    github: "https://github.com/allenmanoj/histopathology-cancer-detection",
  },
  {
    title: "Pulmonary Disease Classification",
    description:
      "Classified respiratory diseases using spectrograms and EfficientNetB0. Transformed audio clips into images to train CNN-based classifier.",
    tech: ["Python", "EfficientNetB0", "Librosa", "Deep Learning"],
    github: "https://github.com/allenmanoj/respiratory-audio-classification",
  },
  {
    title: "Mood-Based Music Recommender",
    description:
      "Recommended playlists by detecting facial emotion using HuggingFace and mapping to Spotify API via valence and tempo features.",
    tech: ["Streamlit", "HuggingFace", "Spotify API", "DenseNet"],
    github: "https://github.com/allenmanoj/mood-based-music-recommender",
  },
  {
    title: "ETL Pipeline & Dashboard",
    description:
      "Designed an AWS-based ETL pipeline using Glue, Redshift, and QuickSight with real-time alerts using CloudWatch for error tracking.",
    tech: ["AWS Glue", "Redshift", "QuickSight", "CloudWatch"],
    github: "https://github.com/allenmanoj/aws-etl-dashboard",
  },
  {
    title: "Customer Segmentation",
    description:
      "Used clustering algorithms and EDA to segment users based on transaction and behavior data for tailored marketing insights.",
    tech: ["Python", "Pandas", "Seaborn", "Clustering"],
    github: "https://github.com/allenmanoj/customer-segmentation",
  },
];