$(function () {
    $('.menu__conteiner, span').click(function (event) {
        $('.menu__conteiner, span').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('#city').change(function () {
        color = $('#city :selected').val();
        document.getElementById('result').innerHTML = color;
    })

});