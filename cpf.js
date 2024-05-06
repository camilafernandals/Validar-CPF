document.getElementById('consultar').addEventListener('click', function() {
    var cpfInput = document.getElementById('cpf');
    var validationSpan = document.getElementById('validation');
    var resultado = validaCPF(cpfInput.value);
    validationSpan.innerHTML = resultado;
});

document.getElementById('limpar').addEventListener('click', function() {
    document.getElementById('cpf').value = ''; // Limpa o campo CPF
    document.getElementById('validation').innerHTML = ''; // Limpa a mensagem de validação
});

function validaCPF(cpf) {
    var Soma = 0;
    var Resto;
  
    var strCPF = String(cpf).replace(/[^\d]/g, '');
    
    if (strCPF.length !== 11)
       return "CPF incorreto ou inexistente. Informe novamente.";
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return "CPF incorreto ou inexistente. Informe novamente.";
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0;
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return "CPF incorreto ou inexistente. Informe novamente.";
  
    Soma = 0;
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
  
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0;
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return "CPF incorreto ou inexistente. Informe novamente.";
  
    return "CPF validado com sucesso!";
}
