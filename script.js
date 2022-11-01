const input = document.getElementById("input");
const btn = document.getElementById("btn");
const para = document.getElementById("convert");
const litre = document.getElementById("litre");
const kilo = document.getElementById("kilo");

btn.addEventListener("click", function() {
	let result = input.value * 3.281;
	let result2 = input.value * 0.3048;
	para.textContent = `${input.value} meters = ${result.toFixed(3)} feet | ${input.value} feet = ${result2.toFixed(3)} meters`;
	convertVolume();
	convertMass();
});

function convertVolume() {
	let result = input.value * 0.264;
	let result2 = input.value * 3.785;
	litre.textContent = `${input.value} litres = ${result.toFixed(3)} gallons | ${input.value} gallons = ${result2.toFixed(3)} litres`
}

function convertMass() {
	let result = input.value * 2.205;
	let result2 = input.value * 0.453;
	kilo.textContent = `${input.value} kilos= ${result.toFixed(3)} pounds | ${input.value} pounds = ${result2.toFixed(3)} kilos`
}