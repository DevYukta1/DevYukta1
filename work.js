
    
    const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text:"I'm not lazy, I'm on energy-saving mode.",author:"kazition"},
    { text: "I'm not short, I'm concentrated awesome.",author:"itsmyquotes"},
    {text :"I'm not clumsy, I'm just testing gravity's limits.",author:"kazition"},
    {text : "I'm not procrastinating, I'm just waiting for the right moment to strike.",author:"krishhhh"},
    {text: "Sometimes ,things have to  fall apart to make way for better things", author:"Ted Mosby"},
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
   { text: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" },
   { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
   { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
   { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
   { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
   { text: "Act as if what you do makes a difference. It does.", author: "William James" }
 
];


const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const quotebtn = document.getElementById('quotebtn');

quotebtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote.text;
    authorText.textContent = `- ${randomQuote.author}`;
});


   
        document.addEventListener("DOMContentLoaded",function(){
        document.getElementById("voiceButton").addEventListener("click",function(){
            const quotestext=document.getElementById("quote").innerHTML;
            const speech= new SpeechSynthesisUtterance(quotestext);

            speech.lang='en-US';
            speech.volume=1;
            speech.rate=1;
            speech.pitch=0;
        window.speechSynthesis.speak(speech);
        });
    });
       