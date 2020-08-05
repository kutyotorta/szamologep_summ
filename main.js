let sendButton = document.getElementById("sub");
let N1 = document.querySelector("input[name='inputN1']");
let N2 = document.querySelector("input[name='inputN2']");
//let plus = parseInt(N1.value) + parseInt(N2.value);
let eredmeny = document.getElementById("outputN12");

function osszead(){
    eredmeny.innerHTML = parseInt(N1.value) + parseInt(N2.value);
}