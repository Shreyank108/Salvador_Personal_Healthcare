//
//
//Match Media js
//
//
// mobile

ScrollTrigger.matchMedia({
  "(min-width:1024px)": function hello() {
    window.addEventListener("resize", function () {
      "use strict";
      window.location.reload();
    });
    function init() {
      gsap.registerPlugin(ScrollTrigger);
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    init();
    //
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      var data = `0001.png,`+
      `0002.png,`+
      `0003.png,`+
      `0004.png,`+
      `0005.png,`+
      `0006.png,`+
      `0007.png,`+
      `0008.png,`+
      `0009.png,`+
      `0010.png,`+
      `0011.png,`+
      `0012.png,`+
      `0013.png,`+
      `0014.png,`+
      `0015.png,`+
      `0016.png,`+
      `0017.png,`+
      `0018.png,`+
      `0019.png,`+
      `0020.png,`+
      `0021.png,`+
      `0022.png,`+
      `0023.png,`+
      `0024.png,`+
      `0025.png,`+
      `0026.png,`+
      `0027.png,`+
      `0028.png,`+
      `0029.png,`+
      `0030.png,`+
      `0031.png,`+
      `0032.png,`+
      `0033.png,`+
      `0034.png,`+
      `0035.png,`+
      `0036.png,`+
      `0037.png,`+
      `0038.png,`+
      `0039.png,`+
      `0040.png,`+
      `0041.png,`+
      `0042.png,`+
      `0043.png,`+
      `0044.png,`+
      `0045.png,`+
      `0046.png,`+
      `0047.png,`+
      `0048.png,`+
      `0049.png,`+
      `0050.png,`+
      `0051.png,`+
      `0052.png,`+
      `0053.png,`+
      `0054.png,`+
      `0055.png,`+
      `0056.png,`+
      `0057.png,`+
      `0058.png,`+
      `0059.png,`+
      `0060.png,`+
      `0061.png,`+
      `0062.png,`+
      `0063.png,`+
      `0064.png,`+
      `0065.png,`+
      `0066.png,`+
      `0067.png,`+
      `0068.png,`+
      `0069.png,`+
      `0070.png,`+
      `0071.png,`+
      `0072.png,`+
      `0073.png,`+
      `0074.png,`+
      `0075.png,`+
      `0076.png,`+
      `0077.png,`+
      `0078.png,`+
      `0079.png,`+
      `0080.png,`+
      `0081.png,`+
      `0082.png,`+
      `0083.png,`+
      `0084.png,`+
      `0085.png,`+
      `0086.png,`+
      `0087.png,`+
      `0088.png,`+
      `0089.png,`+
      `0090.png,`+
      `0091.png,`+
      `0092.png,`+
      `0093.png,`+
      `0094.png,`+
      `0095.png,`+
      `0096.png,`+
      `0097.png,`+
      `0098.png,`+
      `0099.png,`+
      `0100.png,`+
      `0101.png,`+
      `0102.png,`+
      `0103.png,`+
      `0104.png,`+
      `0105.png,`+
      `0106.png,`+
      `0107.png,`+
      `0108.png,`+
      `0109.png,`+
      `0110.png,`+
      `0111.png,`+
      `0112.png,`+
      `0113.png,`+
      `0114.png,`+
      `0115.png,`+
      `0116.png,`+
      `0117.png,`+
      `0118.png,`+
      `0119.png,`+
      `0120.png,`+
      `0121.png,`+
      `0122.png,`+
      `0123.png,`+
      `0124.png,`+
      `0125.png,`+
      `0126.png,`+
      `0127.png,`+
      `0128.png,`+
      `0129.png,`+
      `0130.png,`+
      `0131.png,`+
      `0132.png,`+
      `0133.png,`+
      `0134.png,`+
      `0135.png,`+
      `0136.png,`+
      `0137.png,`+
      `0138.png,`+
      `0139.png,`+
      `0140.png,`+
      `0141.png,`+
      `0142.png,`+
      `0143.png,`+
      `0144.png,`+
      `0145.png,`+
      `0146.png,`+
      `0147.png,`+
      `0148.png,`+
      `0149.png,`+
      `0150.png,`+
      `0151.png,`+
      `0152.png,`+
      `0153.png,`+
      `0154.png,`+
      `0155.png,`+
      `0156.png,`+
      `0157.png,`+
      `0158.png,`+
      `0159.png,`+
      `0160.png,`+
      `0161.png,`+
      `0162.png,`+
      `0163.png,`+
      `0164.png,`+
      `0165.png,`+
      `0166.png,`+
      `0167.png,`+
      `0168.png,`+
      `0169.png,`+
      `0170.png,`+
      `0171.png,`+
      `0172.png,`+
      `0173.png,`+
      `0174.png,`+
      `0175.png,`+
      `0176.png,`+
      `0177.png,`+
      `0178.png,`+
      `0179.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png,`+
      `0180.png`;;
      return `/static/images/${data.split(",")[index]}`;
    }

    const frameCount = 205;

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#pages`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page1",
      pin: true,
      // markers:true,
      scroller: `#main`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
    });
    //

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pages",
        scroller: "#main",
        pin: true,
        scrub: true,
        markers: true,
        end: "+=" + window.innerHeight * 4,
      },
    });
    tl.to(
      "#page2",
      {
        y: "-100%",
      },
      "hello"
    );
    tl.fromTo(
      "#page2 #span h1",
      {
        y: "-400%",
      },
      {
        y: 0,
      },
      "hello"
    );

    tl.to(
      "#page3",
      {
        y: "-100%",
      },
      "hello1"
    );
    tl.fromTo(
      "#page3 #span h1",
      {
        y: "-400%",
      },
      {
        y: 0,
      },
      "hello1"
    );

    tl.to(
      "#page4",
      {
        y: "-100%",
      },
      "hello2"
    );
    tl.fromTo(
      "#page4 #span h1",
      {
        y: "-400%",
      },
      {
        y: 0,
      },
      "hello2"
    );
    var cur = document.querySelector("#cursor");
    var mai = document.querySelector("body");

    mai.addEventListener("mousemove", function (dets) {
      gsap.to(cur, {
        left: dets.x + "px",
        top: dets.y + "px",
      });
      // cur.style.left=dets.x+"px";
      // cur.style.top=dets.y+"px";
    });

    var p = document.querySelector("#p");
    document.querySelector(".cir").addEventListener("mouseenter", function () {
      gsap.to(p, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir").addEventListener("click", function () {
      gsap.to("#page1", {
        y: "-100%",
      });
    });
    document.querySelector(".cir1").addEventListener("click", function () {
      gsap.to("#page2", {
        y: "-100%",
      });
    });

    document.querySelector(".cir2").addEventListener("click", function () {
      gsap.to("#page3", {
        y: "-100%",
      });
    });
    document.querySelector(".cir3").addEventListener("click", function () {
      gsap.to("#page4", {
        y: "-100%",
      });
    });
    document.querySelector(".cir").addEventListener("mouseleave", function () {
      gsap.to(p, {
        opacity: 0,
        x: -20,
      });
    });
    var p1 = document.querySelector("#p1");
    document.querySelector(".cir1").addEventListener("mouseenter", function () {
      gsap.to(p1, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir1").addEventListener("mouseleave", function () {
      gsap.to(p1, {
        opacity: 0,
        x: -20,
      });
    });
    var p2 = document.querySelector("#p2");
    document.querySelector(".cir2").addEventListener("mouseenter", function () {
      gsap.to(p2, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir2").addEventListener("mouseleave", function () {
      gsap.to(p2, {
        opacity: 0,
        x: -20,
      });
    });
    var p3 = document.querySelector("#p3");
    document.querySelector(".cir3").addEventListener("mouseenter", function () {
      gsap.to(p3, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir3").addEventListener("mouseleave", function () {
      gsap.to(p3, {
        opacity: 0,
        x: -20,
      });
    });
    var p4 = document.querySelector("#p4");
    document.querySelector(".cir4").addEventListener("mouseenter", function () {
      gsap.to(p4, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir4").addEventListener("mouseleave", function () {
      gsap.to(p4, {
        opacity: 0,
        x: -20,
      });
    });

    //  page h1  font -> span
    var unr = document.querySelector("#page1 h1").textContent;
    var spltext = unr.split("");
    var clutter = "";
    spltext.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    document.querySelector("#page1 h1").innerHTML = clutter;
    gsap.to("#page1 h1 span", {
      WebkitTextStroke: "2px black",
      color: " transparent",
      backgroundImage: "none",
      x: 25,
      delay: 4,

      stagger: 0.3,
      // scrollTrigger:{
      //    trigger:"#page2 h1 span ",
      //    scroller:"body" ,
      //    markers:true
      //    , start:"top -10%"
      //    ,end:"top -20%"
      //    ,scrub:2
      // }
    });
    //  page h1  font -> span

    // asnimating signup page

    document.querySelector("#right h5").addEventListener("click", function () {
      document.querySelector("#duodiv").style.transform = "translate(-50%)";
      document.querySelector("#right").style.backgroundColor =
        " rgb(255, 151, 72)";
      document.querySelector("#right h5").style.color = "white";
      document.querySelector("#left h5").style.color = "black";
      document.querySelector("#left").style.backgroundColor = "transparent";
    });
    document.querySelector("#left h5").addEventListener("click", function () {
      document.querySelector("#duodiv").style.transform = "translate(0%)";
      document.querySelector("#left").style.backgroundColor =
        " rgb(255, 151, 72)";
      document.querySelector("#left h5").style.color = "white";
      document.querySelector("#right h5").style.color = "black";
      document.querySelector("#right").style.backgroundColor = "transparent";
    });

    // asnimating signup page

    // close account

    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector("#bigd").style.zIndex = -1;
    });
    document.querySelector("#e2 h4").addEventListener("click", function () {
      document.querySelector("#bigd").style.zIndex = 9999;
    });

    //loader
    function load() {
      var a = 0;
      setInterval(function () {
        a += Math.floor(Math.random() * 15);
        if (a < 100) {
          document.querySelector("#loader h1").innerHTML = a + "%";
        } else {
          a = 100;
          document.querySelector("#loader h1").innerHTML = a + "%";
        }
      }, 100);
    }
    gsap.to("#loader h1", {
      delay: 0.5,
      duration: 2,
      onStart: load(),
    });

    gsap.to("#loader", {
      y: "-100vh",
      delay: 1.7,
      duration: 3,
    });
    //loader
    // page 2 diabetese

    document.querySelector("#rou").addEventListener("click", function () {
      document.querySelector("#dia").style.transform = "translateX(-100%)";
    });
    document.querySelector("#navh i").addEventListener("click", function () {
      document.querySelector("#dia").style.transform = "translateX(100%)";
    });
    document.querySelector("#rou1").addEventListener("click", function () {
      document.querySelector("#dia2").style.transform = "translateX(-100%)";
    });
    document.querySelector("#navh1 i").addEventListener("click", function () {
      document.querySelector("#dia2").style.transform = "translateX(100%)";
    });

    document
      .querySelector("#dia button")
      .addEventListener("mouseenter", function () {
        document.querySelector("#b").style.scale = 5;
        (document.querySelector("#b").style.opacity = 1),
          (document.querySelector("#dia button").color = "white");
      });
    document
      .querySelector("#dia button")
      .addEventListener("mouseleave", function () {
        document.querySelector("#b").style.scale = 1;
        (document.querySelector("#b").style.opacity = 0),
          (document.querySelector("#dia button h5").color = "black");
      });
    document
      .querySelector("#dia2 button")
      .addEventListener("mouseenter", function () {
        document.querySelector("#b").style.scale = 5;
        (document.querySelector("#b").style.opacity = 1),
          (document.querySelector("#dia2 button").color = "white");
      });
    document
      .querySelector("#dia2 button")
      .addEventListener("mouseleave", function () {
        document.querySelector("#b").style.scale = 1;
        (document.querySelector("#b").style.opacity = 0),
          (document.querySelector("#dia2 button h5").color = "black");
      });
  },
  hello() {},
});

ScrollTrigger.matchMedia({
  "(max-width:600px)": function hello() {
    window.addEventListener("resize", function () {
      "use strict";
      window.location.reload();
    });
    function init() {
      gsap.registerPlugin(ScrollTrigger);
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    }
    init();

    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      var data = `0001.png,`+
          `0002.png,`+
          `0003.png,`+
          `0004.png,`+
          `0005.png,`+
          `0006.png,`+
          `0007.png,`+
          `0008.png,`+
          `0009.png,`+
          `0010.png,`+
          `0011.png,`+
          `0012.png,`+
          `0013.png,`+
          `0014.png,`+
          `0015.png,`+
          `0016.png,`+
          `0017.png,`+
          `0018.png,`+
          `0019.png,`+
          `0020.png,`+
          `0021.png,`+
          `0022.png,`+
          `0023.png,`+
          `0024.png,`+
          `0025.png,`+
          `0026.png,`+
          `0027.png,`+
          `0028.png,`+
          `0029.png,`+
          `0030.png,`+
          `0031.png,`+
          `0032.png,`+
          `0033.png,`+
          `0034.png,`+
          `0035.png,`+
          `0036.png,`+
          `0037.png,`+
          `0038.png,`+
          `0039.png,`+
          `0040.png,`+
          `0041.png,`+
          `0042.png,`+
          `0043.png,`+
          `0044.png,`+
          `0045.png,`+
          `0046.png,`+
          `0047.png,`+
          `0048.png,`+
          `0049.png,`+
          `0050.png,`+
          `0051.png,`+
          `0052.png,`+
          `0053.png,`+
          `0054.png,`+
          `0055.png,`+
          `0056.png,`+
          `0057.png,`+
          `0058.png,`+
          `0059.png,`+
          `0060.png,`+
          `0061.png,`+
          `0062.png,`+
          `0063.png,`+
          `0064.png,`+
          `0065.png,`+
          `0066.png,`+
          `0067.png,`+
          `0068.png,`+
          `0069.png,`+
          `0070.png,`+
          `0071.png,`+
          `0072.png,`+
          `0073.png,`+
          `0074.png,`+
          `0075.png,`+
          `0076.png,`+
          `0077.png,`+
          `0078.png,`+
          `0079.png,`+
          `0080.png,`+
          `0081.png,`+
          `0082.png,`+
          `0083.png,`+
          `0084.png,`+
          `0085.png,`+
          `0086.png,`+
          `0087.png,`+
          `0088.png,`+
          `0089.png,`+
          `0090.png,`+
          `0091.png,`+
          `0092.png,`+
          `0093.png,`+
          `0094.png,`+
          `0095.png,`+
          `0096.png,`+
          `0097.png,`+
          `0098.png,`+
          `0099.png,`+
          `0100.png,`+
          `0101.png,`+
          `0102.png,`+
          `0103.png,`+
          `0104.png,`+
          `0105.png,`+
          `0106.png,`+
          `0107.png,`+
          `0108.png,`+
          `0109.png,`+
          `0110.png,`+
          `0111.png,`+
          `0112.png,`+
          `0113.png,`+
          `0114.png,`+
          `0115.png,`+
          `0116.png,`+
          `0117.png,`+
          `0118.png,`+
          `0119.png,`+
          `0120.png,`+
          `0121.png,`+
          `0122.png,`+
          `0123.png,`+
          `0124.png,`+
          `0125.png,`+
          `0126.png,`+
          `0127.png,`+
          `0128.png,`+
          `0129.png,`+
          `0130.png,`+
          `0131.png,`+
          `0132.png,`+
          `0133.png,`+
          `0134.png,`+
          `0135.png,`+
          `0136.png,`+
          `0137.png,`+
          `0138.png,`+
          `0139.png,`+
          `0140.png,`+
          `0141.png,`+
          `0142.png,`+
          `0143.png,`+
          `0144.png,`+
          `0145.png,`+
          `0146.png,`+
          `0147.png,`+
          `0148.png,`+
          `0149.png,`+
          `0150.png,`+
          `0151.png,`+
          `0152.png,`+
          `0153.png,`+
          `0154.png,`+
          `0155.png,`+
          `0156.png,`+
          `0157.png,`+
          `0158.png,`+
          `0159.png,`+
          `0160.png,`+
          `0161.png,`+
          `0162.png,`+
          `0163.png,`+
          `0164.png,`+
          `0165.png,`+
          `0166.png,`+
          `0167.png,`+
          `0168.png,`+
          `0169.png,`+
          `0170.png,`+
          `0171.png,`+
          `0172.png,`+
          `0173.png,`+
          `0174.png,`+
          `0175.png,`+
          `0176.png,`+
          `0177.png,`+
          `0178.png,`+
          `0179.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png,`+
          `0180.png`;
      return `/static/images/${data.split(",")[index]}`;
    }

    const frameCount = 205;

    const images = [];
    const imageSeq = {
      frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: `none`,
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#pages`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.max(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }
    ScrollTrigger.create({
      trigger: "#page1",
      pin: true,
      // markers:true,
      scroller: `#main`,
      //   set start end according to preference
      start: `top top`,
      end: `600% top`,
    });
    //

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#pages",
        scroller: "#main",
        pin: true,
        scrub: true,
        markers: true,
        end: "+=" + window.innerHeight * 4,
      },
    });
    tl.to(
      "#page2",
      {
        y: "-100%",
      },
      "hello"
    );
    tl.fromTo(
      "#page2 #span h1",
      {
        y: "-400%",
      },
      {
        y: 0,
      },
      "hello"
    );

    tl.to(
      "#page3",
      {
        y: "-100%",
      },
      "hello1"
    );
    tl.fromTo(
      "#page3 #span h1",
      {
        y: "-400%",
      },
      {
        y: 0,
      },
      "hello1"
    );

    tl.to(
      "#page4",
      {
        y: "-100%",
      },
      "hello2"
    );
    tl.fromTo(
      "#page4 #span h1",
      {
        y: "-400%",
      },
      {
        y: 0,
      },
      "hello2"
    );
    var cur = document.querySelector("#cursor");
    var mai = document.querySelector("body");

    mai.addEventListener("mousemove", function (dets) {
      gsap.to(cur, {
        left: dets.x + "px",
        top: dets.y + "px",
      });
      // cur.style.left=dets.x+"px";
      // cur.style.top=dets.y+"px";
    });

    var p = document.querySelector("#p");
    document.querySelector(".cir").addEventListener("mouseenter", function () {
      gsap.to(p, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir").addEventListener("click", function () {
      gsap.to("#page1", {
        y: "-100%",
      });
    });
    document.querySelector(".cir1").addEventListener("click", function () {
      gsap.to("#page2", {
        y: "-100%",
      });
    });

    document.querySelector(".cir2").addEventListener("click", function () {
      gsap.to("#page3", {
        y: "-100%",
      });
    });
    document.querySelector(".cir3").addEventListener("click", function () {
      gsap.to("#page4", {
        y: "-100%",
      });
    });
    document.querySelector(".cir").addEventListener("mouseleave", function () {
      gsap.to(p, {
        opacity: 0,
        x: -20,
      });
    });
    var p1 = document.querySelector("#p1");
    document.querySelector(".cir1").addEventListener("mouseenter", function () {
      gsap.to(p1, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir1").addEventListener("mouseleave", function () {
      gsap.to(p1, {
        opacity: 0,
        x: -20,
      });
    });
    var p2 = document.querySelector("#p2");
    document.querySelector(".cir2").addEventListener("mouseenter", function () {
      gsap.to(p2, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir2").addEventListener("mouseleave", function () {
      gsap.to(p2, {
        opacity: 0,
        x: -20,
      });
    });
    var p3 = document.querySelector("#p3");
    document.querySelector(".cir3").addEventListener("mouseenter", function () {
      gsap.to(p3, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir3").addEventListener("mouseleave", function () {
      gsap.to(p3, {
        opacity: 0,
        x: -20,
      });
    });
    var p4 = document.querySelector("#p4");
    document.querySelector(".cir4").addEventListener("mouseenter", function () {
      gsap.to(p4, {
        opacity: 1,
        x: 20,
      });
    });
    document.querySelector(".cir4").addEventListener("mouseleave", function () {
      gsap.to(p4, {
        opacity: 0,
        x: -20,
      });
    });

    //  page h1  font -> span
    var unr = document.querySelector("#page1 h1").textContent;
    var spltext = unr.split("");
    var clutter = "";
    spltext.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    document.querySelector("#page1 h1").innerHTML = clutter;
    gsap.to("#page1 h1 span", {
      WebkitTextStroke: "2px black",
      color: " transparent",
      backgroundImage: "none",
      x: 25,
      delay: 4,

      stagger: 0.3,
      // scrollTrigger:{
      //    trigger:"#page2 h1 span ",
      //    scroller:"body" ,
      //    markers:true
      //    , start:"top -10%"
      //    ,end:"top -20%"
      //    ,scrub:2
      // }
    });
    //  page h1  font -> span

    // asnimating signup page

    document.querySelector("#right h5").addEventListener("click", function () {
      document.querySelector("#duodiv").style.transform = "translate(-50%)";
      document.querySelector("#right").style.backgroundColor =
        " rgb(255, 151, 72)";
      document.querySelector("#right h5").style.color = "white";
      document.querySelector("#left h5").style.color = "black";
      document.querySelector("#left").style.backgroundColor = "transparent";
    });
    document.querySelector("#left h5").addEventListener("click", function () {
      document.querySelector("#duodiv").style.transform = "translate(0%)";
      document.querySelector("#left").style.backgroundColor =
        " rgb(255, 151, 72)";
      document.querySelector("#left h5").style.color = "white";
      document.querySelector("#right h5").style.color = "black";
      document.querySelector("#right").style.backgroundColor = "transparent";
    });

    // asnimating signup page

    // close account

    document.querySelector("#close").addEventListener("click", function () {
      document.querySelector("#bigd").style.zIndex = -1;
    });
    document.querySelector("#e2 h4").addEventListener("click", function () {
      document.querySelector("#bigd").style.zIndex = 9999;
    });

    //loader
    function load() {
      var a = 0;
      setInterval(function () {
        a += Math.floor(Math.random() * 15);
        if (a < 100) {
          document.querySelector("#loader h1").innerHTML = a + "%";
        } else {
          a = 100;
          document.querySelector("#loader h1").innerHTML = a + "%";
        }
      }, 100);
    }
    gsap.to("#loader h1", {
      delay: 0.5,
      duration: 2,
      onStart: load(),
    });

    gsap.to("#loader", {
      y: "-100vh",
      delay: 1.7,
      duration: 3,
    });
    //loader
    // page 2 diabetese

    document.querySelector("#rou").addEventListener("click", function () {
      document.querySelector("#dia").style.transform = "translateX(-100%)";
    });
    document.querySelector("#navh i").addEventListener("click", function () {
      document.querySelector("#dia").style.transform = "translateX(100%)";
    });
    document.querySelector("#rou1").addEventListener("click", function () {
      document.querySelector("#dia2").style.transform = "translateX(-100%)";
    });
    document.querySelector("#navh1 i").addEventListener("click", function () {
      document.querySelector("#dia2").style.transform = "translateX(100%)";
    });

    document
      .querySelector("#dia button")
      .addEventListener("mouseenter", function () {
        document.querySelector("#b").style.scale = 5;
        (document.querySelector("#b").style.opacity = 1),
          (document.querySelector("#dia button").color = "white");
      });
    document
      .querySelector("#dia button")
      .addEventListener("mouseleave", function () {
        document.querySelector("#b").style.scale = 1;
        (document.querySelector("#b").style.opacity = 0),
          (document.querySelector("#dia button h5").color = "black");
      });
    document
      .querySelector("#dia2 button")
      .addEventListener("mouseenter", function () {
        document.querySelector("#b").style.scale = 5;
        (document.querySelector("#b").style.opacity = 1),
          (document.querySelector("#dia2 button").color = "white");
      });
    document
      .querySelector("#dia2 button")
      .addEventListener("mouseleave", function () {
        document.querySelector("#b").style.scale = 1;
        (document.querySelector("#b").style.opacity = 0),
          (document.querySelector("#dia2 button h5").color = "black");
      });
  },
  hello() {},
});
