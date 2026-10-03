import * as THREE from 'three';

export class Lighting {
    constructor(scene) {
        this.scene = scene;
        this.lights = {};
        this.init();
    }

    init() {
        // Soft Studio Ambient Light
        this.lights.ambient = new THREE.AmbientLight(0xfff7ef, 1.3);
        this.scene.add(this.lights.ambient);

        // Key Light (Warm soft studio softbox with smooth shadows)
        this.lights.key = new THREE.DirectionalLight(0xfff4e4, 2.6);
        this.lights.key.position.set(5.5, 8.5, 6.5);
        this.lights.key.castShadow = true;
        this.lights.key.shadow.mapSize.width = 2048;
        this.lights.key.shadow.mapSize.height = 2048;
        this.lights.key.shadow.camera.near = 0.5;
        this.lights.key.shadow.camera.far = 25;
        this.lights.key.shadow.camera.left = -5;
        this.lights.key.shadow.camera.right = 5;
        this.lights.key.shadow.camera.top = 5;
        this.lights.key.shadow.camera.bottom = -5;
        this.lights.key.shadow.bias = -0.0003;
        this.lights.key.shadow.radius = 2.5;
        this.scene.add(this.lights.key);

        // Fill Light (Subtle cool sky blue fill for natural shadows)
        this.lights.fill = new THREE.DirectionalLight(0xdce7f5, 1.1);
        this.lights.fill.position.set(-6, 4.5, -4);
        this.scene.add(this.lights.fill);

        // Rim Light (Edge highlights)
        this.lights.rim = new THREE.DirectionalLight(0xffedd8, 1.5);
        this.lights.rim.position.set(0, 7.5, -7);
        this.scene.add(this.lights.rim);

        // Overhead Soft Spotlight for specular highlights
        this.lights.top = new THREE.SpotLight(0xffffff, 1.2, 15, Math.PI / 4, 0.4);
        this.lights.top.position.set(0, 8, 0);
        this.scene.add(this.lights.top);

        // Contact Shadow Radial Gradient Plane (Soft grounded halo directly under packaging)
        const shadowCanvas = document.createElement('canvas');
        shadowCanvas.width = 512;
        shadowCanvas.height = 512;
        const ctx = shadowCanvas.getContext('2d');
        const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 240);
        grad.addColorStop(0, 'rgba(40, 30, 20, 0.38)');
        grad.addColorStop(0.35, 'rgba(40, 30, 20, 0.22)');
        grad.addColorStop(0.7, 'rgba(40, 30, 20, 0.08)');
        grad.addColorStop(1, 'rgba(40, 30, 20, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 512);

        const contactShadowTex = new THREE.CanvasTexture(shadowCanvas);
        const contactShadowMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(6.2, 6.2),
            new THREE.MeshBasicMaterial({
                map: contactShadowTex,
                transparent: true,
                opacity: 0.85,
                depthWrite: false
            })
        );
        contactShadowMesh.rotation.x = -Math.PI / 2;
        contactShadowMesh.position.y = -0.502;
        this.scene.add(contactShadowMesh);

        // Dynamic Floor Shadow Receiver
        const shadowPlaneGeo = new THREE.PlaneGeometry(35, 35);
        const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.18 });
        const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
        shadowPlane.rotation.x = -Math.PI / 2;
        shadowPlane.position.y = -0.505;
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