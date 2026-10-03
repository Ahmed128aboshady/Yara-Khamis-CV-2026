import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { Lighting } from './Lighting.js';
import { AudioEngine } from './AudioEngine.js';
import { FoodBox } from './packages/FoodBox.js';
import { LuxuryRigidBox } from './packages/LuxuryRigidBox.js';
import { HandmadeJournal } from './packages/HandmadeJournal.js';
import { EcoPouch } from './packages/EcoPouch.js';
import { DielineBox } from './packages/DielineBox.js';

export class Studio {
    constructor(canvas) {
        this.canvas = canvas;
        this.autoRotate = true;
        this.wireframe = false;
        this.currentPackageIndex = 0;

        this.init();
        this.setupAudio();
        this.setupPackages();
        this.setupEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('#F7F4EE');

        // Camera
        this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.set(0, 3.8, 6.8);

        // Renderer with High Dynamic Range & Shadows
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.15;

        // OrbitControls
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
        this.controls.minDistance = 3.5;
        this.controls.maxDistance = 12;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.8;

        // Lighting System
        this.lighting = new Lighting(this.scene);
    }

    setupAudio() {
        this.audio = new AudioEngine();
    }

    setupPackages() {
        this.packageContainer = new THREE.Group();
        this.scene.add(this.packageContainer);

        this.packages = [
            new FoodBox(this.audio),
            new LuxuryRigidBox(this.audio),
            new HandmadeJournal(this.audio),
            new EcoPouch(this.audio),
            new DielineBox(this.audio)
        ];

        // Add first package
        this.activePackage = this.packages[0];
        this.packageContainer.add(this.activePackage.group);
    }

    selectPackage(index) {
        if (index === this.currentPackageIndex) return;
        this.currentPackageIndex = index;
        const nextPackage = this.packages[index];

        this.audio.playPaperSlide();

        // Animate current out, next in
        gsap.to(this.activePackage.group.scale, {
            x: 0.001, y: 0.001, z: 0.001,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                this.packageContainer.remove(this.activePackage.group);
                this.activePackage = nextPackage;
                this.activePackage.group.scale.set(0.001, 0.001, 0.001);
                this.packageContainer.add(this.activePackage.group);
                gsap.to(this.activePackage.group.scale, {
                    x: 1, y: 1, z: 1,
                    duration: 0.6,
                    ease: 'back.out(1.6)'
                });
            }
        });
    }

    toggleUnbox() {
        if (this.activePackage) {
            this.activePackage.unbox(!this.activePackage.isUnboxed);
            return this.activePackage.isUnboxed;
        }
        return false;
    }

    toggleAutoRotate() {
        this.autoRotate = !this.autoRotate;
        this.controls.autoRotate = this.autoRotate;
        return this.autoRotate;
    }

    toggleWireframe() {
        this.wireframe = !this.wireframe;
        this.scene.traverse((child) => {
            if (child.isMesh && child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.wireframe = this.wireframe);
                } else {
                    child.material.wireframe = this.wireframe;
                }
            }
        });
        return this.wireframe;
    }

    resetCamera() {
        gsap.to(this.camera.position, {
            x: 0, y: 3.8, z: 6.8,
            duration: 1.0,
            ease: 'power2.inOut',
            onUpdate: () => this.controls.update()
        });
    }

    setLighting(mode) {
        this.lighting.setMode(mode);
    }

    setupEvents() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}