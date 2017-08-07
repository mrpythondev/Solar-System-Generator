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
		for (i = 0; i<numberOfPlanets; i++){
		$("#thePlanets").append('<strong>Name of Planet: <input class="outputs form-control" id="output1" type="text" placeholder="Terra"/></strong></br> <strong>Position of Planet in Solar System: <input class="outputs form-control" id="output2" type="text" placeholder="1"/></strong></br> <strong>Mass of Planet (in kilograms): <input class="outputs form-control" id="output3" type="text" value = "0"/></strong></br> <strong>Density of Planet (in g/cm^3): <input class="outputs form-control" id="output4" type="text" value = "0"/></strong></br> <strong>Axial Tilt of Planet (Axial tilt of Earth is 23.439&deg; ): <input class="outputs form-control" id="output5" type="text" value = "0"/></strong></br>        <strong>Average Surface Temperature of Planet (Day): <input class="outputs form-control" id="output6" type="text" value = "0"/></strong></br>        <strong>Average Surface Temperature of Planet (Night): <input class="outputs form-control" id="output7" type="text" value = "0"/></strong></br>        <strong>Rotational Speed (km/hr): <input class="outputs form-control" id="output8" type="text" value = "0"/></strong></br><hr></br>');
		$("#thePlanetsOutputs").append('<br><strong>Length of Day: </strong><input class="planetOutputs form-control" id="planetOutput1" type="text" placeholder="24"/></strong></br> <strong>Length of Year: <input class="planetOutputs form-control" id="planetOutput2" type="text" placeholder="24"/></strong></br><hr>')
		event.preventDefault();
	}
})
})


$(function() {
	$("#output2").submit(function(event) {
 		var mass_of_planet = $("output2").val();
 		if (mass() * 1/3 < mass_of_planet){
 			alert("Planet has excessive mass and will cause gravitional irregularities, which is greater than 1/3 of the Sun's mass");
 		}

	})
})


$(document).ready(function(){

/**
 * This object controls the nav bar. Implement the add and remove
 * action over the elements of the nav bar that we want to change.
 *
 * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
 */
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
