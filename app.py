from flask import Flask, render_template
# from record import record
app = Flask(__name__)



@app.route("/")
def home():
    return render_template(
        "index.html"
    )

# def record():
#     record()


