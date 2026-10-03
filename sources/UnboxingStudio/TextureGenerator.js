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

    // Industrial CAD Dieline Template Texture
    static createDielineTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');

        // Crisp White Bleached Sulfate Board / Ivory base
        ctx.fillStyle = '#FAF7F0';
        ctx.fillRect(0, 0, 2048, 2048);

        // Fine cardboard texture grain
        const imgData = ctx.getImageData(0, 0, 2048, 2048);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
            const n = (Math.random() - 0.5) * 12;
            d[i] += n; d[i+1] += n; d[i+2] += n;
        }
        ctx.putImageData(imgData, 0, 0);

        // Grid lines (Drafting millimeter grid)
        ctx.strokeStyle = 'rgba(0, 100, 180, 0.08)';
        ctx.lineWidth = 1;
        for (let x = 0; x < 2048; x += 32) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 2048); ctx.stroke();
        }
        for (let y = 0; y < 2048; y += 32) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(2048, y); ctx.stroke();
        }

        // Major grid lines
        ctx.strokeStyle = 'rgba(0, 100, 180, 0.18)';
        ctx.lineWidth = 1.5;
        for (let x = 0; x < 2048; x += 160) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 2048); ctx.stroke();
        }
        for (let y = 0; y < 2048; y += 160) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(2048, y); ctx.stroke();
        }

        // CAD DIE OUTLINE (Solid Red Cut Lines)
        ctx.strokeStyle = '#E63946';
        ctx.lineWidth = 6;
        ctx.strokeRect(300, 300, 1448, 1448);

        // Crease / Score Lines (Dashed Cyan Lines)
        ctx.setLineDash([24, 16]);
        ctx.strokeStyle = '#0077B6';
        ctx.lineWidth = 5;

        ctx.beginPath();
        // Vertical creases
        ctx.moveTo(662, 300); ctx.lineTo(662, 1748);
        ctx.moveTo(1024, 300); ctx.lineTo(1024, 1748);
        ctx.moveTo(1386, 300); ctx.lineTo(1386, 1748);
        // Horizontal creases
        ctx.moveTo(300, 662); ctx.lineTo(1748, 662);
        ctx.moveTo(300, 1386); ctx.lineTo(1748, 1386);
        ctx.stroke();

        ctx.setLineDash([]);

        // Glue Tab Hatching
        ctx.strokeStyle = 'rgba(230, 57, 70, 0.4)';
        ctx.lineWidth = 2;
        for (let gx = 300; gx < 480; gx += 16) {
            ctx.beginPath(); ctx.moveTo(gx, 300); ctx.lineTo(gx - 40, 380); ctx.stroke();
        }

        // Title Block (Engineering Blueprints)
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#1D3557';
        ctx.lineWidth = 4;
        ctx.fillRect(1150, 1450, 550, 260);
        ctx.strokeRect(1150, 1450, 550, 260);

        ctx.fillStyle = '#1D3557';
        ctx.font = 'bold 36px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('YARA KHAMIS · PACKAGING LAB', 1180, 1500);

        ctx.font = '500 24px monospace';
        ctx.fillText('STYLE: STE-B350 FOLDING CARTON', 1180, 1540);
        ctx.fillText('DIMENSIONS: 180 x 120 x 105 mm', 1180, 1575);
        ctx.fillText('BOARD: 350 GSM GC1 SBS BOARD', 1180, 1610);
        ctx.fillText('GRAIN DIRECTION: ◄────────►', 1180, 1645);
        ctx.fillText('SCALE: 1:1 · TOLERANCE: ±0.2mm', 1180, 1680);

        // Technical Legend
        ctx.fillStyle = '#E63946';
        ctx.fillRect(320, 1650, 40, 16);
        ctx.fillStyle = '#1D3557';
        ctx.font = 'bold 22px monospace';
        ctx.fillText('CUT LINE (SOLID)', 375, 1665);

        ctx.fillStyle = '#0077B6';
        ctx.fillRect(620, 1650, 40, 16);
        ctx.fillStyle = '#1D3557';
        ctx.fillText('CREASE LINE (DASHED)', 675, 1665);

        // Registration Marks (4 corners)
        const regs = [[120, 120], [1928, 120], [120, 1928], [1928, 1928]];
        regs.forEach(([rx, ry]) => {
            ctx.strokeStyle = '#111111';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(rx, ry, 36, 0, Math.PI * 2);
            ctx.moveTo(rx - 50, ry); ctx.lineTo(rx + 50, ry);
            ctx.moveTo(rx, ry - 50); ctx.lineTo(rx, ry + 50);
            ctx.stroke();
        });

        // CMYK Density Calibration Swatches
        const cmyk = ['#00FFFF', '#FF00FF', '#FFFF00', '#000000', '#D4AF37'];
        cmyk.forEach((c, idx) => {
            ctx.fillStyle = c;
            ctx.fillRect(320 + idx * 80, 1690, 65, 35);
            ctx.strokeRect(320 + idx * 80, 1690, 65, 35);
        });

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = 8;
        return texture;
    }

    // Professional Self-Healing Cutting Mat Texture
    static createCuttingMatTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 1600;
        const ctx = canvas.getContext('2d');

        // Studio Green Mat base
        ctx.fillStyle = '#1B3B2B';
        ctx.fillRect(0, 0, 2048, 1600);

        // Mat border
        ctx.strokeStyle = '#E8EFE9';
        ctx.lineWidth = 4;
        ctx.strokeRect(80, 80, 1888, 1440);

        // 1cm fine grid
        ctx.strokeStyle = 'rgba(232, 239, 233, 0.22)';
        ctx.lineWidth = 1;
        for (let x = 80; x <= 1968; x += 32) {
            ctx.beginPath(); ctx.moveTo(x, 80); ctx.lineTo(x, 1520); ctx.stroke();
        }
        for (let y = 80; y <= 1520; y += 32) {
            ctx.beginPath(); ctx.moveTo(80, y); ctx.lineTo(1968, y); ctx.stroke();
        }

        // 5cm major grid
        ctx.strokeStyle = 'rgba(232, 239, 233, 0.55)';
        ctx.lineWidth = 2;
        for (let x = 80; x <= 1968; x += 160) {
            ctx.beginPath(); ctx.moveTo(x, 80); ctx.lineTo(x, 1520); ctx.stroke();
        }
        for (let y = 80; y <= 1520; y += 160) {
            ctx.beginPath(); ctx.moveTo(80, y); ctx.lineTo(1968, y); ctx.stroke();
        }

        // Diagonal angle guidelines (30, 45, 60 degrees)
        ctx.strokeStyle = 'rgba(240, 210, 120, 0.45)';
        ctx.lineWidth = 2;
        ctx.setLineDash([12, 10]);

        ctx.beginPath();
        ctx.moveTo(80, 1520); ctx.lineTo(1520, 80); // 45 deg
        ctx.moveTo(80, 1520); ctx.lineTo(1968, 432); // 30 deg
        ctx.moveTo(80, 1520); ctx.lineTo(912, 80);  // 60 deg
        ctx.stroke();
        ctx.setLineDash([]);

        // Rulers & text
        ctx.fillStyle = '#E8EFE9';
        ctx.font = 'bold 22px monospace';
        let cm = 0;
        for (let x = 80; x <= 1968; x += 160) {
            ctx.fillText(`${cm}`, x - 10, 65);
            cm += 5;
        }

        // Brand logo on mat
        ctx.font = 'bold 32px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = 'rgba(232, 239, 233, 0.65)';
        ctx.fillText('YARA KHAMIS · STUDIO CUTTING MAT · A2 (600 x 450 mm)', 580, 1565);

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = 8;
        return texture;
    }

    // Artisanal Chocolate Foil Wrap Sleeve
    static createChocolateWrapTexture(title = 'SINGLE ORIGIN 72%', subtitle = 'MADAGASCAR COCOA', bandColor = '#9A3B26') {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Warm Cream packaging background
        ctx.fillStyle = '#F5F1E9';
        ctx.fillRect(0, 0, 1024, 1024);

        // Center colored wrapper band
        ctx.fillStyle = bandColor;
        ctx.fillRect(120, 0, 784, 1024);

        // Gold trim borders
        ctx.strokeStyle = '#E5C483';
        ctx.lineWidth = 6;
        ctx.strokeRect(150, 50, 724, 924);
        ctx.lineWidth = 2;
        ctx.strokeRect(165, 65, 694, 894);

        // Gold botanical emblem
        ctx.strokeStyle = '#F3DAA3';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(512, 380, 110, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#F3DAA3';
        ctx.font = 'bold 64px "Playfair Display", serif';
        ctx.textAlign = 'center';
        ctx.fillText('YK', 512, 395);

        // Title & flavor
        ctx.fillStyle = '#FAF7F0';
        ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(title, 512, 570);

        ctx.font = 'italic 30px "Playfair Display", serif';
        ctx.fillStyle = '#E5C483';
        ctx.fillText(subtitle, 512, 630);

        // Arabic Calligraphy
        ctx.font = 'bold 36px "Amiri", serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText('شوكولاتة حرفية فاخرة', 512, 700);

        // Details
        ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#D9BF96';
        ctx.fillText('ORGANIC FAIR TRADE · 85G NET', 512, 780);
        ctx.fillText('DESIGNED BY YARA KHAMIS', 512, 820);

        const texture = new THREE.CanvasTexture(canvas);
        texture.anisotropy = 4;
        return texture;
    }

    // Perfume Bottle Embossed Label
    static createPerfumeLabel() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Luxurious ivory label
        ctx.fillStyle = '#F8F6F0';
        ctx.fillRect(0, 0, 1024, 1024);

        // Gold hot stamped embossed frame
        ctx.strokeStyle = '#C9A356';
        ctx.lineWidth = 6;
        ctx.strokeRect(60, 60, 904, 904);

        ctx.strokeStyle = '#E4C98A';
        ctx.lineWidth = 2;
        ctx.strokeRect(80, 80, 864, 864);

        ctx.textAlign = 'center';
        // Crest
        ctx.font = 'italic 700 80px "Playfair Display", serif';
        ctx.fillStyle = '#C9A356';
        ctx.fillText('YK', 512, 340);

        // Brand name
        ctx.font = '700 52px "Playfair Display", serif';
        ctx.fillStyle = '#1C1A18';
        ctx.fillText("L'ÉLIXIR D'ALEXANDRIE", 512, 470);

        // Arabic Name
        ctx.font = '700 46px "Amiri", serif';
        ctx.fillStyle = '#8C6C30';
        ctx.fillText('إكسير الإسكندرية', 512, 550);

        // Description
        ctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#3F3B36';
        ctx.fillText('EAU DE PARFUM · VAPORISATEUR NATURAL', 512, 650);
        ctx.fillText('100 ML · 3.4 FL. OZ', 512, 700);

        ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#8C6C30';
        ctx.fillText('HAUTE PARFUMERIE · YARA KHAMIS', 512, 780);

        return new THREE.CanvasTexture(canvas);
    }

    // Hand-Bound Journal Marbled Paper Cover
    static createMarbledCoverTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Deep rich emerald / teal bookcloth base
        ctx.fillStyle = '#1A332E';
        ctx.fillRect(0, 0, 1024, 1024);

        // Organic marbled paper veins
        const colors = ['#2C5248', '#3E6F62', '#D1AC60', '#C59A45', '#0E211E'];
        for (let i = 0; i < 40; i++) {
            ctx.strokeStyle = colors[i % colors.length];
            ctx.lineWidth = 3 + (i % 6) * 3;
            ctx.beginPath();
            let y = i * 28;
            ctx.moveTo(0, y);
            for (let x = 0; x < 1024; x += 120) {
                const cy = y + Math.sin((x + i * 50) * 0.015) * 60 + Math.cos(x * 0.02) * 30;
                ctx.lineTo(x, cy);
            }
            ctx.stroke();
        }

        // Gold hot-stamped title on front cover
        ctx.fillStyle = 'rgba(232, 200, 130, 0.95)';
        ctx.strokeStyle = '#F0D598';
        ctx.lineWidth = 4;
        ctx.strokeRect(200, 280, 624, 464);
        ctx.strokeRect(215, 295, 594, 434);

        ctx.textAlign = 'center';
        ctx.font = 'italic 700 58px "Playfair Display", serif';
        ctx.fillText('ATELIER DECOR', 512, 450);

        ctx.font = 'bold 36px "Amiri", serif';
        ctx.fillText('مفكرة الفنون الجميلة · يارا خميس', 512, 530);

        ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('FINE ARTS SKETCHBOOK · 300 GSM', 512, 600);

        return new THREE.CanvasTexture(canvas);
    }

    // Realistic Kraft Doypack Pouch Label
    static createDoypackLabel() {
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');

        // Artisan textured label
        ctx.fillStyle = '#F7F3E9';
        ctx.fillRect(0, 0, 1024, 1024);

        // Sage green border
        ctx.strokeStyle = '#435845';
        ctx.lineWidth = 6;
        ctx.strokeRect(50, 50, 924, 924);

        // Botanical leaves line art
        ctx.strokeStyle = '#435845';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(512, 320, 120, 0, Math.PI * 2);
        ctx.stroke();

        ctx.textAlign = 'center';
        ctx.font = '700 48px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#263428';
        ctx.fillText('ORGANIC BOTANICALS', 512, 520);

        ctx.font = '700 44px "Amiri", serif';
        ctx.fillStyle = '#7A4D3B';
        ctx.fillText('أعشاب عضوية ومستخلصات نقية', 512, 590);

        ctx.font = 'italic 30px "Playfair Display", serif';
        ctx.fillStyle = '#4A5B46';
        ctx.fillText('Single Harvest · Sun Dried', 512, 660);

        ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = '#5A5E56';
        ctx.fillText('100% COMPOSTABLE PACKAGING · 250G', 512, 740);
        ctx.fillText('ALEXANDRIA · YARA KHAMIS STUDIO', 512, 780);

        // Barcode
        ctx.fillStyle = '#263428';
        for (let x = 330; x < 700; x += 8) {
            const w = (x % 16 === 0 || x % 24 === 0) ? 5 : 2;
            ctx.fillRect(x, 840, w, 55);
        }

        return new THREE.CanvasTexture(canvas);
    }
}