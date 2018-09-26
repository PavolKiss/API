$(document).ready(function() {
    $("#btn").click(function(){
        var ip = $("#ipv").val();
        var access_key = 'b9d57c25495fdcb0420abfcaba5019ae';
		
		if (ip.length>0) {
           var urllink = 'http://api.ipstack.com/' + ip + '?access_key=' + access_key;           
            $.ajax({
                url: urllink,   
                data: {format: 'json'},
                error: function(){
				//error	
				},
				dataType: 'json',
                success: function(data) {
                    var cleaner = ["#ip","#continent_name", "#zip", "#city", "#country_name", "#region_name"];
					for(var i=0;i<6;i++){
						$(cleaner[i]).html("");
					}
                    
                    var ip = data.ip;
                    var continent_name = data.continent_name;
                    var region_name = data.region_name;
                    var zip = data.zip;
                    var city = data.city;
                    var country_name = data.country_name;
                    var type = data.type;
                    $("#ip").append(ip);
                    $("#continent_name").append(continent_name);
                    $("#zip").append(zip);
                    $("#city").append(city);
                    $("#region_name").append(region_name);
                    $("#country_name").append(country_name);
                    $("#type").append(type);
                },
                type: 'GET'
            });   
        }       
    });

});
    