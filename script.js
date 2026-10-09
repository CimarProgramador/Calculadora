const key = document.querySelectorAll('.key');
const painelDigital = document.getElementById("painel-digital");
const result = document.querySelector("#result");

function limparVisor() {
    painelDigital.value = '0';
}

function apagarUltimo() {
    painelDigital.value = painelDigital.value.slice(0, -1);
    if (painelDigital.value == "") {
        painelDigital.value = "0"
    }
}

key.forEach(function (botao) {
    // Adiciona o ouvinte de evento em cada botão individualmente
    botao.addEventListener('click', function (event) {
        // O 'event.target' serve para descobrir qual botão exato foi clicado
        console.log('Você clicou no: ' + event.target.innerText);
        if (painelDigital.value == '0') {
            painelDigital.value = event.target.innerText;
        } else {
            if (painelDigital.value == 'Erro') {
                painelDigital.value = event.target.innerText;
            } else {
                const ultimoDigito = painelDigital.value.slice(-1);
                if (['+', '-', '*', '/'].includes(event.target.innerText)) {
                    if (['+', '-', '*', '/'].includes(ultimoDigito)) {
                        const digital = event.target.innerText;
                        painelDigital.value = painelDigital.value.slice(0, -1);
                        painelDigital.value = `${painelDigital.value}${digital}`;
                        console.log('A');
                    } else {
                        const digital = event.target.innerText;
                        painelDigital.value = `${painelDigital.value}${digital}`;
                        console.log('B');
                    }
                } else {
                    const digital = event.target.innerText;
                    painelDigital.value = `${painelDigital.value}${digital}`;
                    console.log('B');
                }
            }
        }
    })
});


result.addEventListener('click', function calcularResult() {
    // Permite apenas números, espaços e os operadores + - * / ( )
    const apenasMatematica = /^[0-9+\-*/().\s]+$/;
    if (apenasMatematica.test(painelDigital.value)) {
        //A estrutura try...catch funciona como uma rede de segurança: o código tenta executar o que está no bloco try e, se algo der errado (como uma conta mal escrita), ele pula para o bloco catch para evitar que o sistema trave.
        try {
            // Cria uma nova função que retorna o resultado da expressão e a executa imediatamente
            painelDigital.value = new Function(`return ${painelDigital.value}`)();
        } catch (error) {
            painelDigital.value = 'Erro';
        }
    } else {
        painelDigital.value = 'Erro';
    }

});


/*  
// uso da função eval não é aconselhável
result.addEventListener('click', function calcularResult() {
    // Permite apenas números, espaços e os operadores + - * / ( )*/

    //const apenasMatematica = /^[0-9+\-*/().\s]+$/;

    /*if (apenasMatematica.test(painelDigital.value)) {
        //A estrutura try...catch funciona como uma rede de segurança: o código tenta executar o que está no bloco try e, se algo der errado (como uma conta mal escrita), ele pula para o bloco catch para evitar que o sistema trave.
        try {
            // Cria uma nova função que retorna o resultado da expressão e a executa imediatamente
            painelDigital.value = eval(painelDigital.value)();
        } catch (error) {
            painelDigital.value = 'Erro';
        }
    } else {
        painelDigital.value = 'Erro';
    }
}); 
*/


