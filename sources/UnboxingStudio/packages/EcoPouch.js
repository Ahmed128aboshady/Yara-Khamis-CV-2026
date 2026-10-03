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
        const kraftTexture = TextureGenerator.createKraftTexture(1024, 1024, '#C29A6B');
        const doypackLabel = TextureGenerator.createDoypackLabel();

        const pouchMat = new THREE.MeshPhysicalMaterial({
            map: kraftTexture,
            roughness: 0.8,
            metalness: 0.05,
            clearcoat: 0.05
        });

        // 1. Stand-Up Pouch Body (Doypack with bottom gusset volume)
        // Cylinder scaled on Z gives natural puffed pouch geometry
        const pouchGeo = new THREE.CylinderGeometry(0.95, 1.25, 3.4, 32, 4);
        pouchGeo.scale(1.2, 1, 0.45);
        this.body = new THREE.Mesh(pouchGeo, pouchMat);
        this.body.position.y = 1.7;
        this.body.castShadow = true;
        this.body.receiveShadow = true;
        this.group.add(this.body);

        // 2. Oval Bottom Base Gusset (allows it to stand upright)
        const gussetMat = new THREE.MeshStandardMaterial({
            color: 0x987248,
            roughness: 0.85
        });
        const gusset = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.08, 32), gussetMat);
        gusset.scale.set(1.2, 1, 0.45);
        gusset.position.y = 0.04;
        this.group.add(gusset);

        // 3. Side Crimp Fin Seals
        const finMat = new THREE.MeshStandardMaterial({ color: 0x9E784F, roughness: 0.8 });
        const leftFin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 3.3, 0.08), finMat);
        leftFin.position.set(-1.46, 1.7, 0);
        this.group.add(leftFin);

        const rightFin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 3.3, 0.08), finMat);
        rightFin.position.set(1.46, 1.7, 0);
        this.group.add(rightFin);

        // 4. Heat-Seal Top Fin Bar with Knurled Texture
        this.sealPivot = new THREE.Group();
        this.sealPivot.position.set(0, 3.35, 0);

        const sealMat = new THREE.MeshStandardMaterial({
            color: 0x8C663E,
            roughness: 0.75,
            metalness: 0.15
        });
        this.seal = new THREE.Mesh(new THREE.BoxGeometry(2.96, 0.42, 0.08), sealMat);
        this.seal.position.y = 0.21;
        this.seal.castShadow = true;
        this.sealPivot.add(this.seal);

        // Tear Notches on left & right of seal
        const notchGeo = new THREE.ConeGeometry(0.07, 0.14, 16);
        const notchMat = new THREE.MeshBasicMaterial({ color: 0x332215 });

        const leftNotch = new THREE.Mesh(notchGeo, notchMat);
        leftNotch.rotation.z = Math.PI / 2;
        leftNotch.position.set(-1.48, 0.18, 0);
        this.sealPivot.add(leftNotch);

        const rightNotch = new THREE.Mesh(notchGeo, notchMat);
        rightNotch.rotation.z = -Math.PI / 2;
        rightNotch.position.set(1.48, 0.18, 0);
        this.sealPivot.add(rightNotch);

        this.group.add(this.sealPivot);

        // 5. Printed Botanical Artisan Label Badge on front
        const labelMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1.6, 2.0),
            new THREE.MeshStandardMaterial({
                map: doypackLabel,
                roughness: 0.55
            })
        );
        labelMesh.position.set(0, 1.75, 0.53);
        this.group.add(labelMesh);

        // 6. Floating Chamomile / Tea Botanicals Inside
        this.contents = new THREE.Group();
        const petalMat = new THREE.MeshStandardMaterial({ color: 0xF7D86D, roughness: 0.4 });
        const leafMat = new THREE.MeshStandardMaterial({ color: 0x556E4E, roughness: 0.6 });

        for (let i = 0; i < 12; i++) {
            const isLeaf = i % 3 === 0;
            const item = new THREE.Mesh(
                isLeaf ? new THREE.ConeGeometry(0.12, 0.35, 6) : new THREE.SphereGeometry(0.12, 12, 12),
                isLeaf ? leafMat : petalMat
            );
            item.position.set(
                (Math.random() - 0.5) * 1.0,
                (Math.random() - 0.5) * 0.8,
                (Math.random() - 0.5) * 0.4
            );
            item.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
            this.contents.add(item);
        }
        this.contents.position.y = 2.8;
        this.contents.scale.set(0.001, 0.001, 0.001);
        this.group.add(this.contents);

        this.group.position.y = -1.5;
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;

        if (shouldOpen) {
            this.audio.playClick();
            this.audio.playPaperSlide();

            // Seal lifts and slides up
            gsap.to(this.sealPivot.position, {
                y: 4.1,
                duration: 0.8,
                ease: 'power2.out'
            });

            // Botanicals pop out and hover in air
            gsap.to(this.contents.scale, {
                x: 1, y: 1, z: 1,
                duration: 1.0,
                delay: 0.25,
                ease: 'back.out(2)'
            });
            gsap.to(this.contents.position, {
                y: 3.8,
                duration: 1.3,
                ease: 'power2.out'
            });

            // Subtle pouch breathing
            gsap.to(this.body.scale, {
                x: 1.05, z: 1.15,
                duration: 0.8,
                ease: 'power1.out'
            });

        } else {
            this.audio.playPaperSlide();

            // Botanicals return inside
            gsap.to(this.contents.position, {
                y: 2.8,
                duration: 0.7,
                ease: 'power2.in'
            });
            gsap.to(this.contents.scale, {
                x: 0.001, y: 0.001, z: 0.001,
                duration: 0.5,
                ease: 'power2.in'
            });

            // Seal closes down
            gsap.to(this.sealPivot.position, {
                y: 3.35,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });

            gsap.to(this.body.scale, {
                x: 1, z: 1,
                duration: 0.7,
                ease: 'power1.inOut'
            });
        }
    }
}