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
// var service = document.querySelector('#service');
var contact = document.querySelector('#contact');


home.addEventListener('click', function () {
    location.href = "/anharu/index.html";
    console.log("home clicked");
});

about.addEventListener('click', function () {
    location.href = "/anharu/about.html";
    console.log("about clicked");
});

// service.addEventListener('click', function () {
//     location.href = "/anharu/service.html";
//     console.log("service clicked");
// });

contact.addEventListener('click', function () {
    location.href = "/anharu/contact.html";
    console.log("contact clicked");
});

var targetEl = document.querySelector("#target");
targetEl.addEventListener("click", function () {
    targetEl.setAttribute("material", {
        color: "red"
    });
    console.log("clicked");
});
// カーソルがぶつかったら拡大
// targetEl.addEventListener('mouseenter', function () {
//     targetEl.setAttribute('scale', {
//         x: 5,
//         y: 5,
//         z: 5
//     });
//     console.log("mouseenter");
// });

// // カーソルが離れたら元にもどす
// targetEl.addEventListener('mouseleave', function () {
//     targetEl.setAttribute('scale', {
//         x: 2,
//         y: 2,
//         z: 2
//     });
//     console.log("mouseleave");
// });