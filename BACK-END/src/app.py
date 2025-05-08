from flask import Flask
from src.controller.colaborador_controller import bp_collaborator

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bp_collaborator)
    return app
