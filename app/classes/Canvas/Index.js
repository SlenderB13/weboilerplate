import * as THREE from '../../../node_modules/three'

export default class Canvas {
    constructor () {
        this.createScene()        
        this.createCamera()
        this.createMesh()
        this.addEventListeners()

        this.mouse = {
            x: 0,
            y: 0,
            isDown: false,
            drag: {
                start: 0,
                end: 0,
                difference: 0
            }
        }

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

    addEventListeners () {
        window.addEventListener('mousedown', this.onMouseDown.bind(this))
        window.addEventListener('mouseup', this.onMouseUp.bind(this))
    }

    onMouseDown (e) {
        this.mouse.isDown = true

        this.mouse.drag.start = e.clientX

        this.mouse.drag.difference = this.mouse.drag.start - this.mouse.drag.end

    }

    onMouseUp (e) {
        this.mouse.isDown = false

        this.mouse.drag.end = e.clientX

        this.mouse.drag.difference = this.mouse.drag.start - this.mouse.drag.end
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