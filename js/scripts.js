var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

let sw = 0;
let sh = 0;
let mx = 0;
let my = 0;
let ox = 0;
let oy = 0;

var arm = document.querySelector('.arm');
var dist = 0;
const onMouseMove = (ev) => {
  sw = window.innerWidth * 0.5;
  sh = window.innerHeight * 0.5;
  mx = ev.clientX;
  my = ev.clientY;
  ox = ((sw - mx) / -sw).toFixed(2);
  oy = ((sh - my) / -sh).toFixed(2);
  dist = 1 + ((1 - (Math.abs(sw - mx) / sw)) * 1);
  arm.style.transform = `rotate(${ox * 2}deg) translate3d(${ox * 8}px, ${oy * 7}px, ${dist * 30}px)`;
};

/*document.body.addEventListener('mousemove', onMouseMove);

window.addEventListener('deviceorientation', function(event) {
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  sw = window.innerWidth * 0.5;
  sh = window.innerHeight * 0.5;
  mx = Math.max(1, gamma*100); //ev.clientX;
  my = Math.max(1, beta*100); //ev.clientY;
  ox = ((sw - mx) / -sw).toFixed(2);
  oy = ((sh - my) / -sh).toFixed(2);
  dist = 1 + ((1 - (Math.abs(sw - mx) / sw)) * 1);
  arm.style.transform = `rotate(${ox * 2}deg) translate3d(${ox * 8}px, ${oy * 7}px, ${dist * 30}px)`;
});


const onFileReaderLoaded = ev => {
  document.querySelector('.image').style.backgroundImage = `url(${ev.target.result})`
}
const ondragenter = ev => {
  ev.stopPropagation();
  ev.preventDefault();
  document.body.classList.add('active');
}
const ondragleave = ev => {
  ev.stopPropagation();
  ev.preventDefault();
  document.body.classList.remove('active');
}
const ondragover = ev => {
  ev.stopPropagation();
  ev.preventDefault();
  document.body.classList.add('active');
}
const ondrop = ev => {
  ev.stopPropagation();
  ev.preventDefault();
  document.body.classList.remove('active');
  const file = ev.dataTransfer.files[0];
  if (!file || file.type.indexOf('image/') !== 0) {
    console.warn('NOT AN IMAGE');
  } else {
    var reader = new FileReader();
    reader.onload = onFileReaderLoaded;
    reader.readAsDataURL(file);
  }
}
const container = document.querySelector('.container');
container.addEventListener('dragenter', ondragenter)
container.addEventListener('dragleave', ondragleave)
container.addEventListener('dragover', ondragover)
container.addEventListener('drop', ondrop)
