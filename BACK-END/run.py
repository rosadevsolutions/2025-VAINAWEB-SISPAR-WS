from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'teste main'

if __name__ == '__main__':
    app.run(debug=True)

"""
BUGS CORRIGIDOS
1) INSTALAÇÃO DE MÓDULOS E CLASS - NÃO SENDO RECONHECIDAS PELO PYLANCE
Ao tentar instalar o flask através do terminal com o comando pip install flask, o modulo era instalado na lib da venv, mas o pylance não habilitava o modulo e suas classes para uso.
SOLUÇÃO: Acessar o Python Interpreter, acessar o path para o python que consta nos Scripts da venv e assim fazer a instalação do módulo (venv/Scripts/python). Dessa forma o modulo é instalado entre as libs da venv e o import é habilita pra uso em qualquer arquivo.
OBS: Esse caminho deve ser realizado para instalar qualquer módulo.

2) PYLINT - MENSAGENS DE ERRO DOCSTRING
O erro ocorre devido a uma questão de convenção entre o Python e o Docstring.
Diversos vídeos sugerem desabilitar o Pylint, o que achava ruim já que ele nos sinaliza problemas no código.
SOLUÇÃO: Incluir no Settings do usuario no VSCcode uma linha desabilitando somente as mensagens referentes aos erros de docstring
"""
