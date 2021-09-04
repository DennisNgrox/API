var xhr = new XMLHttpRequest();
var documento;
var enviar = document.getElementById('enviar');

enviar.addEventListener('click', () => {
    var cep = document.getElementById('valor').value;


xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
        documento = xhr.response;
        setCampo(JSON.parse(xhr.responseText));
        console.log(documento);

        function setCampo(json) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = json.logradouro + '-' 
            + json.bairro + '-' 
            + json.localidade + '-' 
            + json.uf + '-'
            + json.cep;
        }
    }
}
 


xhr.open("GET", 'https://viacep.com.br/ws/' + cep + '/json', true)

xhr.send();

}) 
