
var altura_palco = 0
var largura_palco = 0
var vidas = 1
var tempo = 10
var criaTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	criaTempo = 1500
} else if (nivel === 'dificil') {
	criaTempo = 1000
} else if (nivel === 'chucknorris') {
	criaTempo = 750
}

function tamanhoPalco(){
	altura_palco = window.innerHeight //definindo variaveis para estabelecer o tamanho do palco do jogo.
	largura_palco = window.innerWidth

	console.log(altura_palco, largura_palco)
}

tamanhoPalco()

var cronometro = setInterval(function(){ //criando o cronometro
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
} , 1000)

function posicaoMosquito(){

	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove() //verificando se mosquito ja existe na aplicação, e se sim, remover o anterior.
		if (vidas > 3){
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('vida' + vidas).src="imagens/coracao_vazio.png" //trocando os pontos de vida conforme id da pagina html.
		    vidas++
		    console.log(vidas)
		}
	}

	//definindo lugares aleatórios para o mosquito no jogo.
	var posicaoX = Math.floor(Math.random() * largura_palco) - 90 //usei math random para definir o lugar aleatorio e floor para não haver numeros extensos quando definir a aleatoriedade.
	var posicaoY = Math.floor(Math.random() * altura_palco) - 90
    //para caso a posição seja menor que zero, voltar ao valor dela mesma para não sair do palco do jogo.
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criando o elemento html para o mosquito
	var mosquito = document.createElement('img') //criando o elemento
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito) //incluindo o elemento no body da página

	ladoMosquito()
}

function tamanhoMosquito(){ //funcao para definir conforme a aleatoriedade, qual tamanho do mosquito conforme classes no estilo css.
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
		  return 'mosquito1'

		case 1:
		  return 'mosquito2'

		case 2:
		  return 'mosquito3'
	}
}

function ladoMosquito(){ //funcao para definir qual lado do mosquito conforme a aleatoriedade, vai aparecer conforme classes no estilo css.
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
		  return 'ladoA'

		case 1:
		  return 'ladoB'
	}
}

