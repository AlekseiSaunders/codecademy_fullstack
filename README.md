#MMessages

> Generate a random meditation suggestion with a combination of a quote, a focus of meditation, and a meditation duration.

##Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Status](#status)
- [Future Possibilities](#future-possibilities)

## General info

Script created as part of the Full Stack Developer course at Codecademy.

Inspired by a repository forked from nickpatsiopoulos/MMessages. I liked their idea to separat the data from the script, but stuck with using json as that seemed a little more mainstream than yaml.

"Rather than store the songs in the javascript file itself, I decided to add them to a separate yaml file from which the javascript file reads. This serves to separate the content layer from the code" - nickpatsiopoulos

## Technologies

- HTML5
- CSS3
- Javascript / ECMAScript 2020
- JSON

## Setup

I kept this as a webapp as opposed to writing it for Node.js like the original.

Simply download files to a single folder and use your prefered browser to open idex.html.

Additional quotes, meditation focus, and durations can be added to the meditation.json file following the appropriate syntax. Randomization of data combinations is not dependent on original state.

## Status

Still needed is code to clear previous writes of randomized data in their associated divs

CSS code to separate quotes from attribution.

## Future Possibilities

Addition of a timer to start the randomly generated meditation duration with a nice ending chime.
