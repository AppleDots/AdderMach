var i = 0;

var cl = 0;

function adds(x)
{
  i = i + x;

  cl = cl + 1;

  return prints();

}

function prints()
{
  document.getElementById("p1").innerHTML = "<hr> Sum: " + i;
  document.getElementById("p2").innerHTML = "Numbers Clicked: " + cl;


}

function erase()
{
  var n = 0;
  i = n;
  cl = n;

  document.getElementById("p1").innerHTML = " ";
  document.getElementById("p2").innerHTML = " ";

}
