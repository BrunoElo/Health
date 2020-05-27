let getvalue = document.getElementById('symptom');
let drug = document.getElementById('displaydrugs');

getvalue.addEventListener('input', show);

// Shows the recommended drug in the displaydrugs div
function show() {
    drug.innerHTML = "amprolium, sulfadimethoxine and trimethoprim";
}