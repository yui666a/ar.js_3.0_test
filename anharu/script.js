////////////////////////////////////
//加速度センサの情報取得の許可
////////////////////////////////////
// document
//     .getElementById("request_permission")
//     .addEventListener("click", function () {
//         if (
//             DeviceMotionEvent &&
//             DeviceMotionEvent.requestPermission &&
//             typeof DeviceMotionEvent.requestPermission === "function"
//         ) {
//             DeviceMotionEvent.requestPermission();
//         }
//         if (
//             DeviceOrientationEvent &&
//             DeviceOrientationEvent.requestPermission &&
//             typeof DeviceOrientationEvent.requestPermission === "function"
//         ) {
//             DeviceOrientationEvent.requestPermission();
//         }
//     });





var home = document.querySelector('#home');
var about = document.querySelector('#about');
var service = document.querySelector('#service');
var contact = document.querySelector('#contact');


home.addEventListener('click', function () {
    location.href = "/anharu/index.html";
});

about.addEventListener('click', function () {
    location.href = "/anharu/about.html";
});

service.addEventListener('click', function () {
    location.href = "/anharu/service.html";
});

contact.addEventListener('click', function () {
    location.href = "/anharu/contact.html";
});

var targetEl = document.querySelector("#target");
targetEl.addEventListener("click", function () {
    targetEl.setAttribute("material", {
        color: "red"
    });
});