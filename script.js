let prevScrollpos = window.pageYOffset;
let navLinks = document.querySelector(".nav-links");
let encabezado = document.querySelector("#encabezado");
let hamburguer = document.querySelector("#nav-check");
let hazPedido = document.querySelector("#haz_tu_pedido");
let loMasPedido = document.querySelector("#lo_mas_pedido");
let inicioLink = document.querySelector(".inicio_link");
let hazPedidoLink = document.querySelector(".haz_tu_pedido_link");
let loMasPedidoLink = document.querySelector(".lo_mas_pedido_link");
let ubicacionLInk = document.querySelector(".ubicacion");

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
    navLinks.style.height = "calc(0vh - 40px)";
  } else {
    document.querySelector(".nav").style.top = "-50px";
    navLinks.style.height = "calc(0vh - 40px)";
  }
  prevScrollpos = currentScrollPos;
};

// para que suba la lista de links de la barra de navegacion cuando le clickeas al fondo

encabezado.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});
hazPedido.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});

loMasPedido.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});

inicioLink.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});
hazPedidoLink.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});

loMasPedidoLink.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});
ubicacionLInk.addEventListener("click", function () {
  navLinks.style.height = "calc(0vh - 40px)";
});

hamburguer.addEventListener("click", function () {
  if (navLinks.style.height === "calc(35vh - 40px)") {
    navLinks.style.height = "calc(0vh - 40px)";
  } else {
    navLinks.style.height = "calc(35vh - 40px)";
  }
});
