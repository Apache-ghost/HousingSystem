from flask import request, jsonify
from config import app, db
from models import Users, Properties, Testimonial
#use postman for testing api's before connecting to frontend

#property fetching
@app.route("/properties", methods=["GET"])
def get_property():
    properties = Properties.query.all()
    json_properties = list(map(lambda x: x.to_json(), properties))
    return jsonify({"contacts": json_properties}) #no status code since 200 is default

@app.route("/create_properties", methods=["POST"])
def create_property():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")

    if not first_name or not last_name or not email:
        return(
            jsonify({"message": "Enter first name, last name and email"}),
            400, 
        )
    
    new_contact = Contact(first_name=first_name, last_name=last_name, email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400    
    
    return jsonify({"message": "user created!"}), 201

@app.route("/update_contact/<int:user_id>", methods=["PUT"])
def update_contact(user_id):
    contact = Contact.query.get(user_id)
    
    if not contact:
        return jsonify({"message": "User not found"}), 404
    
    data = request.json
    contact.first_name = data.get("firstName", contact.first_name)
    contact.last_name = data.get("lastName", contact.last_name)
    contact.email = data.get("email", contact.email)

    db.session.commit()

    return jsonify({"message": "User updated"}), 200

@app.route("/delete_contact/<int:user_id>", methods=["DELETE"])
def delete_contact(user_id):
    contact = Contact.query.get(user_id)
    
    if not contact:
        return jsonify({"message": "User not found"}), 404
    
    db.session.delete(contact)
    db.session.commit()

    return jsonify({"message": "User deleted"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
