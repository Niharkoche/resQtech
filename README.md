🛰️ ResQTech – Smart Tourist Safety Monitoring & Incident Response System

ResQTech is an innovative solution built for SIH Problem Statement SIH25002 (Ministry of Development of North Eastern Region).
It ensures tourist safety in remote and high-risk areas using a combination of:

🤖 AI-powered anomaly detection

📍 Geo-fencing with real-time tracking

🔗 Blockchain-based Digital Identity

Our goal is to make travel safer, faster in emergency response, and build trust in tourism across the North-Eastern region of India.

🚨 Problem We Solve

Tourists in hilly and remote areas face challenges like:

Getting lost or going missing in remote terrains.

Entering restricted/danger zones unknowingly.

Delay in emergency response due to lack of monitoring.

Fake tourist IDs and misuse of passes.

No unified system for incident reporting and tracking.

💡 Our Solution

ResQTech provides a Smart Tourist Safety Monitoring & Incident Response Platform:

Tourist App (Flutter)

Blockchain-based Digital ID (QR code / wallet).

Safe route navigation with geo-fencing alerts.

Real-time anomaly detection using AI.

One-tap SOS button with instant authority alerts.

Authority Dashboard (Web App)

Live tracking of tourists (with consent).

Incident management system.

Geo-fence violation alerts.

Analytics & reports for better tourism planning.

Emergency Response System

Auto-alerts to nearby police, hospitals, and rescue teams.

Includes tourist’s live location + verified ID.

🛠️ Technology Stack

Frontend (Tourist App): Flutter

Dashboard: React / Angular

Backend APIs: Node.js / Django REST

Database: PostgreSQL

Blockchain: Hyperledger / IPFS (for digital IDs)

Geo-fencing: Google Maps API / OpenStreetMap + GeoServer

AI Models: TensorFlow Lite / PyTorch Mobile (anomaly detection)

Cloud Infra: AWS / GCP

Notifications: Firebase Cloud Messaging

🏗️ System Architecture
Tourist Mobile App <--> API Gateway <--> Backend Server
         |                 |               |
   Geo-fencing SDK     AI Service   Blockchain (Digital ID)
         |                                 |
      GPS Data ------------------> Authority Dashboard
                                       |
                               Emergency Response Teams

📱 Features
For Tourists

✅ Blockchain-secured Digital ID

✅ Safe route navigation & alerts for danger zones

✅ One-tap SOS button

✅ Real-time notifications

For Authorities

✅ Live tourist tracking

✅ Geo-fence monitoring

✅ Incident reporting & management

✅ Data analytics for tourism

🎯 Expected Outcomes

Safer travel experiences for tourists.

Faster and more efficient rescue response.

Reduced misuse of fake IDs.

Data-driven insights for tourism boards.

Increased trust & tourism in the North-Eastern region.

📂 Repository Structure
ResQTech/
│── mobile-app/        # Flutter-based tourist app
│── backend/           # Node.js / Django REST APIs
│── dashboard/         # Authority web dashboard
│── blockchain/        # Digital ID (Hyperledger/IPFS)
│── ai-service/        # Anomaly detection models
│── docs/              # Documentation & guides
└── README.md          # Project overview

🚀 Getting Started
Clone the repository
git clone https://github.com/<your-username>/ResQTech.git
cd ResQTech

Setup Instructions

Follow instructions inside each folder (mobile-app/, backend/, etc.) for environment setup.

Configure Google Maps API key for geo-fencing.

Deploy blockchain network (Hyperledger/IPFS).

Train and deploy AI anomaly detection model.

🤝 Contributing

We welcome contributions! Please fork the repo and create a PR with your proposed changes.

📜 License

This project is licensed under the MIT License.

🏆 Acknowledgments

Ministry of Development of North Eastern Region (Problem Statement SIH25002).

Smart India Hackathon platform.

Open-source communities of Flutter, TensorFlow, Hyperledger, and GeoServer.
