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





// var home = document.querySelector('#home');
// var about = document.querySelector('#about');
// var service = document.querySelector('#service');
// var contact = document.querySelector('#contact');


// home.addEventListener('click', function () {
//     location.href = "/anharu/index.html";
//     console.log("home clicked");
// });
// about.addEventListener('click', function () {
//     location.href = "/anharu/about.html";
//     console.log("about clicked");
// });
// // service.addEventListener('click', function () {
// //     location.href = "/anharu/service.html";
// //     console.log("service clicked");
// // });
// contact.addEventListener('click', function () {
//     location.href = "/anharu/contact.html";
//     console.log("contact clicked");
// });

var targetEl = document.querySelector("#target");
targetEl.addEventListener("click", function () {
    targetEl.setAttribute("material", {
        color: "red"
    });
    console.log("clicked");
});

// AFRAME.registerComponent("cursor-listener", {
//     init: function () {
//         var lastIndex = -1;
//         var COLORS = ["red", "green", "blue"];
//         this.el.addEventListener("click", function (evt) {
//             lastIndex = (lastIndex + 1) % COLORS.length;
//             this.setAttribute("material", "color", COLORS[lastIndex]);
//             console.log("I was clicked at: ", evt.detail.intersection.point);
//         });
//     },
// });

// カーソルがぶつかったら拡大
// targetEl.addEventListener('mouseenter', function () {
//     targetEl.setAttribute('scale', {
//         x: 3,
//         y: 3,
//         z: 3
//     });
//     console.log("mouseenter");
// });
// // カーソルが離れたら元にもどす
// targetEl.addEventListener('mouseleave', function () {
//     targetEl.setAttribute('scale', {
//         x: 1,
//         y: 1,
//         z: 1
//     });
//     console.log("mouseleave");
// });