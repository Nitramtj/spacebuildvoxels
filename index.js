var THREE = require('three');
require('./index.css');

var scene, camera, renderer;
scene = new THREE.Scene();

var cubes = [];

for (var x = 0; x < 5; x++) {
  for (var y = 0; y < 5; y++) {
    var geometry = new THREE.BoxGeometry( x, y, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var cube = new THREE.Mesh( geometry, material );
    cubes.push(cube);
  }
}

scene.add(cube);

var width = window.innerWidth;
var height = window.innerHeight;

renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
camera.position.z = 50;
scene.add(camera);

renderer.setClearColor(0x333F47, 1);
// Create a light, set its position, and add it to the scene.
var light = new THREE.PointLight(0xffffff);
light.position.set(-100,200,100);
scene.add(light);

var animate = function() {
  requestAnimationFrame(animate);
  for (var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
};

animate();
