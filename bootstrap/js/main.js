function ShowSoloution(){
    var x = document.getElementById("codeCard");
    var y = document.getElementById("answerCard");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }

}