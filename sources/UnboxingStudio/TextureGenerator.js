import * as THREE from 'three';

export class TextureGenerator {
    // Generate realistic Kraft paper texture with subtle organic fiber noise
    static createKraftTexture(width = 1024, height = 1024, baseColor = '#D4B28C') {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = baseColor;
        ctx.fillRect(0, 0, width, height);

        // Add subtle fibrous speckles
        const imgData = ctx.getImageData(0, 0, width, height);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
            const noise = (Math.random() - 0.5) * 22;
            data[i] = Math.min(255, Math.max(0, data[i] + noise));
            data[i+1] = Math.min(255, Math.max(0, data[i+1] + noise * 0.9));
            data[i+2] = Math.min(255, Math.max(0, data[i+2] + noise * 0.8));
        }
        ctx.putImageData(imgData, 0, 0);

        // Subtle paper fibers
        ctx.strokeStyle = 'rgba(90, 65, 45, 0.08)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + (Math.random() - 0.5) * 12, y + (Math.random() - 0.5) * 12);
            ctx.stroke();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        return texture;
    }

    // Generate Luxury Gold Foil Branding Texture for Yara Khamis
    static createGoldFoilBranding(title = 'YARA KHAMIS', subtitle = 'PACKAGING & BRAND IDENTITY', emblem = 'YK') {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Dark matte luxury background
        ctx.fillStyle = '#1D1C1B';
        ctx.fillRect(0, 0, 1024, 1024);

        // Golden geometric frame
        ctx.strokeStyle = '#E6C687';
        ctx.lineWidth = 4;
        ctx.strokeRect(80, 80, 864, 864);
        ctx.lineWidth = 1.5;
        ctx.strokeRect(95, 95, 834, 834);

        // Decorative corner accents
        const corners = [[80, 80], [944, 80], [80, 944], [944, 944]];
        corners.forEach(([cx, cy]) => {
            ctx.fillStyle = '#E6C687';
            ctx.beginPath();
            ctx.arc(cx, cy, 6, 0, Math.PI * 2);
            ctx.fill();
        });

        // Emblem circle
        ctx.beginPath();
        ctx.arc(512, 360, 90, 0, Math.PI * 2);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#F3DCA3';
        ctx.stroke();

        ctx.font = 'italic 700 72px "Playfair Display", "Times New Roman", serif';
        ctx.fillStyle = '#F3DCA3';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(emblem, 512, 360);

        // Title
        ctx.font = '700 52px "Plus Jakarta Sans", sans-serif';
        ctx.letterSpacing = '10px';
        ctx.fillStyle = '#F5E1B5';
        ctx.fillText(title, 512, 540);

        // Arabic Name
        ctx.font = '400 36px "Amiri", "Traditional Arabic", serif';
        ctx.fillStyle = '#E2C288';
        ctx.fillText('يارا خميس — فن وتصميم التغليف', 512, 610);

        // Subtitle & Est.
        ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#D6B87C';
        ctx.letterSpacing = '6px';
        ctx.fillText(subtitle, 512, 680);
        ctx.fillText('EST. 2018 · FINE ARTS DECOR', 512, 730);

        const texture = new THREE.CanvasTexture(canvas);
        return texture;
    }

    // Generate Gourmet Food Box Sleeve Label
    static createFoodLabel(brand = 'ARTISAN GOURMET', product = 'Handcrafted Organic Infusion', arab = 'مستخلصات عشبية فاخرة') {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Warm terracotta / sage green duo background
        ctx.fillStyle = '#F6F3EB';
        ctx.fillRect(0, 0, 1024, 1024);

        // Center colored band
        ctx.fillStyle = '#E08B73';
        ctx.fillRect(80, 0, 864, 1024);

        // Arch illustration container
        ctx.fillStyle = '#FBF9F5';
        ctx.beginPath();
        ctx.arc(512, 400, 240, Math.PI, 0, false);
        ctx.lineTo(752, 720);
        ctx.arc(512, 720, 240, 0, Math.PI, false);
        ctx.closePath();
        ctx.fill();

        // Botanical Leaf / Olive twig illustration
        ctx.strokeStyle = '#4A5B46';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(512, 560);
        ctx.quadraticCurveTo(512, 420, 512, 300);
        ctx.stroke();

        // Leaves
        for (let i = 0; i < 7; i++) {
            const ly = 320 + i * 32;
            const dir = i % 2 === 0 ? 1 : -1;
            ctx.beginPath();
            ctx.ellipse(512 + dir * 35, ly, 28, 12, dir * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = i % 2 === 0 ? '#637A5D' : '#8A9E84';
            ctx.fill();
        }

        // Brand & product typography
        ctx.textAlign = 'center';
        ctx.fillStyle = '#2A2928';
        ctx.font = '700 42px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(brand, 512, 220);

        ctx.font = 'italic 400 32px "Playfair Display", serif';
        ctx.fillStyle = '#3F3D3A';
        ctx.fillText(product, 512, 650);

        ctx.font = '700 34px "Amiri", serif';
        ctx.fillStyle = '#B4573F';
        ctx.fillText(arab, 512, 710);

        // Badges
        ctx.font = '600 20px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#5A5652';
        ctx.fillText('100% RECYCLABLE · FOOD GRADE · 350 GSM', 512, 850);
        ctx.fillText('DESIGNED BY YARA KHAMIS', 512, 890);

        // Barcode at bottom
        ctx.fillStyle = '#2A2928';
        const startX = 362;
        for (let x = 0; x < 300; x += 6) {
            const w = (x % 12 === 0 || x % 18 === 0) ? 4 : 2;
            ctx.fillRect(startX + x, 920, w, 40);
        }

        return new THREE.CanvasTexture(canvas);
    }

    // Generate Handmade Sketchbook Page Watercolor Art
    static createWatercolorPage(index = 0) {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Natural rough paper texture
        ctx.fillStyle = '#F8F5EE';
        ctx.fillRect(0, 0, 1024, 1024);

        // Paper grain
        const imgData = ctx.getImageData(0, 0, 1024, 1024);
        for (let i = 0; i < imgData.data.length; i += 4) {
            const n = (Math.random() - 0.5) * 14;
            imgData.data[i] += n;
            imgData.data[i+1] += n;
            imgData.data[i+2] += n;
        }
        ctx.putImageData(imgData, 0, 0);

        // Watercolor washes
        const colors = [
            ['rgba(217, 136, 128, 0.45)', 'rgba(235, 175, 140, 0.35)', 'Floral Symphony'],
            ['rgba(123, 158, 137, 0.45)', 'rgba(168, 195, 160, 0.35)', 'Botanical Whispers'],
            ['rgba(155, 130, 180, 0.45)', 'rgba(205, 170, 210, 0.35)', 'Lavender Dreams']
        ];
        const [c1, c2, title] = colors[index % colors.length];

        ctx.save();
        for (let j = 0; j < 6; j++) {
            ctx.beginPath();
            ctx.fillStyle = j % 2 === 0 ? c1 : c2;
            const x = 320 + Math.sin(j) * 160;
            const y = 420 + Math.cos(j) * 140;
            const r = 180 + Math.sin(j * 2) * 60;
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();

        // Elegant hand-lettering
        ctx.textAlign = 'center';
        ctx.fillStyle = '#3A3632';
        ctx.font = 'italic 700 46px "Playfair Display", serif';
        ctx.fillText(title, 512, 780);

        ctx.font = '400 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#78736B';
        ctx.fillText('Original Watercolor & Hand-Bound Journal · Yara Khamis', 512, 840);

        return new THREE.CanvasTexture(canvas);
    }

    // Industrial Dieline Template Texture
    static createDielineTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Light kraft cardboard background
        ctx.fillStyle = '#E5C9A4';
        ctx.fillRect(0, 0, 1024, 1024);

        // Cutting lines (Solid Red)
        ctx.strokeStyle = '#D93829';
        ctx.lineWidth = 3;
        ctx.strokeRect(180, 180, 664, 664);

        // Crease / Folding lines (Dashed Cyan)
        ctx.setLineDash([12, 8]);
        ctx.strokeStyle = '#0077B6';
        ctx.lineWidth = 2.5;

        // Inner flap folds
        ctx.beginPath();
        ctx.moveTo(346, 180); ctx.lineTo(346, 844);
        ctx.moveTo(512, 180); ctx.lineTo(512, 844);
        ctx.moveTo(678, 180); ctx.lineTo(678, 844);
        ctx.moveTo(180, 346); ctx.lineTo(844, 346);
        ctx.moveTo(180, 678); ctx.lineTo(844, 678);
        ctx.stroke();

        ctx.setLineDash([]);

        // Technical notes and markings
        ctx.fillStyle = '#222';
        ctx.font = '600 22px monospace';
        ctx.fillText('DIELINE STRUCTURE: RETT-B350', 200, 140);
        ctx.fillText('DIMENSIONS: 160 x 120 x 80 mm', 200, 165);
        ctx.fillText('GRAIN DIRECTION: ◄──►', 600, 140);

        // Registration marks
        const regs = [[100, 100], [924, 100], [100, 924], [924, 924]];
        regs.forEach(([rx, ry]) => {
            ctx.strokeStyle = '#111';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(rx, ry, 20, 0, Math.PI * 2);
            ctx.moveTo(rx - 28, ry); ctx.lineTo(rx + 28, ry);
            ctx.moveTo(rx, ry - 28); ctx.lineTo(rx, ry + 28);
            ctx.stroke();
        });

        // Color calibration blocks
        const cmyk = ['#00FFFF', '#FF00FF', '#FFFF00', '#000000'];
        cmyk.forEach((c, idx) => {
            ctx.fillStyle = c;
            ctx.fillRect(200 + idx * 45, 870, 35, 20);
            ctx.strokeRect(200 + idx * 45, 870, 35, 20);
        });

        return new THREE.CanvasTexture(canvas);
    }
}