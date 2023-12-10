

// function DisplayQuote() {
//     var quoteArray = [
//         {
//             Quote: "Be yourself; everyone else is already taken.",
//             Author: "Oscar Wilde",
//         },
//         {
//             Quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
//             Author: "Albert Einstein",
//         },
//         {
//             Quote: "So many books, so little time.",
//             Author: "Frank Zappa",
//         },
//         {
//             Quote: "A room without books is like a body without a soul.",
//             Author: "Marcus Tullius Cicero",
//         },
//         {
//             Quote: "You only live once, but if you do it right, once is enough.",
//             Author: "Mae West",
//         },
//     ]

//     randomIndex = Math.floor(Math.random() * quoteArray.length);

//     document.getElementById("quote").innerHTML = quoteArray[randomIndex].Quote;
//     document.getElementById("author").innerHTML = quoteArray[randomIndex].Author;

// }



function DisplayQuote() {
    var quoteArray = [

        {
            Quote: "Be yourself; everyone else is already taken.",
            Author: "Oscar Wilde",
        },
        {
            Quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
            Author: "Albert Einstein",
        },
        {
            Quote: "So many books, so little time.",
            Author: "Frank Zappa",
        },
        {
            Quote: "A room without books is like a body without a soul.",
            Author: "Marcus Tullius Cicero",
        },
        {
            Quote: "You only live once, but if you do it right, once is enough.",
            Author: "Mae West",
        },

    ]


    var arrayIndex = Math.floor(Math.random(quoteArray) * quoteArray.length)
    document.getElementById("quote").innerHTML = quoteArray[ arrayIndex ].Quote;
    document.getElementById("author").innerHTML = quoteArray[ arrayIndex ].Author;

}