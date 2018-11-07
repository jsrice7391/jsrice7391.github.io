var guessed = [];
var dictionary = states = ["Alaska",
    "Alabama",
    "Arkansas",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "VirginIslands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"
]
var word = dictionary[Math.floor(Math.random() * dictionary.length)].toLowerCase().split("");
var missed = 15;
var missed_guesses = [];
var letter_count = 0;

function getRandomArbitrary(word) {
    return dictionary[Math.floor(Math.random() * dictionary.length)].toLowerCase().split("");
}

function eval_word_for_space(word) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            show_letter(word[i])
        }
    }
}

function get_number() {
    var next_word = getRandomArbitrary();
    return next_word
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



function show_span(next_word) {
    $.each(next_word, function(i, l) {
        if (l === "_") {
            $("#blanks_list").append("<li class='space'><p>" + l + "</p></li>");
        } else {
            $("#blanks_list").append("<li class='inline'><p>" + l + "</p></li>");
        }

    })

};

function show_letter(letter) {
    guessed.push(letter);
    $.each(word, function(i, l) {
        if (letter === l) {
            $('ul li').find('p').eq(i).addClass("show");
        }
    });
}

function eval_for_class(word) {
    return word.join("").replace(" ", "_")
}



$(document).ready(function() {


    show_span(word);

    $("#guess_span").html("This is how many guesses you have: " + missed);

    $("#guessed").html(missed_guesses);

    $(".inline p").hide();

    // $("#the_word").html(word);


    $("#play_again").hide();
    $("#winner").hide();



    $("#play_again").on("click", function() {
        $("#play_again").hide();

        guessed = [];
        missed_guesses = [];
        $("#blanks_list").empty();
        var next_word = get_number();
        word = next_word;
        missed = 15;
        $("#guessed").html(missed_guesses);
        $("#blanks_list").show();
        $("#guess_span").html("This is how many guesses you have: " + missed);
        $('ul li').children(':hidden');
        $("#winner").hide();

        // console.log("The next word is: " + next_word + " so the word is: " + word);
        show_span(next_word);
        $(".inline p").hide();
        console.log(word);
    })




    document.onkeydown = function(letter) {

        eval_word_for_space(word)
        console.log(word);

        var letter = letter.key;

        if (word.includes(letter)) {
            show_letter(letter);

        } else {
            console.log("No, there is no " + letter);
            missed_guesses.push(letter);

            missed = missed - 1;
            $("#guess_span").html("This is how many guesses you have: " + missed);
            $("#guessed").html(missed_guesses);
        }

        if ($('ul li').children(':visible').length == word.length) {
            var color = getRandomColor();
            $("#winner").show();
            var state_class = eval_for_class(word);
            var state = "." + state_class + "";

            $(".stately").find(state).css("color", color);
            $("#play_again").show();
        }

        if (missed == 0) {
            $("#guess_span").html("YOU HAVE NO MORE GUESSES");
            $("#play_again").show();
            $("guessed").hide();
            $("#blanks_list").hide();

        };





    };
});