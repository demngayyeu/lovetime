//gắn vào thẻ id "date"
let dateBegin = new Date(2021,02,23,00,00,00).getTime()
function updateDate() {
    let dateShow = document.getElementById("date")
    let dateNow = Date.now()
    let Time = dateNow - dateBegin
    let parseDays = Math.floor(Time/(1000*60*60*24))
    let parseHours = Math.floor((Time-parseDays*(1000*60*60*24))/(1000*60*60))
    let parseMinutes = Math.floor((Time-parseDays*(1000*60*60*24)-parseHours*(1000*60*60))/(1000*60))
    let parseSeconds = Math.floor((Time-parseDays*(1000*60*60*24)-parseHours*(1000*60*60)-parseMinutes*(1000*60))/(1000))
    dateShow.innerHTML = parseDays +" Days : "+ parseHours+" Hours : "+parseMinutes+" Minutes : "+parseSeconds+" Seconds"
}
setInterval(()=>{
    updateDate()
}, 1000);
 