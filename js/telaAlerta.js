$(document).ready(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("abrirModal");
var span = document.getElementById("fecharModal");

btn.onclick = function openModal() {
    modal.style.display = 'block';
}

span.onclick = function closeModal (){ 
    modal.style.display = 'none';
}