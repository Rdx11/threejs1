var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,100);
/*
4 parameter:

1.FOV -> field of view yang berarti jarak pandang camera.semakin besar FOV maka semakin jauh jarak pamdang
         kamera dan sebaliknya.
2.Aspect Ratio -> penyesuain terhadap layar yang anda gunakan.
3.near clip -> seberapa dekat yang dapat dilihat oleh camera.
4.far clip -> seberapa jauh yang dapat dilihat oleh kamera.
*/
var renderer = new THREE.WebGLRenderer();

document.body.appendChild(renderer.domElement);
/* menambahkan dom element dari renderer ke index.html */


renderer.setSize( window.innerWidth, window.innerHeight);
/* mengatur size pada layar */
var geometry = new THREE.BoxGeometry(); /* bentuk 3d */
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
