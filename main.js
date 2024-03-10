
function calcular(){

var potencia = document.querySelector('input#potencia')
var  horas = document.querySelector('input#horas')
var dias = document.querySelector('input#dias')
var preço = document.querySelector('input#preço')

var pot = Number(potencia.value)
var hor = Number(horas.value)
var di = Number(dias.value)
var pre = Number(preço.value)

var forma = (((pot * di) * hor) / 1000) * pre
forma = forma.toFixed(2);

var res = document.querySelector('p#res')
res.innerHTML = `Seu consumo é de R$ ${forma}`

}

