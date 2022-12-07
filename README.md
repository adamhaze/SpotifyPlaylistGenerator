# SpotifyPlaylistGenerator

## Evan Easton and Adam Hayes

Final project codebase for CSCI 5448. Evan's machine uses Java 8 with Java SDK 18. Adam's machine uses Java 18 with Java SDK 18.

## Demo

[Here is a link to our recorded demo](https://drive.google.com/file/d/1XN6kIkUvZhJluTe8BpojyZ8rbr-YTNm3/view?usp=sharing)

## Things you will need to run the Spotify API properly

There is an .env.example file on the repo that has the two variable names that are required to make calls out to the Spotify API, but this requires that you create an application on the [Spotify development website](https://developer.spotify.com/dashboard/login). When you log in, create an application and call it whatever you like. Once you finish that, there will be a client_id and client_secret key that you will need to inject into the code in 2 places. This requires that you have a Spotify account, so if you need to run the app but don't have a way to make an application, reach out to me at evea6485@colorado.edu and I will send you my credentials so that the app will run properly.

Once you have the client_id and client_secret, create a .env file from the example template and put it at the root of the ``ui`` folder with your credentials. You will also then need to navigate to `` src/main/java/spg/spotifyApi/SpotifyCalls.java `` and input your credentials into the two variables in the class named ``clientId`` and ``clientSecret``. 

## Running the code

### Starting the Backend REST API
1) In IntelliJ: 

    ``Run src/main/java/spg/SpotifyPlaylistGeneratorApplication``

2) From terminal:

    ``./gradlew``
    
    ``./gradlew bootRun``

### Starting the Frontend React UI

   ``cd ui``
   
   ``npm install``
   
   ``npm start``


From here it will open our web application as a React application in your default browser.


