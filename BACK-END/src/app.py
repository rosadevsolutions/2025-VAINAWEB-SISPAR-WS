from flask import Flask
from src.controller.collaborator_controller import bp_collaborator
from src.model import db
from config import Config

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bp_collaborator)
    app.config.from_object(Config)
    db.init_app(app)

    with app.app_context():
        db.create_all()

    return app
