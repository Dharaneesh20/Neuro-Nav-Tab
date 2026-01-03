# 🧠 Neuro-Nav - Flask Edition

**Calm Navigation for Neurodivergent Individuals**

A modern, responsive web application built with Flask, designed to help neurodivergent individuals navigate the world with less sensory stress.

![Python](https://img.shields.io/badge/python-3.9+-blue.svg)
![Flask](https://img.shields.io/badge/flask-3.0.0-green.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwind-3.x-38bdf8.svg)
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

## ✨ Features

- 🗺️ **Sensory-Safe Routes** - AI-powered routing that avoids sensory triggers
- 🆘 **Panic Mode** - One-tap access to nearest safe havens with breathing exercises
- 🌳 **Safe Haven Directory** - Curated quiet spaces (parks, libraries, cafes)
- 📊 **Real-Time Calm Scores** - Live environmental sensory assessments
- 👥 **Community Powered** - Anonymous reporting of sensory conditions
- 🌓 **Dark/Light Mode** - Eye-friendly themes that automatically adapt
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🔒 **Privacy First** - No data selling, secure Google OAuth

## 🚀 Quick Start

### Prerequisites

- Python 3.9 or higher
- pip (Python package manager)
- Google Cloud account (for OAuth)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/neuro-nav-flask.git
   cd neuro-nav-flask
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your credentials:
   ```env
   SECRET_KEY=your-secret-key-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Open your browser**
   ```
   http://localhost:5000
   ```

## 🔐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Google+ API"
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Set authorized redirect URI:
   - Development: `http://localhost:5000/authorize`
   - Production: `https://yourdomain.com/authorize`
6. Copy Client ID and Client Secret to `.env`

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set environment variables in Vercel Dashboard**
   - Go to your project → Settings → Environment Variables
   - Add `SECRET_KEY`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`

### Deploy to Google Cloud Platform (GCP)

1. **Install Google Cloud SDK**
   ```bash
   # Follow instructions at: https://cloud.google.com/sdk/docs/install
   ```

2. **Initialize gcloud**
   ```bash
   gcloud init
   gcloud auth login
   ```

3. **Deploy to App Engine**
   ```bash
   gcloud app deploy app.yaml
   ```

4. **Set environment variables**
   ```bash
   gcloud app deploy app.yaml --set-env-vars="SECRET_KEY=your-key,GOOGLE_CLIENT_ID=your-id"
   ```

## 📁 Project Structure

```
neuro-nav-flask/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── vercel.json           # Vercel deployment config
├── app.yaml              # GCP deployment config
├── .env.example          # Environment variables template
│
├── static/
│   ├── css/
│   │   └── style.css     # Custom styles with animations
│   ├── js/
│   │   └── main.js       # JavaScript utilities
│   └── sw.js             # Service Worker (PWA)
│
└── templates/
    ├── base.html         # Base template with nav/footer
    ├── landing.html      # Landing page
    ├── login.html        # Login page
    ├── onboarding.html   # Onboarding flow
    ├── profile-setup.html # Profile configuration
    ├── dashboard.html    # Main dashboard
    ├── routes.html       # Route planning
    ├── panic.html        # Emergency panic mode
    ├── safe-havens.html  # Safe havens directory
    ├── community.html    # Community reporting
    ├── profile.html      # User profile
    └── history.html      # Route history
```

## 🎨 Tech Stack

### Backend
- **Flask 3.0** - Modern Python web framework
- **Authlib** - OAuth 2.0 authentication
- **Gunicorn** - WSGI HTTP server

### Frontend
- **Tailwind CSS 3.x** - Utility-first CSS framework
- **Lucide Icons** - Beautiful open-source icons
- **Vanilla JavaScript** - No heavy frameworks, pure performance
- **Google Fonts** - Inter & Work Sans

### APIs (Ready to integrate)
- Google Maps Embed API
- OpenStreetMap Overpass API
- Nominatim Geocoding
- OSRM Routing

## 🛠️ Development

### Run in development mode
```bash
export FLASK_ENV=development
export FLASK_DEBUG=1
python app.py
```

### Hot reload
Flask auto-reloads on file changes when `FLASK_DEBUG=1`

### Run tests
```bash
# Tests coming soon!
pytest
```

## 🎯 Roadmap

- [ ] Integrate real routing APIs (OSRM)
- [ ] Add Places API for safe havens
- [ ] Implement user database (Firebase/PostgreSQL)
- [ ] Add voice navigation (Web Speech API)
- [ ] Progressive Web App (PWA) features
- [ ] Offline mode support
- [ ] Multi-language support
- [ ] iOS app wrapper

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with 💙 for the neurodivergent community
- Inspired by real experiences and challenges
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

## 📧 Support

- **Email**: support@neuro-nav.app
- **Issues**: [GitHub Issues](https://github.com/yourusername/neuro-nav-flask/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/neuro-nav-flask/discussions)

## 🌟 Star Us!

If this project helps you, please give it a ⭐ on GitHub!

---

**Made with 🧠 and ❤️ by the Neuro-Nav Team**
