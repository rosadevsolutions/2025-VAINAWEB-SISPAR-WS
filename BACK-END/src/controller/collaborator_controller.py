from flask import Blueprint, request, jsonify
from src.model.collaborator_model import Collaborator
from src.model import db

bp_collaborator = Blueprint('colaboradores', __name__, url_prefix='/colaboradores')

collaborator_list = [
    {
        'id':1,
        'nome':'Wendel Santos',
        'email': 'wendel@wss.com',
        'senha':'1010',
        'cargo':'Gerente Supply Chain',
        'salario':'200000'
    },
    {
        'id':2,
        'nome':'Igor Maciel',
        'email': 'igor@wss.com',
        'senha':'2020',
        'cargo':'Tech Lead',
        'salario':'170000'
    },
    {
        'id':3,
        'nome':'Rafael Borborema',
        'email': 'rafael@wss.com',
        'senha':'3030',
        'cargo':'Gerente Financeiro',
        'salario':'200000'
    },
    {
        'id':4,
        'nome':'Elaine Veloso',
        'email': 'elaine@wss.com',
        'senha':'4040',
        'cargo':'Coordenador Financeiro',
        'salario':'170000'
    },
    {
        'id':5,
        'nome':'Lucas Machado',
        'email': 'lucas@wss.com',
        'senha':'5050',
        'cargo':'Analista Financeiro',
        'salario':'120000'
    }
]


@bp_collaborator.route('/exibir', methods=['GET'])
def read_collaborator():
    return jsonify(collaborator_list),200


@bp_collaborator.route('/cadastrar', methods=['POST'])
def create_collaborator():
    collaborator_request = request.get_json()

    if not collaborator_request:
        return jsonify( {'Erro': 'Todos os campos devem ser preenchidos'}), 400

    collaborator_new = Collaborator(
        nome = collaborator_request['nome'],
        email = collaborator_request['email'],
        senha = collaborator_request['senha'],
        cargo = collaborator_request['cargo'],
        salario = collaborator_request['salario']
    )

    db.session.add(collaborator_new)
    db.session.commit()
    return jsonify({'mensagem':'Colaborador cadastrado com sucesso!'}), 201


@bp_collaborator.route('/atualizar/<int:collaborator_id>', methods=['PUT'])
def update_collaborator(collaborator_id):
    collaborator_request = request.get_json()

    for collaborator in collaborator_list:
        if collaborator['id'] == collaborator_id:
            collaborator_found = collaborator
            break

    if 'nome' in collaborator_request:
        collaborator_found['nome'] = collaborator_request['nome']

    if 'email' in collaborator_request:
        collaborator_found['email'] = collaborator_request['email']

    if 'senha' in collaborator_request:
        collaborator_found['senha'] = collaborator_request['senha']

    if 'cargo' in collaborator_request:
        collaborator_found['cargo'] = collaborator_request['cargo']

    if 'salario' in collaborator_request:
        collaborator_found['salario'] = collaborator_request['salario']

    return jsonify({'mensagem':'Colaborador atualizado com sucesso!'}), 200
