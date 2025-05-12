from flask import Flask
from src.controller.collaborator_controller import bp_collaborator
from src.model import db

def create_app():
    app = Flask(__name__)
    app.register_blueprint(bp_collaborator)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost:3306/sispar'
    db.init_app(app)

    with app.app_context():
        db.create_all()

    return app

# CORRECAO
# Apos inumeras tentativas de usar na linha 8 o código app.config.from_object(Config)
# So consegui inicializar o projeto trocando para
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost:3306/sispar'
# ao que me parece o python não estava reconhecendo o objeto Config apesar de enxergar o modulo e class
