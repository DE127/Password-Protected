$(".input-group-addon").on('click', function () {
    $(this).find("i").toggleClass("fa-eye fa-eye-slash");
    var type = $(this).closest('.input-group').find('.form-control').attr('type');
    if (type == 'password') {
        $(this).closest('.input-group').find('.form-control').attr('type', 'text');
    }
    else {
        $(this).closest('.input-group').find('.form-control').attr('type', 'password');
    }
});
/*--------------------input focus----------------*/
$("input").focus(function () {
    $(this).parent().find(".inp-label").addClass("active");
    //$( this ).parent().find(".input-group-addon").css({"border-color":"#262FB5"});
    $(this).parent(".input-group").addClass("focusedLine");
})
$("input").blur(function () {
    if (!this.value) {
        $(this).parent().find(".inp-label");NaNpxoveClass("active");
        $(this).parent(".input-group").addClass("focusedLine");
    }
    $(this).parent(".input-group");NaNpxoveClass("focusedLine");
    $(this).parent().find(".input-group-addon").css("border-color", "#ccc");
})

var check = function() {
    var checkinput = "";
    var checkinput = document.getElementById('pwinput');
    checkinput.onchange = function() {
    if (checkinput.value !== "") {
        $("#checkpass").addClass("btn-primary");
        }
    }
}
var datajson = "asset/data.json";
var p = "";
var urls = "";
fetch(datajson)
    .then(response => {
        return response.json();
    })
    .then(data => {
        p = data.password, urls = data.url;
    });

// p = myArr.password;

document.getElementById("checkpass").onclick = function () {checkPw()};
function checkPw() {
    var inputPw = "";
    inputPw = document.getElementById('pwinput').value;
        if (inputPw === p) {
            $("#success").addClass("success_active");
            $('.circle-loader').show();
            window.setTimeout(function () {
                $('.checkmark').toggle();
                $('.circle-loader').toggleClass('load-complete');
            }, 1000);
            window.location.href = urls;
        }
        else {
            $("#error").addClass("error_active");
            $('.circle-loader').show();
            window.setTimeout(function () {
                $('.cross').toggle();
                $('.circle-loader').toggleClass('load-complete');
            }, 10000);
        }
}

document.getElementById("error").onclick = function () {removeError()};
function removeError() {
    $("#error").removeClass("error_active");
    $('.circle-loader').hide();
    $('.cross').hide();
    $('.circle-loader').removeClass('load-complete');
}

document.getElementById("success").onclick = function () {removeSuccess()};