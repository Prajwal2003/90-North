window.addEventListener('resize', adjustPageSize);

function adjustPageSize() {
  const width = window.innerWidth;
  let scale = 1;



  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = 'top left';
}

document.getElementById('left-menu').addEventListener('click', function () {
  this.classList.toggle('collapsed');
});
