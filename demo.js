/// <reference path="jquery-3.5.0.min.js" />
/// <reference path="pluginDemo.js" /> 

$(document).ready(function () {

    $("#divObj")
        .greenify()
        .AddForegroundColor("black")
        .AddBackgroundColor("red")
        .OnClickEvent((divObj, data, sendDataToPlugin) => {
            console.log("On Click Event Call");

            // Add Background Color
            $(divObj).css("background-color", "orange");

            // get Data from Plugin
            console.log(data);

            // Send data to Plugin
            let sendData_To_Plugin = "Hello From Division Tag";
            sendDataToPlugin(sendData_To_Plugin);
        })

});
