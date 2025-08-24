export type Project = {
  title: string;
  description: string;
  link?: string;
  tech: string[];
  archived?: boolean;
  twoLiner: string;
};

export const projects: Project[] = [

  {
    title: "Histopathology Image Classification",
    description:
      "Built and tuned SVM, MLP, and CNN models for colorectal cancer tissue classification. Achieved validation accuracy of 72% with stratified 5-fold CV and model tuning using Keras Tuner. Conducted error analysis and ensured experiment reproducibility.",
    tech: ["Python", "TensorFlow", "scikit-learn", "MLP", "CNN", "Keras Tuner"],
    twoLiner: "Achieved 72% accuracy in cancer tissue classification by designing and tuning SVM, MLP, and CNN models.",
  },
  {
    title: "Image Captioning Web App – AWS Full Stack Deployment",
    description:
      "Deployed a scalable Flask web app using EC2 Auto Scaling and ALB for high availability. Orchestrated a serverless backend with Lambda and EventBridge for image captioning using the Gemini API and thumbnail generation. Built an S3-triggered pipeline to generate captions and thumbnails, storing results in RDS and returning pre-signed URLs. Configured IAM, VPC, and CloudWatch for secure, observable infrastructure.",
    tech: [
      "Flask",
      "EC2",
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
    link: "", 
    twoLiner: "Launched a scalable Flask web app on AWS, integrating serverless architecture for automated image captioning.",
  },
  {
    title: "Pulmonary Disease Classification",
    description:
      "Developed a Deep Learning Framework to classify pulmonary diseases through respiratory sound analysis. Transformed raw audio files into spectrographic images and employed CNN for accurate detection across 8 classes.",
    tech: ["Python", "Deep Learning", "CNN", "EfficientNetB0"],
    twoLiner: "Enabled accurate pulmonary disease detection by transforming audio to spectrograms and applying CNNs.",
  },
  {
    title: "Mood-Based Music Recommender System",
    description:
      "Built a real-time playlist recommender integrating facial emotion detection and sentiment analysis. Mapped emotional states to Spotify’s track features (valence, tempo) to generate dynamic playlists. Deployed an interactive UI using Streamlit for user engagement.",
    tech: ["DenseNet121", "Streamlit", "Hugging Face", "DistilBERT", "Spotify API"],
    twoLiner: "Delivered real-time Spotify playlist recommendations by analyzing facial emotions and text sentiment.",
  },
  {
    title: "Efficient ETL Pipeline",
    description:
      "Developed a streamlined ETL (Extract, Transform, Load) pipeline to enhance data transfer and visualization via a web dashboard, improving error reporting using AWS services.",
    tech: ["Redshift", "Glue", "CloudWatch", "QuickSight", "PostgreSQL"],
    twoLiner: "Streamlined data transfer and visualization by building an efficient AWS-powered ETL pipeline.",
  },
  {
    title: "Churn Analysis Dashboard",
    description:
      "Designed an interactive Tableau dashboard to analyze customer churn patterns, visualize KPIs, and uncover actionable insights from subscription data. Used cohort analysis, churn prediction metrics, and segmentation for retention strategies.",
    link: "https://public.tableau.com/app/profile/allenmanoj/viz/AnalyzeChurn_17355702446080/ChurnAnalysis",
    tech: ["Tableau", "Data Visualization", "Analytics"],
    twoLiner:
      "Interactive Tableau dashboard analyzing churn patterns, KPIs, and retention insights.",
  },
  {
    title: "Customer Segmentation",
    description:
      "Employed clustering algorithms to analyze customer behavior and spending patterns, resulting in a segmentation model that enables targeted marketing strategies.",
    tech: ["Excel", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    archived: true,
    twoLiner: "Drove targeted marketing by segmenting customers through behavioral data clustering and analysis.",
  },
  {
    title: "Detection of Mental Health",
    description:
      "Predicted mental health for adults using machine learning models like Logistic Regression, Decision Trees, Random Forest, KNN, and SVM on organizational employee data. Achieved 84.23% accuracy with cross-validation and feature selection.",
    tech: ["Python", "Flask", "Machine Learning", "Sklearn", "Seaborn", "Pandas", "Pickle"],
    archived: true,
    twoLiner: "Predicted adult mental health outcomes with 84% accuracy using diverse machine learning models.",
  },
  {
    title: "Smart Lender",
    description:
      "Designed and implemented a predictive web application assessing loan eligibility by comparing applicant details with predefined criteria. Integrated analytics dashboards and chatbot support using IBM Watson.",
    tech: ["Python", "Flask", "Machine Learning", "Decision Tree", "Random Forest", "KNN", "XGBoost", "IBM Cloud", "IBM Watson", "Jira"],
    archived: true,
    twoLiner: "Built a predictive loan eligibility web app with analytics dashboards and integrated chatbot support.",
  },
  {
    title: "Crop Mapping Using Fused Optical-Radar Data Set",
    description:
      "Developed and optimized machine learning models, including LDA, Logistic Regression, KNN, SVM, and Random Forest, for multi-class classification of 7 crop types. Improved accuracy through effective preprocessing and hyperparameter tuning.",
    tech: ["R", "Machine Learning"],
    archived: true,
    twoLiner: "Improved multi-crop classification accuracy by optimizing ML models and preprocessing techniques.",
  },
  {
    title: "Project Management System - Bhumi",
    description:
      "Developed a WhatsApp Proof of Concept for Tech4Change using Twilio and Streamlit, enabling users to submit service requests seamlessly. Implemented automated messaging for efficient communication.",
    tech: ["Python", "Twilio", "Streamlit"],
    archived: true,
    twoLiner: "Enabled seamless service request submissions via WhatsApp PoC using Twilio and Streamlit.",
  },
  {
    title: "Age and Gender Detection",
    description:
      "Built a model to predict age and gender from images or webcam streams using computer vision techniques and Convolutional Neural Networks (CNN) with CaffeNet architecture.",
    tech: ["Computer Vision", "Convolutional Neural Networks", "CaffeNet"],
    archived: true,
    twoLiner: "Automated age and gender prediction from images and webcam streams using CNN-based computer vision.",
  },
];
