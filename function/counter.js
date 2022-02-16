const days = document.getElementById('days');
const welkins = document.getElementById('welkin');
const bp = document.getElementById('bp');
const count = document.getElementById('count');
const total = document.getElementById('total');
const day = document.getElementById('days-value');
const welkin = document.getElementById('welkin-value');
const bps = document.getElementById('bp-value');

total.innerHTML = 0;

count.onclick = () => {
        let primogems = days.value * 60;
        if(welkins.checked == true && bp.checked == true){
            let totals = primogems + 90 + 600;
            total.innerHTML = totals;
            welkin.innerHTML = days.value + " Day";
            day.innerHTML = days.value;
            bps.innerHTML = "On";
        } else if(welkins.checked == true){
            let totals = primogems + 90;
            total.innerHTML = totals;
            welkin.innerHTML = days.value + " Day";
            day.innerHTML = days.value
        } else if(bp.checked == true){
            let totals = primogems + 600;
            total.innerHTML = totals;
            bps.innerHTML = "On";
        } else {
            total.innerHTML = primogems;
            day.innerHTML = days.value;
            welkin.innerHTML = "Without";
            bps.innerHTML = "No";
        }
}
