function carregar (){

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    //var hora = 15 //retirar contra barra para incluir manualmente o horário desejado
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = './imagens/manha1.jpg'
        document.body.style.background = 'rgb(94, 190, 202)'

        } else if (hora >= 12 && hora <= 18) {
            img.src = './imagens/tarde1.jpg'
            document.body.style.background = 'rgb(214, 86, 35)'

        } else {
            img.src = './imagens/noite2.jpg'
            document.body.style.background = '#515154'
        }
}