from flask import Flask, render_template, request, jsonify
from cs50 import SQL

app = Flask(__name__)

db = SQL('sqlite:///m.db')

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/pocket',methods=["Get","Post"])
def pocket():
    if request.method == 'POST':
        db.execute('INSERT INTO stat (amount, date, category) values (?,?,?)', request.form.get('amount'), request.form.get('date'), request.form.get('category'))
        return jsonify(db.execute('SELECT * FROM stat'))
    return jsonify(db.execute('SELECT * FROM stat'))
