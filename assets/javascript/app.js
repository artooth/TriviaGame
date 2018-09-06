 // GLOBAL VARIABLES
    let count = 0;
    let correctAnswer = 0;
    let incorrectAnswers = 0;
    

 $("#startTimer").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();
$("#yourScore").hide();

$(".btn").show();
$(".submitAnswer").hide();

//Questions for Trivia//

    let questionsAnswers = [
        { question : '1. Who composed The Four Seasons, op. 8: Spring?',
          options : ['Vivaldi'  , 'Stravinsky'  , 'Wagner'  , 'Handel'],
          correctAnswer : 'Vivaldi',
        },

        {
          question : '2. From which famous oratorio does the Hallelujah chorus come from?',
          options : ['Haydn, The Creation', 'Bach, St Matthew Passion', 'Handel, The Messiah', 'Vivaldi, Juditha triumphans'],
          correctAnswer : 'Handel, The Messiah', 
        },
    ];




// FUNCTIONS

function timer() {
    let seconds = 30;
    counter = setInterval (function() {
        $("#startTimer").html('<h2> Time Remaining:' + seconds-- +'</h2>');
            if (seconds === 0) {
                $("#startTimer").html("<h2> Time up! </h2>");
                clearInterval(counter);
                function score (){
                    $("#displayQuestions").hide();
                    $("#startTimer").hide();
                    $(".submitAnswer").hide();
                    checkAnswer();
                    $("#yourScore").show();
                    $("#incorrectAnswers").show();
                    $("#correctAnswers").show();
                
                }

                    setTimeout(score, 1000);
            }

        }, 1000);
    
    };

    $(".btn").on("click", function (){
        $(".btn").hide();
        displayTheQuestions();
        $("#startTimer").show();
        timer();

    });
    
    // console.log("inside timer:",count)
    // count++;
    

    // console.log("TIMER: ", count)



function displayTheQuestions(){

    $(".btn").hide();
    $(".submitAnswer").show();

    for(var i = 0; i < questionsAnswers.length ; i++){
       $('#displayQuestions').append("<h2>"+ questionsAnswers[i].question + "</h2>")
       for(var j = 0; j < questionsAnswers[i].options.length; j++ ){
         $('#displayQuestions').append("<input type='radio' name='question-" + i+ "' value='"
        + questionsAnswers[i].options[j] + "''>" + questionsAnswers[i].options[j])
        }
    }

        $(".submitAnswer").on("click", function() {
        $("#startTimer").hide();
        $("#displayQuestions").hide();
        $(".submitAnswer").hide();
        checkAnswer();
        clearInterval(count);
        $("#yourScore").show();
        $("#correctAnswers").show();
        $("#incorrectAnswers").show();
    });
};

function checkAnswer () {

    console.log("choose answer")

    for (var i = 0; i < questionsAnswers.length; i++) {
        var answerSelection = $("input[name = 'question-" + i + "'] :checked");
        if (answerSelection.val() == questionsAnswers[i].correctAnswer) {
            correctAnswers++;
            
        } else {
            incorrectAnswers++;
                }
}

    $('#correctAnswers').append(" " + correctAnswers);
    $('#incorrectAnswers').append(" " + incorrectAnswers);
};









// LOGIC FLOW



