import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from '../TextureGenerator.js';

export class FoodBox {
    constructor(audio) {
        this.audio = audio;
        this.group = new THREE.Group();
        this.isUnboxed = false;
        this.build();
    }

    build() {
        const kraftTexture = TextureGenerator.createKraftTexture();
        const labelTexture = TextureGenerator.createFoodLabel();

        // 1. Inner Drawer Tray
        const trayMat = new THREE.MeshPhysicalMaterial({
            map: kraftTexture,
            roughness: 0.85,
            metalness: 0.05,
            clearcoat: 0.05
        });
        const trayGeo = new THREE.BoxGeometry(2.4, 0.9, 3.4);
        this.tray = new THREE.Mesh(trayGeo, trayMat);
        this.tray.castShadow = true;
        this.tray.receiveShadow = true;
        this.group.add(this.tray);

        // 2. Branded Food Contents Inside Tray (Tins / Tea Bars)
        this.contents = new THREE.Group();
        for (let i = 0; i < 3; i++) {
            const tinMat = new THREE.MeshStandardMaterial({
                color: i === 0 ? 0xE08B73 : (i === 1 ? 0x637A5D : 0xD4B28C),
                roughness: 0.35,
                metalness: 0.6
            });
            const tin = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.75, 32), tinMat);
            tin.position.set(-0.65 + i * 0.65, 0.1, 0);
            tin.castShadow = true;
            this.contents.add(tin);
        }
        this.tray.add(this.contents);

        // 3. Outer Sleeve with Branded Label
        const sleeveMat = new THREE.MeshPhysicalMaterial({
            map: labelTexture,
            roughness: 0.5,
            metalness: 0.1,
            clearcoat: 0.2
        });
        const sleeveGeo = new THREE.BoxGeometry(2.46, 0.96, 3.46);
        this.sleeve = new THREE.Mesh(sleeveGeo, sleeveMat);
        this.sleeve.castShadow = true;
        this.sleeve.receiveShadow = true;
        this.group.add(this.sleeve);
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;
        if (shouldOpen) {
            this.audio.playPaperSlide();
            gsap.to(this.sleeve.position, {
                x: -3.2,
                duration: 1.2,
                ease: 'power3.out'
            });
            gsap.to(this.tray.position, {
                z: 1.8,
                duration: 1.2,
                ease: 'power3.out',
                onComplete: () => this.audio.playCardboardThud()
            });
            gsap.to(this.contents.position, {
                y: 0.4,
                duration: 0.8,
                delay: 0.4,
                ease: 'back.out(1.8)'
            });
        } else {
            this.audio.playPaperSlide();
            gsap.to(this.contents.position, {
                y: 0,
                duration: 0.6,
                ease: 'power2.in'
            });
            gsap.to(this.sleeve.position, {
                x: 0,
                duration: 1.0,
                ease: 'power3.inOut'
            });
            gsap.to(this.tray.position, {
                z: 0,
                duration: 1.0,
                ease: 'power3.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });
        }
    }
}