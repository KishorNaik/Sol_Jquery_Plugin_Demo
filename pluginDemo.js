/// <reference path="jquery-3.5.0.min.js" /> 



$.fn.greenify = function () {

    // Set Default Colors
    $(this).css("color", "red");
    $(this).css("background-color", "yellow");

    // Chain Public Method
    this.AddForegroundColor = function (colorName) {
        $(this).css("color", colorName);
        return this;
    }

    this.AddBackgroundColor = function (colorName) {
        $(this).css("background-color", colorName);
        return this;
    }

    this.OnClickEvent = function (actionObj) { // actionObj->CallBack Function(Action Delegate)

        console.log("On Click Event Invoke");

        let sendData = "Hello from Plugin";

        $(this).click(function () {
            actionObj($(this), sendData, (getDivData) => {
                console.log(getDivData);
            }); // Delegate
        });
    }

    return this;
};



