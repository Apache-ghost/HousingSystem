from config import db

class Properties(db.Model):
    property_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    seller_id = db.Column(db.Integer, unique=False, nullable=True)
    category = db.Column(db.String(80), unique=False, nullable=False)
    cost = db.Column(db.Float, unique=False, nullable=False)
    location = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(80), unique=False, nullable=False)
    image = db.Column(db.String(200), unique=False, nullable=False)

    def to_json(self):
        return {
            "propertyId": self.property_id,
            "sellerId": self.seller_id,
            "category": self.category,
            "cost": self.cost,
            "image": self.image,
            "location": self.location,
            "description": self.description,
        }

class Testimonials(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    author = db.Column(db.String(80), unique=False, nullable=False)
    rating = db.Column(db.Float, unique=False, nullable=False)
    review = db.Column(db.String(80), unique=False, nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "author": self.author,
            "rating": self.rating,
            "review": self.review,
        }
