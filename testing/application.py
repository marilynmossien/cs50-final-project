from flask import Flask, flash, redirect, render_template, request, session, url_for      #
from flask_session import Session                                                         #
from tempfile import gettempdir                                                           #       
                                                                                          #
# configure application                                                                   #    
app = Flask(__name__)                                                                     #
                                                                                          #
# ensure responses aren't cached                                                          #
if app.config["DEBUG"]:                                                                   #    
    @app.after_request                                                                    #    
    def after_request(response):                                                          #
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"         #   all from from CS50 psets 7,8
        response.headers["Expires"] = 0                                                   #
        response.headers["Pragma"] = "no-cache"                                           #      
        return response                                                                   # 
                                                                                          #
# configure session to use filesystem (instead of signed cookies)                         #
app.config["SESSION_FILE_DIR"] = gettempdir()                                             # 
app.config["SESSION_PERMANENT"] = False                                                   #
app.config["SESSION_TYPE"] = "filesystem"                                                 #
Session(app)                                                                              #       

# basic route to homepage so homepage opens when webpage opened  
@app.route("/")
def intro():
    return render_template("intro.html")
    
# route to redirect to intro page
@app.route("/index")
def index():
    if request.method == "GET":
        return render_template("parttwo.html")
        
# route to redirect to instructions        
@app.route("/template")
def template():
    if request.method == "GET":
        return render_template("template.html")
        
# route to redirect to event planning page         
@app.route("/test")
def test():
    if request.method == "GET":
        return render_template("test.html")
        
# route to redirect to choice page        
@app.route("/choice")
def choice(): 
    if request.method == "GET":
        return render_template("choice.html")
        
# route to redirect to novel planning page 
@app.route("/choice2")
def choice2():
    if request.method == "GET":
        return render_template("novel.html")