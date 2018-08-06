var argv = require("yargs")
    .option('location', {
        alias: 'l',
        demand: false,
        describe: "Hava durumu için lokasyon bilgisi",
        type: 'string' 
    })
    .help('help')
    .argv;

var weather = require("./weather");
var location = require("./location");


if (typeof argv.l === 'string' && argv.l.length > 0){
    
    console.log("Lokasyon bilgisi girildi")

    weather(argv.l, function(currentWeather){
        console.log(currentWeather)
    })
} else {

    console.log("Lokasyon bilgisi girilmedi")

    location(function(location){

        if(!location){
            console.log("Lokasyon bilgisi alınamadı!");
            return;
    
        } else {
           weather(location.city, function(currentWeather){
               console.log(currentWeather);
           })
        }
    })
 
}

/* request({
    url : url,
    json : true
}, function(error, response, body){
    if(error){
        console.log("Hava durumu alınamadı");
    } else {
        console.log(body.name + "'da hava sıcaklığı: " + body.main.temp + "°C");
    }
});

 */



 