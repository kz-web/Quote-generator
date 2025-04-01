let quote=document.getElementsByClassName("quote")[0];
let author=document.getElementsByClassName("saidby")[0];
let button=document.getElementById("buttons");
   
     let quotes=[
      {
        quote: `"The only way to do great work is to love what you do."`,
        author: `"Steve Jobs"`
      },
      {
        quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
        author: `"Winston Churchill"`
      },
      {
        quote: `"Life is what happens when you're busy making other plans."`,
        author: `"John Lennon"`
      },
      {
        quote: `"Do what you can, with what you have, where you are."`,
        author: `"Theodore Roosevelt"`
      },
      {
        quote:` "In the middle of every difficulty lies opportunity."`,
        author: `"Albert Einstein"`
      },
      {
        quote: `"Education is the most powerful weapon which you can use to change the world."`,
        author: `"Ashley mahindu lungaho"`
      },
      {
        quote: `"The roots of education are bitter, but the fruit is sweet."`,
        author: `"Aristotle"`
      },
      {
        quote: `"Develop a passion for learning. If you do, you will never cease to grow."`,
        author: `"Anthony J. D'Angelo"`
      },
      {
        quote: `"Education is not the filling of a pail, but the lighting of a fire."`,
        author: `"William Butler Yeats"`
      },
      {
        quote: `"An investment in knowledge pays the best interest."`,
        author: `"Benjamin Franklin"`
      },
      {
        quote: `"The beautiful thing about learning is that no one can take it away from you."`,
        author: `"B.B. King"`
      },
      {
        quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
        author: `"Mahatma Gandhi"`
      },
      {
        quote: `"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."`,
        author: `"Malcolm X"`
      },
      {
        quote: `"It is the mark of an educated mind to be able to entertain a thought without accepting it."`,
        author: `"Aristotle"`
      },
      {
        quote: `"The mind is not a vessel to be filled, but a fire to be kindled."`,
        author: `"Plutarch"`
      },
      {
        quote: "Your dreams aren't waiting for tomorrow—they're waiting for you to take action today.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Success is built on the small, consistent steps you take every day. Make each one count.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Knowledge is your greatest superpower. Invest in it, protect it, and share it generously.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Life will challenge you, but every challenge is an opportunity to grow stronger.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "The most valuable resource you have is your mind—feed it with curiosity and discipline.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Doubt kills more dreams than failure ever will. Take the leap, learn, and rise.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "You’re not just learning for today—you’re building the foundation for the world you want to create tomorrow.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Embrace failure; it’s a teacher in disguise. Every stumble is a lesson for your journey forward.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Be the energy that inspires change in others. Leadership starts with you.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "The world needs your unique light, so never stop shining, learning, and growing.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "You are never too young to inspire and lead. Start where you are with what you have.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Education is the bridge between dreams and reality. Build it with focus and commitment.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Every book you read, every skill you learn is a step toward your own greatness.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "The future belongs to those who are brave enough to invest in themselves today.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Your thoughts shape your future. Make them powerful, bold, and full of possibility.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "In a world full of distractions, focus is your competitive edge. Hone it.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "The first step toward success is believing you can achieve it. Start there.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Greatness isn’t a gift—it’s a choice to work hard and never stop learning.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Empower yourself through education. It’s the gift that keeps on giving.",
        author: "Ashley Mahindu Lungaho"
      },
      {
        quote: "Don't wait for permission to pursue your dreams. Start now, and keep going.",
      }
    ];
     

     // action.addEventListener('click',function(){
       // let random=Math.floor(Math.random()*quotes.length);
       /// quote.innerHTML=quotes[random].quote;
      //  author.innerHTML=quotes[random].author;
      function gernerateQuote() {
        let random = Math.floor(Math.random() * quotes.length);
        quote.innerHTML = quotes[random].quote;
        author.innerHTML = quotes[random].author;
      };
      
    button.addEventListener("click",gernerateQuote);
    
      
     
      