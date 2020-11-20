$(document).ready(function(){
      	var owl = $('.owl-carousel');
      	owl.owlCarousel({

      		items: 1,
      		loop: true,
      		margin: 10,
      		autoplay: true,
      		autoplayTimeout: 1500,
      		autoplayHoverPause: true
      	});
});

function checkFullName(){
      var name = $('#fullName').val();
      var reg = /^[a-zA-Z -.]{2,10}$/;

      if(reg.test(name)){
           return true;
      }else{
            $('#fullName').css({
                  'border':'1px solid red',
            });
            return false;
      }
}

function checkEmail(){
      var email = $('#email').val();
      var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

      if(reg.test(email)){
           return true;
      }else{
            $('#email').css({
                  'border':'1px solid red',
            });
            return false;
      }
}

function checkPhoneNumber(){
      var phoneNumber = $('#phoneNumber').val();
      var reg = /^[0-9+]{11,13}$/;

      if(reg.test(phoneNumber)){
           return true;
      }else{
            $('#phoneNumber').css({
                  'border':'1px solid red',
            });
            return false;
      }
}

function checkMessage(){
      var message = $('#message').val();
      var reg = /^[a-zA-Z -.]{15,100}$/;

      if(reg.test(message)){
           return true;
      }else{
            $('#message').css({
                  'border':'1px solid red',
            });
            return false;
      }
}

// $('#subBtn').click(function(){
      
// });


$('#form').submit(function(){
      if(checkFullName() == true && checkEmail() == true && checkPhoneNumber() == true && checkMessage() == true ){
           return true;
      }
      else{
            return false;
      }
});
