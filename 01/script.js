import * as THREE from "three";

//get the canvas from the dom to render things in it
const canvas = document.querySelector("canvas.webgl");

//init a scene
const scene = new THREE.Scene();

//Create a box geometry
//Object
const geometry = new THREE.CircleGeometry(1, 300);

//Material
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  wireframe: true,
});

//Object + Material
const mesh = new THREE.Mesh(geometry, material);

//add mesh to the scene
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

//camera - for pov
//we'll use perspective camera for now
/*
 ----------
    Field of View
 -----------
*/

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
