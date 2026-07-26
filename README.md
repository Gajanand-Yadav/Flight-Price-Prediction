# Flight Price Prediction ✈️

A machine learning project designed to predict flight ticket prices based on various features such as airlines, source and destination cities, departure times, stops, and duration. This project helps travelers estimate flight costs and understand the key factors influencing airline pricing.

---

## 🚀 Features

- **Data Preprocessing & Cleaning:** Handles missing values, cleans categorical and numerical features, and formats date-time variables.
- **Exploratory Data Analysis (EDA):** Visualizes pricing trends across different airlines, seasons, and routes using advanced plotting libraries.
- **Feature Engineering:** Extracts meaningful features (like duration in hours/minutes, departure time slots, etc.) to improve model accuracy.
- **Model Training & Evaluation:** Trains and compares multiple machine learning algorithms (e.g., Random Forest, Gradient Boosting, Linear Regression) to achieve optimal predictive performance.

---

## 🛠️ Tech Stack

- **Language:** Python 🐍
- **Libraries & Frameworks:** 
  - `Pandas` & `NumPy` for data manipulation
  - `Scikit-Learn` for machine learning models and evaluation metrics
  - `Matplotlib` & `Seaborn` for data visualization

---




⚙️ Installation & Setup
Follow these steps to set up and run the project locally:

Clone the repository:

Bash
git clone [https://github.com/Gajanand-Yadav/Flight-Price-Prediction.git](https://github.com/Gajanand-Yadav/Flight-Price-Prediction.git)
cd Flight-Price-Prediction
Create a virtual environment (optional but recommended):

Bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
Install dependencies:

Bash
pip install -r requirements.txt
📊 Usage
Open the exploratory notebooks or run the pipeline scripts to see how data is cleaned and processed:

Bash
jupyter notebook notebooks/
Execute the prediction script or application to predict flight prices for new inputs.

## 📁 Project Structure

``` text
Flight-Price-Prediction/
│
├── data/                 # Dataset files (train, test, or raw data)
├── notebooks/            # Jupyter notebooks for EDA and model experimentation
├── models/               # Saved trained models (.pkl or .joblib)
├── src/                  # Source code for preprocessing and prediction pipeline
├── requirements.txt      # Project dependencies
└── README.md             # Project documentation
