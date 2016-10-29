$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("add_city").html(response.city);
    $("#address").html(response.city + ", " + response.region);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");
