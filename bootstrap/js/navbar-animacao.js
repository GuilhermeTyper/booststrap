$('#collapse-navbar').on('show.bs.collapse', function () { //fazendo que o banner desça quando o menu for clicado para que o banner não fica encima do menu
    $('.topCasaFina-banner').css('transform', 'translate(-50%,10%)');
});                         
                //ESSES EVENTOS ESTÁ NA DOCUMENTAÇÃO DO BOOTSTRAP DE EVENTOS COM COLLAPSE

$('#collapse-navbar').on('hide.bs.collapse', function () {//fazendo o banner voltar a sua posição anterior quando o menu estiver oculto
    $('.topCasaFina-banner').css('transform', 'translate(-50%,-50%)');
});
