
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
 		var massOfPlanet1 = 5.97219e24 * $("#planetInput3").val();
 		var radiusOfPlanet1 = $("#planetOneRadius").val();
		
		var meteredRadius1 = radiusOfPlanet1*1000;
		var constantG1 = (6.673*10**-11);
		var planetOneGravity = (((constantG1)*(massOfPlanet1))/((meteredRadius1)**2));

		var planetOneRotation = $("#planetInput8").val();

		var distanceAU1 = $("#planetInput9").val();
		var orbitalPeriod1 = (2*Math.PI*Math.sqrt(((distanceAU1*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));

		var correctedPeriod1 =  (orbitalPeriod1 * 0.000277778)/planetOneRotation;
		$("#planetOutput2").val(correctedPeriod1.toPrecision(3));
		$("#planetOutput1").val(planetOneRotation);

 		$("#nameOfFirstPlanet").html(nameOfPlanet1);
 		$("#planetGravity1").val(planetOneGravity.toPrecision(3));
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
		var massOfPlanet2 = 5.97219e24 * $("#planetInput13").val();
		var radiusOfPlanet2 = $("#planetTwoRadius").val();
		
		var meteredRadius2 = radiusOfPlanet2*1000;
		var constantG2 = (6.673*10**-11);
		var planetTwoGravity = (((constantG2)*(massOfPlanet2))/((meteredRadius2)**2));

		var planetTwoRotation = $("#planetInput18").val();
		
		var distanceAU2 = $("#planetInput19").val();
		var orbitalPeriod2 = (2*Math.PI*Math.sqrt(((distanceAU2*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));
		
		var correctedPeriod2 = (orbitalPeriod2* 0.000277778)/planetTwoRotation;
		
		$("#planetOutput4").val(correctedPeriod2.toPrecision(3));
		$("#planetOutput3").val(planetTwoRotation);

		$("#nameOfSecondPlanet").html(nameOfPlanet2);
		$("#planetGravity2").val(planetTwoGravity.toPrecision(3));
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
		var massOfPlanet3 = 5.97219e24 * $("#planetInput23").val();
		var radiusOfPlanet3 = $("#planetThreeRadius").val();
		
		var meteredRadius3 = radiusOfPlanet3*1000;
		var constantG3 = (6.673*10**-11);
		var planetThreeGravity = (((constantG3)*(massOfPlanet3))/((meteredRadius3)**2));

		var planetThreeRotation = $("#planetInput28").val();
		var distanceAU3 = $("#planetInput29").val();
		var orbitalPeriod3 = (2*Math.PI*Math.sqrt(((distanceAU3*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));
		
		var correctedPeriod3 = (orbitalPeriod3* 0.000277778)/planetThreeRotation;

		$("#planetOutput6").val(correctedPeriod3.toPrecision(3));
		$("#planetOutput5").val(planetThreeRotation);

		$("#nameOfThirdPlanet").html(nameOfPlanet3);
		$("#planetGravity3").val(planetThreeGravity.toPrecision(3));
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
		var massOfPlanet4 = 5.97219e24 * $("#planetInput33").val();
		var radiusOfPlanet4 = $("#planetFourRadius").val();
		
		var meteredRadius4 = radiusOfPlanet4*1000;
		var constantG4 = (6.673*10**-11);
		var planetFourGravity = (((constantG4)*(massOfPlanet4))/((meteredRadius4)**2));

		var planetFourRotation = $("#planetInput38").val();

		var distanceAU4 = $("#planetInput39").val();
		var orbitalPeriod4 = (2*Math.PI*Math.sqrt(((distanceAU4*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));
		
		var correctedPeriod4 = (orbitalPeriod4* 0.000277778)/planetFourRotation;
		$("#planetOutput8").val(correctedPeriod4.toPrecision(3));
		$("#planetOutput7").val(planetFourRotation);

		$("#nameOfFourthPlanet").html(nameOfPlanet4);
		$("#planetGravity4").val(planetFourGravity.toPrecision(3));
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
		var massOfPlanet5 = 5.97219e24 * $("#planetInput43").val();
		var radiusOfPlanet5 = $("#planetFiveRadius").val();
		
		var meteredRadius5 = radiusOfPlanet5*1000;
		var constantG5 = (6.673*10**-11);
		var planetFiveGravity = (((constantG5)*(massOfPlanet5))/((meteredRadius5)**2));

		var planetFiveRotation = $("#planetInput48").val();
		
		var distanceAU5 = $("#planetInput49").val();
		var orbitalPeriod5 = (2*Math.PI*Math.sqrt(((distanceAU5*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));
		
		var correctedPeriod5 = (orbitalPeriod5* 0.000277778)/planetFiveRotation;
		$("#planetOutput10").val(correctedPeriod5.toPrecision(3));
		$("#planetOutput9").val(planetFiveRotation);

		$("#nameOfFifthPlanet").html(nameOfPlanet5);
		$("#planetGravity5").val(planetFiveGravity.toPrecision(3));
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
		var massOfPlanet6 = 5.97219e24 * $("#planetInput53").val();
		var radiusOfPlanet6 = $("#planetSixRadius").val();
		
		var meteredRadius6 = radiusOfPlanet6*1000;
		var constantG6 = (6.673*10**-11);
		var planetSixGravity = (((constantG6)*(massOfPlanet6))/((meteredRadius6)**2));

		var planetSixRotation = $("#planetInput58").val();
		var distanceAU6 = $("#planetInput59").val();
		var orbitalPeriod6 = (2*Math.PI*Math.sqrt(((distanceAU6*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));
		
		var correctedPeriod6 = (orbitalPeriod6* 0.000277778)/planetSixRotation;
		$("#planetOutput12").val(correctedPeriod6.toPrecision(3));
		$("#planetOutput11").val(planetSixRotation);

		$("#nameOfSixthPlanet").html(nameOfPlanet6);
		$("#planetGravity6").val(planetSixGravity.toPrecision(3));
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
		var massOfPlanet7 = 5.97219e24 * $("#planetInput63").val();
		var radiusOfPlanet7 = $("#planetSevenRadius").val();
		
		var meteredRadius7 = radiusOfPlanet7*1000;
		var constantG7 = (6.673*10**-11);
		var planetSevenGravity = (((constantG7)*(massOfPlanet7))/((meteredRadius7)**2));

		var planetSevenRotation = $("#planetInput68").val();
		var distanceAU7 = $("#planetInput69").val();
		var orbitalPeriod7 = (2*Math.PI*Math.sqrt(((distanceAU7*1.496*10**11)**3)/(6.67408 * 10**-11 *mass())));
		
		var correctedPeriod7 = (orbitalPeriod7* 0.000277778)/planetSevenRotation;
		$("#planetOutput14").val(correctedPeriod7.toPrecision(3));
		$("#planetOutput13").val(planetSevenRotation);

		$("#nameOfSeventhPlanet").html(nameOfPlanet7);
		$("#planetGravity7").val(planetSevenGravity.toPrecision(3));
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
