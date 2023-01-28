// o uso de "$" instancia jQuery e evita conflitos com outra bibliotecas.
//jQuery(function($) pode ser iniciado dessa forma

$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')

    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
    //$('.featured-item:first h4').css('color','#cfa')

    $('.featured-item h4').click(function(){
        
        $(this).css({
            'color':'#cfa',
            'background': '#ff0',
            'font-wight': '100',
        })
    })
    
    $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto Esgotado')

    })

})

