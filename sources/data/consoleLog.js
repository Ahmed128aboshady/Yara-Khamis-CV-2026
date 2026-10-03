import * as THREE from 'three/webgpu'

const text = `
██╗   ██╗ █████╗ ██████╗  █████╗ 
╚██╗ ██╔╝██╔══██╗██╔══██╗██╔══██╗
 ╚████╔╝ ███████║██████╔╝███████║
  ╚██╔╝  ██╔══██║██╔══██╗██╔══██║
   ██║   ██║  ██║██║  ██║██║  ██║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
                                 
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 

╔═ Intro ═══════════════╗
║ Welcome to Yara Khamis's 3D Interactive Design World!
║ Senior Graphic Designer, Packaging Specialist, and Fine Arts Graduate.
╚═══════════════════════╝

╔═ Socials & Links ═════╗
║ Behance   ⇒ https://www.behance.net/Yara-YTS-Khamis
║ Portfolio ⇒ https://www.behance.net/Yara-YTS-Khamis
║ GitHub    ⇒ https://github.com/Ahmed128aboshady/Yara-Khamis-CV-2026
║ Location  ⇒ Alexandria, Egypt
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝

╔═ Technology ══════════╗
║ Rendered with Three.js (release: ${THREE.REVISION}) WebGPU & TSL (Shading Language).
║ Physics driven by Rapier3D.
╚═══════════════════════╝

╔═ About Yara ══════════╗
║ Senior Graphic & Packaging Designer | Fine Arts Decor Graduate.
║ Specializing in food packaging, branding, handmade notebooks,
║ and watercolor illustrations since 2018.
║ +44,000 Behance Views · +2,000 Appreciations.
╚═══════════════════════╝

╔═ Design Showcase ═════╗
║ • Food & Product Packaging
║ • Brand Visual Identity & Typography
║ • Handmade Notebooks & Paper Crafts
║ • Watercolor Art & Digital Illustrations
║ Explore full collections on Behance: https://www.behance.net/Yara-YTS-Khamis
╚═══════════════════════╝

╔═ Source code ═════════╗
║ The code for this 3D portfolio is hosted on GitHub:
║ https://github.com/Ahmed128aboshady/Yara-Khamis-CV-2026
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]