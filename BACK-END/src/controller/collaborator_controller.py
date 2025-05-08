from flask import Blueprint, request, jsonify

bp_collaborator = Blueprint('colaboradores', __name__, url_prefix='/colaboradores')

collaborator_list = [
    {'id':1, 'nome':'Wendel Santos', 'cargo':'Gerente Supply Chain', 'cracha':'000003'},
    {'id':2, 'nome':'Igor Maciel', 'cargo':'Tech Lead', 'cracha':'00105'},
    {'id':3, 'nome':'Rafael Borborema', 'cargo':'Gerente Financeiro', 'cracha':'000004'},
    {'id':4, 'nome':'Elaine Veloso', 'cargo':'Coordenador Financeiro', 'cracha':'000102'},
    {'id':5, 'nome':'Lucas Machado', 'cargo':'Analista Financeiro', 'cracha':'000201'}
]


@bp_collaborator.route('/exibir')
def read_collaborator():
    return collaborator_list


@bp_collaborator.route('/cadastrar', methods=['POST'])
def create_collaborator():
    collaborator_request = request.get_json()
    collaborator_new = {
        'id': len(collaborator_list) + 1,
        'nome': collaborator_request['nome'],
        'cargo': collaborator_request['cargo'],
        'cracha': collaborator_request['cracha']
    }
    collaborator_list.append(collaborator_new)
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

    if 'cargo' in collaborator_request:
        collaborator_found['cargo'] = collaborator_request['cargo']

    if 'cracha' in collaborator_request:
        collaborator_found['cracha'] = collaborator_request['cracha']

    return jsonify({'mensagem':'Colaborador atualizado com sucesso!'}), 200
