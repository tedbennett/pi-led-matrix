import pyrebase

config = {
    "apiKey": "AIzaSyBS7bgQOdrAYZmk8NzBkBdO-ZT-CF7c_Ho",
    "authDomain": "pi-drawing.firebaseapp.com",
    "databaseURL": "https://pi-drawing.firebaseio.com",
    "storageBucket": "pi-drawing.appspot.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()


def listener(event):
    print(event)
    print(event['event'])  # can be 'put' or 'patch'
    print(event["path"])  # relative to the reference, it seems
    print(event["data"])  # new data at /reference/event.path. None if deleted


db.child("data").child('1').stream(listener)
