function digitalClock() {
    var dt = new Date(); 
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    console.log(hour + " : " + min + " : " + sec);
    var t = setTimeout(function () {
      console.clear();
      digitalClock();
    }, 1000);
  }
  
  digitalClock();
  