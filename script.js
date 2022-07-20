
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    //var hora = 23
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "manhã.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18 ) {
        img.src = "tarde.png"
        document.body.style.background = '#b9846f'
    }
    else {
        img.src = "noite.png"
        document.body.style.background = '#515154'
    }
}
/*
function saudacoes() {
    var sau = window.document.getElementById('sau')
    var data = new Date()
    var hora = data.getHours()
    p.innerText =<p>${hora}</p>.
        if (hora >= 0 && hora < 12) {
            "Bom dia"
        } else if (hora >=12 && hora <= 18 ) {
            "Bom dia"
        } else {
            "Bom dia"
        }
    } */
