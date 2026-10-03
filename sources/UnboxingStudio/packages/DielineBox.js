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
        // Dimensions of the carton box
        const W = 2.4;         // Width (X)
        const D = 1.6;         // Depth (Z)
        const H = 1.4;         // Height (Y when folded)
        const THICK = 0.025;   // Real paperboard thickness
        const TUCK_H = 0.45;   // Tuck-in flap height
        const DUST_W = 0.55;   // Dust flap width

        this.W = W;
        this.D = D;
        this.H = H;

        // Materials
        const dielineTex = TextureGenerator.createDielineTexture();
        const kraftTex = TextureGenerator.createKraftTexture(512, 512, '#D7B48C');

        // Cardboard materials:
        // Top face: Printed Dieline technical artwork
        // Bottom face: Natural Kraft paperboard interior
        // Edge faces: Cardboard core edge
        const edgeMat = new THREE.MeshStandardMaterial({ color: 0xBA9875, roughness: 0.9 });
        const dielineMat = new THREE.MeshStandardMaterial({
            map: dielineTex,
            roughness: 0.65,
            metalness: 0.05
        });
        const innerMat = new THREE.MeshStandardMaterial({
            map: kraftTex,
            roughness: 0.85,
            metalness: 0.02
        });

        // Box panel material array [ +X, -X, +Y (print), -Y (inside), +Z, -Z ]
        const panelMats = [edgeMat, edgeMat, dielineMat, innerMat, edgeMat, edgeMat];

        // 1. Cutting Mat (Studio drafting base)
        const cuttingMatTex = TextureGenerator.createCuttingMatTexture();
        const matMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(6.4, 5.0),
            new THREE.MeshStandardMaterial({
                map: cuttingMatTex,
                roughness: 0.7,
                metalness: 0.1
            })
        );
        matMesh.rotation.x = -Math.PI / 2;
        matMesh.position.y = -0.01;
        matMesh.receiveShadow = true;
        this.group.add(matMesh);
        this.cuttingMat = matMesh;

        // 2. Center Base Panel (Lies at y = THICK / 2)
        this.centerBase = new THREE.Mesh(new THREE.BoxGeometry(W, THICK, D), panelMats);
        this.centerBase.position.set(0, THICK / 2, 0);
        this.centerBase.receiveShadow = true;
        this.group.add(this.centerBase);

        // 3. Left Wall Pivot (at -W/2, THICK, 0)
        this.leftPivot = new THREE.Group();
        this.leftPivot.position.set(-W / 2, THICK, 0);
        const leftMesh = new THREE.Mesh(new THREE.BoxGeometry(H, THICK, D), panelMats);
        leftMesh.position.set(-H / 2, 0, 0);
        leftMesh.castShadow = true;
        this.leftPivot.add(leftMesh);

        // Left Dust Flap (attached to top edge of Left Wall: at -H, 0, 0 in leftPivot)
        this.leftDustPivot = new THREE.Group();
        this.leftDustPivot.position.set(-H, 0, 0);
        const leftDustMesh = new THREE.Mesh(new THREE.BoxGeometry(DUST_W, THICK, D * 0.85), panelMats);
        leftDustMesh.position.set(-DUST_W / 2, 0, 0);
        this.leftDustPivot.add(leftDustMesh);
        this.leftPivot.add(this.leftDustPivot);

        this.group.add(this.leftPivot);

        // 4. Right Wall Pivot (at +W/2, THICK, 0)
        this.rightPivot = new THREE.Group();
        this.rightPivot.position.set(W / 2, THICK, 0);
        const rightMesh = new THREE.Mesh(new THREE.BoxGeometry(H, THICK, D), panelMats);
        rightMesh.position.set(H / 2, 0, 0);
        rightMesh.castShadow = true;
        this.rightPivot.add(rightMesh);

        // Right Dust Flap (attached to top edge of Right Wall: at +H, 0, 0 in rightPivot)
        this.rightDustPivot = new THREE.Group();
        this.rightDustPivot.position.set(H, 0, 0);
        const rightDustMesh = new THREE.Mesh(new THREE.BoxGeometry(DUST_W, THICK, D * 0.85), panelMats);
        rightDustMesh.position.set(DUST_W / 2, 0, 0);
        this.rightDustPivot.add(rightDustMesh);
        this.rightPivot.add(this.rightDustPivot);

        this.group.add(this.rightPivot);

        // 5. Front Wall Pivot (at 0, THICK, +D/2)
        this.frontPivot = new THREE.Group();
        this.frontPivot.position.set(0, THICK, D / 2);
        const frontMesh = new THREE.Mesh(new THREE.BoxGeometry(W, THICK, H), panelMats);
        frontMesh.position.set(0, 0, H / 2);
        frontMesh.castShadow = true;
        this.frontPivot.add(frontMesh);
        this.group.add(this.frontPivot);

        // 6. Back Wall Pivot (at 0, THICK, -D/2)
        this.backPivot = new THREE.Group();
        this.backPivot.position.set(0, THICK, -D / 2);
        const backMesh = new THREE.Mesh(new THREE.BoxGeometry(W, THICK, H), panelMats);
        backMesh.position.set(0, 0, -H / 2);
        backMesh.castShadow = true;
        this.backPivot.add(backMesh);

        // 7. Top Lid Pivot (attached to Back Wall top edge: at 0, 0, -H in backPivot)
        this.topLidPivot = new THREE.Group();
        this.topLidPivot.position.set(0, 0, -H);
        const topLidMesh = new THREE.Mesh(new THREE.BoxGeometry(W, THICK, D), panelMats);
        topLidMesh.position.set(0, 0, -D / 2);
        topLidMesh.castShadow = true;
        this.topLidPivot.add(topLidMesh);
        this.backPivot.add(this.topLidPivot);

        // 8. Tuck Flap Pivot (attached to front edge of Top Lid: at 0, 0, -D in topLidPivot)
        this.tuckPivot = new THREE.Group();
        this.tuckPivot.position.set(0, 0, -D);
        const tuckMesh = new THREE.Mesh(new THREE.BoxGeometry(W * 0.92, THICK, TUCK_H), panelMats);
        tuckMesh.position.set(0, 0, -TUCK_H / 2);
        this.tuckPivot.add(tuckMesh);
        this.topLidPivot.add(this.tuckPivot);

        this.group.add(this.backPivot);

        // Position model centered slightly raised
        this.group.position.y = -0.5;
    }

    unbox(shouldFoldTo3D = true) {
        this.isUnboxed = shouldFoldTo3D;

        if (shouldFoldTo3D) {
            this.audio.playPaperSlide();

            // 1. Fold 4 primary walls UP (90 degrees)
            gsap.to(this.leftPivot.rotation, { z: -Math.PI / 2, duration: 1.1, ease: 'power2.inOut' });
            gsap.to(this.rightPivot.rotation, { z: Math.PI / 2, duration: 1.1, ease: 'power2.inOut' });
            gsap.to(this.frontPivot.rotation, { z: 0, x: -Math.PI / 2, duration: 1.1, ease: 'power2.inOut' });
            gsap.to(this.backPivot.rotation, {
                x: Math.PI / 2,
                duration: 1.1,
                ease: 'power2.inOut',
                onComplete: () => this.audio.playClick()
            });

            // 2. Fold dust flaps INWARD
            gsap.to(this.leftDustPivot.rotation, {
                z: -Math.PI / 2,
                duration: 0.8,
                delay: 0.6,
                ease: 'power2.out'
            });
            gsap.to(this.rightDustPivot.rotation, {
                z: Math.PI / 2,
                duration: 0.8,
                delay: 0.6,
                ease: 'power2.out'
            });

            // 3. Fold Top Lid over the box
            gsap.to(this.topLidPivot.rotation, {
                x: Math.PI / 2,
                duration: 1.0,
                delay: 0.9,
                ease: 'power3.inOut'
            });

            // 4. Tuck Flap locks into place
            gsap.to(this.tuckPivot.rotation, {
                x: Math.PI / 2,
                duration: 0.8,
                delay: 1.4,
                ease: 'back.out(1.5)',
                onComplete: () => this.audio.playCardboardThud()
            });

            // Softly dim the cutting mat so the 3D box pops
            gsap.to(this.cuttingMat.position, { y: -0.06, duration: 1.0 });

        } else {
            this.audio.playPaperSlide();

            // Reverse unfolding choreography
            // 1. Pull tuck flap out
            gsap.to(this.tuckPivot.rotation, { x: 0, duration: 0.6, ease: 'power2.in' });

            // 2. Open top lid
            gsap.to(this.topLidPivot.rotation, {
                x: 0,
                duration: 0.9,
                delay: 0.2,
                ease: 'power2.out'
            });

            // 3. Open dust flaps
            gsap.to(this.leftDustPivot.rotation, { z: 0, duration: 0.7, delay: 0.5, ease: 'power2.out' });
            gsap.to(this.rightDustPivot.rotation, { z: 0, duration: 0.7, delay: 0.5, ease: 'power2.out' });

            // 4. Unfold 4 walls flat onto cutting mat
            gsap.to(this.backPivot.rotation, { x: 0, duration: 1.0, delay: 0.7, ease: 'power2.inOut' });
            gsap.to(this.frontPivot.rotation, { x: 0, duration: 1.0, delay: 0.7, ease: 'power2.inOut' });
            gsap.to(this.leftPivot.rotation, { z: 0, duration: 1.0, delay: 0.7, ease: 'power2.inOut' });
            gsap.to(this.rightPivot.rotation, {
                z: 0,
                duration: 1.0,
                delay: 0.7,
                ease: 'power2.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });

            gsap.to(this.cuttingMat.position, { y: -0.01, duration: 1.0 });
        }
    }
}