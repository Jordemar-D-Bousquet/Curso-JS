function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA !!
        img.src = 'Manhã.png'
        document.body.style.background ='#e2cd9f'
        msg.innerHTML += ' Bom Dia!!'
    } else if (hora >= 12 && hora <= 18 ){
        // BOA TARDE !!
        img.src = 'Tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML += ' Boa Tarde!!'
    } else {
        // BOA NOITE !!
        img.src ='Noite.png'
        document.body.style.background ='#515154'
        msg.innerHTML += ' Boa Noite !!'
    }
}
