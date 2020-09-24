# Pi LED Matrix Project

This is a project to build a Raspberry Pi-powered LED Matrix with an accompanying web client (and in the future, iOS app).

## Client

This will be a basic React app with an 8x8 grid with which the user can create a design to upload to the Raspberry Pi.

## Backend

Initially, I'll use Firebase with FireStore. A Pi will listen to the database, which will notify it of any changes to the matrix design.

I'll create a simple REST API for testing, which I might use in the future if I bring more devices into this.

## Pi

Using a Raspberry Pi 4b for the moment, the LED Matrix is a 8x8 matrix of RGB WS2812b LEDs.

## Technologies Used

- Raspberry Pi:
  - Luma LED Matrix library
  - Pyrebase
- Client
  - React
- Backend
  - Testing:
    - Express
  - Prod:
    - Firebase with FireStore
