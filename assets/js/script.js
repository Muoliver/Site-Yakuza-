document.querySelector('.btn-outline-success').addEventListener('click', function(){
    var valorCampo = document.querySelector('.campoBusca').value;
    document.querySelector('.valorBusca').innerHTML = valorCampo;
});