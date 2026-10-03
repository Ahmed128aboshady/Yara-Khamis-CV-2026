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
        const coverTex = TextureGenerator.createMarbledCoverTexture();
        const page1Tex = TextureGenerator.createWatercolorPage(0);

        const jw = 2.4, jh = 0.32, jd = 3.2;

        // 1. Back Hardcover
        const coverMat = new THREE.MeshStandardMaterial({
            map: coverTex,
            roughness: 0.75,
            metalness: 0.1
        });
        const backCover = new THREE.Mesh(new THREE.BoxGeometry(jw, 0.08, jd), coverMat);
        backCover.position.y = -jh / 2;
        backCover.castShadow = true;
        this.group.add(backCover);

        // 2. Watercolor Paper Block (Deckle edge, natural cold press)
        const paperMat = new THREE.MeshStandardMaterial({
            color: 0xFDFBF5,
            roughness: 0.95
        });
        const paperBlock = new THREE.Mesh(new THREE.BoxGeometry(jw - 0.08, jh - 0.06, jd - 0.08), paperMat);
        paperBlock.position.set(0.04, 0, 0);
        paperBlock.receiveShadow = true;
        this.group.add(paperBlock);

        // 3. Quarter-Bound Leather Spine with Coptic Stitches
        const spineMat = new THREE.MeshStandardMaterial({ color: 0x221A15, roughness: 0.7 });
        const spine = new THREE.Mesh(new THREE.BoxGeometry(0.18, jh + 0.08, jd + 0.02), spineMat);
        spine.position.set(-jw / 2 + 0.02, 0, 0);
        this.group.add(spine);

        // Decorative Cross-stitches on spine
        const threadMat = new THREE.MeshStandardMaterial({ color: 0xE6C88B, roughness: 0.4 });
        for (let i = -1.2; i <= 1.2; i += 0.5) {
            const stitch = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 8), threadMat);
            stitch.rotation.z = Math.PI / 4;
            stitch.position.set(-jw / 2 - 0.07, 0, i);
            this.group.add(stitch);
        }

        // 4. Brass Vintage Corner Protectors
        const brassMat = new THREE.MeshStandardMaterial({
            color: 0xD8B26E,
            metalness: 0.88,
            roughness: 0.25
        });
        const addCorner = (parent, x, z) => {
            const corner = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.09, 0.24), brassMat);
            corner.position.set(x, 0, z);
            parent.add(corner);
        };
        addCorner(backCover, jw / 2 - 0.12, jd / 2 - 0.12);
        addCorner(backCover, jw / 2 - 0.12, -jd / 2 + 0.12);

        // 5. Flippable Front Cover
        this.frontCoverPivot = new THREE.Group();
        this.frontCoverPivot.position.set(-jw / 2 + 0.08, jh / 2, 0);

        const frontCover = new THREE.Mesh(new THREE.BoxGeometry(jw, 0.08, jd), coverMat);
        frontCover.position.set(jw / 2 - 0.08, 0, 0);
        frontCover.castShadow = true;
        addCorner(frontCover, jw / 2 - 0.12, jd / 2 - 0.12);
        addCorner(frontCover, jw / 2 - 0.12, -jd / 2 + 0.12);
        this.frontCoverPivot.add(frontCover);
        this.group.add(this.frontCoverPivot);

        // 6. Watercolor Artwork Page Inside
        this.pagePivot = new THREE.Group();
        this.pagePivot.position.set(-jw / 2 + 0.1, jh / 2 - 0.02, 0);
        const pageMat = new THREE.MeshStandardMaterial({
            map: page1Tex,
            roughness: 0.9,
            side: THREE.DoubleSide
        });
        const page = new THREE.Mesh(new THREE.PlaneGeometry(jw - 0.12, jd - 0.12), pageMat);
        page.rotation.x = -Math.PI / 2;
        page.position.set((jw - 0.12) / 2, 0.01, 0);
        this.pagePivot.add(page);
        this.group.add(this.pagePivot);

        // 7. Crimson Silk Grosgrain Ribbon Bookmark
        const ribbonMat = new THREE.MeshStandardMaterial({
            color: 0xA62B2B,
            roughness: 0.35,
            metalness: 0.2
        });
        this.ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.03, jd + 0.8), ribbonMat);
        this.ribbon.position.set(0.4, jh / 2 + 0.05, 0.25);
        this.group.add(this.ribbon);

        this.group.position.y = -0.3;
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;

        if (shouldOpen) {
            this.audio.playPaperSlide();

            // Silk ribbon swings aside
            gsap.to(this.ribbon.position, {
                x: 2.1,
                z: 0.5,
                duration: 0.9,
                ease: 'power2.out'
            });

            // Front cover flips 180 degrees
            gsap.to(this.frontCoverPivot.rotation, {
                z: Math.PI * 0.96,
                duration: 1.4,
                delay: 0.2,
                ease: 'power3.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });

            // Art page flutters open 25 degrees
            gsap.to(this.pagePivot.rotation, {
                z: Math.PI * 0.18,
                duration: 1.2,
                delay: 0.7,
                ease: 'power2.out'
            });

        } else {
            this.audio.playPaperSlide();

            // Close page
            gsap.to(this.pagePivot.rotation, {
                z: 0,
                duration: 0.7,
                ease: 'power2.in'
            });

            // Close cover
            gsap.to(this.frontCoverPivot.rotation, {
                z: 0,
                duration: 1.1,
                delay: 0.25,
                ease: 'power3.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });

            // Ribbon returns
            gsap.to(this.ribbon.position, {
                x: 0.4,
                z: 0.25,
                duration: 0.8,
                delay: 0.8,
                ease: 'power2.out'
            });
        }
    }
}