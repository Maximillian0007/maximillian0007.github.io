//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "LPL and LPJ just filled the fridge with Hershey bars and rotten weed plants covered in COVID spit!",
      author: "Lloyd"
    },
    {
      quote:
        "Guys I've got breaking news!!! Jenna is on my mind again!!!",
      author: "Chad"
    },
    {
      quote:
        "I know I've been saying it for 26 years but this is the last year I'm going to be a busser!",
      author: "Lloyd"
    },
    {
      quote: "I can't wait to move to Texas, do 15 cans of dip a day, and fuck a cow up the ass!",
      author: "Chad"
    },
    {
      quote:
        "I finally did it fellas! In the past 3 weeks, I worked on my business for 12 whole minutes! I'm proud and it's time to celebrate!",
      author: "Lloyd"
    },
    {
      quote:
        "I see a salamander and I bet it tastes reeeeaaaal goood.",
      author: "Chad"
    }
  ];

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
