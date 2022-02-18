const days = document.getElementById("days");
const welkins = document.getElementById("welkin");
const bp = document.getElementById("bp");
const count = document.getElementById("count");
const total = document.getElementById("total");
const dayDisplay = document.getElementById("days-value");
const welkinDisplay = document.getElementById("welkin-value");
const bpDisplay = document.getElementById("bp-value");

total.innerHTML = 60;

const onChangeHandler = () => {
	let primogems = days.value * 60;
	if (welkins.checked == true && bp.checked == true) {
		let totals = primogems + 90 + 600;
		total.innerHTML = totals;
		welkinDisplay.innerHTML = days.value + " Day";
		dayDisplay.innerHTML = days.value;
		bpDisplay.innerHTML = "With";
		return;
	}
	if (welkins.checked == true) {
		let totals = primogems + 90;
		total.innerHTML = totals;
		welkinDisplay.innerHTML = days.value + " Day";
		dayDisplay.innerHTML = days.value;
		bpDisplay.innerHTML = "No";
		return;
	}
	if (bp.checked == true) {
		let totals = primogems + 600;
		total.innerHTML = totals;
		welkinDisplay.innerHTML = days.value + " Day";
		dayDisplay.innerHTML = days.value;
		bpDisplay.innerHTML = "With";
		return;
	}
	total.innerHTML = primogems;
	dayDisplay.innerHTML = days.value;
	welkinDisplay.innerHTML = "Without";
	bpDisplay.innerHTML = "No";
};

days.onchange = () => onChangeHandler();
welkins.onchange = () => onChangeHandler();
bp.onchange = () => onChangeHandler();
