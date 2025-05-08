from flask import Blueprint

bp_collaborator = Blueprint('colaborador', __name__, url_prefix='/colaborador')

list_data_collaborators = [
    {'id':1, 'nome':'Wendel Santos', 'cargo':'Gerente Supply Chain', 'cracha':'000003'},
    {'id':2, 'nome':'Igor Maciel', 'cargo':'Tech Lead', 'cracha':'00105'},
    {'id':3, 'nome':'Rafael Borborema', 'cargo':'Gerente Financeiro', 'cracha':'000004'},
    {'id':4, 'nome':'Elaine Veloso', 'cargo':'Coordenador Financeiro', 'cracha':'000102'},
    {'id':5, 'nome':'Lucas Machado', 'cargo':'Analista Financeiro', 'cracha':'000201'}
]

@bp_collaborator.route('/dados')
def get_data_collaborators():
    return list_data_collaborators
