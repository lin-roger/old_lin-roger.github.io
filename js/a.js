const enter = document.querySelector(".buttom");
const shop = document.querySelector(".filter");
const close = document.querySelector(".close");
const total = document.querySelector(".totall");
const i0p = document.querySelector("#i0 .p");
const i0 = document.querySelector("#i0 p");
const i0d = document.querySelector("#i0 .d");
const i1p = document.querySelector("#i1 .p");
const i1 = document.querySelector("#i1 p");
const i1d = document.querySelector("#i1 .d");
const i2p = document.querySelector("#i2 .p");
const i2 = document.querySelector("#i2 p");
const i2d = document.querySelector("#i2 .d");

let i0num = 0,
  i1num = 0,
  i2num = 0;

q0();

enter.addEventListener("click", src);
close.addEventListener("click", closef);

i0p.addEventListener("click", function () {
  ad(1, 0);
});
i0d.addEventListener("click", function () {
  ad(0, 0);
});
i1p.addEventListener("click", function () {
  ad(1, 1);
});
i1d.addEventListener("click", function () {
  ad(0, 1);
});
i2p.addEventListener("click", function () {
  ad(1, 2);
});
i2d.addEventListener("click", function () {
  ad(0, 2);
});

function src() {
  shop.style.visibility = "visible";
  document.body.style.overflow = "hidden";
}
function closef() {
  shop.style.visibility = "hidden";
  document.body.style.overflow = "scroll";
}
function q0() {
  if (i0num == 0) {
    i0d.disabled = true;
  }
  else{
    i0d.disabled = false;
  }
  if (i1num == 0) {
    i1d.disabled = true;
  }
  else{
    i1d.disabled = false;
  }
  if (i2num == 0) {
    i2d.disabled = true;
  }
  else{
    i2d.disabled = false;
  }
}
function ad(c, d) {
  switch (d) {
    case 0:
      switch (c) {
        case 0:
          i0num--;
          break;

        default:
          i0num++;
          break;
      }
      break;
    case 1:
      switch (c) {
        case 0:
          i1num--;
          break;

        default:
          i1num++;
          break;
      }
      break;
    case 2:
      switch (c) {
        case 0:
          i2num--;
          break;

        default:
          i2num++;
          break;
      }
      break;
  }
  total.innerHTML = `共 ${i0num * 300 + i1num * 200 + i2num * 100} 元`;
  i0.innerHTML = i0num;
  i1.innerHTML = i1num;
  i2.innerHTML = i2num;
  q0();
}
