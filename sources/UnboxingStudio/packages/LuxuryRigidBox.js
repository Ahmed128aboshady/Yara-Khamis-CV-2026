import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from '../TextureGenerator.js';

export class LuxuryRigidBox {
    constructor(audio) {
        this.audio = audio;
        this.group = new THREE.Group();
        this.isUnboxed = false;
        this.build();
    }

    build() {
        const foilTexture = TextureGenerator.createGoldFoilBranding();

        // 1. Box Bottom Base
        const baseMat = new THREE.MeshPhysicalMaterial({
            color: 0x1A1918,
            roughness: 0.7,
            metalness: 0.15,
            clearcoat: 0.1
        });
        const baseGeo = new THREE.BoxGeometry(2.6, 1.1, 2.6);
        this.base = new THREE.Mesh(baseGeo, baseMat);
        this.base.castShadow = true;
        this.base.receiveShadow = true;
        this.group.add(this.base);

        // Velvet Interior Insert
        const velvetMat = new THREE.MeshStandardMaterial({
            color: 0x2A1B16,
            roughness: 0.95
        });
        const velvet = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.4, 2.4), velvetMat);
        velvet.position.y = 0.4;
        this.base.add(velvet);

        // Luxury Glass Cosmetic Bottle
        this.bottle = new THREE.Group();
        const glassMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transmission: 0.88,
            opacity: 1,
            transparent: true,
            roughness: 0.08,
            ior: 1.52,
            thickness: 0.8
        });
        const bottleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.45, 1.2, 32), glassMat);
        bottleBody.castShadow = true;
        this.bottle.add(bottleBody);

        const goldMat = new THREE.MeshStandardMaterial({
            color: 0xE8C88B,
            metalness: 0.92,
            roughness: 0.18
        });
        const bottleCap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.4, 32), goldMat);
        bottleCap.position.y = 0.75;
        bottleCap.castShadow = true;
        this.bottle.add(bottleCap);

        this.bottle.position.set(0, 0.8, 0);
        this.group.add(this.bottle);

        // 2. Hinged Lid with Gold Foil Stamped Texture
        const lidMat = [
            baseMat, baseMat,
            new THREE.MeshPhysicalMaterial({
                map: foilTexture,
                roughness: 0.4,
                metalness: 0.35,
                clearcoat: 0.3
            }), // Top face
            baseMat, baseMat, baseMat
        ];
        const lidGeo = new THREE.BoxGeometry(2.66, 0.4, 2.66);
        this.lid = new THREE.Mesh(lidGeo, lidMat);
        this.lid.castShadow = true;

        // Create pivot point at the back edge of the box
        this.lidPivot = new THREE.Group();
        this.lidPivot.position.set(0, 0.55, -1.33);
        this.lid.position.set(0, 0.2, 1.33);
        this.lidPivot.add(this.lid);
        this.group.add(this.lidPivot);
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;
        if (shouldOpen) {
            this.audio.playPaperSlide();
            gsap.to(this.lidPivot.rotation, {
                x: -Math.PI * 0.65,
                duration: 1.4,
                ease: 'power3.out',
                onComplete: () => this.audio.playCardboardThud()
            });
            gsap.to(this.bottle.position, {
                y: 1.5,
                duration: 1.1,
                delay: 0.4,
                ease: 'power2.out'
            });
            gsap.to(this.bottle.rotation, {
                y: Math.PI * 0.4,
                duration: 1.5,
                ease: 'power1.out'
            });
        } else {
            this.audio.playPaperSlide();
            gsap.to(this.bottle.position, {
                y: 0.8,
                duration: 0.8,
                ease: 'power2.in'
            });
            gsap.to(this.bottle.rotation, {
                y: 0,
                duration: 0.8
            });
            gsap.to(this.lidPivot.rotation, {
                x: 0,
                duration: 1.0,
                delay: 0.3,
                ease: 'power3.inOut',
                onComplete: () => this.audio.playClick()
            });
        }
    }
}