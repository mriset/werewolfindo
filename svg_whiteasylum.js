const waArt = {
    "SP·01": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- The Architect / Moderator: Panopticon Eye over Blood Stage -->
        <!-- Panopticon Rings -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#3b0059" stroke-width="1" stroke-dasharray="4,3"/>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#0f1115" stroke-width="1"/>
        
        <!-- Sacred Geometry / Control Lines -->
        <path d="M 50 20 L 24 65 L 76 65 Z" fill="none" stroke="#113247" stroke-width="1" stroke-dasharray="2,2"/>
        <path d="M 50 80 L 24 35 L 76 35 Z" fill="none" stroke="#113247" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- The Omniscient Eye -->
        <path d="M 25 50 Q 50 30 75 50 Q 50 70 25 50 Z" fill="#f0f0f0" stroke="#0f1115" stroke-width="2.5"/>
        <circle cx="50" cy="50" r="11" fill="#3b0059"/>
        <circle cx="50" cy="50" r="10" fill="none" stroke="#0f1115" stroke-width="1.5" stroke-dasharray="1,2"/>
        <circle cx="50" cy="50" r="5" fill="#0f1115"/>
        <circle cx="47" cy="47" r="1.5" fill="#fff"/>
        <circle cx="53" cy="52" r="0.8" fill="#fff"/>

        <!-- Strings of Fate pulling the stage -->
        <line x1="35" y1="57" x2="35" y2="85" stroke="#0f1115" stroke-width="1.5"/>
        <line x1="65" y1="57" x2="65" y2="85" stroke="#0f1115" stroke-width="1.5"/>
        <line x1="50" y1="61" x2="50" y2="90" stroke="#0f1115" stroke-width="1.5"/>

        <!-- Fragile Pawns dangling -->
        <!-- Left Pawn -->
        <circle cx="35" cy="74" r="3" fill="#0f1115"/>
        <path d="M 31 82 C 31 77 39 77 39 82 Z" fill="#0f1115"/>
        <!-- Right Pawn -->
        <circle cx="65" cy="74" r="3" fill="#0f1115"/>
        <path d="M 61 82 C 61 77 69 77 69 82 Z" fill="#0f1115"/>
        <!-- Center Pawn -->
        <circle cx="50" cy="78" r="3" fill="#3b0059"/> <!-- Special pawn -->
        <path d="M 46 86 C 46 81 54 81 54 86 Z" fill="#3b0059"/>

        <!-- Pool of Blood (Genangan Darah) at the bottom strings -->
        <path d="M 35 83 L 36 90 A 1.5 1.5 0 0 1 33 90 Z" fill="#6e0000"/>
        <path d="M 50 88 L 51 96 A 1.5 1.5 0 0 1 48 96 Z" fill="#6e0000"/>
        <path d="M 65 83 L 66 92 A 1.5 1.5 0 0 1 63 92 Z" fill="#6e0000"/>
        <path d="M 20 85 Q 50 100 80 85" fill="none" stroke="#6e0000" stroke-width="2"/>
        <path d="M 25 88 Q 50 103 75 88" fill="none" stroke="#6e0000" stroke-width="1"/>
    </svg>`,

    "VL·01": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Rorschach Skull -->
        <!-- Left side -->
        <path d="M 50 20 C 30 20 20 40 30 60 C 25 70 35 80 40 75 C 45 85 50 70 50 90" fill="#113247" opacity="0.8"/>
        <!-- Right side -->
        <path d="M 50 20 C 70 20 80 40 70 60 C 75 70 65 80 60 75 C 55 85 50 70 50 90" fill="#113247" opacity="0.8"/>
        <!-- Eyes / voids -->
        <circle cx="40" cy="45" r="6" fill="#f0f0f0"/>
        <circle cx="60" cy="45" r="6" fill="#f0f0f0"/>
        <!-- Ink splats -->
        <circle cx="20" cy="30" r="3" fill="#113247"/>
        <circle cx="80" cy="30" r="3" fill="#113247"/>
        <circle cx="30" cy="80" r="2" fill="#113247"/>
        <circle cx="70" cy="80" r="2" fill="#113247"/>
    </svg>`,

    "VL·02": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Padlock / Straitjacket strap -->
        <path d="M 35 45 L 35 30 C 35 15 65 15 65 30 L 65 45" fill="none" stroke="#0f1115" stroke-width="6"/>
        <rect x="25" y="45" width="50" height="40" rx="5" fill="#f0f0f0" stroke="#0f1115" stroke-width="3"/>
        <circle cx="50" cy="60" r="4" fill="#0f1115"/>
        <polygon points="48,62 52,62 55,75 45,75" fill="#0f1115"/>
        <!-- Blood dripping from keyhole -->
        <path d="M 50 75 L 51 85 A 1 1 0 0 1 49 85 Z" fill="#6e0000"/>
        <circle cx="30" cy="55" r="2" fill="#6e0000"/>
        <circle cx="35" cy="70" r="1.5" fill="#6e0000"/>
    </svg>`,

    "VL·14": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Paranoia Eye taped open -->
        <path d="M 20 50 Q 50 25 80 50 Q 50 75 20 50 Z" fill="none" stroke="#0f1115" stroke-width="2"/>
        <circle cx="50" cy="50" r="12" fill="#113247"/>
        <circle cx="50" cy="50" r="4" fill="#0f1115"/>
        <!-- Medical tape pieces -->
        <rect x="40" y="15" width="20" height="10" transform="rotate(-15 50 20)" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/>
        <rect x="42" y="75" width="22" height="10" transform="rotate(10 50 80)" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/>
        <!-- Red veins -->
        <path d="M 25 50 Q 35 45 40 50" fill="none" stroke="#6e0000" stroke-width="1"/>
        <path d="M 75 50 Q 65 55 60 50" fill="none" stroke="#6e0000" stroke-width="1"/>
        <path d="M 50 30 Q 48 40 50 38" fill="none" stroke="#6e0000" stroke-width="1"/>
    </svg>`,

    "VL·15": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Schizophrenia abstract screaming face -->
        <path d="M 30 30 Q 50 10 70 30 Q 80 60 60 85 Q 50 95 40 85 Q 20 60 30 30 Z" fill="none" stroke="#0f1115" stroke-width="2"/>
        <!-- Hands pulling hair / head pulling apart -->
        <path d="M 10 20 Q 30 25 35 30" fill="none" stroke="#0f1115" stroke-width="3"/>
        <path d="M 90 20 Q 70 25 65 30" fill="none" stroke="#0f1115" stroke-width="3"/>
        <!-- Multiple jagged eyes overlapping -->
        <path d="M 35 45 L 45 40 L 40 50 Z" fill="#113247"/>
        <path d="M 65 45 L 55 40 L 60 50 Z" fill="#113247"/>
        <path d="M 50 35 L 53 38 L 47 40 Z" fill="#113247"/>
        <!-- Screaming mouth stretching -->
        <path d="M 40 65 Q 50 50 60 65 Q 50 90 40 65 Z" fill="#0f1115"/>
    </svg>`,

    "VL·16": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Overdose / Pill bottle -> Mouth -->
        <!-- Bottle pouring -->
        <rect x="35" y="10" width="30" height="35" rx="3" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5" transform="rotate(30 50 27)"/>
        <rect x="40" y="5" width="20" height="7" fill="#113247" transform="rotate(30 50 27)"/>
        <!-- Pills falling -->
        <circle cx="65" cy="45" r="4" fill="#6e0000"/>
        <ellipse cx="45" cy="50" rx="3" ry="6" fill="#113247" transform="rotate(45 45 50)"/>
        <circle cx="55" cy="58" r="3.5" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <ellipse cx="35" cy="65" rx="3" ry="6" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5" transform="rotate(15 35 65)"/>
        <!-- Open Mouth hungry -->
        <path d="M 20 80 Q 50 65 80 80 Q 50 100 20 80 Z" fill="#0f1115"/>
    </svg>`,

    "VL·17": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Straitjacket straps -->
        <path d="M 20 20 Q 50 5 80 20 C 90 40 90 70 80 90 Q 50 95 20 90 C 10 70 10 40 20 20 Z" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <!-- Belt 1 -->
        <rect x="15" y="35" width="70" height="8" fill="#113247"/>
        <!-- Belt 2 -->
        <rect x="18" y="55" width="64" height="8" fill="#113247"/>
        <!-- Belt 3 -->
        <rect x="23" y="75" width="54" height="8" fill="#113247"/>
        <!-- Buckles -->
        <rect x="45" y="33" width="10" height="12" fill="none" stroke="#f0f0f0" stroke-width="2"/>
        <rect x="45" y="53" width="10" height="12" fill="none" stroke="#f0f0f0" stroke-width="2"/>
        <rect x="45" y="73" width="10" height="12" fill="none" stroke="#f0f0f0" stroke-width="2"/>
        <!-- Dirty streaks -->
        <path d="M 30 25 L 35 45 M 70 30 L 65 60" fill="none" stroke="#0f1115" stroke-width="1" opacity="0.5"/>
    </svg>`,

    "WW·01": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Medical Mask tearing revealing wolf snout -->
        <path d="M 20 60 Q 50 90 80 60 L 70 30 Q 50 50 30 30 Z" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <!-- Teeth breaking through -->
        <polygon points="35,65 40,50 45,60 50,45 55,60 60,50 65,65" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/>
        <!-- Blood & tear marks -->
        <path d="M 35 60 L 40 85 M 50 60 L 52 90 M 65 60 L 60 80" stroke="#8b0000" stroke-width="2"/>
        <!-- Wolf Eyes emerging above -->
        <circle cx="35" cy="20" r="3" fill="#8b0000"/>
        <circle cx="65" cy="20" r="3" fill="#8b0000"/>
        <!-- Sharp brow -->
        <path d="M 25 15 L 40 18 M 75 15 L 60 18" fill="none" stroke="#0f1115" stroke-width="2"/>
    </svg>`,

    "WW·02": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Claws shredding a hospital gown -->
        <rect x="15" y="10" width="70" height="80" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <!-- Huge Slash marks -->
        <path d="M 80 20 Q 50 40 10 50 M 85 40 Q 55 60 15 70 M 90 60 Q 60 80 20 90" fill="none" stroke="#0f1115" stroke-width="5"/>
        <path d="M 80 20 Q 50 40 10 50 M 85 40 Q 55 60 15 70 M 90 60 Q 60 80 20 90" fill="none" stroke="#8b0000" stroke-width="2"/>
        <path d="M 10 50 L 5 45 M 15 70 L 10 65 M 20 90 L 15 85" stroke="#8b0000" stroke-width="2"/>
        <!-- Gown ID tag broken -->
        <rect x="65" y="25" width="15" height="8" fill="#f0f0f0" stroke="#0f1115" transform="rotate(25 65 25)"/>
    </svg>`,

    "VL·03": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Pharmacist: Syringe Life & Death -->
        <!-- Syringe 1 (Life/Light) -->
        <rect x="25" y="20" width="10" height="40" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5" transform="rotate(-30 30 40)"/>
        <rect x="25" y="30" width="10" height="20" fill="#113247" transform="rotate(-30 30 40)"/> <!-- Blue fluid -->
        <line x1="20" y1="13" x2="35" y2="23" stroke="#0f1115" stroke-width="2"/> <!-- Plunger -->
        <line x1="43" y1="67" x2="55" y2="75" stroke="#0f1115" stroke-width="1.5"/> <!-- Needle -->
        
        <!-- Syringe 2 (Death/Poison) -->
        <rect x="60" y="20" width="10" height="40" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5" transform="rotate(30 65 40)"/>
        <rect x="60" y="30" width="10" height="20" fill="#6e0000" transform="rotate(30 65 40)"/> <!-- Red fluid -->
        <line x1="60" y1="23" x2="75" y2="13" stroke="#0f1115" stroke-width="2"/>
        <line x1="40" y1="75" x2="52" y2="67" stroke="#0f1115" stroke-width="1.5"/> <!-- Needle -->
        
        <circle cx="55" cy="80" r="2.5" fill="#113247"/>
        <circle cx="40" cy="80" r="2.5" fill="#6e0000"/>
    </svg>`,

    "VL·04": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Discharged Officer: Bandaged Revolver -->
        <path d="M 20 60 L 40 60 L 45 40 L 85 40 L 85 30 L 40 30 L 35 50 L 20 50 Z" fill="#0f1115"/> <!-- Gun Base -->
        <circle cx="55" cy="45" r="8" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/> <!-- Cylinder -->
        <circle cx="50" cy="42" r="2" fill="#0f1115"/><circle cx="55" cy="39" r="2" fill="#0f1115"/><circle cx="60" cy="42" r="2" fill="#0f1115"/>
        <path d="M 45 50 L 45 55 L 50 55" fill="none" stroke="#0f1115" stroke-width="2"/> <!-- Trigger -->
        <!-- Bandages wrapping the gun -->
        <path d="M 22 45 L 35 65 M 28 45 L 42 65" stroke="#f0f0f0" stroke-width="3"/>
        <path d="M 68 28 L 78 45 M 78 28 L 88 45" stroke="#f0f0f0" stroke-width="3"/>
        <!-- Blood on muzzle -->
        <circle cx="15" cy="35" r="2" fill="#6e0000"/>
    </svg>`,

    "VL·05": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Board Director: Cracked Medical Seal/Stamp -->
        <circle cx="50" cy="50" r="40" fill="none" stroke="#0f1115" stroke-width="3"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#0f1115" stroke-width="1" stroke-dasharray="3,3"/>
        <!-- Asclepius staff abstract -->
        <line x1="50" y1="20" x2="50" y2="80" stroke="#113247" stroke-width="4"/>
        <path d="M 40 30 Q 60 40 40 50 Q 60 60 40 70" fill="none" stroke="#113247" stroke-width="2.5"/>
        <!-- Massive crack splitting authority -->
        <path d="M 15 25 L 35 45 L 45 35 L 60 60 L 80 50 L 95 85" fill="none" stroke="#0f1115" stroke-width="3"/>
        <path d="M 15 27 L 35 47 L 45 37 L 60 62 L 80 52 L 95 87" fill="none" stroke="#f0f0f0" stroke-width="1"/>
    </svg>`,

    "VL·06": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Sedated: Gas mask covering a nose/jaw -->
        <path d="M 30 70 Q 50 90 70 70 Q 60 40 40 40 Z" fill="#0f1115"/>
        <!-- Filters -->
        <circle cx="35" cy="65" r="10" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <circle cx="65" cy="65" r="10" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <!-- Tubes going up -->
        <path d="M 50 45 C 45 25 20 20 10 30" fill="none" stroke="#0f1115" stroke-width="6"/>
        <path d="M 45 50 C 45 30 20 25 10 35" fill="none" stroke="#113247" stroke-width="2"/>
        <!-- Dizziness / sleep spirals -->
        <path d="M 70 30 C 70 20 80 20 80 30 C 80 40 65 40 65 25" fill="none" stroke="#113247" stroke-width="1.5"/>
        <path d="M 30 20 C 30 10 40 10 40 20 C 40 30 25 30 25 15" fill="none" stroke="#113247" stroke-width="1.5"/>
    </svg>`,

    "VL·07": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Hallway Child: Teddy bear missing eye behind bars -->
        <!-- Cell bars -->
        <line x1="20" y1="0" x2="20" y2="100" stroke="#0f1115" stroke-width="4"/>
        <line x1="50" y1="0" x2="50" y2="100" stroke="#0f1115" stroke-width="4"/>
        <line x1="80" y1="0" x2="80" y2="100" stroke="#0f1115" stroke-width="4"/>
        <!-- Teddy Bear head peeking from below -->
        <path d="M 50 50 C 30 50 30 80 50 100 C 70 80 70 50 50 50 Z" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <circle cx="40" cy="55" r="8" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/> <!-- ear -->
        <circle cx="60" cy="55" r="8" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/>
        <!-- Intact eye -->
        <circle cx="42" cy="70" r="3" fill="#0f1115"/>
        <!-- Missing eye, stitches -->
        <line x1="55" y1="65" x2="65" y2="75" stroke="#0f1115" stroke-width="2"/>
        <line x1="65" y1="65" x2="55" y2="75" stroke="#0f1115" stroke-width="2"/>
        <line x1="58" y1="70" x2="58" y2="85" stroke="#6e0000" stroke-width="1.5"/> <!-- tear of blood -->
    </svg>`,

    "VL·09": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Head Security: Broken Baton and Security Badge -->
        <!-- Hexagon Badge -->
        <polygon points="50,15 80,35 80,70 50,90 20,70 20,35" fill="none" stroke="#0f1115" stroke-width="3"/>
        <circle cx="50" cy="52" r="15" fill="#113247"/>
        <polygon points="50,40 55,48 64,50 58,56 60,65 50,60 40,65 42,56 36,50 45,48" fill="#f0f0f0"/> <!-- Star -->
        <!-- Broken baton smashing through -->
        <line x1="10" y1="80" x2="90" y2="20" stroke="#f0f0f0" stroke-width="8"/>
        <line x1="10" y1="80" x2="50" y2="50" stroke="#0f1115" stroke-width="8"/>
        <!-- Blood splatter over the star -->
        <circle cx="45" cy="52" r="3" fill="#6e0000"/>
        <circle cx="52" cy="48" r="4" fill="#6e0000"/>
        <circle cx="58" cy="58" r="2.5" fill="#6e0000"/>
    </svg>`,

    "WW·03": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Patient Zero: Brain in a jar with fangs -->
        <!-- Glass Jar -->
        <path d="M 30 20 L 70 20 L 75 90 L 25 90 Z" fill="none" stroke="#0f1115" stroke-width="2"/>
        <rect x="25" y="10" width="50" height="10" fill="#0f1115"/>
        <!-- Glowing Brain -->
        <path d="M 40 40 C 30 30 30 60 50 60 C 70 60 70 30 60 40 C 55 25 45 25 40 40 Z" fill="#8b0000" opacity="0.6"/>
        <path d="M 45 40 Q 50 50 55 40" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <path d="M 40 50 Q 50 60 60 50" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <!-- Sharp wolf teeth growing inside the brain -->
        <polygon points="45,60 48,75 51,60" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <polygon points="51,60 54,80 57,60" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <polygon points="57,60 60,70 63,60" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <!-- Glass reflection -->
        <line x1="32" y1="30" x2="35" y2="70" stroke="#f0f0f0" stroke-width="2"/>
    </svg>`,

    "NT·01": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Deranged Maniac (Jester): Laughing face with electroshock nodes -->
        <!-- Wide Maniac Smile -->
        <path d="M 20 60 C 40 100 60 100 80 60" fill="none" stroke="#0f1115" stroke-width="4"/>
        <path d="M 25 65 L 30 75 M 40 73 L 42 85 M 58 85 L 60 73 M 70 75 L 75 65" stroke="#0f1115" stroke-width="2"/> <!-- Teeth lines -->
        <!-- Electroshock nodes on temples -->
        <rect x="5" y="30" width="15" height="20" rx="2" fill="#0f1115"/>
        <rect x="80" y="30" width="15" height="20" rx="2" fill="#0f1115"/>
        <!-- Wires shooting out -->
        <path d="M 10 30 Q 20 -10 -10 10" fill="none" stroke="#0f1115" stroke-width="2" stroke-dasharray="3,2"/>
        <path d="M 90 30 Q 80 -10 110 10" fill="none" stroke="#0f1115" stroke-width="2" stroke-dasharray="3,2"/>
        <!-- Electricity sparks -->
        <polygon points="50,10 45,30 55,25 40,50" fill="#0a421b"/>
        <polygon points="30,20 25,35 35,30 20,45" fill="#0a421b"/>
        <polygon points="70,20 65,35 75,30 60,45" fill="#0a421b"/>
    </svg>`,

    "NT·03": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Delusional Twins (Cupid): Two hearts stitched together -->
        <path d="M 50 75 C 50 75 25 50 25 35 C 25 20 45 20 50 35" fill="none" stroke="#0f1115" stroke-width="3"/>
        <path d="M 50 75 C 50 75 75 50 75 35 C 75 20 55 20 50 35" fill="none" stroke="#0f1115" stroke-width="3"/>
        <path d="M 30 40 L 70 40 M 35 50 L 65 50 M 40 60 L 60 60" stroke="#0f1115" stroke-width="1.5" stroke-dasharray="2,2"/> <!-- Stitches connecting them -->
        <!-- Medical needle piercing both -->
        <line x1="10" y1="20" x2="90" y2="80" stroke="#0f1115" stroke-width="1.5"/>
        <circle cx="10" cy="20" r="3" fill="#0a421b"/>
        <!-- Blood dripping -->
        <path d="M 50 75 L 50 90 A 1.5 1.5 0 0 1 47 90 Z" fill="#6e0000"/>
    </svg>`,

    "VL·08": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Nymphomaniac: Broken mirror reflecting terrifying smile -->
        <!-- Hand Mirror -->
        <circle cx="50" cy="35" r="25" fill="#f0f0f0" stroke="#0f1115" stroke-width="3"/>
        <rect x="45" y="60" width="10" height="30" rx="3" fill="#0f1115"/>
        <!-- Shards / Cracks -->
        <path d="M 35 15 L 50 35 L 70 20 M 50 35 L 40 55 M 50 35 L 65 55" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <!-- Terrifying dark lips inside one shard -->
        <path d="M 52 38 Q 60 45 68 38 Q 60 48 52 38" fill="#6e0000"/>
        <path d="M 53 40 L 67 40" stroke="#0f1115" stroke-width="0.5"/> <!-- Teeth line -->
    </svg>`,

    "VL·10": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Insane Mayor: Suitcase of money bursting with documents/blood -->
        <rect x="20" y="40" width="60" height="40" rx="5" fill="none" stroke="#0f1115" stroke-width="3"/>
        <path d="M 40 40 L 40 30 C 40 25 60 25 60 30 L 60 40" fill="none" stroke="#0f1115" stroke-width="3"/> <!-- Handle -->
        <!-- Locks -->
        <rect x="25" y="38" width="10" height="6" fill="#0f1115"/>
        <rect x="65" y="38" width="10" height="6" fill="#0f1115"/>
        <!-- Documents sticking out -->
        <polygon points="30,40 20,20 40,25" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <polygon points="70,40 85,25 65,15" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <!-- Red stamp on document -->
        <circle cx="72" cy="25" r="3" fill="#6e0000"/>
        <!-- Blood dripping from suitcase bottom -->
        <path d="M 40 80 L 40 95 A 2 2 0 0 1 36 95 Z" fill="#6e0000"/>
        <path d="M 60 80 L 60 90 A 1 1 0 0 0 62 90 Z" fill="#6e0000"/>
    </svg>`,

    "VL·11": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Forensics: Microscope over mutated blood -->
        <path d="M 30 80 L 70 80 M 40 80 L 40 50 Q 40 20 60 20 L 60 60" fill="none" stroke="#0f1115" stroke-width="5"/> <!-- Arm / stand -->
        <!-- Eyepiece -->
        <rect x="55" y="10" width="10" height="15" transform="rotate(30 60 15)" fill="#0f1115"/>
        <!-- Objective lens -->
        <polygon points="55,60 65,60 62,70 58,70" fill="#0f1115"/>
        <!-- Blood slide -->
        <rect x="45" y="72" width="25" height="4" fill="#113247"/>
        <circle cx="55" cy="74" r="2" fill="#6e0000"/>
        <!-- Abstract mutated cells floating visually -->
        <circle cx="20" cy="30" r="8" fill="none" stroke="#6e0000" stroke-width="1"/>
        <circle cx="18" cy="28" r="2" fill="#6e0000"/>
        <circle cx="25" cy="35" r="1.5" fill="#6e0000"/>
        <path d="M 12 30 Q 5 25 8 20" fill="none" stroke="#6e0000" stroke-width="1"/>
    </svg>`,

    "VL·12": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Lobotomized Medium: Ice pick in frontal lobe -->
        <!-- Skull profile (abstract) -->
        <path d="M 40 20 C 70 20 80 50 60 80 L 30 80 C 10 70 20 30 40 20 Z" fill="none" stroke="#0f1115" stroke-width="2"/>
        <circle cx="45" cy="45" r="7" fill="#0f1115"/> <!-- Eye socket -->
        <path d="M 65 60 L 55 65" stroke="#0f1115" stroke-width="1.5"/> <!-- Jaw line -->
        <!-- Ice Pick driven into eye/frontal -->
        <line x1="85" y1="15" x2="48" y2="42" stroke="#113247" stroke-width="2"/>
        <rect x="82" y="12" width="8" height="8" fill="#0f1115" transform="rotate(45 86 16)"/> <!-- Handle -->
        <!-- Supernatural waves radiating -->
        <path d="M 20 15 Q 10 5 15 -5" fill="none" stroke="#113247" stroke-width="1" stroke-dasharray="2,2"/>
        <path d="M 10 30 Q 0 20 -5 25" fill="none" stroke="#113247" stroke-width="1" stroke-dasharray="2,2"/>
        <path d="M 15 50 Q 5 50 0 60" fill="none" stroke="#113247" stroke-width="1" stroke-dasharray="2,2"/>
    </svg>`,

    "VL·13": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Neurosurgeon: Scalpel swapping brain segments -->
        <path d="M 20 50 Q 50 10 80 50 Q 50 90 20 50 Z" fill="none" stroke="#0f1115" stroke-width="2"/> <!-- Brain outline bounding box -->
        <!-- Brain folds -->
        <path d="M 30 50 Q 40 30 50 50 Q 60 70 70 50" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <path d="M 50 20 L 50 80" stroke="#0f1115" stroke-width="2" stroke-dasharray="4,4"/> <!-- Split half -->
        <!-- Scalpel cutting in -->
        <line x1="85" y1="15" x2="55" y2="45" stroke="#113247" stroke-width="2"/>
        <rect x="75" y="10" width="4" height="20" fill="#0f1115" transform="rotate(-45 77 20)"/> <!-- handle -->
        <!-- Swap arrows -->
        <path d="M 35 35 Q 50 25 65 35" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <polygon points="65,35 60,32 62,38" fill="#0f1115"/>
        <path d="M 65 65 Q 50 75 35 65" fill="none" stroke="#0f1115" stroke-width="1.5"/>
        <polygon points="35,65 40,68 38,62" fill="#0f1115"/>
    </svg>`,

    "VL·18": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Isolation Guard: Riot Shield dented by claws -->
        <rect x="25" y="15" width="50" height="70" rx="10" fill="#f0f0f0" stroke="#0f1115" stroke-width="3"/>
        <rect x="35" y="25" width="30" height="15" rx="2" fill="#113247"/> <!-- Vision slit -->
        <!-- Heavy scratch marks denting it -->
        <path d="M 10 40 Q 40 50 70 45" fill="none" stroke="#0f1115" stroke-width="4"/>
        <path d="M 15 55 Q 45 65 75 60" fill="none" stroke="#0f1115" stroke-width="4"/>
        <path d="M 20 70 Q 50 80 80 75" fill="none" stroke="#0f1115" stroke-width="4"/>
        <!-- Sparks / Impact detritus -->
        <circle cx="45" cy="50" r="1.5" fill="#0f1115"/>
        <circle cx="55" cy="65" r="1.5" fill="#0f1115"/>
        <circle cx="35" cy="75" r="1.5" fill="#0f1115"/>
    </svg>`,

    "VL·19": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Exorcist Chaplain: Crucifix melting via acid/holy water over file -->
        <!-- File folder background -->
        <path d="M 15 20 L 40 20 L 45 30 L 85 30 L 85 85 L 15 85 Z" fill="none" stroke="#0f1115" stroke-width="2"/>
        <!-- Heavy Crucifix -->
        <line x1="50" y1="35" x2="50" y2="75" stroke="#113247" stroke-width="6"/>
        <line x1="35" y1="50" x2="65" y2="50" stroke="#113247" stroke-width="6"/>
        <!-- Melting acid / Holy water dissolving it -->
        <path d="M 47 75 L 48 90 A 2 2 0 0 1 45 90 Z" fill="#6e0000"/>
        <path d="M 53 73 L 55 85 A 1.5 1.5 0 0 1 51 85 Z" fill="#6e0000"/>
        <path d="M 35 53 L 35 65 A 1 1 0 0 0 38 65 Z" fill="#6e0000"/>
        <!-- Smoke/Burn effect -->
        <path d="M 50 30 Q 60 10 40 0" fill="none" stroke="#0f1115" stroke-width="1.5" opacity="0.6"/>
    </svg>`,

    "VL·20": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Veteran: Cracked Helmet/Shield -->
        <!-- Helmet dome -->
        <path d="M 25 50 C 25 20 75 20 75 50 L 75 60 C 75 65 25 65 25 60 Z" fill="none" stroke="#0f1115" stroke-width="3"/>
        <!-- Scratches -->
        <path d="M 35 30 L 45 50 M 60 25 L 50 45" stroke="#113247" stroke-width="2"/>
        <path d="M 40 20 L 45 35" stroke="#6e0000" stroke-width="2"/>
        <circle cx="65" cy="55" r="2" fill="#0f1115"/>
        <circle cx="35" cy="55" r="2" fill="#0f1115"/>
        <path d="M 25 55 L 75 55" stroke="#0f1115" stroke-width="2"/>
    </svg>`,

    "WW·05": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Lone Wolf: Single Bloodied Claw through geometric moon -->
        <path d="M 70 30 C 50 10 30 30 30 50 C 30 70 50 90 70 70 C 60 60 60 40 70 30 Z" fill="none" stroke="#113247" stroke-width="3"/>
        <path d="M 40 80 Q 55 50 40 20" fill="none" stroke="#0f1115" stroke-width="4"/>
        <path d="M 45 75 Q 60 50 45 25" fill="none" stroke="#0f1115" stroke-width="4"/>
        <path d="M 50 70 Q 65 50 50 30" fill="none" stroke="#0f1115" stroke-width="4"/>
        <!-- Blood drops -->
        <circle cx="45" cy="85" r="3" fill="#6e0000"/>
        <path d="M 50 80 L 51 88 A 1 1 0 0 1 49 88 Z" fill="#6e0000"/>
    </svg>`,

    "NT·04": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Doppelganger: Two abstract overlapped featureless masks -->
        <path d="M 40 20 C 60 20 60 80 40 80 C 20 80 20 20 40 20 Z" fill="none" stroke="#0f1115" stroke-width="2"/>
        <path d="M 60 20 C 80 20 80 80 60 80 C 40 80 40 20 60 20 Z" fill="none" stroke="#113247" stroke-width="2"/>
        <circle cx="40" cy="40" r="5" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/>
        <circle cx="60" cy="40" r="5" fill="#113247"/>
        <!-- Symmetrical connecting lines -->
        <line x1="30" y1="60" x2="50" y2="60" stroke="#0f1115" stroke-width="2"/>
        <line x1="50" y1="60" x2="70" y2="60" stroke="#113247" stroke-width="2"/>
    </svg>`,

    "NT·05": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Serial Killer: Cleaver knife dripping blood -->
        <!-- Cleaver blade -->
        <path d="M 20 30 L 60 30 L 65 70 L 20 70 Z" fill="none" stroke="#0f1115" stroke-width="3"/>
        <circle cx="55" cy="40" r="4" fill="none" stroke="#0f1115" stroke-width="2"/>
        <line x1="20" y1="35" x2="60" y2="35" stroke="#113247" stroke-width="1.5"/>
        <!-- Handle -->
        <rect x="60" y="45" width="30" height="10" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <circle cx="65" cy="50" r="2" fill="#0f1115"/>
        <circle cx="75" cy="50" r="2" fill="#0f1115"/>
        <circle cx="85" cy="50" r="2" fill="#0f1115"/>
        <!-- Blood stains -->
        <path d="M 30 70 L 32 85 A 2 2 0 0 1 28 85 Z" fill="#6e0000"/>
        <path d="M 45 70 L 46 80 A 1 1 0 0 1 44 80 Z" fill="#6e0000"/>
    </svg>`,

    "VL·26": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Idiot: Dropped Joker Hat/Bell -->
        <!-- Hat base -->
        <path d="M 30 60 Q 50 80 70 60" fill="none" stroke="#0f1115" stroke-width="4"/>
        <path d="M 25 60 Q 15 30 35 15 Q 45 30 50 60" fill="none" stroke="#0f1115" stroke-width="2"/>
        <path d="M 75 60 Q 85 30 65 15 Q 55 30 50 60" fill="none" stroke="#0f1115" stroke-width="2"/>
        <!-- Bells -->
        <circle cx="35" cy="15" r="5" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <circle cx="65" cy="15" r="5" fill="#f0f0f0" stroke="#0f1115" stroke-width="2"/>
        <!-- Asymmetrical eyes on the ground under it -->
        <circle cx="40" cy="75" r="6" fill="none" stroke="#113247" stroke-width="2"/>
        <circle cx="60" cy="80" r="4" fill="none" stroke="#113247" stroke-width="2"/>
    </svg>`,

    "VL·35": `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Prince: Stained Crown -->
        <!-- Crown base -->
        <path d="M 20 70 L 80 70 L 90 20 L 70 45 L 50 15 L 30 45 L 10 20 Z" fill="none" stroke="#0f1115" stroke-width="3"/>
        <line x1="20" y1="80" x2="80" y2="80" stroke="#113247" stroke-width="3"/>
        <!-- Jewels -->
        <polygon points="50,55 55,60 50,65 45,60" fill="#f0f0f0" stroke="#0f1115" stroke-width="1.5"/>
        <circle cx="30" cy="60" r="3" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <circle cx="70" cy="60" r="3" fill="#f0f0f0" stroke="#0f1115" stroke-width="1"/>
        <!-- Blood spatter across crown -->
        <circle cx="25" cy="50" r="3" fill="#6e0000"/>
        <circle cx="45" cy="40" r="2" fill="#6e0000"/>
        <path d="M 50 15 L 52 35 A 2 2 0 0 1 48 35 Z" fill="#6e0000"/>
    </svg>`
};

const waGrimes = {
    // Some randomized or default grime SVGs for variety.
    // We export a function that returns a grime by ID, or just map them to factions.
    "SUP-00": `<svg class="grime-overlay" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 10 10 Q 15 15 12 25 Q 5 35 15 45 Q 25 35 20 20 Z" fill="#3b0059" opacity="0.15" /><circle cx="85" cy="85" r="8" fill="#3b0059" opacity="0.1" filter="blur(2px)"/></svg>`,
    "ALL": `<svg class="grime-overlay" viewBox="0 0 100 100" preserveAspectRatio="none"><circle cx="70" cy="30" r="15" fill="#113247" opacity="0.08" filter="blur(3px)"/><path d="M 10 60 Q 20 50 30 65 Q 25 75 15 70 Z" fill="#0f1115" opacity="0.1"/><circle cx="80" cy="20" r="1" fill="#6e0000" opacity="0.8"/></svg>`,
    "SHD": `<svg class="grime-overlay" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 L 30 0 L 10 30 Z" fill="#8b0000" opacity="0.2"/><circle cx="50" cy="50" r="40" fill="none" stroke="#8b0000" stroke-width="1" stroke-dasharray="1 10" opacity="0.4"/></svg>`,
    "CHS": `<svg class="grime-overlay" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 50 10 Q 70 0 90 20 Q 100 40 80 60 Q 60 50 50 30 Z" fill="#0a421b" opacity="0.1"/><circle cx="15" cy="15" r="5" fill="#0f1115" opacity="0.15"/></svg>`
};
