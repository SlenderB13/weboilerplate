import * as THREE from '../../../node_modules/three'

export default class Canvas {
    constructor () {
        this.createScene()        
        this.createCamera()
        this.createMesh()
        this.update()
    }

    createScene () {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        document.body.appendChild( this.renderer.domElement );
    }

    createCamera () {
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.camera.position.z = 5;
    }

    createMesh () {
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.cube );
    }

    update () {
        window.requestAnimationFrame(this.update.bind(this))
        this.renderer.render(this.scene, this.camera)
    }

    resize (width, height) {
        this.renderer.setSize( width, height );
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
    }
}