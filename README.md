# Uploader

The purpose of this app is to practice Node and Angular (beginner level)

The app is simple: the user picks an image to upload to the server, and then it can be viewed in the web page.
if another image is being uploaded, once it finished, it will be replced in the view automatically.

Limitations: 
* upload and view one file at a time
* Altho files are saved, only the last image will be viewed.
* No db is being used in this app, therefore it can't be deployed on Heroku (saving files is problematic)

How to install:

I have used <code>ng-file-upload</code> on the client side with Angular. Read more <a href="https://github.com/danialfarid/ng-file-upload">here</a>

Use npm to install <code>node_modules</code> folder:

<code> cd your_dirname </code>

<code> npm install </code>
