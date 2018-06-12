
$(document).ready(function () {

    $(document).ready(function() {
        $("#my_audio").get(0).play();
    });

   
    
    ////Audios
var startupAudio = new Audio('./assets/audio/startup.mp3');
var audioClickCrystals= new Audio('./assets/audio/click.mp3');
var audioUserWins= new Audio('./assets/audio/wins.mp3');
var audioUserLoss=new Audio('./assets/audio/loss.mp3');
//////////////////////////////////

    var counter = 0;

    ///Random Number for targetNumber///////////////


    var minNumberComp = 19;
    var maxNumberComp = 120;
    var targetNumber = "";

    targetNumber = randomNumberCompFromRange(minNumberComp, maxNumberComp);

    $("#computerGuessNumber").text(targetNumber);

    function randomNumberCompFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /////////////////////////////
    //************************************************************************************** */



//*********************************************** */


    //Reset Function//////
    var reset = function () {

        counter = 0;
        $("#totalScore").empty();
        $("#computerGuessNumber").empty();

        $("#totalScore").text(counter);

        targetNumber = randomNumberCompFromRange(minNumberComp, maxNumberComp);

        $("#computerGuessNumber").text(targetNumber);
        //randomNumberOptFromRange();

        //randomNumberOptFromRange();
        for (var i = 0; i < 4; i++) {
            numberOptions[i] = randomNumberOptFromRange(minNumberOpt, maxNumberOpt);

        };

        console.log("NumberOpts:" + numberOptions);

        function randomNumberOptFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        $("img#redCrystal").attr("data-crystalvalue", numberOptions[0]);
        $("img#blueCrystal").attr("data-crystalvalue", numberOptions[1]);
        $("img#greenCrystal").attr("data-crystalvalue", numberOptions[2]);
        $("img#yellowCrystal").attr("data-crystalvalue", numberOptions[3]);


    };



    //////////////////
    //******************** */




    ///Random Number for numberOptions///////////////
    var minNumberOpt = 1;
    var maxNumberOpt = 12;
    var numberOptions = [];

    for (var i = 0; i < 4; i++) {
        numberOptions[i] = randomNumberOptFromRange(minNumberOpt, maxNumberOpt);

    };

    console.log("NumberOpts:" + numberOptions);

    function randomNumberOptFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }



    /////////////////////////////

    //********************************************************************* */

    var wins = 0;
    var losses = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(counter);

    ///value attributes for each crystall
    $("img#redCrystal").attr("data-crystalvalue", numberOptions[0]);
    $("img#blueCrystal").attr("data-crystalvalue", numberOptions[1]);
    $("img#greenCrystal").attr("data-crystalvalue", numberOptions[2]);
    $("img#yellowCrystal").attr("data-crystalvalue", numberOptions[3]);

    ///

    // var crystals=$("#crystals");
    // console.log(crystals);

    $(".crystalImage").on("click", function () {

        audioClickCrystals.play();
        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        // alert("New score: " + counter);
        console.log(counter);
        $("#totalScore").text(counter);
        if (counter === targetNumber) {
            wins++
            $("#wins").text(wins);
            // alert("you win")
            audioUserWins.play();
            reset();
        } else if (counter >= targetNumber) {
            // alert("You lose!!");
            losses++
            $("#losses").text(losses);
            audioUserLoss.play();
            reset();
        }


    });





















































    ///////////////////////////////////////    
});