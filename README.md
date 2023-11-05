# Crazy-Chess NJIThack
## This is a chess interacive website where players can play online chess
*But here is a twist !! This chess is treacherous and it betrays ! Red Rackham and his pirates have attacked Sir Francis Haddock's ship The Unicorn. Help our captain to save The Unicorn by a game of chess. But there's a deal Red Rackham wont play regular chess according to the rules of warfare. Since he is a pirate he will use his own version of crazy chess!*
> Here every piece has an affinity which makes it double the fun. Chess pieces change colour from black to white and vice versa midgame reversing the winning chances once it crosses 0. 
---

[![Python 3.6](https://img.shields.io/badge/python-3.6-yellow.svg)](https://www.python.org/downloads/release/python-360/)
![Django 3.0](https://img.shields.io/badge/Django-3.0-green.svg)
[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)]()
# Crazy-Chess


ASGI Django Server to play Chess in real-time using Django Channels and Redis.

Video Link : https://youtu.be/1vTLLf82KwE


## `master branch`
Master branch is for developement Django server to be run on local system (Windows). Follow these steps to use:  
1. Install all the dependencies by running `pipenv install` (install pipenv first)  
2. Ensure you have Redis running on `port #6379` for it to work correctly. This can be achieved using Docker (on Windows) by running the command `docker run -p 6379:6379 -d redis:5`  
3. Finally run server using `python manage.py runserver` Follow these steps to deploy:  
1. Clone this branch and create a new application on Heroku  
2. Add the Heroku Redis addon to the application (free-tier available)  
3. Link the cloned repo to your application and deploy

## Development Repo( Its messy though)
https://github.com/mustankap/crazy-chess

## Features Included 
- Custom Admin dashboard
- Create Game
- Join Game
- View Public games 
- Single player 
- Dashboard of past games and log
- Add friend
- Responsive, mobile-friendly design
- Forgot password 
- User registration
- Much more...

## Installation

**1. Clone Repository & Install Packages**
```sh
git clone 
pip install -r requirements.txt
```
**2. Setup Environment**
```sh
python -m  venv venv
source venv/bin/activate
``````
OR on Windows
```sh
python -m  venv venv
activate.bat
``````

**3. Migrate & Start Server**
```sh
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

