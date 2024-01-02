from flask import Blueprint, render_template, Flask, request
from smaco import best_pair_for_all 

calculator = Blueprint(__name__,"calculator")

@calculator.route("/")

def home():
    return render_template("calculator.html", routing="/index/")

@calculator.route("/", methods=['POST'])

async def getVal():
    starting_capital = request.form['starting_capital']
    ticker = request.form['ticker']
    selected_option = request.form.get('selected_option')
    #interval = request.form['interval']
    best_short_sma, best_long_sma, best_pnl = 3,3,3#best_pair_for_all("MSFT", "1d", "3000000")
    return render_template("calculator.html", routing="/index/", short_sma=best_short_sma, long_sma=best_long_sma, cash=round(best_pnl,2))