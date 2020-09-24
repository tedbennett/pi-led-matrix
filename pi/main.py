import time
import pyrebase

from luma.core.render import canvas
from luma.led_matrix.device import ws2812


class Tracker:
    def __init__(self):
        self.map = ["#000000"] * 64

    def listener(self, event):
        data = event["data"].split(",")
        if len(data) == 64:
            self.map = data

    def draw(self):
        while True:
            with canvas(device) as board:
                for index, colour in enumerate(self.map):
                    x = index % 8
                    y = index // 8
                    board.point((x, y), fill=colour)
                time.sleep(0.05)


if __name__ == "__main__":
    device = ws2812(width=8, height=8)

    config = {
        "apiKey": "AIzaSyBS7bgQOdrAYZmk8NzBkBdO-ZT-CF7c_Ho",
        "authDomain": "pi-drawing.firebaseapp.com",
        "databaseURL": "https://pi-drawing.firebaseio.com",
        "storageBucket": "pi-drawing.appspot.com"
    }

    tracker = Tracker()

    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    db.child("data").child('1').stream(tracker.listener)

    try:
        tracker.draw()
    except KeyboardInterrupt:
        pass
