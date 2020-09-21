AFRAME.registerComponent('declare_vars', {
var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}

function run () {
  var sceneEl = document.querySelector('a-scene');
    var el = document.querySelector('#rel');
    setTimeout(() => { el.destroy; }, 4000);
}  

});    
