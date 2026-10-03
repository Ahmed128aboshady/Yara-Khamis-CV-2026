import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from '../TextureGenerator.js';

export class EcoPouch {
    constructor(audio) {
        this.audio = audio;
        this.group = new THREE.Group();
        this.isUnboxed = false;
        this.build();
    }

    build() {
        const kraftTexture = TextureGenerator.createKraftTexture(1024, 1024, '#C8A279');
        const pouchMat = new THREE.MeshPhysicalMaterial({
            map: kraftTexture,
            roughness: 0.75,
            metalness: 0.08,
            clearcoat: 0.05
        });

        // Main Curved Pouch Body
        const pouchGeo = new THREE.CylinderGeometry(1.0, 1.2, 3.2, 32, 1, false, 0, Math.PI * 2);
        pouchGeo.scale(1.2, 1, 0.45);
        this.body = new THREE.Mesh(pouchGeo, pouchMat);
        this.body.castShadow = true;
        this.body.receiveShadow = true;
        this.group.add(this.body);

        // Heat Seal Top Fin
        const sealMat = new THREE.MeshStandardMaterial({
            color: 0x967452,
            roughness: 0.85
        });
        this.seal = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.35, 0.08), sealMat);
        this.seal.position.y = 1.7;
        this.seal.castShadow = true;
        this.group.add(this.seal);

        // Tear Notch
        const notchGeo = new THREE.ConeGeometry(0.06, 0.12, 16);
        const notchMat = new THREE.MeshBasicMaterial({ color: 0x4A3728 });
        const notch = new THREE.Mesh(notchGeo, notchMat);
        notch.rotation.z = Math.PI / 2;
        notch.position.set(-1.18, 1.65, 0);
        this.group.add(notch);

        // Artisan Label Badge
        const labelMat = new THREE.MeshStandardMaterial({
            color: 0xFAF6EF,
            roughness: 0.6
        });
        const label = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.8, 0.04), labelMat);
        label.position.set(0, 0.1, 0.48);
        this.group.add(label);

        // Tea / Botanical leaves floating reveal inside
        this.contents = new THREE.Group();
        for (let i = 0; i < 8; i++) {
            const leafMat = new THREE.MeshStandardMaterial({ color: 0x4D6646, roughness: 0.6 });
            const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.35, 8), leafMat);
            leaf.position.set((Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.3);
            this.contents.add(leaf);
        }
        this.contents.position.y = 1.2;
        this.contents.scale.set(0.001, 0.001, 0.001);
        this.group.add(this.contents);
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;
        if (shouldOpen) {
            this.audio.playClick();
            this.audio.playPaperSlide();
            gsap.to(this.seal.position, {
                y: 2.2,
                duration: 0.8,
                ease: 'power2.out'
            });
            gsap.to(this.contents.scale, {
                x: 1, y: 1, z: 1,
                duration: 1.0,
                delay: 0.3,
                ease: 'back.out(2)'
            });
            gsap.to(this.contents.position, {
                y: 2.4,
                duration: 1.2,
                ease: 'power2.out'
            });
        } else {
            this.audio.playPaperSlide();
            gsap.to(this.contents.position, {
                y: 1.2,
                duration: 0.7,
                ease: 'power2.in'
            });
            gsap.to(this.contents.scale, {
                x: 0.001, y: 0.001, z: 0.001,
                duration: 0.5,
                ease: 'power2.in'
            });
            gsap.to(this.seal.position, {
                y: 1.7,
                duration: 0.8,
                delay: 0.3,
                ease: 'power2.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });
        }
    }
}