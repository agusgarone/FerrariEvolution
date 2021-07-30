
var $btnStart = $("#btnStart");
var $sections = $("a");
var $linkActivo;
var $info = $(".info");
var waypoint = new Waypoint({
	element: document.getElementById('sec1'),
	handler: function(direction) {
		var activo = $(this);
		var activoId = activo[0].element.id;
		$linkActivo = $('a[href="#'+activoId+'"] ');
		$sections.removeClass('screenTrue');
		$linkActivo.addClass('screenTrue');	
		
	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec2'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');
	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec3'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');
	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec4'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec5'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec6'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec7'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec8'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec9'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec10'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});
  var waypoint = new Waypoint({
	element: document.getElementById('sec11'),
	handler: function(direction) {
	  var activo = $(this);
	  var activoId = activo[0].element.id;
	  $linkActivo = $('a[href="#'+activoId+'"] ')
	  $sections.removeClass('screenTrue');
	  $linkActivo.addClass('screenTrue');

	}
  },{offset: 0});

  $("#section a").on("click", function (e) {
	e.preventDefault();
	const href = $(this).attr("href");
	$("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });

  btnStart.addEventListener('click', ()=>{
	$('#body').addClass("show");
	$(".waypoint").addClass("show");
	play();
	$btnStart.addClass("hide");
	animation();
  });
  function play() {
	var audio = new Audio('ferrari-488-pista-spider-start-up-hard-revs-exhaust-sound (mp3cut.net).mp3');
	audio.play();
  }
  function animation(){
	gsap.fromTo(".contenido", {opacity: 0, y:-100}, {opacity: 1, y:0, duration: 2});
}
  

  //let tween = gsap.fromTo(".info", 2,{y:"100", opacity: 0}, {y:"0", opacity: 1});
 