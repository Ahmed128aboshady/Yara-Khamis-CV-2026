import { Studio } from './UnboxingStudio/Studio.js';

// Project specs dataset for the 5 packages
const projectData = [
    {
        cat: 'Food & Gourmet Packaging',
        title: 'Artisan Organic Infusion Box',
        titleAr: 'تصميم تغليف عبوة أغذية فاخرة',
        desc: 'A custom structural drawer packaging featuring a slide-out rigid tray, botanical watercolor illustration sleeve, and warm terracotta color harmony. Engineered for premium shelf appeal and food-grade compliance.',
        stock: '350 GSM Natural Kraft + Ivory Board',
        finishing: 'Soft Touch Matte + Spot UV Details',
        structure: 'Sleeve & Drawer Tray (Sliding Box)',
        role: 'Die-cut Layout & Visual Identity'
    },
    {
        cat: 'Luxury Cosmetic & Fragrance',
        title: 'Royal Essence Rigid Gift Box',
        titleAr: 'علبة هدايا ومستحضرات ملكية فاخرة',
        desc: 'Premium two-piece clamshell box with magnetic flap closure, stamped with hot gold foil geometric framing. Houses an interior custom molded velvet insert and luxury glass essence bottle.',
        stock: '1200 GSM Greyboard + Matte Black Art Paper',
        finishing: 'Hot Stamped Gold Foil + Embossed Crest',
        structure: 'Magnetic Hinged Rigid Box',
        role: 'Packaging Engineering & Luxury Branding'
    },
    {
        cat: 'Handmade Craft & Binding',
        title: 'Artisan Watercolor Sketchbook',
        titleAr: 'دفتر ومفكرة كانسون مصنوعة يدوياً',
        desc: 'Handcrafted notebook featuring hand-bound stitched spine, pure natural kraft hardcover, silk ribbon bookmark, and 300gsm cold-pressed watercolor paper containing original floral artworks.',
        stock: '300 GSM Heavy Watercolor Cold-Press Paper',
        finishing: 'Exposed Hand-Sewn Thread Binding + Silk Ribbon',
        structure: 'Hand-Bound Hardcover Book',
        role: 'Bookbinding Artisan & Watercolor Painting'
    },
    {
        cat: 'Eco-Friendly Flexible Packaging',
        title: 'Botanical Kraft Stand-Up Pouch',
        titleAr: 'كيس كرافت صديق للبيئة مع قفل سحاب',
        desc: 'Sustainable stand-up flexible pouch (Doypack) crafted from biodegradable kraft paper with moisture barrier lining, laser-scored tear notches, and elegant minimalist botanical branding.',
        stock: 'Multi-layer Recyclable Barrier Kraft Paper',
        finishing: 'Eco-Matte Finish + Direct Plant Inks',
        structure: 'Stand-Up Gusset Pouch with Zip-Lock',
        role: 'Sustainable Packaging Design'
    },
    {
        cat: 'Industrial Structural Design',
        title: 'Auto-Folding Dieline Template',
        titleAr: 'نموذج الإفراد الهندسي والطي الذاتي',
        desc: 'Precision packaging dieline with technical crease and cut markings, glue tabs, and tuck-in flaps. Demonstrates how a 2D flat cardboard die-cut transforms mathematically into a solid retail package.',
        stock: '380 GSM Solid Bleached Sulfate (SBS)',
        finishing: 'Technical Proofing & Die-cut Calibration',
        structure: 'Reverse Tuck End (RTE) Folding Carton',
        role: 'CAD Structural Packaging Design'
    }
];

// Initialize 3D Studio
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('webgl');
    const studio = new Studio(canvas);

    // UI Elements
    const btnUnbox = document.getElementById('btnUnbox');
    const unboxBtnText = document.getElementById('unboxBtnText');
    const unboxBtnSub = document.getElementById('unboxBtnSub');
    const btnRotate = document.getElementById('btnRotate');
    const btnLight = document.getElementById('btnLight');
    const btnWireframe = document.getElementById('btnWireframe');
    const btnReset = document.getElementById('btnReset');
    const btnAudio = document.getElementById('btnAudio');

    const packageCards = document.querySelectorAll('.package-card');
    const projectDrawer = document.getElementById('projectDrawer');
    const btnProjectDetails = document.getElementById('btnProjectDetails');
    const btnCloseDrawer = document.getElementById('btnCloseDrawer');

    const aboutModal = document.getElementById('aboutModal');
    const btnAbout = document.getElementById('btnAbout');
    const btnCloseModal = document.getElementById('btnCloseModal');

    // Update Drawer Content
    function updateDrawer(index) {
        const data = projectData[index];
        document.getElementById('drawerCat').textContent = data.cat;
        document.getElementById('drawerTitle').textContent = data.title;
        document.getElementById('drawerTitleAr').textContent = data.titleAr;
        document.getElementById('drawerDesc').textContent = data.desc;
        document.getElementById('specStock').textContent = data.stock;
        document.getElementById('specFinishing').textContent = data.finishing;
        document.getElementById('specStructure').textContent = data.structure;
        document.getElementById('specRole').textContent = data.role;
    }

    // Package Selector
    packageCards.forEach((card) => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.index);
            packageCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            studio.selectPackage(index);
            updateDrawer(index);

            // Reset unbox button state
            unboxBtnText.textContent = index === 4 ? 'Fold into 3D' : 'Unbox Package';
            unboxBtnSub.textContent = index === 4 ? 'Click to fold cardboard' : 'Click to reveal inner craft';
        });
    });

    // Unbox Button Click
    btnUnbox.addEventListener('click', () => {
        const isOpened = studio.toggleUnbox();
        const isDieline = studio.currentPackageIndex === 4;

        if (isOpened) {
            unboxBtnText.textContent = isDieline ? 'Unfold to Flat' : 'Close Package';
            unboxBtnSub.textContent = isDieline ? 'Click to expand 2D net' : 'Click to close lid';
        } else {
            unboxBtnText.textContent = isDieline ? 'Fold into 3D' : 'Unbox Package';
            unboxBtnSub.textContent = isDieline ? 'Click to fold cardboard' : 'Click to reveal inner craft';
        }
    });

    // Auto-Rotate Toggle
    btnRotate.addEventListener('click', () => {
        const active = studio.toggleAutoRotate();
        btnRotate.classList.toggle('active', active);
    });

    // Lighting Mode Toggle
    const lightModes = ['warm', 'daylight', 'golden'];
    let currentLightMode = 0;
    btnLight.addEventListener('click', () => {
        currentLightMode = (currentLightMode + 1) % lightModes.length;
        studio.setLighting(lightModes[currentLightMode]);
    });

    // Wireframe / Structural X-Ray Toggle
    btnWireframe.addEventListener('click', () => {
        const active = studio.toggleWireframe();
        btnWireframe.classList.toggle('active', active);
    });

    // Reset Camera
    btnReset.addEventListener('click', () => {
        studio.resetCamera();
    });

    // Audio Toggle
    let audioOn = true;
    btnAudio.addEventListener('click', () => {
        audioOn = !audioOn;
        studio.audio.enabled = audioOn;
        btnAudio.style.opacity = audioOn ? '1' : '0.4';
    });

    // Drawer Toggle
    btnProjectDetails.addEventListener('click', () => {
        projectDrawer.classList.add('open');
    });
    btnCloseDrawer.addEventListener('click', () => {
        projectDrawer.classList.remove('open');
    });

    // About Modal Toggle
    btnAbout.addEventListener('click', () => {
        aboutModal.classList.add('open');
    });
    btnCloseModal.addEventListener('click', () => {
        aboutModal.classList.remove('open');
    });
    aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) {
            aboutModal.classList.remove('open');
        }
    });

    // Initial drawer content
    updateDrawer(0);
});