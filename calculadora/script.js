let ultimo = 0;
let operar = 0;
let zero = 0;
function insert(num){
    ultimo = 1 ;
    if(operar == 0){
        let numero = document.getElementById('resultado').innerHTML;
        if(numero == 0){
            document.getElementById('resultado').innerHTML = num;
        }else{
            document.getElementById('resultado').innerHTML = numero + num;
        }
    }else{
        let igual = '=';
        let operacao = document.getElementById('operacao').innerHTML;
        let posicaoIgual = operacao.indexOf(igual);
        if(posicaoIgual !== -1){
            document.getElementById('operacao').innerHTML = '';
            if(num == '.'){
                document.getElementById('resultado').innerHTML = "0" + num;
                operar = 0;
            }
            document.getElementById('resultado').innerHTML = num;
            operar = 0;
        } else{
            if(num == '.'){
                document.getElementById('resultado').innerHTML = '0' + num;
                operar = 0;
            }
            document.getElementById('resultado').innerHTML = num;
            operar = 0;
        }
        
    }
}

function conta(operador){
    ultimo = 2;
    let soma = '+';
    let subtracao = '-';
    let multiplicacao = 'x';
    let divisao ='/';
    let igual = '=';
    let operacao = document.getElementById('operacao').innerHTML;
    let resultado = document.getElementById('resultado').innerHTML;
    if(operacao == ''){
        operar = 1;
        if(operador == '%'){
            resultado = Number(resultado)/100;
            document.getElementById('operacao').innerHTML = resultado;
            document.getElementById('resultado').innerHTML = resultado;
        }else{
        document.getElementById('operacao').innerHTML = resultado + ' ' + operador;
        }
    }else{
        let posicaoSoma = operacao.indexOf(soma);
        let posicaoSubtracao = operacao.indexOf(subtracao);
        let posicaoMultiplicacao = operacao.indexOf(multiplicacao);
        let posicaoDivisao = operacao.indexOf(divisao);
        let posicaoIgual = operacao.indexOf(igual);
        let valorString = '';
        let valor = 0;
        /* valor 2 é o resultado */
        let valor2 = 0;
        operar = 1;
        if(operador == '='){
            if(posicaoSoma !== -1){
                valorString = operacao.split(' ');
                valor = Number(valorString[0]);
                valor2 = valor + Number(resultado) ;
                document.getElementById('resultado').innerHTML = valor2;
                document.getElementById('operacao').innerHTML = valor + ' ' + soma + ' ' + resultado + ' ' + operador;
            }else  if(posicaoSubtracao !== -1){
                valorString = operacao.split(' ');
                valor = Number(valorString[0]);
                valor2 = valor - Number(resultado);
                document.getElementById('resultado').innerHTML = valor2;
                document.getElementById('operacao').innerHTML = valor + ' ' + subtracao + ' ' + resultado + ' ' + operador;
            }else  if(posicaoMultiplicacao !== -1){
                valorString = operacao.split(' ');
                valor = Number(valorString[0]);
                valor2 = valor*Number(resultado);
                document.getElementById('resultado').innerHTML = valor2;
                document.getElementById('operacao').innerHTML = valor + ' ' + multiplicacao + ' ' + resultado + ' ' + operador;
            }else  if(posicaoDivisao !== -1){
                valorString = operacao.split(' ');
                valor = Number(valorString[0]);
                valor2 = valor/Number(resultado);
                document.getElementById('resultado').innerHTML = valor2;
                document.getElementById('operacao').innerHTML = valor + ' ' + divisao + ' ' + resultado + ' ' + operador;
            } 
        }else{
            if(posicaoIgual !== -1){
                if(operador == '%'){
                    resultado = Number(resultado)/100;
                    document.getElementById('operacao').innerHTML = resultado;
                }else{
                    document.getElementById('operacao').innerHTML = resultado + ' ' + operador;
                }
                
            }else if(posicaoSoma !== -1){
                if(operador !== '%'){
                    valorString = operacao.split(' ');
                    valor = Number(valorString[0]);
                    valor2 = valor + Number(resultado) ;
                    document.getElementById('resultado').innerHTML = valor2;
                    document.getElementById('operacao').innerHTML = valor2 + ' ' + operador;
                }
            }else  if(posicaoSubtracao !== -1){
                if(operador !== '%'){
                    valorString = operacao.split(' ');
                    valor = Number(valorString[0]);
                    valor2 = valor - Number(resultado);
                    document.getElementById('resultado').innerHTML = valor2;
                    document.getElementById('operacao').innerHTML = valor2 + ' ' + operador;
                }
            }else  if(posicaoMultiplicacao !== -1){
                valorString = operacao.split(' ');
                valor = Number(valorString[0]);
                if(operador == '%'){
                    resultado = Number(resultado)/100;
                    document.getElementById('operacao').innerHTML = operacao + ' ' + resultado;
                    document.getElementById('resultado').innerHTML = resultado;
                }else{
                    valor2 = valor*Number(resultado);
                    document.getElementById('resultado').innerHTML = valor2;
                    document.getElementById('operacao').innerHTML = valor2 + ' ' + operador;
                }
                
            }else  if(posicaoDivisao !== -1){
                if(operador !== '%'){
                    valorString = operacao.split(' ');
                    valor = Number(valorString[0]);
                    valor2 = valor/Number(resultado);
                    document.getElementById('resultado').innerHTML = valor2;
                    document.getElementById('operacao').innerHTML = valor2 + ' ' + operador;
                }
                
            }else{
                if(operador !== '%'){
                    document.getElementById('operacao').innerHTML= operacao + ' ' + operador;
                }  
            }
        }
        
    }
}

function apagar(){
    document.getElementById('operacao').innerHTML = '';
    document.getElementById('resultado').innerHTML = '0';
}

function apagarResultado(){
    let igual = '=';
    let operacao = document.getElementById('operacao').innerHTML;
    let posicaoIgual = operacao.indexOf(igual);
    if(posicaoIgual !== -1){
        document.getElementById('operacao').innerHTML = '';
        document.getElementById('resultado').innerHTML = '0';
        operar = 0;
    } else{
        document.getElementById('resultado').innerHTML = '0';
        operar = 0;
    }
}

function apagarUltimo(){
    let resultado;
    let resultadoFinal;
    let tamanho = 0;
    if(ultimo == 1){
        resultado = document.getElementById('resultado').innerHTML;
        tamanho = resultado.length-1;
        if(tamanho == 0){
            document.getElementById('resultado').innerHTML = '0';
        }else{
            resultadoFinal = resultado.substring(0,resultado.length-1);
            document.getElementById('resultado').innerHTML = resultadoFinal;
        }
    }
}