console.log('"Contact us" (main.js) loaded correctly');

$(document).ready(function() {
    var statusElm = $('.status');
    statusElm.empty();
    statusElm.append('<div class="error">The form was deactivated. Contact the developer at slgnalindev@gmail.com</div>');

    $('.submit').click(function(event) {
        console.log('The submit button was clicked');

        var name = $('.name').val();
        var phone = $('.phone').val();
        var email = $('.email').val();
        var message = $('.message').val();


        // if (!name.length)
        //     {
        //         event.preventDefault();
        //         statusElm.append('<div class="error">The name field should not be empty!</div>'); 
        //     }

        // if (!phone.length)
        //     {
        //         event.preventDefault();
        //         statusElm.append('<div class="error">The phone number field should not be empty!</div>'); 
        //     }

        // if (email.length <5 || !email.includes('@') || !email.includes('.'))
        //     {
        //         event.preventDefault();
        //         statusElm.append('<div class="error">Email is invalid</div>');
        //     }

        // if (message.length < 20)
        //     {
        //         event.preventDefault();
        //         statusElm.append('<div class="error">The message has to contain at least 20 characters');
        //     }

    })
})