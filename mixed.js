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
let num = quotes.length - 1
let quoteIndex = Math.floor(Math.random() * num);
const generateQuote = function(){
    console.log(quotes[quoteIndex])
}
generateQuote()