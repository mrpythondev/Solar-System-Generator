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
		$("#thePlanets").append('<strong>Name of Planet: <input class="outputs form-control" id="output1" type="text" placeholder="Terra"/></strong></br> <strong>Mass of Planet (in kilograms): <input class="outputs form-control" id="output3" type="text" value = "0"/></strong></br> <strong>Density of Planet (in g/cm^3): <input class="outputs form-control" id="output4" type="text" value = "0"/></strong></br>       <strong>Axial Tilt of Planet (Axial tilt of Earth is 23.439&deg; ): <input class="outputs form-control" id="output1" type="text" value = "0"/></strong></br>        <strong>Average Surface Temperature of Planet (Day): <input class="outputs form-control" id="output2" type="text" value = "0"/></strong></br>        <strong>Average Surface Temperature of Planet (Night): <input class="outputs form-control" id="output2" type="text" value = "0"/></strong></br>        <strong>Rotational Speed (km/hr): <input class="outputs form-control" id="output5" type="text" value = "0"/></strong></br><hr>');
		event.preventDefault();
	}
})
})


