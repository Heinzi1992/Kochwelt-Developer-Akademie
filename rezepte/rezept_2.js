
let ingredient1 = 1/4
let ingredient2 = 1/4
let ingredient3 = 1/4
let ingredient4 = 1/4
let ingredient5 = 62.5





function multiply() {



    
    
    x = document.getElementById('menge').value

    document.getElementById("menge").addEventListener("change", function() {
        let x = parseInt(this.value);
        if (x < 1) this.value = 1;
        if (x > 8) this.value = 8;
        if (x = 0) this.value = 1;
      });
    
    document.getElementById('menge_ausgabe1').innerText = ingredient1 * x
    document.getElementById('menge_ausgabe2').innerText = ingredient2 * x
    document.getElementById('menge_ausgabe3').innerText = ingredient3 * x
    document.getElementById('menge_ausgabe4').innerText = ingredient4 * x
    document.getElementById('menge_ausgabe5').innerText = ingredient5 * x
    
}
 
