function inizializza(){
    notificatore();

    document.querySelectorAll('.pop_finestra').forEach(post => {
        post.addEventListener('click', () => {
            popWindow(post);
        });
        //Get original image URL
        //const complete_path_imgUrl = post.firstElementChild.src.split("?")[0];
        //var imgName = complete_path_imgUrl.split("/").pop();
        //var alt_attr = post.firstElementChild.getAttribute("alt");
    });
    //document.getElementById("blocco2").addEventListener('click', () => { avviaHack(); });
}

var result ="";

function avviaHack(){
    new Notification( "Avvia Hackintosh", {
        body: "Ora vedo di farlo dc!", 
        icon : "img/ico/hackintosh.ico"
    }); 

    $.ajax('avviaHackintosh.php', {
        
            success: function(data) {
                /*var jsonData = JSON.parse(data);
                if (jsonData.success == "1") {
                    console.log("asdf");
                }*/
                result = 'AJAX call was successful! \n '
                        + 'Data from the server' + data +"\n\n"
                        + JSON.parse(data).msg;

                console.log(result);
                document.getElementById("log_messaggi").innerHTML += " . . .  " + JSON.parse(data).msg;

            },
            error: function() {
                result = 'There was some error performing the AJAX call!';
                console.log();
                document.getElementById("log_messaggi").innerHTML += " . . . " +  result;
            }
         }
    );
    console.log();
}
function avviaServ(){
    new Notification( "Avvia avviaServ", {
        body: "Ora vedo di farlo diocane", 
        icon : "img/ico/web/chrome-hmjkmjkepdijhoojdojkdfohbdgmmhki-Default.png"
    }); 
}

function popWindow(post){
    window.scrollTo(0,0);
    $('.content-modal').addClass('active');
    $('.wrapper').addClass('blur');
    /*
    var urlImg = post.getAttribute("style").split("url('")[1].split("')")[0];
    document.getElementsByClassName('modal-body')[0].style.backgroundImage = urlImg;
    document.getElementsByClassName('header')[0].style.backgroundImage = urlImg; 
    */
    
    var pre_titolo_finestra = post.firstElementChild.innerHTML;
    var titolo_finestra = post.childNodes[3].innerHTML;
    document.getElementById("pre_titolo_finestra").innerHTML = pre_titolo_finestra; //  document.getElementsByClassName('modal-body')
    document.getElementById("titolo_finestra").innerHTML = titolo_finestra;         //  document.getElementsByClassName('modal-body')
    
    //window.open("post.html", '_blank');   //Open image in new tab
    //window.location.href = 'post.html';     //Open in the same tab
}

function chiudi(){
    $('.content-modal').removeClass('active');
    $('.wrapper').removeClass('blur');
}

function notificatore(){
    if(Notification.permission !== 'granted'){  	// n = new Notification( "Hello", { body: "This is a test",  icon : "star.ico" });
		Notification.requestPermission();
	}
}


/*function fai(){
    $('.content-modal').addClass('active');
    $('.wrapper').addClass('blur');
    //$("html, body").animate({ scrollTop: 0 }, "slow");
}
function fai(this_id){
    $('.content-modal').addClass('active');
    $('.wrapper').addClass('blur');
    console.log(document.getElementById(this_id));
    //$("html, body").animate({ scrollTop: 0 }, "slow");
    var imageUrl = document.getElementById(this_id).getAttribute('backgroundImage');
    document.getElementById(this_id).style.backgroundImage = "url('"+imageUrl+"')";
}*/



/* $('.grid').click(() => {
    console.log("click");
    $('.content-modal').addClass('active');
    $('.wrapper').addClass('blur');
    $("html, body").animate({ scrollTop: 0 }, "slow");
});
$('.content-modal .icon').click(() => {
    console.log("clic2k");
    $('.content-modal').removeClass('active');
    $('.wrapper').removeClass('blur');
}); */

/* document.getElementsByClassName("grid").array.forEach(element => {
    element.setAttribute(attr("onclick", "alert('Hi!')"));
}); */

//Array.from(document.getElementsByClassName("grid")).forEach(x => x.onclick = fai());
//Array.from(document.getElementsByClassName("grid")).forEach(x => x.attr('onclick', 'fai()' )); 