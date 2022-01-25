# fastclick
Simple audio player made in Django with Ajax
## General info
The idea behind this project was to write a simple and easy to use audio player that would change songs without refreshing the page. 
And this is it
All we have to do using this code is add our songs to our database and we can enjoy the music.
## Technologies 
Technologies used to make this project:
- Python 3.9.10
- JQuery 3.5.1
- Django 3.2.9
## Functionalities
Key functionalities:
-songs are changed via buttons (previous and next)
- songs are automatically downloaded from the database
- the songs are changed without refreshing the page
- if the song is the first one in the database the previous button will call the last one, if the song is the last the next button will call the first one
- if the song is paused, the next requested song will be paused
- if the song is playing, the next requested song will also be already playing
- if the song ends, automatically calls the next song to play
## Explanation 
The name of project is audio_player but name of directory of app installed in project is Media_player.
## Source 
This app is ispired by Onojakpor Ochuko 'How to Build a Music Player using Django':
(https://www.section.io/engineering-education/how-to-build-a-music-player-using-django/)
