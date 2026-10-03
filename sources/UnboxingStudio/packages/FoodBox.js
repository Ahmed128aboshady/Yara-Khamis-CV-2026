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
        const kraftTexture = TextureGenerator.createKraftTexture(1024, 1024, '#CBB08C');
        const sleeveLabel = TextureGenerator.createFoodLabel();

        // 1. Inner Drawer Tray
        this.tray = new THREE.Group();

        const trayMat = new THREE.MeshPhysicalMaterial({
            map: kraftTexture,
            roughness: 0.75,
            metalness: 0.04,
            clearcoat: 0.05
        });

        const tw = 2.4, th = 0.85, td = 3.3, tthick = 0.035;

        // Tray bottom
        const trayBottom = new THREE.Mesh(new THREE.BoxGeometry(tw, tthick, td), trayMat);
        trayBottom.position.y = tthick / 2;
        trayBottom.receiveShadow = true;
        this.tray.add(trayBottom);

        // Tray sides (left, right, front, back)
        const sideMat = trayMat;
        const leftWall = new THREE.Mesh(new THREE.BoxGeometry(tthick, th, td), sideMat);
        leftWall.position.set(-tw / 2 + tthick / 2, th / 2, 0);
        this.tray.add(leftWall);

        const rightWall = new THREE.Mesh(new THREE.BoxGeometry(tthick, th, td), sideMat);
        rightWall.position.set(tw / 2 - tthick / 2, th / 2, 0);
        this.tray.add(rightWall);

        const backWall = new THREE.Mesh(new THREE.BoxGeometry(tw, th, tthick), sideMat);
        backWall.position.set(0, th / 2, -td / 2 + tthick / 2);
        this.tray.add(backWall);

        const frontWall = new THREE.Mesh(new THREE.BoxGeometry(tw, th, tthick), sideMat);
        frontWall.position.set(0, th / 2, td / 2 - tthick / 2);
        this.tray.add(frontWall);

        // Gold Satin Pull Ribbon Tab on front wall
        const ribbonMat = new THREE.MeshStandardMaterial({
            color: 0xE5C483,
            roughness: 0.35,
            metalness: 0.4
        });
        const ribbon = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.04, 0.4), ribbonMat);
        ribbon.position.set(0, th / 2, td / 2 + 0.18);
        this.tray.add(ribbon);

        // 2. Artisanal Chocolate Bars Inside Tray
        this.contents = new THREE.Group();
        const barW = 0.65, barH = 0.28, barD = 2.8;

        const chocolates = [
            { title: '72% DARK NOIR', sub: 'MADAGASCAR COCOA', color: '#883222' },
            { title: 'PISTACHIO MATCHA', sub: 'ORGANIC INFUSION', color: '#44563F' },
            { title: 'SALTED CARAMEL', sub: 'ALEXANDRIAN FLEUR', color: '#AA7436' }
        ];

        this.bars = [];
        const goldFoilMat = new THREE.MeshStandardMaterial({
            color: 0xF0D28F,
            metalness: 0.85,
            roughness: 0.25
        });

        chocolates.forEach((item, idx) => {
            const barGroup = new THREE.Group();

            // Inner Gold Foil Block
            const foilBlock = new THREE.Mesh(new THREE.BoxGeometry(barW, barH, barD), goldFoilMat);
            foilBlock.castShadow = true;
            barGroup.add(foilBlock);

            // Printed Paper Belly Band (Sleeve wrapper around the bar)
            const wrapTex = TextureGenerator.createChocolateWrapTexture(item.title, item.sub, item.color);
            const bandMat = new THREE.MeshStandardMaterial({
                map: wrapTex,
                roughness: 0.55
            });
            const band = new THREE.Mesh(new THREE.BoxGeometry(barW + 0.015, barH + 0.015, barD * 0.72), bandMat);
            barGroup.add(band);

            // Spacing inside the tray
            barGroup.position.set(-0.75 + idx * 0.75, th / 2, 0);
            this.contents.add(barGroup);
            this.bars.push(barGroup);
        });

        this.tray.add(this.contents);
        this.group.add(this.tray);

        // 3. Hollow Outer Sleeve with Botanical Branding
        this.sleeve = new THREE.Group();
        const sw = tw + 0.08, sh = th + 0.08, sd = td + 0.02, sthick = 0.035;

        const sleeveOuterMat = new THREE.MeshPhysicalMaterial({
            map: sleeveLabel,
            roughness: 0.5,
            metalness: 0.08,
            clearcoat: 0.25
        });

        // Top panel
        const sleeveTop = new THREE.Mesh(new THREE.BoxGeometry(sw, sthick, sd), sleeveOuterMat);
        sleeveTop.position.y = sh;
        sleeveTop.castShadow = true;
        this.sleeve.add(sleeveTop);

        // Bottom panel
        const sleeveBottom = new THREE.Mesh(new THREE.BoxGeometry(sw, sthick, sd), sleeveOuterMat);
        sleeveBottom.position.y = 0;
        sleeveBottom.receiveShadow = true;
        this.sleeve.add(sleeveBottom);

        // Front face
        const sleeveFront = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, sthick), sleeveOuterMat);
        sleeveFront.position.set(0, sh / 2, sd / 2 - sthick / 2);
        sleeveFront.castShadow = true;
        this.sleeve.add(sleeveFront);

        // Back face
        const sleeveBack = new THREE.Mesh(new THREE.BoxGeometry(sw, sh, sthick), sleeveOuterMat);
        sleeveBack.position.set(0, sh / 2, -sd / 2 + sthick / 2);
        sleeveBack.castShadow = true;
        this.sleeve.add(sleeveBack);

        // (Left and Right ends remain completely open for realistic sliding sleeve!)
        this.group.add(this.sleeve);

        this.group.position.y = -0.4;
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;

        if (shouldOpen) {
            this.audio.playPaperSlide();

            // Sleeve glides left
            gsap.to(this.sleeve.position, {
                x: -3.4,
                duration: 1.3,
                ease: 'power3.out'
            });

            // Tray slides forward towards the camera
            gsap.to(this.tray.position, {
                z: 1.8,
                duration: 1.3,
                ease: 'power3.out',
                onComplete: () => this.audio.playCardboardThud()
            });

            // Chocolate bars elevate and tilt slightly to display their wrappers
            this.bars.forEach((bar, idx) => {
                gsap.to(bar.position, {
                    y: 0.85,
                    duration: 0.9,
                    delay: 0.35 + idx * 0.12,
                    ease: 'back.out(1.8)'
                });
                gsap.to(bar.rotation, {
                    x: 0.28,
                    duration: 0.9,
                    delay: 0.35 + idx * 0.12,
                    ease: 'power2.out'
                });
            });

        } else {
            this.audio.playPaperSlide();

            // Lower chocolate bars
            this.bars.forEach((bar, idx) => {
                gsap.to(bar.position, {
                    y: 0.42,
                    duration: 0.6,
                    delay: idx * 0.05,
                    ease: 'power2.in'
                });
                gsap.to(bar.rotation, {
                    x: 0,
                    duration: 0.6,
                    delay: idx * 0.05,
                    ease: 'power2.in'
                });
            });

            // Slide tray and sleeve back together
            gsap.to(this.tray.position, {
                z: 0,
                duration: 1.1,
                delay: 0.2,
                ease: 'power3.inOut'
            });

            gsap.to(this.sleeve.position, {
                x: 0,
                duration: 1.1,
                delay: 0.2,
                ease: 'power3.inOut',
                onComplete: () => this.audio.playCardboardThud()
            });
        }
    }
}