from datetime import datetime

# Add this to app.py to inject current hour for dashboard greeting
@app.context_processor
def inject_now():
    return {'hour': datetime.now().hour}
