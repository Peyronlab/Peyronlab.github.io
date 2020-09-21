AFRAME.registerComponent('tokill', {
init: function () {
    var scene = this.el;
  }

if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function run () {
    var el = scene.querySelector('#rel');
    setTimeout(() => { el.destroy(); }, 4000);
}  

});    
