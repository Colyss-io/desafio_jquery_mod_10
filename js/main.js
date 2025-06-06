$(document).ready(function() {
    $('#carousel_imagens').slick({
        autoplay:true
    })

$(document).ready(function () {
    $('#carousel').slick({
        autoplay: true,
        arrows: false
    })
})

$('#telefone').mask('(00) 00000-0000')

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
        }
    })
})