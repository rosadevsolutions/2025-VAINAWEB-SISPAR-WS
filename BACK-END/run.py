from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'teste main'

if __name__ == '__main__':
    app.run(debug=True)

"""
BUGS CORRIGIDOS
1) INSTALAÇÃO DE MÓDULOS - NÃO SENDO RECONHECIDAS PELO PYLANCE
Ao tentar instalar ao flask direto por pip install o vscode instalava na lib da venv mas o pylance não habilitava o modulo para uso.
SOLUÇÃO: Acessar o Python Interpreter e fazer o path até venv/Scripts/python para instalar o módulo. Dessa forma o vscode instala o modulo no python presente na venv.
OBS: Esse caminho deve ser realizado para instalar qualquer módulo.

2) PYLINT - MENSAGENS DE ERRO DOCSTRING
O erro ocorre devido a uma questão de convensão do Python e o Docstring.
Diversos vídeos sugerem desabilitar o Pylint, o que achava ruim já que ele nos sinaliza problemas no código.
SOLUÇÃO: Incluir no Settings do usuario no VSCcode uma linha desabilitando somente as mensagens referentes aos erros de docstring
"""
