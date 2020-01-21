function doFirst () {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	// adding gradient on a canvas
	canvas.fillStyle="blue"; //this fills color to the solid shapes
	canvas.strokeStyle="yellow"; // this fills color to the outline of the shape
	
	
	canvas.fillRect(10,120,100,100);//one can use strokeRect to draw a plain rectangle
	canvas.strokeRect(10,10,100,100);
	canvas.clearRect(20,130,45,65);
}
window.addEventListener("load",doFirst ,false);