const sinisterArt = {};

sinisterArt["moderator"] = `<!-- SVG: The Puppeteer's Crossbar -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#F9F6FC"></circle>
                    <!-- Magic Aura -->
                    <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(212,175,55,0.2)" stroke-width="10"></circle>
                    <!-- Crossbar & Strings -->
                    <line x1="25" y1="35" x2="25" y2="100" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3,3"></line>
                    <line x1="75" y1="35" x2="75" y2="100" stroke="#D4AF37" stroke-width="1" stroke-dasharray="3,3"></line>
                    <line x1="50" y1="50" x2="50" y2="100" stroke="#5C1682" stroke-width="1.5" stroke-dasharray="2,2"></line>
                    
                    <rect x="20" y="32" width="60" height="6" fill="#8B5AA8" rx="2"></rect>
                    <rect x="47" y="15" width="6" height="40" fill="#8B5AA8" rx="2"></rect>
                    
                    <!-- String Knots -->
                    <circle cx="25" cy="35" r="3" fill="#D4AF37"></circle>
                    <circle cx="75" cy="35" r="3" fill="#D4AF37"></circle>
                    <circle cx="50" cy="18" r="3" fill="#D4AF37"></circle>
                    
                    <!-- God Hand Silhouette -->
                    <path d="M 40,-10 C 40,10 35,15 35,20 C 35,28 65,28 65,20 C 65,15 60,10 60,-10 Z" fill="#9B59B6"></path>
                </svg>`;

sinisterArt["villager"] = `<!-- SVG: The Blank Wooden Pawn -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#F4F1EA"></circle>
                    <!-- Strings -->
                    <line x1="50" y1="0" x2="50" y2="40" stroke="#8C9EAB" stroke-width="1.5"></line>
                    <line x1="30" y1="0" x2="35" y2="60" stroke="#8C9EAB" stroke-width="1"></line>
                    <line x1="70" y1="0" x2="65" y2="60" stroke="#8C9EAB" stroke-width="1"></line>
                    
                    <!-- Pawn Body -->
                    <path d="M 40,60 C 40,50 60,50 60,60 L 65,95 C 65,100 35,100 35,95 Z" fill="#5B8EC4"></path>
                    <path d="M 45,60 Q 48,75 42,95 M 55,60 Q 52,75 58,95" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"></path>
                    
                    <!-- Blank Head -->
                    <circle cx="50" cy="40" r="16" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2.5"></circle>
                    <circle cx="50" cy="40" r="13" fill="none" stroke="rgba(91,142,196,0.2)" stroke-width="1"></circle>
                    
                    <!-- Bound Hands -->
                    <circle cx="35" cy="60" r="5" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2"></circle>
                    <circle cx="65" cy="60" r="5" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2"></circle>
                </svg>`;

sinisterArt["werewolf"] = `<!-- SVG: The Torn Marionette Head -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#FFF5F5"></circle>
                    <!-- Snapped Red Strings -->
                    <path d="M 35,0 Q 40,25 25,35 M 65,0 Q 60,20 75,30 M 50,0 L 50,15" fill="none" stroke="#8B0000" stroke-width="2" stroke-dasharray="4,2"></path>
                    
                    <!-- Blood splatters inside circle -->
                    <circle cx="20" cy="70" r="3" fill="rgba(139,0,0,0.4)"></circle>
                    <circle cx="80" cy="65" r="4" fill="rgba(139,0,0,0.4)"></circle>
                    <circle cx="75" cy="80" r="2" fill="rgba(139,0,0,0.3)"></circle>

                    <!-- Wooden Wolf Puppet Head -->
                    <path d="M 20,65 L 35,25 L 50,35 L 65,25 L 80,65 L 60,95 L 40,95 Z" fill="#8B4040"></path>
                    <path d="M 28,60 L 38,32 L 50,42 L 62,32 L 72,60 L 58,88 L 42,88 Z" fill="#C05050"></path>
                    
                    <!-- Glowing Red Eyes -->
                    <polygon points="38,50 48,55 38,58" fill="#FF6B6B"></polygon>
                    <polygon points="62,50 52,55 62,58" fill="#FF6B6B"></polygon>

                    <!-- Jagged Teeth -->
                    <polygon points="40,95 45,75 50,85 55,75 60,95 55,100 50,92 45,100" fill="#FFF0F0" stroke="#C05050" stroke-width="1.5"></polygon>
                    
                    <!-- Fluff / Stuffing leaking out -->
                    <path d="M 20,65 C 5,70 10,50 25,45 Z" fill="#FFF" stroke="#C05050" stroke-width="1.5" stroke-dasharray="1,2"></path>
                    <path d="M 80,65 C 95,70 90,50 75,45 Z" fill="#FFF" stroke="#C05050" stroke-width="1.5" stroke-dasharray="1,2"></path>
                </svg>`;

sinisterArt["jester"] = `<!-- SVG: The Cracked Doll Mask -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#F4FAF8"></circle>
                    
                    <!-- Single hanging string -->
                    <line x1="50" y1="0" x2="50" y2="15" stroke="#006A4E" stroke-width="1.5"></line>
                    <circle cx="50" cy="18" r="4" fill="#C2185B"></circle>
                    
                    <!-- Creepy Jester Hat -->
                    <path d="M 50,22 Q 15,10 10,45 Q 30,35 50,28 Z" fill="#009970" stroke="#006A4E" stroke-width="2"></path>
                    <path d="M 50,22 Q 85,10 90,45 Q 70,35 50,28 Z" fill="#E91E63" stroke="#C2185B" stroke-width="2"></path>
                    <circle cx="10" cy="45" r="5" fill="#E91E63" stroke="#C2185B" stroke-width="1"></circle>
                    <circle cx="90" cy="45" r="5" fill="#009970" stroke="#006A4E" stroke-width="1"></circle>

                    <!-- Porcelain Face -->
                    <path d="M 25,35 C 10,70 30,100 50,100 C 70,100 90,70 75,35 Z" fill="#F4F1EA" stroke="#C2185B" stroke-width="2"></path>
                    
                    <!-- Cracks -->
                    <path d="M 75,35 L 60,55 L 65,65 L 55,80" fill="none" stroke="#C2185B" stroke-width="1.5"></path>
                    <path d="M 50,100 L 45,85 L 35,80" fill="none" stroke="#006A4E" stroke-width="1"></path>

                    <!-- Hollow Eyes -->
                    <ellipse cx="38" cy="55" rx="8" ry="10" fill="#C2185B"></ellipse>
                    <ellipse cx="62" cy="55" rx="8" ry="10" fill="#006A4E"></ellipse>
                    <circle cx="65" cy="55" r="2" fill="#FFD700"></circle> <!-- Crazy dot -->

                    <!-- Sinister Grin -->
                    <path d="M 30,75 Q 50,95 70,75 Q 50,85 30,75 Z" fill="#5A2060"></path>
                    <!-- Stitches -->
                    <line x1="35" y1="75" x2="35" y2="82" stroke="#F4F1EA" stroke-width="1"></line>
                    <line x1="45" y1="78" x2="45" y2="86" stroke="#F4F1EA" stroke-width="1"></line>
                    <line x1="55" y1="78" x2="55" y2="86" stroke="#F4F1EA" stroke-width="1"></line>
                    <line x1="65" y1="75" x2="65" y2="82" stroke="#F4F1EA" stroke-width="1"></line>
                </svg>`;

sinisterArt["seer"] = `<!-- SVG: The Glass Eye Crystal Ball -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="url(#seerBg)"></circle>
                    <defs>
                        <radialGradient id="seerBg" cx="40%" cy="40%">
                            <stop offset="0%" stop-color="#E8E4FF"></stop>
                            <stop offset="100%" stop-color="#C5BCF5"></stop>
                        </radialGradient>
                        <radialGradient id="crystalBall" cx="35%" cy="35%">
                            <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9"></stop>
                            <stop offset="50%" stop-color="#A890F0" stop-opacity="0.6"></stop>
                            <stop offset="100%" stop-color="#2C2C6E" stop-opacity="0.8"></stop>
                        </radialGradient>
                    </defs>

                    <!-- Mystical strings from above -->
                    <line x1="38" y1="0" x2="38" y2="22" stroke="#7B68EE" stroke-width="1" stroke-dasharray="2,2"></line>
                    <line x1="62" y1="0" x2="62" y2="22" stroke="#7B68EE" stroke-width="1" stroke-dasharray="2,2"></line>

                    <!-- Crystal Ball Stand -->
                    <path d="M 35,80 Q 40,75 50,73 Q 60,75 65,80 L 68,90 Q 50,95 32,90 Z" fill="#7B68EE"></path>
                    <rect x="32" y="88" width="36" height="5" rx="2" fill="#9B8FFF"></rect>

                    <!-- Crystal Ball -->
                    <circle cx="50" cy="52" r="25" fill="url(#crystalBall)" stroke="#7B68EE" stroke-width="1.5"></circle>

                    <!-- Inner vision / all-seeing eye inside ball -->
                    <ellipse cx="50" cy="52" rx="14" ry="9" fill="none" stroke="rgba(44,44,110,0.5)" stroke-width="1"></ellipse>
                    <ellipse cx="50" cy="52" rx="7" ry="7" fill="rgba(44,44,110,0.4)"></ellipse>
                    <circle cx="50" cy="52" r="3" fill="#A890F0"></circle>
                    <circle cx="48" cy="50" r="1" fill="#FFFFFF" opacity="0.8"></circle>

                    <!-- Shine spot on crystal ball -->
                    <circle cx="40" cy="42" r="5" fill="rgba(255,255,255,0.5)"></circle>
                    <circle cx="42" cy="43" r="2" fill="rgba(255,255,255,0.7)"></circle>

                    <!-- Stars floating around -->
                    <circle cx="18" cy="25" r="1.5" fill="#D4AF37" opacity="0.8"></circle>
                    <circle cx="82" cy="20" r="1" fill="#D4AF37" opacity="0.7"></circle>
                    <circle cx="85" cy="45" r="1.5" fill="#A890F0" opacity="0.9"></circle>
                    <circle cx="15" cy="55" r="1" fill="#A890F0" opacity="0.7"></circle>
                    <circle cx="25" cy="82" r="1.5" fill="#D4AF37" opacity="0.6"></circle>
                    <circle cx="78" cy="78" r="1" fill="#D4AF37" opacity="0.7"></circle>
                </svg>`;

sinisterArt["alpha-wolf"] = `<!-- SVG: The Iron-Crown Puppet Wolf King -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="alphaBg" cx="50%" cy="40%">
                            <stop offset="0%" stop-color="#FFF0EE"></stop>
                            <stop offset="100%" stop-color="#FFD8D0"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#alphaBg)"></circle>

                    <!-- Thick dominant strings — gold plated -->
                    <line x1="30" y1="0" x2="30" y2="18" stroke="#FFD700" stroke-width="2.5"></line>
                    <line x1="50" y1="0" x2="50" y2="12" stroke="#FFD700" stroke-width="2.5"></line>
                    <line x1="70" y1="0" x2="70" y2="18" stroke="#FFD700" stroke-width="2.5"></line>
                    <!-- Crossbar -->
                    <rect x="22" y="16" width="56" height="5" rx="2" fill="#C0392B"></rect>
                    <rect x="46" y="8" width="8" height="12" rx="2" fill="#C0392B"></rect>

                    <!-- Wolf King Body -->
                    <path d="M 28,70 L 35,38 L 50,48 L 65,38 L 72,70 L 60,98 L 40,98 Z" fill="#8B3030"></path>
                    <path d="M 34,68 L 40,42 L 50,50 L 60,42 L 66,68 L 57,92 L 43,92 Z" fill="#B04040"></path>

                    <!-- Iron Crown -->
                    <path d="M 32,38 L 34,28 L 38,34 L 42,22 L 50,30 L 58,22 L 62,34 L 66,28 L 68,38 Z" fill="#C0392B" stroke="#FFD700" stroke-width="1.5"></path>
                    <circle cx="42" cy="22" r="2.5" fill="#FFD700"></circle>
                    <circle cx="50" cy="30" r="3" fill="#FFD700"></circle>
                    <circle cx="58" cy="22" r="2.5" fill="#FFD700"></circle>

                    <!-- Glowing gold eyes -->
                    <ellipse cx="40" cy="50" rx="5" ry="4" fill="#FFD700"></ellipse>
                    <ellipse cx="60" cy="50" rx="5" ry="4" fill="#FFD700"></ellipse>
                    <circle cx="40" cy="50" r="2" fill="#5A1010"></circle>
                    <circle cx="60" cy="50" r="2" fill="#5A1010"></circle>

                    <!-- Broken chains -->
                    <path d="M 28,70 L 15,80 M 15,80 L 12,88 M 18,82 L 10,76" fill="none" stroke="#C0C0C0" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M 72,70 L 85,80 M 85,80 L 88,88 M 82,82 L 90,76" fill="none" stroke="#C0C0C0" stroke-width="2" stroke-linecap="round"></path>
                </svg>`;

sinisterArt["cupid"] = `<!-- SVG: Cupid Puppet Weaving Love Chains -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="cupidBg" cx="50%" cy="35%">
                            <stop offset="0%" stop-color="#FFE8F5"></stop>
                            <stop offset="100%" stop-color="#FFC8E0"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#cupidBg)"></circle>

                    <!-- Puppet strings (rose-pink) -->
                    <line x1="38" y1="0" x2="38" y2="16" stroke="#E8709A" stroke-width="1" stroke-dasharray="2,2"></line>
                    <line x1="62" y1="0" x2="62" y2="16" stroke="#E8709A" stroke-width="1" stroke-dasharray="2,2"></line>
                    <!-- Crossbar -->
                    <rect x="28" y="14" width="44" height="4" rx="2" fill="#D45C8A"></rect>

                    <!-- Wings (left) -->
                    <path d="M 30,38 C 5,25 5,50 20,48 C 10,52 12,65 28,55 Z" fill="#FFB6D0" stroke="#E8709A" stroke-width="1.5"></path>
                    <!-- Wings (right) -->
                    <path d="M 70,38 C 95,25 95,50 80,48 C 90,52 88,65 72,55 Z" fill="#FFB6D0" stroke="#E8709A" stroke-width="1.5"></path>

                    <!-- Cupid body -->
                    <ellipse cx="50" cy="52" rx="12" ry="15" fill="#F4A7C3"></ellipse>
                    <!-- Head -->
                    <circle cx="50" cy="32" r="12" fill="#FDDDE6" stroke="#E8709A" stroke-width="1.5"></circle>
                    <!-- Chubby cheeks -->
                    <circle cx="43" cy="35" r="4" fill="rgba(232,112,154,0.3)"></circle>
                    <circle cx="57" cy="35" r="4" fill="rgba(232,112,154,0.3)"></circle>
                    <!-- Eyes -->
                    <circle cx="46" cy="31" r="2" fill="#C85A8A"></circle>
                    <circle cx="54" cy="31" r="2" fill="#C85A8A"></circle>
                    <circle cx="47" cy="30" r="0.8" fill="white"></circle>
                    <circle cx="55" cy="30" r="0.8" fill="white"></circle>
                    <!-- Smile -->
                    <path d="M 45,37 Q 50,41 55,37" fill="none" stroke="#C85A8A" stroke-width="1.5" stroke-linecap="round"></path>

                    <!-- Bow -->
                    <path d="M 32,60 Q 40,50 50,62 Q 60,50 68,60" fill="none" stroke="#D45C8A" stroke-width="2" stroke-linecap="round"></path>
                    <!-- Arrow -->
                    <line x1="28" y1="68" x2="72" y2="55" stroke="#E8709A" stroke-width="2"></line>
                    <polygon points="72,55 66,52 68,59" fill="#C85A8A"></polygon>
                    <line x1="28" y1="68" x2="22" y2="71" stroke="#C85A8A" stroke-width="2"></line>
                    <!-- Heart on arrowhead area -->
                    <path d="M 70,48 C 70,45 74,45 74,48 C 74,51 70,53 70,53 C 70,53 66,51 66,48 C 66,45 70,45 70,48 Z" fill="#C0392B"></path>

                    <!-- Two small hearts = the linked couple -->
                    <path d="M 18,78 C 18,75 22,75 22,78 C 22,81 18,83 18,83 C 18,83 14,81 14,78 C 14,75 18,75 18,78 Z" fill="#E8709A" opacity="0.8"></path>
                    <path d="M 82,78 C 82,75 86,75 86,78 C 86,81 82,83 82,83 C 82,83 78,81 78,78 C 78,75 82,75 82,78 Z" fill="#E8709A" opacity="0.8"></path>
                    <!-- Love chain between them -->
                    <path d="M 22,80 Q 50,95 78,80" fill="none" stroke="#C85A8A" stroke-width="1" stroke-dasharray="3,2"></path>
                </svg>`;

sinisterArt["hunter"] = `<!-- SVG: The Iron Crossbow Puppet Marksman -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="hunterBg" cx="50%" cy="40%">
                            <stop offset="0%" stop-color="#EEF5E8"></stop>
                            <stop offset="100%" stop-color="#D5E8C0"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#hunterBg)"></circle>

                    <!-- Crosshair rings (target overlay) -->
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(62,107,47,0.15)" stroke-width="1"></circle>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(62,107,47,0.15)" stroke-width="1"></circle>
                    <line x1="50" y1="8" x2="50" y2="20" stroke="rgba(62,107,47,0.2)" stroke-width="1"></line>
                    <line x1="50" y1="80" x2="50" y2="92" stroke="rgba(62,107,47,0.2)" stroke-width="1"></line>
                    <line x1="8" y1="50" x2="20" y2="50" stroke="rgba(62,107,47,0.2)" stroke-width="1"></line>
                    <line x1="80" y1="50" x2="92" y2="50" stroke="rgba(62,107,47,0.2)" stroke-width="1"></line>

                    <!-- Puppet strings -->
                    <line x1="38" y1="0" x2="38" y2="14" stroke="#3E6B2F" stroke-width="1" stroke-dasharray="2,2"></line>
                    <line x1="62" y1="0" x2="62" y2="14" stroke="#3E6B2F" stroke-width="1" stroke-dasharray="2,2"></line>
                    <rect x="28" y="12" width="44" height="4" rx="2" fill="#5D8A3C"></rect>

                    <!-- Hunter cloak/body -->
                    <path d="M 30,75 L 36,42 L 50,52 L 64,42 L 70,75 L 55,98 L 45,98 Z" fill="#5A7A40"></path>
                    <path d="M 36,42 L 50,52 L 64,42 C 62,38 55,35 50,37 C 45,35 38,38 36,42 Z" fill="#4A6830"></path>

                    <!-- Head with hood -->
                    <circle cx="50" cy="30" r="13" fill="#8B6040"></circle>
                    <path d="M 36,32 C 34,22 40,14 50,14 C 60,14 66,22 64,32 Z" fill="#5A7A40"></path>

                    <!-- Face: determined eyes under shadow -->
                    <ellipse cx="44" cy="31" rx="3.5" ry="2.5" fill="#3E6B2F"></ellipse>
                    <ellipse cx="56" cy="31" rx="3.5" ry="2.5" fill="#3E6B2F"></ellipse>
                    <circle cx="44" cy="31" r="1.2" fill="#8FBC5A"></circle>
                    <circle cx="56" cy="31" r="1.2" fill="#8FBC5A"></circle>

                    <!-- Crossbow (held diagonally) -->
                    <rect x="28" y="58" width="44" height="5" rx="2" fill="#8B6040" transform="rotate(-15, 50, 60)"></rect>
                    <rect x="46" y="53" width="8" height="14" rx="1.5" fill="#A07840" transform="rotate(-15, 50, 60)"></rect>
                    <!-- Bowstring -->
                    <path d="M 30,52 Q 50,46 70,52" fill="none" stroke="#C8E6A0" stroke-width="1.5" transform="rotate(-15, 50, 55)"></path>
                    <!-- Arrow loaded -->
                    <line x1="34" y1="57" x2="72" y2="45" stroke="#8FBC5A" stroke-width="2"></line>
                    <polygon points="72,45 67,42 68,48" fill="#5D8A3C"></polygon>

                    <!-- Last-shot spark glow at tip -->
                    <circle cx="72" cy="45" r="4" fill="rgba(255,220,80,0.4)"></circle>
                    <circle cx="72" cy="45" r="2" fill="rgba(255,200,50,0.7)"></circle>
                </svg>`;

sinisterArt["guardian"] = `<!-- SVG: The Iron Shield Puppet Protector -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="guardianBg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#EEF5FC"></stop>
                            <stop offset="50%" stop-color="#C8DDF0"></stop>
                            <stop offset="100%" stop-color="#E8F4FF"></stop>
                        </linearGradient>
                        <linearGradient id="shieldGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                            <stop offset="0%" stop-color="#C8DDF0"></stop>
                            <stop offset="40%" stop-color="#4A7FA8"></stop>
                            <stop offset="100%" stop-color="#4A7FA8"></stop>
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#guardianBg)"></circle>

                    <!-- Puppet strings -->
                    <line x1="35" y1="0" x2="35" y2="14" stroke="#4A7FA8" stroke-width="1" stroke-dasharray="2,2"></line>
                    <line x1="65" y1="0" x2="65" y2="14" stroke="#4A7FA8" stroke-width="1" stroke-dasharray="2,2"></line>
                    <rect x="25" y="12" width="50" height="4" rx="2" fill="#4A7FA8"></rect>

                    <!-- Guardian body (broad, armored) -->
                    <path d="M 26,80 L 33,40 L 50,52 L 67,40 L 74,80 L 60,98 L 40,98 Z" fill="#4A7FA8"></path>
                    <!-- Armor plates -->  
                    <path d="M 33,40 L 50,52 L 67,40 L 62,35 L 50,45 L 38,35 Z" fill="#6A9FC8"></path>
                    <path d="M 38,60 L 50,67 L 62,60 L 60,75 L 50,80 L 40,75 Z" fill="#6A9FC8"></path>

                    <!-- Head -->
                    <circle cx="50" cy="28" r="13" fill="#7EB8D8"></circle>
                    <!-- Helmet visor -->
                    <path d="M 38,28 C 38,20 62,20 62,28 L 62,33 C 62,38 38,38 38,33 Z" fill="#4A7FA8"></path>
                    <line x1="38" y1="30" x2="62" y2="30" stroke="#A8C8E8" stroke-width="1"></line>
                    <!-- Eyes glow through visor -->
                    <ellipse cx="44" cy="30" rx="3" ry="2" fill="#A8C8E8" opacity="0.8"></ellipse>
                    <ellipse cx="56" cy="30" rx="3" ry="2" fill="#A8C8E8" opacity="0.8"></ellipse>

                    <!-- Giant shield (front, held) -->
                    <path d="M 14,38 C 14,28 22,24 22,24 L 22,72 C 22,80 14,75 14,65 Z" fill="url(#shieldGrad)" stroke="#A8C8E8" stroke-width="1.5"></path>
                    <!-- Shield crest -->
                    <path d="M 14,46 C 14,43 22,43 22,46 C 22,52 18,55 18,55 C 18,55 14,52 14,46 Z" fill="#D4AF37" opacity="0.8"></path>
                    <!-- Shield shine -->
                    <line x1="16" y1="30" x2="16" y2="55" stroke="rgba(255,255,255,0.3)" stroke-width="2" stroke-linecap="round"></line>

                    <!-- Small protected figure peeking behind -->
                    <circle cx="75" cy="55" r="6" fill="#E8F4FF" stroke="#4A7FA8" stroke-width="1"></circle>
                    <path d="M 69,65 Q 75,60 81,65 L 82,80 L 68,80 Z" fill="#E8F4FF" stroke="#4A7FA8" stroke-width="1"></path>
                    <!-- Scared eyes -->
                    <circle cx="73" cy="54" r="1.5" fill="#4A7FA8"></circle>
                    <circle cx="77" cy="54" r="1.5" fill="#4A7FA8"></circle>
                </svg>`;

sinisterArt["witch"] = `<!-- SVG: Witch Puppet Alchemist with Two Vials -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="witchBg" cx="30%" cy="30%">
                            <stop offset="0%" stop-color="#E8F8EE"></stop>
                            <stop offset="100%" stop-color="#B8E8C8"></stop>
                        </radialGradient>
                        <radialGradient id="cauldronGlow" cx="50%" cy="80%">
                            <stop offset="0%" stop-color="rgba(46,204,113,0.4)"></stop>
                            <stop offset="100%" stop-color="transparent"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#witchBg)"></circle>

                    <!-- Floating bubble particles -->
                    <circle cx="15" cy="30" r="3" fill="none" stroke="#27AE60" stroke-width="1" opacity="0.5"></circle>
                    <circle cx="82" cy="25" r="2" fill="none" stroke="#27AE60" stroke-width="1" opacity="0.6"></circle>
                    <circle cx="10" cy="65" r="2.5" fill="none" stroke="#2ECC71" stroke-width="1" opacity="0.4"></circle>
                    <circle cx="88" cy="60" r="2" fill="none" stroke="#2ECC71" stroke-width="1" opacity="0.5"></circle>
                    <circle cx="25" cy="18" r="1.5" fill="rgba(46,204,113,0.3)"></circle>
                    <circle cx="75" cy="15" r="2" fill="rgba(46,204,113,0.3)"></circle>

                    <!-- Puppet strings -->
                    <line x1="38" y1="0" x2="38" y2="14" stroke="#27AE60" stroke-width="1" stroke-dasharray="2,2"></line>
                    <line x1="62" y1="0" x2="62" y2="14" stroke="#27AE60" stroke-width="1" stroke-dasharray="2,2"></line>
                    <rect x="28" y="12" width="44" height="4" rx="2" fill="#1E6640"></rect>

                    <!-- Witch cloak body -->
                    <path d="M 28,78 L 34,44 Q 50,56 66,44 L 72,78 L 62,100 L 38,100 Z" fill="#2E7D52"></path>
                    <!-- Cloak detail lines -->
                    <path d="M 34,55 Q 50,63 66,55" fill="none" stroke="#A8F0C0" stroke-width="1.2" opacity="0.7"></path>
                    <path d="M 31,65 Q 50,72 69,65" fill="none" stroke="#A8F0C0" stroke-width="1" opacity="0.5"></path>

                    <!-- Head + Witch hat -->
                    <circle cx="50" cy="32" r="11" fill="#6DBF8A"></circle>
                    <!-- Hat brim -->
                    <ellipse cx="50" cy="24" rx="16" ry="3.5" fill="#1E6640"></ellipse>
                    <!-- Hat cone -->
                    <path d="M 42,24 L 50,2 L 58,24 Z" fill="#1E6640"></path>
                    <!-- Hat band -->
                    <rect x="42" y="21" width="16" height="3" fill="#A8F0C0"></rect>
                    <!-- Eyes -->
                    <circle cx="45" cy="33" r="2.5" fill="#D4F5C8"></circle>
                    <circle cx="55" cy="33" r="2.5" fill="#D4F5C8"></circle>
                    <circle cx="45" cy="33" r="1" fill="#1E6640"></circle>
                    <circle cx="55" cy="33" r="1" fill="#1E6640"></circle>
                    <!-- Sinister smile -->
                    <path d="M 44,38 Q 50,43 56,38" fill="none" stroke="#D4F5C8" stroke-width="1.5" stroke-linecap="round"></path>

                    <!-- Life Potion (gold, left hand) -->
                    <rect x="20" y="55" width="9" height="14" rx="3" fill="#F0C040" opacity="0.95"></rect>
                    <rect x="22" y="53" width="5" height="4" rx="1" fill="#C8980A"></rect>
                    <circle cx="24" cy="47" r="3" fill="#F0C040"></circle>
                    <!-- Shimmer in potion -->
                    <ellipse cx="23" cy="60" rx="2" ry="4" fill="rgba(255,240,150,0.5)"></ellipse>
                    <text x="24" y="68" font-size="5" text-anchor="middle" fill="#3A5C28" font-family="serif">+</text>

                    <!-- Death Poison (teal-green, right hand) -->
                    <rect x="71" y="55" width="9" height="14" rx="3" fill="#3EC878" opacity="0.95"></rect>
                    <rect x="73" y="53" width="5" height="4" rx="1" fill="#27AE60"></rect>
                    <circle cx="75" cy="47" r="3" fill="#A8F0C0"></circle>
                    <!-- Toxic swirl inside -->
                    <path d="M 73,60 Q 76,57 79,62 Q 76,65 73,62 Z" fill="rgba(20,120,60,0.4)"></path>
                    <text x="75" y="68" font-size="6" text-anchor="middle" fill="#1E6640" font-family="serif">☠</text>

                    <!-- Cauldron bottom glow -->
                    <ellipse cx="50" cy="92" rx="18" ry="6" fill="url(#cauldronGlow)"></ellipse>
                    <path d="M 34,92 Q 50,86 66,92 L 64,100 L 36,100 Z" fill="#27AE60"></path>
                    <!-- Bubbles from cauldron -->
                    <circle cx="44" cy="88" r="2" fill="none" stroke="#2ECC71" stroke-width="1"></circle>
                    <circle cx="54" cy="85" r="1.5" fill="none" stroke="#2ECC71" stroke-width="1"></circle>
                </svg>`;

sinisterArt["wizard"] = `<!-- SVG: The Arcane Sigil Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="wizardBg" cx="50%" cy="50%">
                            <stop offset="0%" stop-color="#FFF8DC"></stop>
                            <stop offset="100%" stop-color="#F5DEB3"></stop>
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#wizardBg)"></circle>

                    <!-- Background magic runes -->
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(210,180,140,0.4)" stroke-width="1.5" stroke-dasharray="4,4"></circle>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(210,180,140,0.2)" stroke-width="1"></circle>
                    
                    <path d="M 50,15 L 55,25 L 65,30 L 55,35 L 50,45 L 45,35 L 35,30 L 45,25 Z" fill="rgba(210,180,140,0.3)"></path>

                    <!-- Puppet strings -->
                    <line x1="35" y1="0" x2="35" y2="18" stroke="#CD853F" stroke-width="1.2" stroke-dasharray="2,2"></line>
                    <line x1="65" y1="0" x2="65" y2="18" stroke="#CD853F" stroke-width="1.2" stroke-dasharray="2,2"></line>
                    <rect x="25" y="15" width="50" height="5" rx="2" fill="#8B4513"></rect>

                    <!-- Wizard Robes -->
                    <path d="M 28,85 L 35,50 L 50,40 L 65,50 L 72,85 L 60,100 L 40,100 Z" fill="#D2691E"></path>
                    <path d="M 35,50 L 50,65 L 65,50 C 62,45 55,42 50,40 C 45,42 38,45 35,50 Z" fill="#A0522D"></path>
                    
                    <!-- Robe details -->
                    <line x1="40" y1="85" x2="40" y2="100" stroke="#CD853F" stroke-width="1"></line>
                    <line x1="60" y1="85" x2="60" y2="100" stroke="#CD853F" stroke-width="1"></line>

                    <!-- Head & Pointy Hat -->
                    <circle cx="50" cy="30" r="12" fill="#DEB887"></circle>
                    
                    <!-- Classic Wizard Hat -->
                    <path d="M 30,25 C 40,28 60,28 70,25 L 68,28 C 55,32 45,32 32,28 Z" fill="#8B4513"></path>
                    <path d="M 36,26 L 45,5 L 55,10 L 64,26 Z" fill="#8B4513"></path>
                    <path d="M 45,5 L 55,10 L 58,18 L 47,20 Z" fill="#A0522D"></path> <!-- Hat crease highlight -->
                    
                    <!-- Hat stars -->
                    <polygon points="50,12 52,15 56,15 53,17 54,21 50,18 46,21 47,17 44,15 48,15" fill="#FFD700" transform="scale(0.5) translate(50, 10)"></polygon>

                    <!-- Facial features (Old wise eyes) -->
                    <ellipse cx="44" cy="32" rx="3" ry="2" fill="#8B4513"></ellipse>
                    <ellipse cx="56" cy="32" rx="3" ry="2" fill="#8B4513"></ellipse>
                    <!-- Bushy white brows/beard -->
                    <path d="M 40,28 Q 45,26 48,29" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M 52,29 Q 55,26 60,28" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M 42,38 Q 50,55 58,38" fill="#FFF" opacity="0.9"></path>
                    
                    <!-- Glowing magic from hands -->
                    <circle cx="28" cy="65" r="8" fill="rgba(255,215,0,0.5)"></circle>
                    <circle cx="28" cy="65" r="4" fill="#FFD700"></circle>
                    <circle cx="72" cy="65" r="8" fill="rgba(255,215,0,0.5)"></circle>
                    <circle cx="72" cy="65" r="4" fill="#FFD700"></circle>

                    <!-- Conjured Arcane Flame in middle -->
                    <path d="M 50,75 C 40,75 45,60 50,55 C 55,60 60,75 50,75 Z" fill="#FF8C00" opacity="0.8"></path>
                    <path d="M 50,72 C 45,72 47,65 50,60 C 53,65 55,72 50,72 Z" fill="#FFD700"></path>
                    
                    <!-- Stardust -->
                    <circle cx="45" cy="50" r="1.5" fill="#FFF"></circle>
                    <circle cx="55" cy="50" r="1.5" fill="#FFF"></circle>
                    <circle cx="50" cy="45" r="2" fill="#FFF"></circle>

                </svg>`;

sinisterArt["veteran"] = `<!-- SVG: The Scarred Iron Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="vetIron" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#BDC3C7"></stop>
                            <stop offset="50%" stop-color="#95A5A6"></stop>
                            <stop offset="100%" stop-color="#7F8C8D"></stop>
                        </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Battle Scars -->
                    <path d="M 15,30 L 35,45" fill="none" stroke="rgba(127,140,141,0.3)" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M 80,70 L 65,85" fill="none" stroke="rgba(127,140,141,0.3)" stroke-width="1.5" stroke-linecap="round"></path>
                    <path d="M 75,20 L 85,25" fill="none" stroke="rgba(127,140,141,0.3)" stroke-width="2" stroke-linecap="round"></path>

                    <!-- Heavy Iron Strings (chain link style) -->
                    <line x1="38" y1="0" x2="38" y2="16" stroke="#7F8C8D" stroke-width="2" stroke-dasharray="3,1"></line>
                    <line x1="62" y1="0" x2="62" y2="16" stroke="#7F8C8D" stroke-width="2" stroke-dasharray="3,1"></line>
                    <!-- Steel Crossbar -->
                    <rect x="25" y="14" width="50" height="6" rx="1" fill="#5D6D7E"></rect>
                    <line x1="25" y1="17" x2="75" y2="17" stroke="#CACFD2" stroke-width="1.5"></line>

                    <!-- Broad Shoulders & Trench Coat -->
                    <path d="M 24,85 L 32,45 L 50,55 L 68,45 L 76,85 L 60,100 L 40,100 Z" fill="#34495E"></path>
                    <path d="M 32,45 L 50,58 L 68,45 C 65,40 55,38 50,38 C 45,38 35,40 32,45 Z" fill="#2C3E50"></path>
                    <!-- Coat Collar -->
                    <path d="M 32,45 Q 40,65 50,55 Q 60,65 68,45" fill="none" stroke="#7F8C8D" stroke-width="2"></path>
                    <path d="M 40,85 L 40,100 M 60,85 L 60,100" stroke="#5D6D7E" stroke-width="1.5"></path>

                    <!-- Veteran Iron Helmet -->
                    <path d="M 35,32 C 35,15 65,15 65,32 L 65,40 C 65,45 35,45 35,40 Z" fill="url(#vetIron)"></path>
                    <path d="M 33,32 C 33,20 67,20 67,32" fill="none" stroke="#CACFD2" stroke-width="2"></path> <!-- Helmet Rim -->
                    
                    <!-- Giant jagged scar over helmet -->
                    <path d="M 45,18 L 48,25 L 45,30 L 52,38" fill="none" stroke="#C0392B" stroke-width="1.5" stroke-linecap="round"></path>

                    <!-- Face under helmet (shadowed but visible) -->
                    <path d="M 38,40 Q 50,50 62,40 L 60,48 Q 50,55 40,48 Z" fill="#AAB7B8"></path>
                    
                    <!-- Weary but sharp eyes -->
                    <ellipse cx="44" cy="42" rx="3.5" ry="2" fill="#2C3E50"></ellipse>
                    <ellipse cx="56" cy="42" rx="3.5" ry="2" fill="#2C3E50"></ellipse>
                    <circle cx="44" cy="42" r="1.2" fill="#EC7063"></circle>
                    <circle cx="56" cy="42" r="1.2" fill="#EC7063"></circle>
                    
                    <!-- Glowing alert aura in center of chest -->
                    <circle cx="50" cy="70" r="12" fill="rgba(231,76,60,0.15)"></circle>
                    <circle cx="50" cy="70" r="5" fill="#E74C3C"></circle>
                    <circle cx="50" cy="70" r="2" fill="#FFF"></circle>
                    
                    <!-- Floating Alert Sparks -->
                    <circle cx="65" cy="65" r="1.5" fill="#E74C3C"></circle>
                    <circle cx="35" cy="75" r="1.5" fill="#E74C3C"></circle>

                </svg>`;

sinisterArt["bodyguard"] = `<!-- SVG: The Heavy Gauntlet Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bgIron" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#D5DBDB"></stop>
                            <stop offset="100%" stop-color="#99A3A4"></stop>
                        </linearGradient>
                        <radialGradient id="impactGlow" cx="50%" cy="50%">
                            <stop offset="0%" stop-color="rgba(220,118,51,0.5)"></stop>
                            <stop offset="100%" stop-color="transparent"></stop>
                        </radialGradient>
                    </defs>

                    <!-- Background Impact Flash -->
                    <circle cx="50" cy="50" r="45" fill="url(#impactGlow)"></circle>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(211,84,0,0.2)" stroke-width="2"></circle>
                    <path d="M 50,15 L 50,85 M 15,50 L 85,50 M 25,25 L 75,75 M 25,75 L 75,25" stroke="rgba(211,84,0,0.15)" stroke-width="1.5" stroke-dasharray="4,4"></path>

                    <!-- Puppet Strings (Reinforced Steel) -->
                    <line x1="32" y1="0" x2="32" y2="18" stroke="#873600" stroke-width="2" stroke-dasharray="4,2"></line>
                    <line x1="68" y1="0" x2="68" y2="18" stroke="#873600" stroke-width="2" stroke-dasharray="4,2"></line>
                    <line x1="50" y1="0" x2="50" y2="14" stroke="#873600" stroke-width="3"></line>
                    
                    <!-- Double Crossbar -->
                    <rect x="25" y="14" width="50" height="4" rx="2" fill="#6E2C00"></rect>
                    <rect x="28" y="18" width="44" height="2" fill="#BA4A00"></rect>

                    <!-- Massive Body & Armor (Copper/Bronze) -->
                    <!-- Chest Block -->
                    <path d="M 35,42 L 65,42 L 70,65 L 60,85 L 40,85 L 30,65 Z" fill="#D35400"></path>
                    <path d="M 40,42 L 60,42 L 65,60 L 58,80 L 42,80 L 35,60 Z" fill="#BA4A00"></path>
                    
                    <!-- Core Reactor / Shield Generator in chest -->
                    <circle cx="50" cy="55" r="8" fill="#FDEBD0" stroke="#873600" stroke-width="2"></circle>
                    <circle cx="50" cy="55" r="4" fill="#E67E22"></circle>

                    <!-- Head (Squared off, sturdy visor) -->
                    <path d="M 38,25 C 38,20 62,20 62,25 L 62,40 L 38,40 Z" fill="url(#bgIron)" stroke="#7B7D7D" stroke-width="1.5"></path>
                    <rect x="42" y="30" width="16" height="4" rx="1" fill="#2C3E50"></rect>
                    <rect x="44" y="31" width="12" height="2" fill="#F39C12"></rect> <!-- Glowing Visor Slit -->

                    <!-- Massive Gauntlet Arms (Crossed defensively in front) -->
                    <!-- Left Gauntlet -->
                    <path d="M 25,60 C 25,50 35,45 42,48 L 55,65 Q 50,75 40,75 Q 30,70 25,60 Z" fill="url(#bgIron)" stroke="#873600" stroke-width="1.5"></path>
                    <path d="M 30,55 L 45,65 M 35,52 L 48,60 M 28,62 L 40,70" stroke="#7B7D7D" stroke-width="1.5"></path> <!-- Plating lines -->
                    
                    <!-- Right Gauntlet -->
                    <path d="M 75,60 C 75,50 65,45 58,48 L 45,65 Q 50,75 60,75 Q 70,70 75,60 Z" fill="url(#bgIron)" stroke="#873600" stroke-width="1.5"></path>
                    <path d="M 70,55 L 55,65 M 65,52 L 52,60 M 72,62 L 60,70" stroke="#7B7D7D" stroke-width="1.5"></path> <!-- Plating lines -->
                    
                    <!-- Front Shield plating on gauntlets -->
                    <circle cx="38" cy="62" r="5" fill="#E67E22" stroke="#873600" stroke-width="1.5"></circle>
                    <circle cx="62" cy="62" r="5" fill="#E67E22" stroke="#873600" stroke-width="1.5"></circle>

                    <!-- Impact Spark at center where gauntlets meet -->
                    <circle cx="50" cy="63" r="10" fill="rgba(253,235,208,0.6)"></circle>
                    <polygon points="50,55 52,61 60,63 52,65 50,71 48,65 40,63 48,61" fill="#F39C12"></polygon>
                </svg>`;

sinisterArt["priest"] = `<!-- SVG: The Stained Glass Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <!-- Stained glass arch background -->
                    <path d="M 15,60 L 15,35 C 15,10 85,10 85,35 L 85,60 Z" fill="#EBF5FB" stroke="#D4AF37" stroke-width="1.5"></path>
                    <path d="M 25,60 L 25,35 C 25,18 75,18 75,35 L 75,60 Z" fill="#D6EAF8" stroke="#D4AF37" stroke-width="1.5"></path>
                    <path d="M 35,60 L 35,35 C 35,25 65,25 65,35 L 65,60 Z" fill="#AED6F1" stroke="#D4AF37" stroke-width="1.5"></path>
                    
                    <!-- Stained glass sunbeams -->
                    <polygon points="50,25 45,60 55,60" fill="rgba(241,196,15,0.2)"></polygon>
                    <polygon points="50,25 25,45 30,55" fill="rgba(241,196,15,0.15)"></polygon>
                    <polygon points="50,25 75,45 70,55" fill="rgba(241,196,15,0.15)"></polygon>

                    <!-- Puppet Strings (Golden light) -->
                    <line x1="38" y1="0" x2="38" y2="25" stroke="#F1C40F" stroke-width="1.5" stroke-dasharray="3,1"></line>
                    <line x1="62" y1="0" x2="62" y2="25" stroke="#F1C40F" stroke-width="1.5" stroke-dasharray="3,1"></line>

                    <!-- Priest Puppet Silhouette (Ivory and Gold) -->
                    <!-- Robes -->
                    <path d="M 25,85 L 35,45 L 50,35 L 65,45 L 75,85 L 60,100 L 40,100 Z" fill="#FDFEFE" stroke="#D4AF37" stroke-width="1.5"></path>
                    <path d="M 38,50 L 50,65 L 62,50" fill="none" stroke="#D4AF37" stroke-width="1.5"></path>
                    
                    <!-- Golden stole (selendang) -->
                    <path d="M 40,45 L 43,85 M 60,45 L 57,85" stroke="#F1C40F" stroke-width="3"></path>
                    <path d="M 40,45 L 43,85 M 60,45 L 57,85" fill="none" stroke="#B7950B" stroke-width="1" stroke-dasharray="2,5"></path>

                    <!-- Head & Mitre (Priest Hat) -->
                    <circle cx="50" cy="30" r="11" fill="#F5CBA7" stroke="#D4AF37" stroke-width="1"></circle>
                    
                    <!-- The Mitre (Hat) -->
                    <path d="M 38,28 L 50,8 L 62,28 Z" fill="#FDFEFE" stroke="#D4AF37" stroke-width="1.5"></path>
                    <path d="M 38,28 L 50,15 L 62,28" fill="none" stroke="#F1C40F" stroke-width="1.5"></path>
                    <line x1="50" y1="12" x2="50" y2="28" stroke="#F1C40F" stroke-width="1.5"></line>

                    <!-- Ascending Holy Light (Halo ring) -->
                    <circle cx="50" cy="22" r="16" fill="none" stroke="rgba(241,196,15,0.4)" stroke-width="2"></circle>
                    <circle cx="50" cy="22" r="14" fill="none" stroke="rgba(241,196,15,0.2)" stroke-width="4"></circle>

                    <!-- Raised Hands / Prayer -->
                    <path d="M 25,85 C 20,65 30,55 35,50" fill="none" stroke="#FDFEFE" stroke-width="5" stroke-linecap="round"></path>
                    <path d="M 75,85 C 80,65 70,55 65,50" fill="none" stroke="#FDFEFE" stroke-width="5" stroke-linecap="round"></path>
                    
                    <!-- Holy Holy Water / Orb in hands -->
                    <circle cx="35" cy="50" r="4" fill="#FDFEFE" stroke="#D4AF37" stroke-width="1"></circle>
                    <circle cx="65" cy="50" r="4" fill="#FDFEFE" stroke="#D4AF37" stroke-width="1"></circle>
                    
                    <!-- Sparks of light dropping from hands -->
                    <circle cx="35" cy="40" r="2" fill="#F1C40F"></circle>
                    <circle cx="32" cy="45" r="1.5" fill="#F1C40F"></circle>
                    <circle cx="65" cy="40" r="2" fill="#F1C40F"></circle>
                    <circle cx="68" cy="45" r="1.5" fill="#F1C40F"></circle>

                    <!-- Eyes (Closed, peaceful) -->
                    <path d="M 44,30 Q 46,32 48,30" fill="none" stroke="#873600" stroke-width="1" stroke-linecap="round"></path>
                    <path d="M 52,30 Q 54,32 56,30" fill="none" stroke="#873600" stroke-width="1" stroke-linecap="round"></path>

                </svg>`;

sinisterArt["mayor"] = `<!-- SVG: The Gilded Top-Hat Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Starburst (handled mostly by CSS, but added a subtle golden glow center) -->
                    <circle cx="50" cy="50" r="30" fill="rgba(241,196,15,0.2)"></circle>

                    <!-- Thick Golden Strings / VIP Strings -->
                    <line x1="35" y1="0" x2="35" y2="25" stroke="#F1C40F" stroke-width="2" stroke-dasharray="5,2"></line>
                    <line x1="65" y1="0" x2="65" y2="25" stroke="#F1C40F" stroke-width="2" stroke-dasharray="5,2"></line>
                    <rect x="25" y="10" width="50" height="5" rx="1.5" fill="#154360"></rect>
                    <rect x="25" y="10" width="50" height="2" rx="1" fill="#2980B9"></rect>

                    <!-- Mayor Body (Fat, well-dressed, pompous) -->
                    <ellipse cx="50" cy="70" rx="20" ry="25" fill="#154360"></ellipse>
                    <!-- Silk Waistcoat -->
                    <ellipse cx="50" cy="70" rx="12" ry="25" fill="#FDFEFE"></ellipse>
                    <path d="M 50,45 L 38,70 L 50,95 L 62,70 Z" fill="#F1C40F" opacity="0.2"></path>
                    
                    <!-- Buttons on waistcoat -->
                    <circle cx="50" cy="55" r="1.5" fill="#F39C12"></circle>
                    <circle cx="50" cy="65" r="1.5" fill="#F39C12"></circle>
                    <circle cx="50" cy="75" r="1.5" fill="#F39C12"></circle>
                    <circle cx="50" cy="85" r="1.5" fill="#F39C12"></circle>

                    <!-- Red sash (Sempal Miring) -->
                    <path d="M 33,52 L 40,48 L 65,85 L 58,90 Z" fill="#C0392B"></path>
                    <line x1="33" y1="52" x2="65" y2="85" stroke="#F1C40F" stroke-width="1"></line>

                    <!-- Golden Monocle Chain -->
                    <path d="M 55,30 Q 65,40 60,55" fill="none" stroke="#F1C40F" stroke-width="1" stroke-dasharray="1.5,1.5"></path>

                    <!-- Big Top Hat -->
                    <path d="M 30,23 L 70,23 L 68,26 L 32,26 Z" fill="#154360"></path> <!-- Brim -->
                    <path d="M 38,23 L 42,2 L 58,2 L 62,23 Z" fill="#154360"></path> <!-- Crown -->
                    <rect x="39" y="18" width="22" height="5" fill="#C0392B"></rect> <!-- Red Hat Band -->
                    <circle cx="50" cy="20" r="3" fill="#F1C40F"></circle> <!-- Gold Pin on hat -->

                    <!-- Face & Head -->
                    <circle cx="50" cy="32" r="12" fill="#FAD7A1"></circle>
                    
                    <!-- Elegant Mustache -->
                    <path d="M 50,35 Q 40,32 35,38 Q 40,38 45,35" fill="#2C3E50"></path>
                    <path d="M 50,35 Q 60,32 65,38 Q 60,38 55,35" fill="#2C3E50"></path>

                    <!-- Eyes & Monocle -->
                    <ellipse cx="45" cy="30" rx="1.5" ry="2" fill="#154360"></ellipse>
                    <circle cx="55" cy="30" r="4" fill="rgba(133,193,233,0.4)" stroke="#F1C40F" stroke-width="1.5"></circle> <!-- Monocle -->
                    <ellipse cx="55" cy="30" rx="1.5" ry="2" fill="#154360"></ellipse>

                    <!-- Scroll / Proclamation in Hand -->
                    <rect x="68" y="50" width="16" height="35" rx="2" fill="#FEF9E7" transform="rotate(-15, 68, 50)" stroke="#D4AC0D" stroke-width="1"></rect>
                    <line x1="70" y1="55" x2="80" y2="55" stroke="#D4AC0D" stroke-width="1" transform="rotate(-15, 68, 50)"></line>
                    <line x1="70" y1="60" x2="82" y2="60" stroke="#D4AC0D" stroke-width="1" transform="rotate(-15, 68, 50)"></line>
                    <line x1="70" y1="65" x2="78" y2="65" stroke="#D4AC0D" stroke-width="1" transform="rotate(-15, 68, 50)"></line>
                    <!-- Wax Seal on Scroll -->
                    <circle cx="76" cy="74" r="3" fill="#C0392B" transform="rotate(-15, 68, 50)"></circle>
                    <circle cx="76" cy="74" r="1" fill="#FDFEFE" transform="rotate(-15, 68, 50)"></circle>
                    
                    <!-- Left hand raised in speech -->
                    <circle cx="30" cy="55" r="5" fill="#FAD7A1"></circle>

                </svg>`;

sinisterArt["sheriff"] = `<!-- SVG: The Silver Star Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Setting Sun Glow -->
                    <circle cx="50" cy="60" r="35" fill="rgba(253,235,208,0.3)"></circle>
                    <circle cx="50" cy="65" r="20" fill="rgba(253,235,208,0.5)"></circle>

                    <!-- Puppet Strings (Leather cords) -->
                    <line x1="33" y1="0" x2="33" y2="28" stroke="#6E2C00" stroke-width="1.5" stroke-dasharray="4,2"></line>
                    <line x1="67" y1="0" x2="67" y2="28" stroke="#6E2C00" stroke-width="1.5" stroke-dasharray="4,2"></line>
                    <rect x="25" y="15" width="50" height="4" rx="2" fill="#5D6D7E"></rect>
                    <rect x="30" y="11" width="40" height="3" fill="#873600"></rect>

                    <!-- Body / Leather Duster Coat -->
                    <path d="M 28,95 L 35,50 L 50,45 L 65,50 L 72,95 Z" fill="#935116"></path>
                    <path d="M 33,52 L 40,80 M 67,52 L 60,80" stroke="#6E2C00" stroke-width="2"></path> <!-- Coat seams -->
                    
                    <!-- Vest underneath -->
                    <path d="M 40,55 L 50,45 L 60,55 L 55,75 L 45,75 Z" fill="#D35400"></path>
                    <line x1="50" y1="45" x2="50" y2="75" stroke="#BA4A00" stroke-width="1.5"></line>
                    <circle cx="50" cy="55" r="1.5" fill="#F1C40F"></circle>
                    <circle cx="50" cy="65" r="1.5" fill="#F1C40F"></circle>

                    <!-- THE SILVER STAR BADGE (Left Chest) -->
                    <g transform="translate(42, 52) scale(0.6)">
                        <polygon points="5,0 6.5,3.5 10,3.5 7.5,6 8.5,10 5,7.5 1.5,10 2.5,6 0,3.5 3.5,3.5" fill="#FDFEFE" stroke="#5D6D7E" stroke-width="0.5"></polygon>
                        <circle cx="5" cy="5" r="0.5" fill="#5D6D7E"></circle>
                    </g>

                    <!-- Red Bandana -->
                    <path d="M 38,40 Q 50,55 62,40 Q 50,45 38,40 Z" fill="#C0392B"></path>
                    <path d="M 38,40 L 35,48 L 42,42 Z" fill="#C0392B"></path> <!-- Bandana knot -->
                    <path d="M 45,45 Q 50,50 55,45" fill="none" stroke="#922B21" stroke-width="1"></path>

                    <!-- Head & Cowboy Hat -->
                    <circle cx="50" cy="32" r="11" fill="#F5CBA7"></circle>
                    
                    <!-- The Hat -->
                    <path d="M 25,28 Q 50,22 75,28 Q 80,32 65,26 Q 50,20 35,26 Q 20,32 25,28 Z" fill="#6E2C00"></path> <!-- Wide Brim -->
                    <path d="M 38,25 L 42,8 Q 50,5 58,8 L 62,25 Z" fill="#873600"></path> <!-- Crown -->
                    <rect x="39" y="21" width="22" height="4" fill="#3E2723"></rect> <!-- Hat Band -->
                    
                    <!-- Facial Features (Tough look) -->
                    <path d="M 42,30 Q 45,31 46,29" fill="none" stroke="#6E2C00" stroke-width="1.5"></path> <!-- Eyebrow L -->
                    <path d="M 58,30 Q 55,31 54,29" fill="none" stroke="#6E2C00" stroke-width="1.5"></path> <!-- Eyebrow R -->
                    <circle cx="44" cy="32" r="1.5" fill="#154360"></circle>
                    <circle cx="56" cy="32" r="1.5" fill="#154360"></circle>

                    <!-- Gun in right hand (Left side of viewer) -->
                    <!-- Hand -->
                    <circle cx="28" cy="65" r="5" fill="#F5CBA7"></circle>
                    <!-- Revolver -->
                    <rect x="18" y="62" width="12" height="4" rx="1" fill="#BDC3C7"></rect> <!-- Barrel -->
                    <rect x="25" y="60" width="5" height="8" rx="1" fill="#7F8C8D"></rect> <!-- Cylinder -->
                    <path d="M 30,62 L 35,68 L 32,71 L 28,66 Z" fill="#6E2C00"></path> <!-- Wooden Grip -->
                    <circle cx="20" cy="61" r="0.5" fill="#34495E"></circle> <!-- Sight -->
                    
                    <!-- Gunsmoke -->
                    <circle cx="15" cy="58" r="3" fill="none" stroke="rgba(253,254,254,0.6)" stroke-width="1.5"></circle>
                    <circle cx="12" cy="55" r="2" fill="none" stroke="rgba(253,254,254,0.5)" stroke-width="1"></circle>
                    <circle cx="8" cy="52" r="1.5" fill="none" stroke="rgba(253,254,254,0.3)" stroke-width="1"></circle>

                </svg>`;

sinisterArt["villager-2"] = `<!-- SVG: The Torchbearer Pawn -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Ambient Torchlight Background -->
                    <circle cx="70" cy="55" r="30" fill="rgba(243,156,18,0.15)"></circle>
                    <circle cx="70" cy="55" r="15" fill="rgba(243,156,18,0.25)"></circle>

                    <!-- Strings -->
                    <line x1="50" y1="0" x2="50" y2="40" stroke="#8C9EAB" stroke-width="1.5"></line>
                    <line x1="30" y1="0" x2="35" y2="60" stroke="#8C9EAB" stroke-width="1"></line>
                    <line x1="75" y1="0" x2="65" y2="55" stroke="#E67E22" stroke-width="1"></line> <!-- Right string lit by fire -->

                    <!-- Pawn Body -->
                    <path d="M 40,60 C 40,50 60,50 60,60 L 65,95 C 65,100 35,100 35,95 Z" fill="#5B8EC4"></path>
                    <path d="M 45,60 Q 48,75 42,95 M 55,60 Q 52,75 58,95" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"></path>
                    
                    <!-- Firelight Reflection on right side of body -->
                    <path d="M 58,58 L 65,95 C 65,100 55,100 50,95 L 50,60 Z" fill="#F39C12" opacity="0.3"></path>

                    <!-- Blank Head -->
                    <circle cx="50" cy="40" r="16" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2.5"></circle>
                    <circle cx="50" cy="40" r="13" fill="none" stroke="rgba(91,142,196,0.2)" stroke-width="1"></circle>
                    <!-- Head reflection -->
                    <path d="M 50,24 A 16 16 0 0 1 66,40 A 16 16 0 0 1 50,56 Z" fill="#F39C12" opacity="0.2"></path>
                    
                    <!-- Hand (Left - natural) -->
                    <circle cx="35" cy="60" r="5" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2"></circle>
                    
                    <!-- Hand (Right - holding torch) -->
                    <circle cx="65" cy="65" r="5" fill="#F4F1EA" stroke="#E67E22" stroke-width="2"></circle>

                    <!-- The Torch -->
                    <rect x="63" y="45" width="4" height="25" fill="#873600" rx="1"></rect>
                    <!-- Fire Base -->
                    <path d="M 60,45 Q 65,35 70,45 Z" fill="#D35400"></path>
                    <!-- Main Flame -->
                    <path d="M 61,44 Q 65,25 72,40 Q 68,48 61,44 Z" fill="#F39C12"></path>
                    <path d="M 63,44 Q 65,30 68,40 Q 66,46 63,44 Z" fill="#F1C40F"></path>
                    <!-- Fire Sparks -->
                    <circle cx="65" cy="22" r="1.5" fill="#F1C40F"></circle>
                    <circle cx="70" cy="28" r="1" fill="#F39C12"></circle>
                    <circle cx="58" cy="30" r="1.5" fill="#F39C12"></circle>

                </svg>`;

sinisterArt["villager-3"] = `<!-- SVG: The Pitchfork Pawn -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Ambient Wheat Field background element -->
                    <path d="M 10,80 L 15,60 L 20,80 M 80,80 L 85,60 L 90,80 M 25,85 L 30,65 L 35,85 M 65,85 L 70,65 L 75,85" stroke="#F1C40F" stroke-width="1.5" fill="none" opacity="0.4"></path>
                    <circle cx="50" cy="50" r="40" fill="rgba(243,156,18,0.05)"></circle>

                    <!-- Strings -->
                    <line x1="50" y1="0" x2="50" y2="40" stroke="#8C9EAB" stroke-width="1.5"></line>
                    <line x1="30" y1="0" x2="35" y2="60" stroke="#8C9EAB" stroke-width="1"></line>
                    <line x1="70" y1="0" x2="65" y2="60" stroke="#8C9EAB" stroke-width="1"></line>

                    <!-- Pawn Body (slightly scuffed) -->
                    <path d="M 40,60 C 40,50 60,50 60,60 L 65,95 C 65,100 35,100 35,95 Z" fill="#5B8EC4"></path>
                    <path d="M 45,60 Q 48,75 42,95 M 55,60 Q 52,75 58,95" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"></path>
                    <!-- Scuff marks -->
                    <line x1="42" y1="70" x2="48" y2="72" stroke="#34495E" stroke-width="1" opacity="0.5"></line>
                    <line x1="58" y1="80" x2="52" y2="82" stroke="#34495E" stroke-width="1" opacity="0.5"></line>

                    <!-- Blank Head -->
                    <circle cx="50" cy="40" r="16" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2.5"></circle>
                    <circle cx="50" cy="40" r="13" fill="none" stroke="rgba(91,142,196,0.2)" stroke-width="1"></circle>
                    
                    <!-- Angry/Determined sweat bead or dirt smudge -->
                    <path d="M 42,32 L 48,34 L 45,38 Z" fill="rgba(52,73,94,0.15)"></path>
                    
                    <!-- Hand (Right - natural) -->
                    <circle cx="65" cy="60" r="5" fill="#F4F1EA" stroke="#5B8EC4" stroke-width="2"></circle>
                    
                    <!-- Hand (Left - gripping pitchfork) -->
                    <circle cx="35" cy="65" r="5" fill="#F4F1EA" stroke="#8C9EAB" stroke-width="2"></circle>

                    <!-- The Pitchfork -->
                    <rect x="33" y="25" width="3" height="75" fill="#873600" rx="1.5" transform="rotate(10, 35, 65)"></rect>
                    
                    <g transform="rotate(10, 35, 65)">
                        <!-- Pitchfork Iron Base -->
                        <path d="M 28,25 L 40,25 L 36,30 L 32,30 Z" fill="#7F8C8D"></path>
                        <!-- Prongs (Tines) -->
                        <rect x="28" y="10" width="2" height="15" fill="#95A5A6" rx="1"></rect>
                        <rect x="33" y="8" width="2" height="17" fill="#95A5A6" rx="1"></rect>
                        <rect x="38" y="10" width="2" height="15" fill="#95A5A6" rx="1"></rect>
                        <!-- Pointy Tips -->
                        <polygon points="28,10 30,10 29,5" fill="#BDC3C7"></polygon>
                        <polygon points="33,8 35,8 34,2" fill="#BDC3C7"></polygon>
                        <polygon points="38,10 40,10 39,5" fill="#BDC3C7"></polygon>
                    </g>
                    
                </svg>`;

sinisterArt["werewolf-2"] = `<!-- SVG: The Howling Marionette -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Blood Moon in background -->
                    <circle cx="50" cy="40" r="28" fill="#F39C12" opacity="0.8"></circle>
                    <circle cx="50" cy="40" r="28" fill="url(#bloodMoon)" opacity="0.5"></circle>
                    <defs>
                        <radialGradient id="bloodMoon" cx="30%" cy="30%">
                            <stop offset="0%" stop-color="#F1C40F"></stop>
                            <stop offset="100%" stop-color="#C0392B"></stop>
                        </radialGradient>
                    </defs>

                    <!-- Moon Craters (subtle) -->
                    <circle cx="45" cy="30" r="4" fill="#C0392B" opacity="0.2"></circle>
                    <circle cx="60" cy="35" r="6" fill="#C0392B" opacity="0.15"></circle>
                    <circle cx="55" cy="50" r="5" fill="#C0392B" opacity="0.2"></circle>

                    <!-- Tattered Strings -->
                    <line x1="30" y1="0" x2="35" y2="25" stroke="#E74C3C" stroke-width="2" stroke-dasharray="8,4"></line>
                    <line x1="68" y1="0" x2="65" y2="20" stroke="#E74C3C" stroke-width="2" stroke-dasharray="5,3"></line>
                    
                    <!-- Howling Wolf Puppet Profile (Facing Left) -->
                    <!-- Neck / Lower body -->
                    <path d="M 40,100 L 65,100 L 70,60 L 50,55 Z" fill="#641E16"></path>
                    <path d="M 45,100 L 60,100 L 65,65 L 50,60 Z" fill="#922B21"></path>

                    <!-- Lower Jaw (open wide) -->
                    <path d="M 55,60 L 25,50 L 20,53 L 45,70 Z" fill="#641E16"></path>
                    <!-- Lower Teeth -->
                    <polygon points="25,50 28,42 32,52 35,45 38,54 42,48 45,58" fill="#FFF0F0"></polygon>
                    
                    <!-- Upper Head (tilted back to sky) -->
                    <path d="M 50,55 L 30,35 L 45,20 L 70,35 L 75,60 Z" fill="#8B4040"></path>
                    <path d="M 48,50 L 35,40 L 45,28 L 60,35 L 65,50 Z" fill="#C05050"></path> <!-- Snout highlight -->

                    <!-- Ear -->
                    <polygon points="60,35 75,15 72,40" fill="#641E16"></polygon>
                    <polygon points="62,35 72,20 68,38" fill="#922B21"></polygon>
                    
                    <!-- Upper Teeth -->
                    <polygon points="30,35 32,45 35,38 38,48 42,40 46,45 48,38" fill="#FFF0F0"></polygon>

                    <!-- Glowing Crimson Eye -->
                    <circle cx="58" cy="40" r="3.5" fill="#FF6B6B"></circle>
                    <!-- Blood drip from eye -->
                    <path d="M 58,43 L 60,52 L 56,48 Z" fill="#E74C3C"></path>

                    <!-- Drool / Saliva from open maw -->
                    <path d="M 30,45 Q 25,60 30,75" fill="none" stroke="#FDFEFE" stroke-width="1.5" stroke-dasharray="2,4" opacity="0.6"></path>

                    <!-- Horizontal Scratch Marks over the whole scene -->
                    <path d="M 10,65 Q 40,80 80,60" fill="none" stroke="#C0392B" stroke-width="2" stroke-linecap="round" opacity="0.6"></path>
                    <path d="M 15,75 Q 45,90 85,70" fill="none" stroke="#C0392B" stroke-width="3" stroke-linecap="round" opacity="0.4"></path>
                    <path d="M 20,85 Q 50,100 90,80" fill="none" stroke="#C0392B" stroke-width="2" stroke-linecap="round" opacity="0.6"></path>

                </svg>`;

sinisterArt["lonewolf"] = `<!-- SVG: The Solitary Beast Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Mist / Purple Fog -->
                    <circle cx="30" cy="60" r="25" fill="rgba(165,105,189,0.15)"></circle>
                    <circle cx="70" cy="70" r="30" fill="rgba(165,105,189,0.1)"></circle>
                    <path d="M 0,80 Q 25,70 50,85 T 100,75 L 100,100 L 0,100 Z" fill="#E8DAEF" opacity="0.5"></path>

                    <!-- Broken Puppet Crossbar (Top Left) -->
                    <rect x="5" y="10" width="40" height="4" fill="#34495E" rx="1" transform="rotate(-15, 25, 12)"></rect>
                    <rect x="23" y="2" width="4" height="20" fill="#2C3E50" rx="1" transform="rotate(-15, 25, 12)"></rect>
                    <!-- Slash mark cutting it -->
                    <path d="M 35,5 L 20,25" fill="none" stroke="#E74C3C" stroke-width="2"></path>

                    <!-- Snapped Strings falling down -->
                    <path d="M 15,18 Q 18,30 12,45" fill="none" stroke="#8E44AD" stroke-width="1.5" stroke-dasharray="3,2"></path>
                    <path d="M 35,20 Q 30,40 40,60" fill="none" stroke="#8E44AD" stroke-width="1.5" stroke-dasharray="3,2"></path>
                    <path d="M 25,25 Q 22,35 28,50" fill="none" stroke="#8E44AD" stroke-width="1.5" stroke-dasharray="3,2"></path>

                    <!-- Lone Wolf Body (Turned away, looking back over shoulder) -->
                    <path d="M 40,100 C 40,70 50,55 70,55 C 80,55 90,65 95,100 Z" fill="#5B2C6F"></path>
                    <!-- Fur texture highlights -->
                    <path d="M 50,60 Q 55,70 52,90 M 60,58 Q 65,75 62,95 M 70,60 Q 75,80 72,100" fill="none" stroke="#A569BD" stroke-width="1.5"></path>

                    <!-- Wolf Head (Looking back to the left) -->
                    <path d="M 72,58 C 72,40 60,35 48,35 C 38,35 32,45 35,55 L 70,65 Z" fill="#4A235A"></path>
                    
                    <!-- Ears (One torn) -->
                    <polygon points="65,37 75,22 78,38" fill="#4A235A"></polygon>
                    <!-- Torn left ear -->
                    <polygon points="50,33 45,18 40,30 46,31" fill="#4A235A"></polygon>

                    <!-- Snout & Scars -->
                    <path d="M 36,45 L 20,48 C 15,48 18,55 25,58 L 38,55 Z" fill="#76448A"></path>
                    <circle cx="22" cy="48" r="1.5" fill="#1C2833"></circle> <!-- Nose -->
                    
                    <!-- Fangs bared slightly -->
                    <polygon points="25,58 27,62 29,57 31,61 33,56" fill="#FDFEFE"></polygon>

                    <!-- Solitary Cold Eyes -->
                    <circle cx="45" cy="45" r="3" fill="#F1C40F"></circle>
                    <circle cx="45" cy="45" r="1" fill="#000"></circle>
                    <!-- Scar over the eye -->
                    <line x1="42" y1="38" x2="48" y2="52" stroke="#E74C3C" stroke-width="1.5"></line>

                    <!-- The wolf's own hand holding a severed string -->
                    <path d="M 65,85 C 55,85 50,80 45,75" fill="none" stroke="#5B2C6F" stroke-width="6" stroke-linecap="round"></path>
                    <circle cx="45" cy="75" r="5" fill="#A569BD"></circle> <!-- Paw -->
                    <!-- Claws -->
                    <path d="M 40,73 L 35,70 M 40,76 L 33,75 M 42,80 L 36,81" stroke="#EAECEE" stroke-width="1.5" stroke-linecap="round"></path>
                    <!-- Tangled thread on claw -->
                    <path d="M 35,75 Q 30,65 40,60" fill="none" stroke="#8E44AD" stroke-width="1.5"></path>

                </svg>`;

sinisterArt["doppelganger"] = `<!-- SVG: The Faceless Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Shattered Mirror Lines -->
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(26,188,156,0.3)" stroke-width="2"></circle>
                    <path d="M 0,0 L 100,100" fill="none" stroke="#1ABC9C" stroke-width="1"></path> <!-- Split seam -->
                    <path d="M 20,80 L 40,60 L 50,50 L 70,70 L 60,90" fill="none" stroke="rgba(26,188,156,0.5)" stroke-width="1.5"></path>
                    <path d="M 50,50 L 60,30 L 80,40" fill="none" stroke="rgba(26,188,156,0.4)" stroke-width="1"></path>
                    
                    <!-- Scattered glass shards -->
                    <polygon points="15,45 25,35 22,50" fill="#A3E4D7" opacity="0.5"></polygon>
                    <polygon points="80,65 85,55 90,70" fill="#A3E4D7" opacity="0.6"></polygon>
                    <polygon points="40,20 45,15 50,25" fill="#A3E4D7" opacity="0.7"></polygon>

                    <!-- Ethereal Strings hanging loosely -->
                    <line x1="30" y1="0" x2="30" y2="45" stroke="#48C9B0" stroke-width="1.5" stroke-dasharray="2,2"></line>
                    <line x1="70" y1="0" x2="70" y2="45" stroke="#48C9B0" stroke-width="1.5" stroke-dasharray="2,2"></line>

                    <!-- Mannequin Body / Faceless Figure -->
                    <path d="M 33,52 C 30,70 35,90 25,100 L 75,100 C 65,90 70,70 67,52 C 60,65 40,65 33,52 Z" fill="#D1F2EB" stroke="#1ABC9C" stroke-width="1.5"></path>
                    <!-- Shoulder/chest joints -->
                    <circle cx="33" cy="52" r="4" fill="#0E6251"></circle>
                    <circle cx="67" cy="52" r="4" fill="#0E6251"></circle>
                    <line x1="33" y1="52" x2="67" y2="52" stroke="#16A085" stroke-width="2"></line>

                    <!-- Completely Blank Oval Head -->
                    <ellipse cx="50" cy="35" rx="12" ry="16" fill="#FDFEFE" stroke="#0E6251" stroke-width="2"></ellipse>
                    <!-- Blank Head Shading -->
                    <path d="M 50,19 A 12 16 0 0 1 62,35 A 12 16 0 0 1 50,51 Z" fill="#A3E4D7" opacity="0.3"></path>

                    <!-- Floating Mask replacing the face, held by delicate strings attached to the hands -->
                    <!-- The mask hangs down toward the right hand -->
                    <path d="M 50,35 Q 60,50 65,65" fill="none" stroke="#76D7C4" stroke-width="1.5" stroke-dasharray="1.5,1.5"></path>
                    
                    <g transform="translate(60, 60) rotate(-15) scale(0.8)">
                        <!-- Theater Mask (Half Smiling/Blank) -->
                        <ellipse cx="10" cy="12" rx="10" ry="14" fill="#FDFEFE" stroke="#0E6251" stroke-width="1.5"></ellipse>
                        <!-- Half shadow -->
                        <path d="M 10,-2 A 10 14 0 0 1 20,12 A 10 14 0 0 1 10,26 Z" fill="#0E6251"></path>
                        <circle cx="6" cy="8" r="2" fill="#0E6251"></circle> <!-- Eye L -->
                        <circle cx="14" cy="8" r="2" fill="#FDFEFE"></circle> <!-- Eye R -->
                        <path d="M 5,16 Q 10,20 15,16" fill="none" stroke="#0E6251" stroke-width="1"></path> <!-- Smile L -->
                    </g>
                    
                    <!-- Left hand raised to the empty face, as if feeling for features -->
                    <path d="M 33,52 Q 20,40 25,25 Q 35,30 40,35" fill="none" stroke="#1ABC9C" stroke-width="4" stroke-linecap="round"></path>
                    <circle cx="42" cy="37" r="3" fill="#D1F2EB"></circle>

                </svg>`;

sinisterArt["serialkiller"] = `<!-- SVG: The Grinning Butcher Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Tally Marks & Blood spray -->
                    <path d="M 20,25 L 25,40 M 25,23 L 28,38 M 30,22 L 32,37 M 35,25 L 36,40 M 17,28 L 40,32" stroke="#E74C3C" stroke-width="1.5" stroke-linecap="round" opacity="0.4"></path>
                    <path d="M 65,30 L 70,45 M 70,28 L 73,43 M 75,27 L 76,42 M 80,30 L 79,45 M 62,38 L 85,32" stroke="#E74C3C" stroke-width="1.5" stroke-linecap="round" opacity="0.4"></path>
                    
                    <circle cx="20" cy="65" r="5" fill="#E74C3C" opacity="0.15"></circle>
                    <circle cx="80" cy="65" r="8" fill="#E74C3C" opacity="0.1"></circle>

                    <!-- Taut Strings -->
                    <line x1="33" y1="0" x2="33" y2="45" stroke="#E74C3C" stroke-width="1" stroke-dasharray="2,1"></line>
                    <line x1="67" y1="0" x2="67" y2="45" stroke="#E74C3C" stroke-width="1" stroke-dasharray="2,1"></line>

                    <!-- Serial Killer Body -->
                    <!-- Dark Undershirt -->
                    <path d="M 35,50 C 30,70 30,95 25,100 L 75,100 C 70,95 70,70 65,50 Z" fill="#5D6D7E"></path>
                    
                    <!-- White Butcher's Apron -->
                    <path d="M 38,55 L 62,55 L 70,100 L 30,100 Z" fill="#FDFEFE" stroke="#85929E" stroke-width="1"></path>
                    <line x1="38" y1="55" x2="40" y2="45" stroke="#BDC3C7" stroke-width="2"></line>
                    <line x1="62" y1="55" x2="60" y2="45" stroke="#BDC3C7" stroke-width="2"></line>

                    <!-- Head (Smooth bone-white with erratic stitches) -->
                    <circle cx="50" cy="35" r="14" fill="#FDFEFE" stroke="#85929E" stroke-width="1.5"></circle>
                    
                    <!-- Wide Stitched Grin -->
                    <path d="M 40,40 Q 50,48 60,40" fill="none" stroke="#C0392B" stroke-width="1.5"></path>
                    <line x1="42" y1="39" x2="42" y2="43" stroke="#C0392B" stroke-width="1"></line>
                    <line x1="46" y1="41" x2="46" y2="45" stroke="#C0392B" stroke-width="1"></line>
                    <line x1="50" y1="42" x2="50" y2="46" stroke="#C0392B" stroke-width="1"></line>
                    <line x1="54" y1="41" x2="54" y2="45" stroke="#C0392B" stroke-width="1"></line>
                    <line x1="58" y1="39" x2="58" y2="43" stroke="#C0392B" stroke-width="1"></line>

                    <!-- Hollow, empty eyes -->
                    <circle cx="44" cy="31" r="3" fill="#2C3E50"></circle>
                    <circle cx="56" cy="31" r="3" fill="#2C3E50"></circle>
                    <circle cx="44" cy="31" r="1" fill="#E74C3C"></circle> <!-- Red glint -->
                    <circle cx="56" cy="31" r="1" fill="#E74C3C"></circle> <!-- Red glint -->

                    <!-- Giant Meat Cleaver in hand (Left side for viewer, Right hand) -->
                    <!-- Hand -->
                    <circle cx="28" cy="65" r="5" fill="#FDFEFE" stroke="#85929E" stroke-width="1.5"></circle>
                    
                    <!-- Cleaver Handle -->
                    <rect x="25" y="65" width="6" height="15" fill="#784212" rx="1"></rect>
                    <circle cx="28" cy="68" r="1" fill="#D5DBDB"></circle>
                    <circle cx="28" cy="76" r="1" fill="#D5DBDB"></circle>
                    
                    <!-- Cleaver Blade (Silver) -->
                    <path d="M 27,65 L 27,40 L 45,40 L 45,55 C 35,60 30,65 27,65 Z" fill="#D5DBDB" stroke="#99A3A4" stroke-width="1"></path>
                    <!-- Blade hole -->
                    <circle cx="40" cy="45" r="1.5" fill="#FDFEFE"></circle>

                    <!-- Blood Splatters on Blade, Apron, and Face -->
                    <!-- On Blade -->
                    <path d="M 45,40 Q 42,50 45,55" fill="none" stroke="#E74C3C" stroke-width="2"></path>
                    <circle cx="38" cy="48" r="2" fill="#E74C3C"></circle>
                    <circle cx="35" cy="50" r="1" fill="#C0392B"></circle>
                    <circle cx="42" cy="52" r="1.5" fill="#E74C3C"></circle>
                    <!-- Flying droplets -->
                    <circle cx="48" cy="38" r="1.5" fill="#E74C3C"></circle>
                    <circle cx="52" cy="45" r="1.5" fill="#E74C3C"></circle>

                    <!-- On Apron -->
                    <circle cx="45" cy="70" r="4" fill="#E74C3C"></circle>
                    <circle cx="55" cy="85" r="6" fill="#C0392B"></circle>
                    <circle cx="60" cy="75" r="3" fill="#E74C3C"></circle>
                    
                    <!-- Left hand holding a bloody rag? Or just empty -->
                    <circle cx="72" cy="70" r="5" fill="#FDFEFE" stroke="#85929E" stroke-width="1.5"></circle>

                </svg>`;

sinisterArt["idiot"] = `<!-- SVG: The Dunce Pawn -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Tangled, chaotic puppet strings -->
                    <path d="M 35,0 Q 45,15 30,25 T 60,35 Q 40,40 50,45" fill="none" stroke="#9A7D0A" stroke-width="1.5" stroke-dasharray="2,2"></path>
                    <path d="M 65,0 Q 55,10 70,20 T 40,30 Q 60,40 50,45" fill="none" stroke="#9A7D0A" stroke-width="1.5"></path>
                    <circle cx="48" cy="25" r="4" fill="none" stroke="#D4AC0D" stroke-width="1.5"></circle> <!-- A loop knot -->

                    <!-- Background abstract squiggles indicating confusion -->
                    <path d="M 15,45 Q 25,35 20,25 T 30,15" fill="none" stroke="#AED6F1" stroke-width="2" opacity="0.6"></path>
                    <path d="M 85,55 Q 75,65 80,75 T 70,85" fill="none" stroke="#AED6F1" stroke-width="2" opacity="0.6"></path>

                    <!-- Clumsy Pawn Body (Tilted and falling slightly) -->
                    <g transform="translate(50, 60) rotate(15) translate(-50, -60)">
                        <path d="M 40,60 C 40,50 60,50 60,60 L 65,95 C 65,100 35,100 35,95 Z" fill="#5B8EC4"></path>
                        <path d="M 45,60 Q 48,75 42,95 M 55,60 Q 52,75 58,95" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"></path>
                        <!-- Big oversized button misaligned -->
                        <circle cx="50" cy="70" r="3" fill="#D4AC0D"></circle>
                        <circle cx="53" cy="80" r="3" fill="#D4AC0D"></circle>
                        
                        <!-- Blank Head -->
                        <circle cx="50" cy="40" r="16" fill="#FDFEFE" stroke="#5B8EC4" stroke-width="2.5"></circle>
                        
                        <!-- Painted Dorky Face (like drawn on with crayon) -->
                        <circle cx="44" cy="38" r="2" fill="#2980B9"></circle>
                        <circle cx="56" cy="38" r="2.5" fill="#2980B9"></circle> <!-- Slightly mismatched eyes -->
                        <path d="M 45,46 Q 50,52 55,44" fill="none" stroke="#E74C3C" stroke-width="1.5" stroke-linecap="round"></path>
                        
                        <!-- Drooling/tongue sticking out -->
                        <path d="M 50,49 C 50,55 54,55 54,48 Z" fill="#E74C3C"></path>

                        <!-- Dunce Cap (Paper Cone) -->
                        <path d="M 33,30 L 50,0 L 67,30 C 60,35 40,35 33,30 Z" fill="#F1C40F"></path>
                        <path d="M 33,30 C 40,35 60,35 67,30" fill="none" stroke="#D4AC0D" stroke-width="1.5"></path> <!-- Brim curve -->
                        <!-- Star / "I" on the cap -->
                        <polygon points="50,15 52,18 56,18 53,21 54,25 50,22 46,25 47,21 44,18 48,18" fill="#FFFFFF"></polygon>
                        <!-- Wavy line on cap -->
                        <path d="M 42,10 Q 50,12 58,10" fill="none" stroke="#D4AC0D" stroke-width="1.5"></path>
                        
                        <!-- Arms flailing -->
                        <!-- Left arm -->
                        <path d="M 38,62 C 20,55 25,75 15,70" fill="none" stroke="#5B8EC4" stroke-width="4" stroke-linecap="round"></path>
                        <circle cx="15" cy="70" r="4" fill="#FDFEFE"></circle>
                        <!-- Right arm -->
                        <path d="M 62,62 C 80,70 75,50 85,55" fill="none" stroke="#5B8EC4" stroke-width="4" stroke-linecap="round"></path>
                        <circle cx="85" cy="55" r="4" fill="#FDFEFE"></circle>
                    </g>
                    
                    <!-- Dust cloud / slipping motion lines below -->
                    <ellipse cx="50" cy="95" rx="15" ry="3" fill="#D6EAF8"></ellipse>
                    <path d="M 20,95 L 30,95 M 70,95 L 80,95" stroke="#AED6F1" stroke-width="2" stroke-linecap="round"></path>

                </svg>`;

sinisterArt["prince"] = `<!-- SVG: The Jeweled Crown Puppet -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background Regal Archway & Sunburst -->
                    <path d="M 25,60 C 25,25 75,25 75,60" fill="none" stroke="rgba(241,196,15,0.4)" stroke-width="2"></path>
                    <path d="M 30,60 C 30,30 70,30 70,60" fill="none" stroke="rgba(212,172,13,0.2)" stroke-width="1.5"></path>
                    <line x1="50" y1="20" x2="50" y2="10" stroke="rgba(241,196,15,0.6)" stroke-width="1.5"></line>
                    <line x1="25" y1="35" x2="15" y2="30" stroke="rgba(241,196,15,0.4)" stroke-width="1.5"></line>
                    <line x1="75" y1="35" x2="85" y2="30" stroke="rgba(241,196,15,0.4)" stroke-width="1.5"></line>

                    <!-- Puppet Strings (One is a golden chain) -->
                    <line x1="35" y1="0" x2="35" y2="28" stroke="#154360" stroke-width="1.5" stroke-dasharray="3,1"></line>
                    <line x1="65" y1="0" x2="65" y2="35" stroke="#F1C40F" stroke-width="2.5" stroke-dasharray="2,2"></line> <!-- Golden string -->
                    <rect x="25" y="15" width="50" height="4" rx="2" fill="#D4AC0D" stroke="#154360" stroke-width="0.5"></rect>
                    <circle cx="50" cy="17" r="3" fill="#C0392B"></circle> <!-- Ruby on crossbar -->

                    <!-- Regal Cape / Mantle -->
                    <path d="M 25,95 C 20,70 35,50 50,45 C 65,50 80,70 75,95 Z" fill="#21618C"></path>
                    <path d="M 35,45 C 25,60 15,95 30,100 Z" fill="#154360"></path>
                    
                    <!-- White Fur Mantle Trim -->
                    <path d="M 32,55 Q 50,65 68,55 Q 60,45 50,42 Q 40,45 32,55 Z" fill="#FDFEFE" stroke="#BDC3C7" stroke-width="1"></path>
                    <circle cx="50" cy="53" r="4" fill="#F1C40F"></circle> <!-- Gold Brooch -->
                    <circle cx="50" cy="53" r="2" fill="#C0392B"></circle> <!-- Ruby in brooch -->
                    
                    <!-- Gold trim on cape edges -->
                    <path d="M 34,53 C 25,65 24,85 25,95" fill="none" stroke="#F1C40F" stroke-width="2"></path>
                    <path d="M 66,53 C 75,65 76,85 75,95" fill="none" stroke="#F1C40F" stroke-width="2"></path>

                    <!-- Head (Polished Wood / Pale skin) -->
                    <circle cx="50" cy="35" r="11" fill="#FAD7A1"></circle>
                    <path d="M 40,32 Q 50,42 60,32 Z" fill="#F5CBA7" opacity="0.6"></path> <!-- Cheek shadow -->
                    
                    <!-- Shiny Gold Crown (tilted slightly) -->
                    <g transform="translate(50, 24) rotate(10) translate(-50, -24)">
                        <path d="M 37,28 L 35,16 L 43,22 L 50,14 L 57,22 L 65,16 L 63,28 Z" fill="#F1C40F" stroke="#D4AC0D" stroke-width="1"></path>
                        <circle cx="35" cy="15" r="1.5" fill="#C0392B"></circle>
                        <circle cx="50" cy="13" r="2" fill="#3498DB"></circle>
                        <circle cx="65" cy="15" r="1.5" fill="#C0392B"></circle>
                        <rect x="38" y="25" width="24" height="2" fill="#C0392B"></rect> <!-- Crown band -->
                    </g>
                    
                    <!-- Proud / Haughty expression -->
                    <line x1="43" y1="33" x2="47" y2="34" stroke="#154360" stroke-width="1.5" stroke-linecap="round"></line>
                    <line x1="57" y1="33" x2="53" y2="34" stroke="#154360" stroke-width="1.5" stroke-linecap="round"></line>
                    <circle cx="45" cy="36" r="1.5" fill="#154360"></circle>
                    <circle cx="55" cy="36" r="1.5" fill="#154360"></circle>
                    <!-- Smirk -->
                    <path d="M 47,42 Q 50,43 54,41" fill="none" stroke="#922B21" stroke-width="1"></path>

                    <!-- Right Hand resting proudly on hip or sash -->
                    <circle cx="34" cy="70" r="4" fill="#F5CBA7" stroke="#873600" stroke-width="1"></circle>
                    
                    <!-- Hand holding a thin silver rapier / sword pointing down -->
                    <circle cx="66" cy="70" r="4" fill="#FAD7A1"></circle>
                    <line x1="68" y1="65" x2="64" y2="75" stroke="#F1C40F" stroke-width="2"></line> <!-- Hilt -->
                    <circle cx="68" cy="65" r="2" fill="#3498DB"></circle> <!-- Pommel -->
                    <line x1="64" y1="75" x2="55" y2="95" stroke="#BDC3C7" stroke-width="1.5"></line> <!-- Blade -->

                </svg>`;

sinisterArt["littlegirl"] = `<!-- SVG: The Peeking Doll -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="transparent"></circle>

                    <!-- Background window or nursery grid -->
                    <path d="M 20,0 L 20,100 M 80,0 L 80,100" stroke="rgba(217,136,128,0.2)" stroke-width="2"></path>
                    <path d="M 0,20 L 100,20 M 0,80 L 100,80" stroke="rgba(217,136,128,0.2)" stroke-width="2"></path>

                    <!-- Thin fine puppet strings -->
                    <line x1="38" y1="0" x2="38" y2="40" stroke="#C0392B" stroke-width="1"></line>
                    <line x1="62" y1="0" x2="62" y2="40" stroke="#C0392B" stroke-width="1"></line>
                    <!-- Control ring hanging -->
                    <ellipse cx="50" cy="15" rx="20" ry="4" fill="none" stroke="#E6B0AA" stroke-width="2"></ellipse>

                    <!-- Little Girl Body (Frilly Pink Dress) -->
                    <path d="M 45,55 L 25,95 C 35,100 65,100 75,95 L 55,55 Z" fill="#FADBD8" stroke="#E6B0AA" stroke-width="1.5"></path>
                    <path d="M 35,97 Q 45,90 50,97 Q 55,90 65,97" fill="none" stroke="#FDFEFE" stroke-width="3" stroke-linecap="round"></path> <!-- Frills -->
                    
                    <!-- Porcelain Doll Head -->
                    <circle cx="50" cy="45" r="14" fill="#FDFEFE" stroke="#D98880" stroke-width="1.5"></circle>

                    <!-- Hair: Braided Pig-Tails (Auburn/Red) -->
                    <path d="M 50,30 Q 30,35 34,50 Q 35,40 50,31" fill="#7B241C"></path>
                    <path d="M 50,30 Q 70,35 66,50 Q 65,40 50,31" fill="#7B241C"></path>
                    
                    <!-- Hanging curly pigtails -->
                    <path d="M 35,48 C 25,55 25,70 30,75 C 32,65 38,60 38,48 Z" fill="#7B241C"></path>
                    <path d="M 65,48 C 75,55 75,70 70,75 C 68,65 62,60 62,48 Z" fill="#7B241C"></path>
                    <!-- Pink ribbons -->
                    <path d="M 32,49 L 38,49 M 35,46 L 35,52" stroke="#E74C3C" stroke-width="2"></path>
                    <path d="M 62,49 L 68,49 M 65,46 L 65,52" stroke="#E74C3C" stroke-width="2"></path>

                    <!-- Hands covering face but leaving a gap -->
                    <!-- Left Hand -->
                    <path d="M 38,70 Q 30,60 40,50 Q 45,45 48,50" fill="#FDFEFE" stroke="#D98880" stroke-width="1.5"></path>
                    <!-- Right Hand -->
                    <path d="M 62,70 Q 70,60 60,50 Q 55,45 52,50" fill="#FDFEFE" stroke="#D98880" stroke-width="1.5"></path>
                    <!-- Fingers slightly parted -->
                    <line x1="42" y1="50" x2="44" y2="46" stroke="#D98880" stroke-width="1"></line>
                    <line x1="58" y1="50" x2="56" y2="46" stroke="#D98880" stroke-width="1"></line>
                    <line x1="45" y1="51" x2="47" y2="44" stroke="#D98880" stroke-width="1"></line>
                    <line x1="55" y1="51" x2="53" y2="44" stroke="#D98880" stroke-width="1"></line>

                    <!-- THE PEEKING EYE (Giant, terrified blue eye looking through the fingers) -->
                    <!-- Position: exactly in the gap between the hands -->
                    <!-- Right Eye Slot -->
                    <path d="M 52,43 Q 56,40 60,43" fill="none" stroke="#922B21" stroke-width="1" opacity="0.5"></path> <!-- Brows covered by fingers -->
                    <ellipse cx="50" cy="45" rx="4" ry="2.5" fill="#FDFEFE" stroke="#CD6155" stroke-width="0.5"></ellipse>
                    <circle cx="50" cy="45" r="2" fill="#5DADE2"></circle> <!-- Bright blue iris -->
                    <circle cx="50" cy="45" r="1.5" fill="#154360"></circle> <!-- Pupil -->
                    <circle cx="49" cy="44" r="0.8" fill="#FDFEFE"></circle> <!-- Fear Glint -->
                    
                    <!-- Broken cracks on the porcelain face -->
                    <path d="M 42,35 L 43,38 L 41,40 M 55,33 L 58,35 L 57,38" fill="none" stroke="#CD6155" stroke-width="0.8" opacity="0.6"></path>

                </svg>`;

sinisterArt["card_back"] = `<!-- SVG: Dark Mandala / Eye of the Puppeteer -->
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <!-- Geometric Strings -->
                    <polygon points="50,10 65,40 90,50 65,60 50,90 35,60 10,50 35,40" fill="none" stroke="#C5A059" stroke-width="1.5" stroke-dasharray="2,2"></polygon>
                    <polygon points="50,20 60,42 80,50 60,58 50,80 40,58 20,50 40,42" fill="rgba(197, 160, 89, 0.1)" stroke="#C5A059" stroke-width="1"></polygon>
                    
                    <!-- Inner Core / The Stage -->
                    <circle cx="50" cy="50" r="20" fill="#0F0F0F" stroke="#C5A059" stroke-width="2"></circle>
                    
                    <!-- The All Seeing Eye -->
                    <path d="M 35,50 Q 50,35 65,50 Q 50,65 35,50 Z" fill="#0F0F0F" stroke="#C5A059" stroke-width="1.5"></path>
                    <circle cx="50" cy="50" r="6" fill="#C5A059"></circle>
                    <circle cx="50" cy="50" r="2" fill="#0F0F0F"></circle>
                    
                    <!-- Dropping strings -->
                    <line x1="45" y1="70" x2="45" y2="95" stroke="#C5A059" stroke-width="1"></line>
                    <line x1="55" y1="70" x2="55" y2="95" stroke="#C5A059" stroke-width="1"></line>
                </svg>`;

