import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from '../TextureGenerator.js';

export class DielineBox {
    constructor(audio) {
        this.audio = audio;
        this.group = new THREE.Group();
        this.isUnboxed = false;
        this.build();
    }

    build() {
        const dielineTex = TextureGenerator.createDielineTexture();
        const mat = new THREE.MeshStandardMaterial({
            map: dielineTex,
            roughness: 0.85,
            metalness: 0.05,
            side: THREE.DoubleSide
        });

        // 1. Central Base Floor
        this.centerBase = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.0), mat);
        this.centerBase.rotation.x = -Math.PI / 2;
        this.centerBase.receiveShadow = true;
        this.group.add(this.centerBase);

        // 2. Left Flap
        this.leftPivot = new THREE.Group();
        this.leftPivot.position.set(-1.0, 0, 0);
        const leftFlap = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.0), mat);
        leftFlap.rotation.x = -Math.PI / 2;
        leftFlap.position.set(-0.6, 0, 0);
        this.leftPivot.add(leftFlap);
        this.group.add(this.leftPivot);

        // 3. Right Flap
        this.rightPivot = new THREE.Group();
        this.rightPivot.position.set(1.0, 0, 0);
        const rightFlap = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.0), mat);
        rightFlap.rotation.x = -Math.PI / 2;
        rightFlap.position.set(0.6, 0, 0);
        this.rightPivot.add(rightFlap);
        this.group.add(this.rightPivot);

        // 4. Front Flap
        this.frontPivot = new THREE.Group();
        this.frontPivot.position.set(0, 0, 1.0);
        const frontFlap = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.2), mat);
        frontFlap.rotation.x = -Math.PI / 2;
        frontFlap.position.set(0, 0, 0.6);
        this.frontPivot.add(frontFlap);
        this.group.add(this.frontPivot);

        // 5. Back Flap & Lid
        this.backPivot = new THREE.Group();
        this.backPivot.position.set(0, 0, -1.0);
        const backFlap = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.2), mat);
        backFlap.rotation.x = -Math.PI / 2;
        backFlap.position.set(0, 0, -0.6);
        this.backPivot.add(backFlap);

        // Top Lid attached to Back Flap
        this.topLidPivot = new THREE.Group();
        this.topLidPivot.position.set(0, 0, -1.2);
        const topLid = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 2.0), mat);
        topLid.rotation.x = -Math.PI / 2;
        topLid.position.set(0, 0, -1.0);
        this.topLidPivot.add(topLid);
        backFlap.add(this.topLidPivot);

        this.group.add(this.backPivot);
    }

    unbox(shouldFoldTo3D = true) {
        this.isUnboxed = shouldFoldTo3D;
        if (shouldFoldTo3D) {
            this.audio.playPaperSlide();
            // Fold flaps up 90 degrees to form a 3D box
            gsap.to(this.leftPivot.rotation, { z: -Math.PI / 2, duration: 1.0, ease: 'power2.inOut' });
            gsap.to(this.rightPivot.rotation, { z: Math.PI / 2, duration: 1.0, ease: 'power2.inOut' });
            gsap.to(this.frontPivot.rotation, { x: -Math.PI / 2, duration: 1.0, ease: 'power2.inOut' });
            gsap.to(this.backPivot.rotation, {
                x: Math.PI / 2,
                duration: 1.0,
                ease: 'power2.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });
            gsap.to(this.topLidPivot.rotation, {
                x: -Math.PI / 2,
                duration: 1.0,
                delay: 0.6,
                ease: 'power3.out'
            });
        } else {
            this.audio.playPaperSlide();
            // Unfold back to flat 2D Dieline
            gsap.to(this.topLidPivot.rotation, { x: 0, duration: 0.8, ease: 'power2.in' });
            gsap.to(this.backPivot.rotation, { x: 0, duration: 1.0, delay: 0.3, ease: 'power2.inOut' });
            gsap.to(this.frontPivot.rotation, { x: 0, duration: 1.0, delay: 0.3, ease: 'power2.inOut' });
            gsap.to(this.leftPivot.rotation, { z: 0, duration: 1.0, delay: 0.3, ease: 'power2.inOut' });
            gsap.to(this.rightPivot.rotation, {
                z: 0,
                duration: 1.0,
                delay: 0.3,
                ease: 'power2.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });
        }
    }
}