from sqlalchemy.schema import Column
from sqlalchemy.types import String, DECIMAL, Integer
from src.model import db

class Collaborator(db.Model):
    __tablename__ = 'tb_collaborator'

    id      = Column(Integer, primary_key=True, autoincrement=True)
    nome    = Column(String(100))
    email   = Column(String(100))
    senha   = Column(String(50))
    cargo   = Column(String(100))
    salario = Column(DECIMAL(10,2))

    def __init__ (self, nome, email, senha, cargo, salario):
        self.nome = nome
        self.email = email
        self.senha = senha
        self.cargo = cargo
        self.salario = salario
