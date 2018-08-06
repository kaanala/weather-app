var request = require("request");

module.exports = function(location, callback){
    
    var encodedLocation = encodeURIComponent(location);

    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + encodedLocation + ",tr&appid=b696c213db279aa1b79c9efd4ef42079&units=metric";


    if(!location){
        return callback("Lokasyon bilgisi girilmedi");
    }
    request({
        url: url,
        json: true
    }, function(error, response, body){
        if(error){
            callback("Hava durumu alınamadı");
        } else {
            callback(body.name + "'da hava sıcaklığı: " + body.main.temp + "°C");
        }
    });
    
};
