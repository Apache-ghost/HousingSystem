
from config import app, db
from models import Properties

# Create the database and the database table
with app.app_context():
    db.create_all()
    print("Database tables created")
