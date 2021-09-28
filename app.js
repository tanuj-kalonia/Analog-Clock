setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hRotation = 30*htime + mtime/2;
    mRotation = 6*mtime;
    sRotation = 6*stime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    //rotate is a function which rotates the an element to certain degress
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
},1000)