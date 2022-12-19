import json

from flask import Flask, request
from flask_cors import CORS

app = Flask("game-api")
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/v1/setup-game", methods=["GET"])
def setup_game():
    path_to_assets_folder = "/Users/luchicla/Work/RAU/rau-web-apps-programming-1-extra-2022-2023/game/assets"
    initial_score = 100
    response = {
        "path": path_to_assets_folder,
        "initial_score": initial_score
    }
    response = json.dumps(response)
    return response, 200, {"Content-Type": "application/json"}


@app.route("/api/v1/save-game-data", methods=["POST"])
def save_game_data():
    body = request.json
    print(f"body = {body}")
    return "{}", 200, {"Content-Type": "application/json"}


app.run(debug=True, port=5001)
