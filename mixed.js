const quotes = [
"Mind is like a mad monkey. \n Sathya Sai Baba",
"When thoughts arise, then do all things arise. When thoughts vanish, then do all things vanish. \n Huang Po",
"Nothing ever goes away until it has taught us what we need to know. \n Pema Chödrön",
"Before enlightenment; chop wood, carry water. After enlightenment; chop wood, carry water. \nBuddha",
"The search for happiness is one of the chief sources of unhappiness. \nEric Hoffer",
"Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend. \nBruce Lee",
"Do you have the patience to wait until your mud settles and the water is clear? \nLao Tzu",
"There are only two ways to live your life. One is as if nothing is a miracle. The other is as if everything is a miracle. \nAlbert Einstein",
"Don’t try to steer the river. \nDeepak Chopra",
"Obstacles don’t block the path, they are the path. \nZen proverb"
];
const meditation = [
    "Meditate on the breath",
    "Meditate on compassion",
    "Mediate on loving kindness",
    "Mediate on the impermanence of all things",
    "If you are ready, choose a non-dualistic meditation pracetice of your own"
];
const medLength =[
    2,
    5, 
    10,
    15,
    20,
    25
];

let quoteNum = quotes.length - 1;
let medNum = meditation.length -1;
let lengthNum = medLength.length -1;
let quoteIndex = Math.floor(Math.random() * quoteNum);
let meditationIndex = Math.floor(Math.random() * medNum);
let lengthIndex = Math.floor(Math.random() * lengthNum);
const generateQuote = function(){
    console.log(`Your Zen quote to consider is \n\n"${quotes[quoteIndex]}." \n${meditation[meditationIndex]} for a minimum of ${medLength[lengthIndex]} minutes.\nRemember to relax in all things.`)
}
generateQuote()