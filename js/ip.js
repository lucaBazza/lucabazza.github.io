var ipString_cloudflare;
var ip_data_cloudflare;

var ipStack_datas;
var lat;
var lng;

function ip_by_cloudflare(){
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
        console.log("ip_by_cloudflare" + data)
        
        
       

        /* document.getElementsByClassName("ip")[0].value = data.ip; */

        ip_data_cloudflare = data;
        dataToVisualize = data.replace(/\r|\n/,"<br>");
        
        ipString_cloudflare = data.split("\n")[2].replace("ip=","");
        cloudFlare_browser = data.split("\n")[5].replace("uag=","");


        document.getElementsByClassName("ip_ipapi_co")[0].value = ipString_cloudflare;   /* manda a form 2*/

        document.getElementById("gfg_ip_by_cloudflare").innerText = ipString_cloudflare;
        $("#gfg").html(cloudFlare_browser); 
    })
}

function ip_by_ipapi_co(){
    if(document.getElementsByClassName("ip_ipapi_co")[0].value == "8.8.8.8") 
        console.log("ip_by_ipapi_co : cambia valore diocane");
    else $.getJSON('https://ipapi.co/'+$('.ip_ipapi_co').val()+'/json', function(data){
        $('.city').text(data.city);
        $('.country').text(data.country);
        //console.log("ip_by_ipapi_co : " + data.city + " " + data.country);
    });
}



function code_ipStack(){
    // set endpoint and your access key
    var ip = ipString_cloudflare; //document.getElementsByClassName("ip")[0].value
    var access_key = '33eec07a6f136cc2a52e69c318cb0ab1';

    // get the API result via jQuery.ajax
    $.ajax({
        url: 'http://api.ipstack.com/' + ip + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
            ipStack_datas = json;
            lng = json.longitude;
            lat = json.latitude;
            var capital = json.capital;

            var output =  capital + " / " + json.continent_name + " / " + json.country_name
            + "\n type: " + json.type
            + "\n city: "+ json.city
            + "\n region_name: "+ json.region_name
            + "\n zip: "+ json.zip
            + "\n lat - long : "+ json.latitude +  "  " + json.longitude;

            $(".ipStack_res").text(output);
        },
        error: function(){
            $(".ipStack_res").text("error");
        }
    });
}

function showMap(lat,lng){
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
 }

setTimeout(function () {
    ip_by_ipapi_co();
    code_ipStack();
  }, 500)