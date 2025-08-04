from flask import Flask, session, request, render_template, url_for, redirect
import uuid


app = Flask(__name__)
app.secret_key = "secret_key"

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST" and request.form.get("createButton") == "true":
        create_button_value = request.form.get("createButton")
        code = str(uuid.uuid4())[:5]
        session["turn_time"] = request.form.get("turnTimeValue")
        session["minutes_per_player"] = request.form.get("gameTimeValue")
        session["starting_player"] = request.form.get("startingPlayerValue")
        return redirect(url_for("room", game_id=code))
    else:
        return render_template("home.html")


@app.route("/room/<game_id>")
def room(game_id):
    return render_template("room.html", game_id=game_id)