# 🚀 Neuro-Nav Quick Start Guide

## ⚡ Fast Setup (5 Minutes)

### Step 1: Prerequisites Check
```bash
python --version  # Should be 3.9+
```

### Step 2: Run Setup Script (Windows)
```bash
setup.bat
```

**Or Manual Setup:**
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment template
cp .env.example .env
```

### Step 3: Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project: "Neuro-Nav"
3. Enable APIs:
   - Google+ API
   - Google Maps JavaScript API (optional)
4. Create OAuth 2.0 Credentials:
   - Application type: Web application
   - Authorized redirect URIs:
     - `http://localhost:5000/authorize` (development)
     - `https://yourdomain.com/authorize` (production)
5. Copy Client ID and Client Secret

### Step 4: Update .env File
```env
SECRET_KEY=your-random-secret-key
GOOGLE_CLIENT_ID=your-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret-here
```

**Generate SECRET_KEY:**
```python
python -c "import secrets; print(secrets.token_hex(32))"
```

### Step 5: Run the Application
```bash
python app.py
```

Visit: **http://localhost:5000** 🎉

---

## 📱 Features Overview

| Feature | URL | Description |
|---------|-----|-------------|
| Landing | `/` | Marketing homepage |
| Login | `/login` | Google OAuth + Email |
| Dashboard | `/dashboard` | Main hub with map & quick actions |
| Routes | `/dashboard/routes` | Plan calm routes |
| Panic Mode | `/panic` | Emergency safe haven finder |
| Safe Havens | `/dashboard/safe-havens` | Directory of quiet spaces |
| Community | `/dashboard/community` | Report sensory conditions |
| Profile | `/dashboard/profile` | Edit preferences |
| History | `/dashboard/history` | View past routes & stats |

---

## 🎨 Customization

### Change Color Scheme
Edit `static/css/style.css`:
```css
:root {
  --primary-teal: #4ECDC4;  /* Your primary color */
  --secondary-lavender: #B8A8D6;  /* Your secondary color */
}
```

### Modify Theme in Tailwind Config
Edit `templates/base.html` in the `<script>` tag:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary-teal': '#4ECDC4',  // Your colors
            }
        }
    }
}
```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - Free)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set Environment Variables**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add: `SECRET_KEY`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
   - Redeploy

**Update Google OAuth Redirect URI:**
```
https://your-app.vercel.app/authorize
```

### Option 2: Google Cloud Platform

1. **Install gcloud CLI**
   ```bash
   # https://cloud.google.com/sdk/docs/install
   ```

2. **Initialize**
   ```bash
   gcloud init
   gcloud auth login
   ```

3. **Deploy**
   ```bash
   gcloud app deploy
   ```

4. **Set Environment Variables**
   ```bash
   gcloud app deploy app.yaml \
     --set-env-vars="SECRET_KEY=xxx,GOOGLE_CLIENT_ID=yyy"
   ```

### Option 3: Heroku

1. **Create Heroku app**
   ```bash
   heroku create neuro-nav-app
   ```

2. **Add Python buildpack**
   ```bash
   heroku buildpacks:set heroku/python
   ```

3. **Set environment variables**
   ```bash
   heroku config:set SECRET_KEY=xxx
   heroku config:set GOOGLE_CLIENT_ID=yyy
   heroku config:set GOOGLE_CLIENT_SECRET=zzz
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Create Procfile**
   ```
   web: gunicorn app:app
   ```

---

## 🐛 Troubleshooting

### Issue: "Google OAuth Error"
**Solution:**
- Verify redirect URI matches exactly (including http/https)
- Check Client ID and Secret are correct
- Ensure Google+ API is enabled

### Issue: "Module not found"
**Solution:**
```bash
pip install -r requirements.txt --upgrade
```

### Issue: "Can't access localhost:5000"
**Solution:**
```bash
# Check if port is in use
netstat -ano | findstr :5000

# Use different port
python app.py --port 8000
```

Or modify `app.py`:
```python
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
```

### Issue: "Theme toggle not working"
**Solution:**
- Clear browser cache
- Check browser console for JavaScript errors
- Verify Lucide icons are loading

---

## 📊 Next Steps

### Integrate Real APIs

1. **Google Maps API**
   - Get API key: https://developers.google.com/maps
   - Add to `.env`: `GOOGLE_MAPS_API_KEY=xxx`
   - Update map iframe in templates

2. **OpenStreetMap (Free)**
   - No API key needed
   - Documentation: https://wiki.openstreetmap.org/

3. **OSRM Routing (Free)**
   - Self-host or use demo: http://router.project-osrm.org/
   - Replace mock route calculation in `app.py`

### Add Database (Firebase/PostgreSQL)

**Option A: Firebase (Easiest)**
```bash
pip install firebase-admin
```

**Option B: PostgreSQL**
```bash
pip install psycopg2-binary
```

### Enable PWA Features

1. Update `static/sw.js` with proper caching
2. Add `manifest.json`:
```json
{
  "name": "Neuro-Nav",
  "short_name": "NeuroNav",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#4ECDC4",
  "theme_color": "#4ECDC4",
  "icons": [
    {
      "src": "/static/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🎓 Learning Resources

- **Flask Documentation**: https://flask.palletsprojects.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **OAuth 2.0**: https://oauth.net/2/
- **Progressive Web Apps**: https://web.dev/progressive-web-apps/

---

## 📞 Support

- **GitHub Issues**: [Report bugs](https://github.com/yourusername/neuro-nav/issues)
- **Email**: support@neuro-nav.app
- **Community**: Join our Discord (coming soon!)

---

**Made with 🧠 and ❤️ for the neurodivergent community**
