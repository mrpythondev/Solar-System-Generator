
function mass(){
	var solarUnits = $("#brightness").val();
	var solar = solarUnits * (3.848*10**26);
	var sunMass = (1.989*10**30);
	var sunLuminosity = (3.848*10**26);
	var mass;
		if (solarUnits < 0) {
	        alert("No negative values. Solar Units Range: .00001 SU to 10000 SU");
	    }
		else if (solar > (10**-5) || solar < (10**5)) {
			mass = ((sunMass)*((1/1.5)**(1/4))*((solar/sunLuminosity)**(1/4)));
			return mass;
		}
	}
	
function getRandomIntInclusive() {
        min = Math.ceil(1);
        max = Math.floor(100);
        return (Math.floor(Math.random() * (max - min + 1)) + min);
}
	
function spectralClass(){
    var differ = getRandomIntInclusive();
    var obj = JSON.parse($("#spectral").val());
	var spectral = obj.Temp;
	var starType = (spectral - differ);
	return starType;
		}
		
function habitableZone(){
	var apparent = $("#apparent").val();
	var obj = JSON.parse($("#spectral").val());
	var distance = $("#distance").val();
	var bc = obj.BC;
	var absolute = apparent - 5*Math.log10((distance/10));
	var bol = absolute + bc;
	var absLumOfStar = 10**((bol-4.72)/(-2.5));
	var rI = Math.sqrt(absLumOfStar/1.1);
	var rO = Math.sqrt(absLumOfStar/0.53)
	return [rI, rO];


}

$(function() {
	$("#star").submit(function(event) {
	var y = spectralClass();
	var solarUnits = $("#brightness").val() * (3.848*10**26);
	var bottom = 4*Math.PI*(5.67*10**-8)*(y**4);
	var radius = .001 * Math.sqrt(solarUnits/bottom);
	var habit = habitableZone();
	var inner = habit[0];
	var outer = habit[1];
	var starMass = mass().toPrecision(3);

	$("#output1").val(starMass);
	$("#output2").val(radius.toFixed());
	$("#output3").val(2*radius.toFixed());
	$("#output4").val(inner.toFixed(2));
	$("#output5").val(outer.toFixed(2));
	event.preventDefault();
})
})

$(function() {
	$("#planetCreation").submit(function(event) {
	
	var numberOfPlanets = $("#numberOfPlanets").val();

	$("#planetOne").hide();
 	$("#planetTwo").hide();
 	$("#planetThree").hide();
 	$("#planetFour").hide();
 	$("#planetFive").hide();
 	$("#planetSix").hide();
 	$("#planetSeven").hide();
 	$("#firstPlanetOutputs").hide();
 	$("#secondPlanetOutputs").hide();
 	$("#thirdplanetOutputs").hide();
 	$("#fourthplanetOutputs").hide();
 	$("#fifthplanetOutputs").hide();
 	$("#sixthPlanetOutputs").hide();
 	$("#seventhplanetOutputs").hide();

		switch (numberOfPlanets){
			case "1":
			$("#planetOne").show();
			$("#firstPlanetOutputs").show();
			event.preventDefault();
			break;
			case "2":
			$("#planetOne").show();
			$("#planetTwo").show();
			$("#firstPlanetOutputs").show();
			$("#secondPlanetOutputs").show();
			event.preventDefault();
			break;
			case "3":
			$("#planetOne").show();
			$("#planetTwo").show();
			$("#planetThree").show();
			$("#firstPlanetOutputs").show();
			$("#secondPlanetOutputs").show();
			$("#thirdplanetOutputs").show();
			event.preventDefault();
			break;
			case "4":
			$("#planetOne").show();
			$("#planetTwo").show();
			$("#planetThree").show();
			$("#planetFour").show();
			$("#firstPlanetOutputs").show();
			$("#secondPlanetOutputs").show();
			$("#thirdplanetOutputs").show();
			$("#fourthplanetOutputs").show();
			event.preventDefault();
			break;
			case "5":
			$("#planetOne").show();
			$("#planetTwo").show();
			$("#planetThree").show();
			$("#planetFour").show();
			$("#planetFive").show();
			$("#firstPlanetOutputs").show();
			$("#secondPlanetOutputs").show();
			$("#thirdplanetOutputs").show();
			$("#fourthplanetOutputs").show();
			$("#fifthplanetOutputs").show();
			event.preventDefault();
			break;
			case "6":
			$("#planetOne").show();
			$("#planetTwo").show();
			$("#planetThree").show();
			$("#planetFour").show();
			$("#planetFive").show();
			$("#planetSix").show();
			$("#firstPlanetOutputs").show();
			$("#secondPlanetOutputs").show();
			$("#thirdplanetOutputs").show();
			$("#fourthplanetOutputs").show();
			$("#fifthplanetOutputs").show();
			$("#sixthPlanetOutputs").show();
			event.preventDefault();
			break;
			case "7":
			$("#planetOne").show();
			$("#planetTwo").show();
			$("#planetThree").show();
			$("#planetFour").show();
			$("#planetFive").show();
			$("#planetSix").show();
			$("#planetSeven").show();
			$("#firstPlanetOutputs").show();
			$("#secondPlanetOutputs").show();
			$("#thirdplanetOutputs").show();
			$("#fourthplanetOutputs").show();
			$("#fifthplanetOutputs").show();
			$("#sixthPlanetOutputs").show();
			$("#seventhplanetOutputs").show();
			event.preventDefault();
			break;
			default:
			alert(0);
	};
})
})


$(function() {
	$("#firstPlanetInputs").submit(function(event) {
 		var nameOfPlanet1 = $("#planetInput1").val();
 		var massOfPlanet1 = $("#planetInput3").val();
 		
 		$("#nameOfFirstPlanet").html(nameOfPlanet1);

 		alert(massOfPlanet1);
 		if (mass() *.3 <= massOfPlanet1){
 			alert("First Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})
$(function() {
	$("#secondPlanetInputs").submit(function(event) {
		var nameOfPlanet2 = $("#planetInput11").val();
		var massOfPlanet2 = $("#planetInput13").val();

		$("#nameOfSecondPlanet").html(nameOfPlanet2);

 		if (mass() *.3 <= massOfPlanet2){
 			alert("Second Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})
$(function() {
	$("#thirdPlanetInputs").submit(function(event) {
		var nameOfPlanet3 = $("#planetInput21").val();
		var massOfPlanet3 = $("#planetInput23").val();

		$("#nameOfThirdPlanet").html(nameOfPlanet3);

 		if (mass() *.3 <= massOfPlanet3){
 			alert("Third Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})
$(function() {
	$("#fourthPlanetInputs").submit(function(event) {
		var nameOfPlanet4 = $("#planetInput31").val();
		var massOfPlanet4 = $("#planetInput33").val();

		$("#nameOfFourthPlanet").html(nameOfPlanet4);

 		if (mass() *.3 <= massOfPlanet4){
 			alert("Fourth Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})
$(function() {
	$("#fifthPlanetInputs").submit(function(event) {
		var nameOfPlanet5 = $("#planetInput41").val();
		var massOfPlanet5 = $("#planetInput43").val();

		$("#nameOfFifthPlanet").html(nameOfPlanet5);

 		if (mass() *.3 <= massOfPlanet5){
 			alert("Fifth Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})
$(function() {
	$("#sixthPlanetInputs").submit(function(event) {
		var nameOfPlanet6 = $("#planetInput51").val();
		var massOfPlanet6 = $("#planetInput53").val();

		$("#nameOfSixthPlanet").html(nameOfPlanet6);

 		if (mass() *.3 <= massOfPlanet6){
 			alert("Sixth Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})
$(function() {
	$("#seventhPlanetInputs").submit(function(event) {
		var nameOfPlanet7 = $("#planetInput61").val();	
		var massOfPlanet7 = $("#planetInput63").val();

		$("#nameOfSeventhPlanet").html(nameOfPlanet7);

 		if (mass() *.3 <= massOfPlanet7){
 			alert("Seventh Planet's mass exceeds realistic parameters; Must be less than a third of your Star's Mass.");
 			event.preventDefault();
 		}
 		event.preventDefault();
})
})


$(document).ready(function(){

/**
 * This object controls the nav bar. Implement the add and remove
 * action over the elements of the nav bar that we want to change.
 *
 * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
 */
 $("#planetInputsSubmit").hide();
 $("#planetOne").hide();
 $("#planetTwo").hide();
 $("#planetThree").hide();
 $("#planetFour").hide();
 $("#planetFive").hide();
 $("#planetSix").hide();
 $("#planetSeven").hide();
 $("#firstPlanetOutputs").hide();
 $("#secondPlanetOutputs").hide();
 $("#thirdplanetOutputs").hide();
 $("#fourthplanetOutputs").hide();
 $("#fifthplanetOutputs").hide();
 $("#sixthPlanetOutputs").hide();
 $("#seventhplanetOutputs").hide();

var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);

/**
 * Function that manage the direction
 * of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
offSetManager();
});
