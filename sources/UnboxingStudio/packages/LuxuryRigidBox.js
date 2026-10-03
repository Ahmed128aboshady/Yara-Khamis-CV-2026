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
        const perfumeLabelTex = TextureGenerator.createPerfumeLabel();

        // 1. Box Bottom Base (Noir Soft-Touch Matte Paper)
        const baseMat = new THREE.MeshPhysicalMaterial({
            color: 0x141414,
            roughness: 0.65,
            metalness: 0.1,
            clearcoat: 0.15
        });
        const bw = 2.6, bh = 1.1, bd = 2.6;
        this.base = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), baseMat);
        this.base.position.y = bh / 2;
        this.base.castShadow = true;
        this.base.receiveShadow = true;
        this.group.add(this.base);

        // Gold Shoulder Neck (Protrudes up from base inside)
        const goldMat = new THREE.MeshStandardMaterial({
            color: 0xE8C88B,
            metalness: 0.92,
            roughness: 0.2
        });
        const shoulder = new THREE.Mesh(new THREE.BoxGeometry(bw - 0.08, 0.45, bd - 0.08), goldMat);
        shoulder.position.y = bh / 2 + 0.15;
        this.base.add(shoulder);

        // Velvet Interior Bed with Cavity
        const velvetMat = new THREE.MeshStandardMaterial({
            color: 0x1A1412,
            roughness: 0.98
        });
        const velvet = new THREE.Mesh(new THREE.BoxGeometry(bw - 0.16, 0.35, bd - 0.16), velvetMat);
        velvet.position.y = bh / 2 + 0.18;
        this.base.add(velvet);

        // 2. Haute Parfumerie Crystal Flacon
        this.bottle = new THREE.Group();

        // Faceted Crystal Glass Outer Flacon (8-sided faceted perfume bottle)
        const glassMat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            transmission: 0.92,
            opacity: 1,
            transparent: true,
            roughness: 0.06,
            ior: 1.54,
            thickness: 1.2
        });
        const bottleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 1.25, 8), glassMat);
        bottleBody.castShadow = true;
        this.bottle.add(bottleBody);

        // Amber Perfume Liquid Inside
        const liquidMat = new THREE.MeshStandardMaterial({
            color: 0xE59842,
            roughness: 0.15,
            metalness: 0.1
        });
        const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.95, 8), liquidMat);
        liquid.position.y = -0.05;
        this.bottle.add(liquid);

        // Embossed Label on Flacon Front
        const labelMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(0.55, 0.55),
            new THREE.MeshStandardMaterial({
                map: perfumeLabelTex,
                roughness: 0.45,
                metalness: 0.2
            })
        );
        labelMesh.position.set(0, 0, 0.49);
        this.bottle.add(labelMesh);

        // Polished Gold Collar & Atomizer
        const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.25, 32), goldMat);
        collar.position.y = 0.72;
        this.bottle.add(collar);

        // Black Satin Ribbon Bow at neck
        const bowMat = new THREE.MeshStandardMaterial({ color: 0x181818, roughness: 0.8 });
        const bow = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.06, 0.1), bowMat);
        bow.position.set(0, 0.65, 0.25);
        this.bottle.add(bow);

        // Faceted Gold Magnetic Cap
        const bottleCap = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.45, 0.38), goldMat);
        bottleCap.position.y = 1.0;
        bottleCap.castShadow = true;
        this.bottle.add(bottleCap);

        this.bottle.position.set(0, bh + 0.1, 0);
        this.group.add(this.bottle);

        // 3. Hinged Rigid Lid with Gold Foil Stamped Artwork
        const lidMat = [
            baseMat, baseMat,
            new THREE.MeshPhysicalMaterial({
                map: foilTexture,
                roughness: 0.38,
                metalness: 0.4,
                clearcoat: 0.35
            }), // Top face
            baseMat, baseMat, baseMat
        ];
        const lidGeo = new THREE.BoxGeometry(bw + 0.06, 0.45, bd + 0.06);
        this.lid = new THREE.Mesh(lidGeo, lidMat);
        this.lid.castShadow = true;

        // Pivot placed at rear top edge of base
        this.lidPivot = new THREE.Group();
        this.lidPivot.position.set(0, bh + 0.05, -bd / 2);
        this.lid.position.set(0, 0.22, bd / 2);
        this.lidPivot.add(this.lid);
        this.group.add(this.lidPivot);

        this.group.position.y = -0.55;
    }

    unbox(shouldOpen = true) {
        this.isUnboxed = shouldOpen;

        if (shouldOpen) {
            this.audio.playPaperSlide();

            // Lid swings open 115 degrees back
            gsap.to(this.lidPivot.rotation, {
                x: -Math.PI * 0.68,
                duration: 1.4,
                ease: 'power3.out',
                onComplete: () => this.audio.playCardboardThud()
            });

            // Crystal bottle elevates smoothly out of velvet insert
            gsap.to(this.bottle.position, {
                y: 1.7,
                duration: 1.2,
                delay: 0.35,
                ease: 'power2.out'
            });

            // Bottle rotates to catch highlights
            gsap.to(this.bottle.rotation, {
                y: Math.PI * 0.45,
                x: 0.12,
                duration: 1.6,
                delay: 0.35,
                ease: 'power1.out'
            });

        } else {
            this.audio.playPaperSlide();

            // Lower bottle back into velvet cradle
            gsap.to(this.bottle.position, {
                y: 1.2,
                duration: 0.8,
                ease: 'power2.in'
            });
            gsap.to(this.bottle.rotation, {
                y: 0,
                x: 0,
                duration: 0.8,
                ease: 'power2.in'
            });

            // Close lid
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