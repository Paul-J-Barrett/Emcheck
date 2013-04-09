#Purpose
This is a program that was designed to be ran on a kiosk like computer we used debian with a minimal install fluxbox and chromium browser. It requires node.js forever, upstart.

The program itself is a checkin system for use when communications fail but you still need to check people into a facility. Health clubs, spas, senior centers, etc.

#Setup
Install the following
Node.js 0.6.6 used for development.
npm
npm forever
create a directory /opt/apps/emcheck and put the repository there.

We created a program to automatically create the txt file for use with the program and then scripted a curl get to retrieve the file and unzip it into the proper folder. We then created a job in cron to download the file automatically daily.

#Demonstrates
I am attempting to demonstrate creating a web service, and a web app that can actually be used as a local app instead of a web based app.

In the test folder there is a shell script to test the mbrsrv.js app with curl.

#Start up
node mbrsrv.js &
node app.js &

Browse to  http://localhost:3001/

See Emergency.txt for valid member numbers. We also use a serial number for the cards which is formated 3of9 barcode preceded with a period.
Try 1111
or try .1111

#Todo
Redo project adding unit testing and twitter bootstrap.

