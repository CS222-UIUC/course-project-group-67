import MySQLdb as db
from sqlalchemy import *


con = db.connect(user="group-67", passwd="secret")
cur = con.cursor()
cur.execute('CREATE DATABASE chom;')


metadata = MetaData()
engine = create_engine('mysql+mysqldb://scott:tiger@localhost/foo')
person_table = Table('person', metadata, autoload=True, autoload_with=engine)
q = person_table.insert().values(name='John', age=20)
connection = engine.connect()
connection.execute(q)
