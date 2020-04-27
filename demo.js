/// <reference path="jquery-3.5.0.min.js" />
/// <reference path="pluginDemo.js" /> 

$(document).ready(function () {

    $("#divObj")
        .greenify()
        .AddForegroundColor("green")
        .AddBackgroundColor("red")
        .OnClickEvent((divObj, data) => {
            console.log("On Click Event Call");

            $(divObj).css("background-color", "orange");

            console.log(data);
        })

});
