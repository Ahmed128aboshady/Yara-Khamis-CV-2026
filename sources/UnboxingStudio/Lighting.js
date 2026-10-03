import * as THREE from 'three';

export class Lighting {
    constructor(scene) {
        this.scene = scene;
        this.lights = {};
        this.init();
    }

    init() {
        // Soft Ambient Light
        this.lights.ambient = new THREE.AmbientLight(0xfff6ec, 1.2);
        this.scene.add(this.lights.ambient);

        // Studio Key Light (Warm Spotlight with shadows)
        this.lights.key = new THREE.DirectionalLight(0xfff3e0, 2.5);
        this.lights.key.position.set(6, 9, 7);
        this.lights.key.castShadow = true;
        this.lights.key.shadow.mapSize.width = 2048;
        this.lights.key.shadow.mapSize.height = 2048;
        this.lights.key.shadow.camera.near = 0.5;
        this.lights.key.shadow.camera.far = 25;
        this.lights.key.shadow.camera.left = -5;
        this.lights.key.shadow.camera.right = 5;
        this.lights.key.shadow.camera.top = 5;
        this.lights.key.shadow.camera.bottom = -5;
        this.lights.key.shadow.bias = -0.0005;
        this.lights.key.shadow.radius = 3;
        this.scene.add(this.lights.key);

        // Fill Light (Soft cool lavender for realistic contrast)
        this.lights.fill = new THREE.DirectionalLight(0xdbe7ff, 1.0);
        this.lights.fill.position.set(-6, 5, -5);
        this.scene.add(this.lights.fill);

        // Rim Light (Accentuates package edges)
        this.lights.rim = new THREE.DirectionalLight(0xffe8d6, 1.4);
        this.lights.rim.position.set(0, 8, -8);
        this.scene.add(this.lights.rim);

        // Floor Shadow Receiver
        const shadowPlaneGeo = new THREE.PlaneGeometry(30, 30);
        const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.16 });
        const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = -1.5;
        shadowPlane.receiveShadow = true;
        this.scene.add(shadowPlane);
    }

    setMode(mode) {
        if (mode === 'warm') {
            this.lights.ambient.color.setHex(0xfff3e6);
            this.lights.key.color.setHex(0xffdfba);
            this.lights.key.intensity = 2.8;
        } else if (mode === 'daylight') {
            this.lights.ambient.color.setHex(0xf4f7fb);
            this.lights.key.color.setHex(0xffffff);
            this.lights.key.intensity = 2.4;
        } else if (mode === 'golden') {
            this.lights.ambient.color.setHex(0xffecc7);
            this.lights.key.color.setHex(0xffa952);
            this.lights.key.intensity = 3.2;
        }
    }
}