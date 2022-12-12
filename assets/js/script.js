// var i = 0;
// var j = 0;
// var text1 = "SOE AUNG";
// var text2 = "Frontend Developer";
// var speed = 180;

// setTimeout(typeWriter, 1000);
// function typeWriter() {
//   if (i < text1.length) {
//     document.getElementById("typeout1").innerHTML += text1.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// setTimeout(typeWriter2, 2500);
// function typeWriter2() {
//   if (j < text2.length) {
//     document.getElementById("typeout2").innerHTML += text2.charAt(j);
//     j++;
//     setTimeout(typeWriter2, speed);
//   }
// }

// setTimeout(addclass, 4000);
// function addclass() {
//   document.getElementById("iconleft").classList.add("fromleft");
//   document.getElementById("iconright").classList.add("fromright");
//   console.log("sadf");
// }

// ----------------------------------random balls------------------------------------------
//prettier-ignore
const colors = [
  "#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300",
  "#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC",
  "#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999",
  "#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC",
  "#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF",
];

const numBalls = 150;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ballcss");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.getElementById("floatingballs").append(ball);
  // console.log("testing");
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -7 : 9),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});

//https://threejs.org/manual/#en/primitives

var path1 = document.querySelector(".path");
var length = path.getTotalLength();
console.log(length);
