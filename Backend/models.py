from config import db

class Users(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    location = db.Column(db.String(80), unique=False, nullable=False)
    contact = db.Column(db.String(80), unique=False, nullable=False)

    def to_json(self):
        return{
            "userId": self.user_id,
            "userName": self.user_name,
            "password": self.password,
            "location": self.location,
            "contact": self.contact,
        }
    

class Properties(db.Model):
    property_id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(80), unique=False, nullable=False)
    cost = db.Column(db.float, unique=False, nullable=False)
    location = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)

    def to_json(self):
        return{
            "propertyId": self.property_id,
            "category": self.category,
            "cost": self.cost,
            "location": self.location,
            "description": self.description,
        }   
    
class Testimonial(db.Model):
    name = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.String(80), unique=False, nullable=False)
    experience = db.Column(db.float, unique=False, nullable=False)

    def to_json(self):
        return{
            "name": self.name,
            "rating": self.rating,
            "experience": self.experience,
        }       