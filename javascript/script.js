function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);


function changeTime() {
    var select = document.getElementById('countries').value;
    
    const timezoneOffsets = {
        Japan: +12,
        Belarus: +6,
        England: +4,
        Iceland: +3
    }

    date.setHours(date.getUTCHours() + timezoneOffsets[selectedLocation])

}