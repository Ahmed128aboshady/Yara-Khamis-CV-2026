import * as THREE from 'three';
import gsap from 'gsap';
import { TextureGenerator } from '../TextureGenerator.js';

export class HandmadeJournal {
    constructor(audio) {
        this.audio = audio;
        this.group = new THREE.Group();
        this.isUnboxed = false;
        this.build();
    }

    build() {
        const coverTex = TextureGenerator.createKraftTexture(1024, 1024, '#C9A37A');
        const page1Tex = TextureGenerator.createWatercolorPage(0);
        const page2Tex = TextureGenerator.createWatercolorPage(1);

        // 1. Back Hardcover
        const coverMat = new THREE.MeshStandardMaterial({
            map: coverTex,
            roughness: 0.85,
            metalness: 0.05
        });
        const backCover = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.08, 3.1), coverMat);
        backCover.position.y = -0.15;
        backCover.castShadow = true;
        this.group.add(backCover);

        // 2. Paper Block
        const paperBlockMat = new THREE.MeshStandardMaterial({
            color: 0xFDFBF7,
            roughness: 0.95
        });
        const paperBlock = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.25, 3.0), paperBlockMat);
        paperBlock.position.y = 0.02;
        this.group.add(paperBlock);

        // 3. Stitched Spine
        const spineMat = new THREE.MeshStandardMaterial({ color: 0x5C4738, roughness: 0.7 });
        const spine = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.35, 3.12), spineMat);
        spine.position.set(-1.15, 0.02, 0);
        this.group.add(spine);

        // 4. Flippable Front Cover
        this.frontCoverPivot = new THREE.Group();
        this.frontCoverPivot.position.set(-1.15, 0.16, 0);
        const frontCover = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.08, 3.1), coverMat);
        frontCover.position.set(1.15, 0, 0);
        frontCover.castShadow = true;
        this.frontCoverPivot.add(frontCover);
        this.group.add(this.frontCoverPivot);

        // 5. Watercolor Illustration Page Inside
        this.pagePivot = new THREE.Group();
        this.pagePivot.position.set(-1.12, 0.15, 0);
        const pageMat = new THREE.MeshStandardMaterial({
            map: page1Tex,
            roughness: 0.9
        });
        const page = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 3.0), pageMat);
        page.rotation.x = -Math.PI / 2;
        page.position.set(1.1, 0.01, 0);
        this.pagePivot.add(page);
        this.group.add(this.pagePivot);

        // 6. Silk Ribbon Bookmark
        const ribbonMat = new THREE.MeshStandardMaterial({
            color: 0xB54A36,
            roughness: 0.3,
            metalness: 0.2
        });
        this.ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 3.6), ribbonMat);
        this.ribbon.position.set(0.3, 0.22, 0.3);
        this.group.add(this.ribbon);
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;
        if (shouldOpen) {
            this.audio.playPaperSlide();
            gsap.to(this.ribbon.position, {
                x: 1.8,
                duration: 0.8,
                ease: 'power2.out'
            });
            gsap.to(this.frontCoverPivot.rotation, {
                z: Math.PI * 0.95,
                duration: 1.3,
                delay: 0.2,
                ease: 'power3.out',
                onComplete: () => this.audio.playCardboardThud()
            });
            gsap.to(this.pagePivot.rotation, {
                z: Math.PI * 0.15,
                duration: 1.0,
                delay: 0.6,
                ease: 'power2.out'
            });
        } else {
            this.audio.playPaperSlide();
            gsap.to(this.pagePivot.rotation, {
                z: 0,
                duration: 0.7,
                ease: 'power2.in'
            });
            gsap.to(this.frontCoverPivot.rotation, {
                z: 0,
                duration: 1.0,
                delay: 0.3,
                ease: 'power3.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });
            gsap.to(this.ribbon.position, {
                x: 0.3,
                duration: 0.8,
                delay: 0.8,
                ease: 'power2.out'
            });
        }
    }
}