export type Project = {
  title: string;
  description: string;
  github?: string;
  tech: string[];
  archived?: boolean;
};

export const projects: Project[] = [
  {
    title: "Histopathology Image Classification",
    description:
      "Built and tuned SVM, MLP, and CNN models for colorectal cancer tissue classification. Achieved validation accuracy of 72% with stratified 5-fold CV and model tuning using Keras Tuner. Conducted error analysis and ensured experiment reproducibility.",
    tech: ["Python", "TensorFlow", "scikit-learn", "MLP", "CNN", "Keras Tuner"],
  },
  {
    title: "Image Captioning Web App – AWS Full Stack Deployment",
    description:
      "Deployed a scalable Flask web app using EC2 Auto Scaling and ALB for high availability. Orchestrated a serverless backend with Lambda and EventBridge for image captioning using the Gemini API and thumbnail generation. Built an S3-triggered pipeline to generate captions and thumbnails, storing results in RDS and returning pre-signed URLs. Configured IAM, VPC, and CloudWatch for secure, observable infrastructure.",
    tech: [
      "Flask",
      "AWS EC2",
      "S3",
      "RDS",
      "Lambda",
      "EventBridge",
      "IAM",
      "Auto Scaling",
      "ALB",
      "Python",
    ],
    archived: false,
  },
  {
    title: "Pulmonary Disease Classification",
    description:
      "Developed a Deep Learning Framework to classify pulmonary diseases through respiratory sound analysis. Transformed raw audio files into spectrographic images and employed CNN for accurate detection across 8 classes.",
    tech: ["Python", "Deep Learning", "CNN", "EfficientNetB0"],
  },
  {
    title: "Mood-Based Music Recommender System",
    description:
      "Built a real-time playlist recommender integrating facial emotion detection and sentiment analysis. Mapped emotional states to Spotify’s track features (valence, tempo) to generate dynamic playlists. Deployed an interactive UI using Streamlit for user engagement.",
    tech: ["DenseNet121", "Streamlit", "Hugging Face", "DistilBERT", "Spotify API"],
  },
  {
    title: "Efficient ETL Pipeline",
    description:
      "Developed a streamlined ETL (Extract, Transform, Load) pipeline to enhance data transfer and visualization via a web dashboard, improving error reporting using AWS services.",
    tech: ["AWS Redshift", "AWS Glue", "CloudWatch", "QuickSight"],
  },
  {
    title: "Customer Segmentation",
    description:
      "Employed clustering algorithms to analyze customer behavior and spending patterns, resulting in a segmentation model that enables targeted marketing strategies.",
    tech: ["Excel", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Detection of Mental Health",
    description:
      "Predicted mental health for adults using machine learning models like Logistic Regression, Decision Trees, Random Forest, KNN, and SVM on organizational employee data. Achieved 84.23% accuracy with cross-validation and feature selection.",
    tech: ["Python", "Flask", "Machine Learning", "Sklearn", "Seaborn", "Pandas", "Pickle"],
    archived: true,
  },
  {
    title: "Smart Lender",
    description:
      "Designed and implemented a predictive web application assessing loan eligibility by comparing applicant details with predefined criteria. Integrated analytics dashboards and chatbot support using IBM Watson.",
    tech: ["Python", "Flask", "Machine Learning", "Decision Tree", "Random Forest", "KNN", "XGBoost", "IBM Cloud", "IBM Watson", "Jira"],
    archived: true,
  },
  {
    title: "Crop Mapping Using Fused Optical-Radar Data Set",
    description:
      "Developed and optimized machine learning models, including LDA, Logistic Regression, KNN, SVM, and Random Forest, for multi-class classification of 7 crop types. Improved accuracy through effective preprocessing and hyperparameter tuning.",
    tech: ["R", "Machine Learning"],
    archived: true,
  },
  {
    title: "Project Management System - Bhumi",
    description:
      "Developed a WhatsApp Proof of Concept for Tech4Change using Twilio and Streamlit, enabling users to submit service requests seamlessly. Implemented automated messaging for efficient communication.",
    tech: ["Python", "Twilio", "Streamlit"],
    archived: true,
  },
  {
    title: "Age and Gender Detection",
    description:
      "Built a model to predict age and gender from images or webcam streams using computer vision techniques and Convolutional Neural Networks (CNN) with CaffeNet architecture.",
    tech: ["Computer Vision", "Convolutional Neural Networks", "CaffeNet"],
    archived: true,
  },
];