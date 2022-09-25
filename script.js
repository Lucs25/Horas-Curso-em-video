
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("img")

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }
    const data = new Date()
    let hora = addZero(data.getHours());
    let m = addZero(data.getMinutes());
    msg.innerHTML = `Agora são ${hora}:${m} minutos`
    if (hora >= 0 && hora < 12) {
        img.src = "/img/manhã.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18 ) {
        img.src = "/img/tarde.png"
        document.body.style.background = '#b9846f'
    }
    else {
        img.src = "/img/noite.png"
        document.body.style.background = '#8B9DC3'
    }
}
