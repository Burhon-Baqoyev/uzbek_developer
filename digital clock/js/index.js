function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#clock').innerHTML =`${h}:${m}:${s}`;
    setTimeout(startTime, 500);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
