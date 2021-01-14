import os
import sys
from importlib import reload
from flask import Flask, render_template, redirect, request, url_for

# Needed for encoding to utf8
reload(sys)

app = Flask(__name__)
app.secret_key = 'some_secret'
data = []
round = 0


# Good ol' write to file function
def write_to_file(filename, data):
    with open(filename, "a+") as file:
        file.writelines(data)


#This is where the riddles live
def riddle():
    riddles = []
    with open("data/-riddles.txt", "r") as e:
        lines = e.read().splitlines()
    for line in lines:
        riddles.append(line)
    return riddles

def option():
    options = []
    with open("data/option-names.txt", "r") as e:
        lines = e.read().splitlines()
    for line in lines:
        options.append(line)
    return options

def reason_fetch():
    reasons = []
    with open("data/reasons.txt", "r") as e:
        lines = e.read().splitlines()
    for line in lines:
        reasons.append(line)
    return reasons

# This is where the answers for the riddles live
def riddle_answers():
    answers = []
    with open("data/-answers.txt", "r") as e:
        lines = e.read().splitlines()
    for line in lines:
        answers.append(line)
    return answers


# Clear functions for wrong answers and score
def clear_guesses(username):
    with open("data/user-" + username + "-guesses.txt", "w"):
        return

def clear_score(username):
    with open("data/user-" + username + "-score.txt", "w"):
        return


# Wrong answer handling
def store_all_attempts(username):
    attempts = []
    with open("data/user-" + username + "-guesses.txt", "r") as incorrect_attempts:
        attempts = incorrect_attempts.readlines()
    return attempts

def num_of_attempts():
    attempts = store_all_attempts(username)
    return len(attempts)

def attempts_remaining():
    remaining_attempts = 3 - num_of_attempts()
    return remaining_attempts


# Score gets lower the more attempts used
def add_to_score():
    round_score = 4 - num_of_attempts()
    return round_score

#Adds all the scores from all riddles to make final score
def end_score(username):
    with open("data/user-" + username + "-score.txt", "r") as numbers_file:
        total = 0
        for line in numbers_file:
            try:
                total += int(line)
            except ValueError:
                pass
    return total

#Add final score to highscore list after the last riddle
def final_score(username):
    score = str(end_score(username))

    if username != "" and score != "":
        with open("data/-highscores.txt", "a") as file:
                file.writelines(username + "\n")
                file.writelines(score + "\n")
    else:
        return

#Used to retrieve scores from highscore file for use on highscore page
def get_scores():
    usernames = []
    scores = []

    with open("data/-highscores.txt", "r") as file:
        lines = file.read().splitlines()
    # Separates usernames and scores
    for i, text in enumerate(lines):
        if i%2 ==0:
            usernames.append(text)
        else:
            scores.append(text)
    # Sorts and zips all the highscore info up for use on highscore page
    usernames_and_scores = sorted(zip(usernames, scores), key=lambda x: x[1], reverse=True)
    return usernames_and_scores




# HOMEPAGE
@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        global username
        username = request.form['username'].lower()
        if username == "":
            return render_template("index.html", page_title="Home", username=username)
        else:
            return redirect(url_for('user', username=username))
    return render_template("index.html", page_title="Home")


# USER WELCOME PAGE
@app.route('/<username>', methods=["GET", "POST"])
def user(username):

    # Create a User Specific File for Score Keeping etc.
    open("data/user-" + username + "-score.txt", 'a').close()
    clear_score(username)
    open("data/user-" + username + "-guesses.txt", 'a').close()
    clear_guesses(username)

    if request.method =="POST":
        return redirect(url_for('game', username=username))

    return render_template("welcome.html",
                            username=username)


# GAME PAGE
@app.route('/<username>/game', methods=["GET", "POST"])
def game(username):

    remaining_attempts = 3
    riddles = riddle()
    options = option()
    answers = riddle_answers()
    score = 0
    global round
    riddle_index = max(round, 0)

    if request.method == "POST":
        riddle_index = int(request.form["riddle_index"])
        user_response = [request.form["1"].lower(), request.form["2"].lower(), request.form["3"].lower()]

        write_to_file("data/user-" + username + "-guesses.txt", str(user_response) + "\n")

        # Compare the user's answer to the correct answer of the riddle

        if answers[riddle_index].split() == user_response:
            # Correct answer
            if riddle_index < 4:
                # If riddle number is less than 10 & answer is correct: add score, clear wrong answers file and go to next riddle
                write_to_file("data/user-" + username + "-score.txt", str(add_to_score()) + "\n")
                clear_guesses(username)
                return redirect(url_for('reason', username=username, riddle_index=riddle_index))
                riddle_index += 1
            else:
                # If right answer on LAST riddle: add score, submit score to highscore file and redirect to congrats page
                write_to_file("data/user-" + username + "-score.txt", str(add_to_score()) + "\n")
                final_score(username)
                return redirect(url_for('reason', username=username, riddle_index=riddle_index))

        else:
            # Incorrect answer
            if attempts_remaining() > 0:
                # if answer was wrong and more than 0 attempts remaining, reload current riddle
                riddle_index = riddle_index
            else:
                # If all attempts are used up, redirect to Gameover page
                return redirect(url_for('gameover', username=username))

    return render_template("game.html",
                            username=username, riddle_index=riddle_index, riddles=riddles, options=options,
                            answers=answers, attempts=store_all_attempts(username), remaining_attempts=attempts_remaining(), score=end_score(username))


# REASONS
@app.route('/<username>/reason', methods=["GET", "POST"])
def reason(username):
    global round
    reasons = reason_fetch()
    if request.method =="POST":
        round+=1
        riddle_index = (int(request.form["riddle_index"])) + 1
        if round<5:
            return redirect(url_for('game', username=username, riddle_index=riddle_index))
        else:
            return redirect(url_for('congrats', username=username, score=end_score(username)))
    return render_template("reason.html", username=username, reasons=reasons, riddle_index=round)

# GAMEOVER PAGE
@app.route('/<username>/gameover', methods=["GET", "POST"])
def gameover(username):

    clear_guesses(username)
    clear_score(username)

    rem_attempts = 3
    riddles = riddle()
    riddle_index = 0
    answers = riddle_answers()
    score = 0

    if request.method =="POST":

        return redirect(url_for('game', username=username))

    return render_template("gameover.html",
                            username=username)


# FINISH PAGE
@app.route('/<username>/congratulations', methods=["GET", "POST"])
def congrats(username):

    clear_guesses(username)

    if request.method =="POST":
        usernames_and_scores = get_scores()
        return redirect(url_for('highscores', usernames_and_scores=usernames_and_scores))

    return render_template("congratulations.html",
                            username=username, score=end_score(username))


# ABOUT PAGE
@app.route('/about')
def about():
    return render_template("about.html", page_title="About")


# HIGHSCORE PAGE
@app.route('/highscores')
def highscores():

    usernames_and_scores = get_scores()
    length = len(usernames_and_scores)
    return render_template("highscores.html", page_title="Highscores", usernames_and_scores=usernames_and_scores, length=length)


if __name__ == '__main__':
    DEFAULT_PORT = 5000
    app.run(host=os.environ.get('IP'),
            port=int(os.getenv('PORT',DEFAULT_PORT)),
            debug=True)
