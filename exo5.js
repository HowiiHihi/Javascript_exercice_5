//Math.trunc permet de supprimer ce qu'il y a après la virgule
function maths()
{
  var a = Number(document.getElementById('firstNumber').value);
  var b = Number(document.getElementById('secondNumber').value);

  alert("Résultat : " + Math.trunc(a)*b)
}
