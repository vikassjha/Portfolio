function onMousehover(controlId)
{
    var control=document.getElementById(controlId);
    control.style.color= 'crimson';
}

function onMouseOut(controlIds)
{
    var controll= document.getElementById(controlIds);
    controll.style.color='white';
}

$(document).ready(function(){
    $('#cookiebtn').click(function(){
        $('#cookieDiv').css('display','none');
    });
});
$(document).ready(setTimeout(()=>{

    $('#cookieDiv').css('display','none');

},10000));
$(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 20)
            {
                $('.navbar').addClass("sticky");
            }
            else{
                $('.navbar').removeClass("sticky");
            }
            if(this.scrollY>500)
            { 
                $('.scroll-up-btn').addClass("show");


            }
            else{
                $('.scroll-up-btn').removeClass("show");
            }
        })
});
$('.scroll-up-btn').click(function(){
$('html').animate({scrollTop:0});
});

var typed=new Typed(".typing",{
    strings:["Engineer","Developer","Student","Cricketer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
});
