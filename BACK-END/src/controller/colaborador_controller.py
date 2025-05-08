from flask import Blueprint

bp_collaborator = Blueprint('colaborador', __name__, url_prefix='/colaborador')

@bp_collaborator.route('/colaboradores')
def get_collaborators():
    list_collaborators = [
        {'nome':'Wendel Santos', 'cargo':'Gerente Supply Chain', 'cracha':'000003'},
        {'nome':'Igor Maciel', 'cargo':'Tech Lead', 'cracha':'00105'},
        {'nome':'Rafael Borborema', 'cargo':'Gerente Financeiro', 'cracha':'000004'},
        {'nome':'Elaine Veloso', 'cargo':'Coordenador Financeiro', 'cracha':'000102'},
        {'nome':'Lucas Machado', 'cargo':'Analista Financeiro', 'cracha':'000201'}
    ]

    return list_collaborators
