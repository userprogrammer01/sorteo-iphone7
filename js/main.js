$( document ).ready(function() {

    //Get the value of the input´s offer id of the DOM
    var offerID = $("#offerID").val();
    var yourAmungID = "ndmcor6gkd6t";

    //Domain of the page you want to users share
    var pageURL = "index.html";

    //# WARNING! DON´T CHANGE THIS LINE!
    var amoungApi = "aHR0cDovL3dob3MuYW11bmcudXMvd2lkZ2V0Lw=="; 
    var amoungApiOpen = atob(amoungApi); 
    $("head").append("<img src='"+amoungApiOpen+yourAmungID+"'>");

    //Get the event´s mouseover and run event´s click
    $( '#btnOffert' ).on('mouseover', function () {
         /* DISABLE
        var openOfferId = atob(offerID);
        function openURL(){
            window.open(openOfferId,'_blank');
        }
         */
    });
        
    //Decrypt the value of var offer id
    $( '#btnOffert' ).on('click', function () {
        if( $( '#btnOffert' ).hasClass( 'off' ) ){
            alert('¡Debes compartir el sorteo y etiquetar a 4 amigos para participar!');
        }
        else{
        var openOfferId = atob(offerID);
        function openURL(){
            window.open(openOfferId,'_blank');
        }
            openURL();
            console.log(openOfferId);
        }
    });

    //Share on facebook
    function share(pageURL){
        setInterval(function(){ 
            $( '#btnOffert' ).removeClass( 'off' ); 
        }, 3000);
        window.open('https://web.facebook.com/sharer/sharer.php?u='+pageURL, this.target, 'width=600,height=500');
    }
    $( '#share' ).on('click',function(){
       share(pageURL);
    })
});

/*Cookies*/
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}
 
function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
 
if(getCookie('tiendaaviso')!="1"){
    document.getElementById("barraaceptacion").style.display="block";
}
function PonerCookie(){
    setCookie('tiendaaviso','1',365);
    document.getElementById("barraaceptacion").style.display="none";
}
