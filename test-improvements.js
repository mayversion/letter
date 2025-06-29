// Script de test pour vérifier les améliorations
const { frenchUtils } = require('./src/utils/letterGenerator');

console.log('🧪 Test des améliorations du générateur de lettres de motivation\n');

// Test des apostrophes
console.log('📝 Test des apostrophes:');
console.log('la expérience ->', frenchUtils.addApostrophes('la expérience'));
console.log('de innovation ->', frenchUtils.addApostrophes('de innovation'));
console.log('le entreprise ->', frenchUtils.addApostrophes('le entreprise'));
console.log('à organisation ->', frenchUtils.addApostrophes('à organisation'));

// Test des accords de genre
console.log('\n👥 Test des accords de genre:');
console.log('passionné (m) ->', frenchUtils.genderAgreement('passionné', 'male'));
console.log('passionné (f) ->', frenchUtils.genderAgreement('passionné', 'female'));
console.log('étudiant (m) ->', frenchUtils.genderAgreement('étudiant', 'male'));
console.log('étudiant (f) ->', frenchUtils.genderAgreement('étudiant', 'female'));

// Test des conjugaisons
console.log('\n🔤 Test des conjugaisons:');
console.log('être (je) ->', frenchUtils.conjugatePresent('être', 'je'));
console.log('avoir (je) ->', frenchUtils.conjugatePresent('avoir', 'je'));
console.log('pouvoir (je) ->', frenchUtils.conjugatePresent('pouvoir', 'je'));

// Test du formatage des listes
console.log('\n📋 Test du formatage des listes:');
console.log('1 élément:', frenchUtils.formatNaturalList(['informatique']));
console.log('2 éléments:', frenchUtils.formatNaturalList(['informatique', 'mathématiques']));
console.log('3 éléments:', frenchUtils.formatNaturalList(['informatique', 'mathématiques', 'physique']));

// Test d'application des accords sur un texte complet
console.log('\n📄 Test d\'application des accords sur un texte:');
const sampleText = 'Je suis passionnée par l\'informatique et je suis une étudiante motivée.';
console.log('Texte original:', sampleText);
console.log('Texte masculin:', frenchUtils.applyGenderAgreements(sampleText, 'male'));
console.log('Texte féminin:', frenchUtils.applyGenderAgreements(sampleText, 'female'));

console.log('\n✅ Tests terminés !');

// Tests complets pour le générateur de lettres de motivation
// Test de tous les cas possibles

import { generateLocalLetter } from './src/utils/letterGenerator.js';

// Configuration de test complète
const testCases = [
    // Test 1: Cas de base - aucune sélection
    {
        name: "Test 1: Cas de base - aucune sélection",
        formData: {
            name: "Marie Dupont",
            age: "22",
            target: "Stage en marketing",
            languages: "",
            interests: "",
            goals: "",
            motivation: "",
            achievements: "",
            experience: "",
            qualifications: ""
        },
        gender: "female",
        language: "fr"
    },

    // Test 2: Toutes les sélections en français (féminin)
    {
        name: "Test 2: Toutes les sélections en français (féminin)",
        formData: {
            name: "Sophie Martin",
            age: "24",
            target: "Poste de développeuse",
            languages: "français, anglais, espagnol",
            interests: "lecture, technologie, sport",
            goals: "développement professionnel, innovation",
            motivation: "défis intellectuels, travail d'équipe",
            achievements: "projet réussi, prix académique",
            experience: "stage, projet personnel",
            qualifications: "diplôme, compétences techniques"
        },
        gender: "female",
        language: "fr"
    },

    // Test 3: Toutes les sélections en français (masculin)
    {
        name: "Test 3: Toutes les sélections en français (masculin)",
        formData: {
            name: "Pierre Dubois",
            age: "23",
            target: "Poste d'ingénieur",
            languages: "français, anglais, allemand",
            interests: "musique, cinéma, cuisine",
            goals: "apprentissage continu, leadership",
            motivation: "innovation, impact social",
            achievements: "leadership, collaboration",
            experience: "travail étudiant, bénévolat",
            qualifications: "certification, soft skills"
        },
        gender: "male",
        language: "fr"
    },

    // Test 4: Sélections partielles en français
    {
        name: "Test 4: Sélections partielles en français",
        formData: {
            name: "Emma Rousseau",
            age: "21",
            target: "Stage en communication",
            languages: "français, anglais",
            interests: "écriture, art",
            goals: "",
            motivation: "développement personnel",
            achievements: "",
            experience: "aucune expérience",
            qualifications: "passion"
        },
        gender: "female",
        language: "fr"
    },

    // Test 5: Cas de base en anglais
    {
        name: "Test 5: Cas de base en anglais",
        formData: {
            name: "John Smith",
            age: "25",
            target: "Software Engineer position",
            languages: "",
            interests: "",
            goals: "",
            motivation: "",
            achievements: "",
            experience: "",
            qualifications: ""
        },
        gender: "male",
        language: "en"
    },

    // Test 6: Toutes les sélections en anglais
    {
        name: "Test 6: Toutes les sélections en anglais",
        formData: {
            name: "Sarah Johnson",
            age: "26",
            target: "Marketing Manager position",
            languages: "English, French, Spanish",
            interests: "reading, traveling, photography",
            goals: "professional development, continuous learning",
            motivation: "intellectual challenges, teamwork",
            achievements: "successful project, academic award",
            experience: "internship, personal project",
            qualifications: "degree, technical skills"
        },
        gender: "female",
        language: "en"
    },

    // Test 7: Test des accords de genre - féminin
    {
        name: "Test 7: Test des accords de genre - féminin",
        formData: {
            name: "Claire Moreau",
            age: "22",
            target: "Poste de consultante",
            languages: "français",
            interests: "lecture",
            goals: "développement professionnel",
            motivation: "excellence",
            achievements: "projet réussi",
            experience: "stage",
            qualifications: "diplôme"
        },
        gender: "female",
        language: "fr"
    },

    // Test 8: Test des accords de genre - masculin
    {
        name: "Test 8: Test des accords de genre - masculin",
        formData: {
            name: "Thomas Bernard",
            age: "24",
            target: "Poste de consultant",
            languages: "français",
            interests: "lecture",
            goals: "développement professionnel",
            motivation: "excellence",
            achievements: "projet réussi",
            experience: "stage",
            qualifications: "diplôme"
        },
        gender: "male",
        language: "fr"
    },

    // Test 9: Test sans genre spécifié
    {
        name: "Test 9: Test sans genre spécifié",
        formData: {
            name: "Alex Taylor",
            age: "23",
            target: "Data Analyst position",
            languages: "English, French",
            interests: "technology, sports",
            goals: "technical expertise",
            motivation: "innovation",
            achievements: "leadership",
            experience: "internship",
            qualifications: "certification"
        },
        gender: "",
        language: "en"
    },

    // Test 10: Test avec une seule sélection de chaque type
    {
        name: "Test 10: Test avec une seule sélection de chaque type",
        formData: {
            name: "Lucas Petit",
            age: "20",
            target: "Stage en finance",
            languages: "anglais",
            interests: "sport",
            goals: "collaboration",
            motivation: "apprentissage",
            achievements: "communication",
            experience: "projet académique",
            qualifications: "langues"
        },
        gender: "male",
        language: "fr"
    },

    // Test 11: Test avec des sélections multiples (plus de 3)
    {
        name: "Test 11: Test avec des sélections multiples (plus de 3)",
        formData: {
            name: "Camille Leroy",
            age: "25",
            target: "Poste de chef de projet",
            languages: "français, anglais, espagnol, allemand, italien",
            interests: "lecture, voyage, sport, musique, cinéma, cuisine",
            goals: "développement professionnel, apprentissage continu, contribution sociale, innovation",
            motivation: "défis intellectuels, travail d'équipe, innovation, apprentissage",
            achievements: "projet réussi, prix académique, leadership, innovation",
            experience: "stage, projet personnel, travail étudiant, bénévolat",
            qualifications: "diplôme, certification, compétences techniques, soft skills"
        },
        gender: "female",
        language: "fr"
    },

    // Test 12: Test avec des champs vides et des espaces
    {
        name: "Test 12: Test avec des champs vides et des espaces",
        formData: {
            name: "   Jean   Durand   ",
            age: "  23  ",
            target: "  Poste de développeur  ",
            languages: "  français  ,  anglais  ",
            interests: "  lecture  ,  sport  ",
            goals: "  ",
            motivation: "  défis intellectuels  ",
            achievements: "  ",
            experience: "  stage  ",
            qualifications: "  diplôme  "
        },
        gender: "male",
        language: "fr"
    },

    // Test 13: Test avec des caractères spéciaux
    {
        name: "Test 13: Test avec des caractères spéciaux",
        formData: {
            name: "José García",
            age: "24",
            target: "Poste d'ingénieur en IA",
            languages: "français, anglais, espagnol",
            interests: "technologie, art, nature",
            goals: "innovation, impact positif",
            motivation: "défis intellectuels, excellence",
            achievements: "projet réussi, résolution de problèmes",
            experience: "projet personnel, formation",
            qualifications: "compétences techniques, passion"
        },
        gender: "male",
        language: "fr"
    },

    // Test 14: Test de détection automatique de langue (français)
    {
        name: "Test 14: Test de détection automatique de langue (français)",
        formData: {
            name: "Marie-Claire Dubois",
            age: "22",
            target: "Stage à Paris",
            languages: "français, anglais",
            interests: "lecture, cuisine",
            goals: "développement professionnel",
            motivation: "travail d'équipe",
            achievements: "projet réussi",
            experience: "stage",
            qualifications: "diplôme"
        },
        gender: "female",
        language: "fr"
    },

    // Test 15: Test de détection automatique de langue (anglais)
    {
        name: "Test 15: Test de détection automatique de langue (anglais)",
        formData: {
            name: "Michael Brown",
            age: "25",
            target: "Position in New York",
            languages: "English, French",
            interests: "reading, sports",
            goals: "professional development",
            motivation: "teamwork",
            achievements: "successful project",
            experience: "internship",
            qualifications: "degree"
        },
        gender: "male",
        language: "en"
    }
];

// Fonction de test
function runTests() {
    console.log("🚀 DÉBUT DES TESTS COMPLETS DU GÉNÉRATEUR DE LETTRES\n");
    
    let passedTests = 0;
    let totalTests = testCases.length;
    
    testCases.forEach((testCase, index) => {
        console.log(`\n📋 ${testCase.name}`);
        console.log("─".repeat(50));
        
        try {
            const result = generateLocalLetter(testCase.formData, testCase.language, testCase.gender);
            
            // Vérifications de base
            const checks = [];
            
            // Vérifier que la lettre contient le nom
            if (result.includes(testCase.formData.name.trim())) {
                checks.push("✅ Nom intégré");
            } else {
                checks.push("❌ Nom manquant");
            }
            
            // Vérifier que la lettre contient l'âge
            if (testCase.formData.age && result.includes(testCase.formData.age.trim())) {
                checks.push("✅ Âge intégré");
            } else if (!testCase.formData.age) {
                checks.push("✅ Âge non requis");
            } else {
                checks.push("❌ Âge manquant");
            }
            
            // Vérifier que la lettre contient la cible
            if (result.includes(testCase.formData.target.trim())) {
                checks.push("✅ Cible intégrée");
            } else {
                checks.push("❌ Cible manquante");
            }
            
            // Vérifier les langues sélectionnées
            if (testCase.formData.languages) {
                const languages = testCase.formData.languages.split(',').map(l => l.trim()).filter(l => l);
                const hasLanguages = languages.some(lang => {
                    const langLower = lang.toLowerCase();
                    return result.toLowerCase().includes(langLower) || 
                           (langLower === 'français' && result.toLowerCase().includes('français')) ||
                           (langLower === 'anglais' && result.toLowerCase().includes('anglais')) ||
                           (langLower === 'english' && result.toLowerCase().includes('english')) ||
                           (langLower === 'french' && result.toLowerCase().includes('french'));
                });
                if (hasLanguages) {
                    checks.push("✅ Langues intégrées");
                } else {
                    checks.push("❌ Langues manquantes");
                }
            } else {
                checks.push("✅ Langues non requises");
            }
            
            // Vérifier les intérêts sélectionnés
            if (testCase.formData.interests) {
                const interests = testCase.formData.interests.split(',').map(i => i.trim()).filter(i => i);
                const hasInterests = interests.some(interest => {
                    const interestLower = interest.toLowerCase();
                    return result.toLowerCase().includes(interestLower) ||
                           (interestLower === 'lecture' && result.toLowerCase().includes('lecture')) ||
                           (interestLower === 'reading' && result.toLowerCase().includes('reading')) ||
                           (interestLower === 'sport' && result.toLowerCase().includes('sport')) ||
                           (interestLower === 'sports' && result.toLowerCase().includes('sports'));
                });
                if (hasInterests) {
                    checks.push("✅ Intérêts intégrés");
                } else {
                    checks.push("❌ Intérêts manquants");
                }
            } else {
                checks.push("✅ Intérêts non requis");
            }
            
            // Vérifier les objectifs sélectionnés
            if (testCase.formData.goals) {
                const goals = testCase.formData.goals.split(',').map(g => g.trim()).filter(g => g);
                const hasGoals = goals.some(goal => {
                    const goalLower = goal.toLowerCase();
                    return result.toLowerCase().includes(goalLower) ||
                           (goalLower === 'développement professionnel' && result.toLowerCase().includes('développement')) ||
                           (goalLower === 'professional development' && result.toLowerCase().includes('development'));
                });
                if (hasGoals) {
                    checks.push("✅ Objectifs intégrés");
                } else {
                    checks.push("❌ Objectifs manquants");
                }
            } else {
                checks.push("✅ Objectifs non requis");
            }
            
            // Vérifier les motivations sélectionnées
            if (testCase.formData.motivation) {
                const motivations = testCase.formData.motivation.split(',').map(m => m.trim()).filter(m => m);
                const hasMotivations = motivations.some(motivation => {
                    const motLower = motivation.toLowerCase();
                    return result.toLowerCase().includes(motLower) ||
                           (motLower === 'défis intellectuels' && result.toLowerCase().includes('défis')) ||
                           (motLower === 'intellectual challenges' && result.toLowerCase().includes('challenges'));
                });
                if (hasMotivations) {
                    checks.push("✅ Motivations intégrées");
                } else {
                    checks.push("❌ Motivations manquantes");
                }
            } else {
                checks.push("✅ Motivations non requises");
            }
            
            // Vérifier les réalisations sélectionnées
            if (testCase.formData.achievements) {
                const achievements = testCase.formData.achievements.split(',').map(a => a.trim()).filter(a => a);
                const hasAchievements = achievements.some(achievement => {
                    const achLower = achievement.toLowerCase();
                    return result.toLowerCase().includes(achLower) ||
                           (achLower === 'projet réussi' && result.toLowerCase().includes('projet')) ||
                           (achLower === 'successful project' && result.toLowerCase().includes('project'));
                });
                if (hasAchievements) {
                    checks.push("✅ Réalisations intégrées");
                } else {
                    checks.push("❌ Réalisations manquantes");
                }
            } else {
                checks.push("✅ Réalisations non requises");
            }
            
            // Vérifier l'expérience sélectionnée
            if (testCase.formData.experience) {
                const experiences = testCase.formData.experience.split(',').map(e => e.trim()).filter(e => e);
                const hasExperience = experiences.some(exp => {
                    const expLower = exp.toLowerCase();
                    return result.toLowerCase().includes(expLower) ||
                           (expLower === 'stage' && result.toLowerCase().includes('stage')) ||
                           (expLower === 'internship' && result.toLowerCase().includes('internship'));
                });
                if (hasExperience) {
                    checks.push("✅ Expérience intégrée");
                } else {
                    checks.push("❌ Expérience manquante");
                }
            } else {
                checks.push("✅ Expérience non requise");
            }
            
            // Vérifier les qualifications sélectionnées
            if (testCase.formData.qualifications) {
                const qualifications = testCase.formData.qualifications.split(',').map(q => q.trim()).filter(q => q);
                const hasQualifications = qualifications.some(qual => {
                    const qualLower = qual.toLowerCase();
                    return result.toLowerCase().includes(qualLower) ||
                           (qualLower === 'diplôme' && result.toLowerCase().includes('diplôme')) ||
                           (qualLower === 'degree' && result.toLowerCase().includes('degree'));
                });
                if (hasQualifications) {
                    checks.push("✅ Qualifications intégrées");
                } else {
                    checks.push("❌ Qualifications manquantes");
                }
            } else {
                checks.push("✅ Qualifications non requises");
            }
            
            // Vérifier les accords de genre (pour le français)
            if (testCase.language === 'fr' && testCase.gender) {
                if (testCase.gender === 'female') {
                    if (result.includes('passionnée') || result.includes('motivée') || result.includes('convaincue') || result.includes('ravie')) {
                        checks.push("✅ Accords de genre féminin corrects");
                    } else {
                        checks.push("❌ Accords de genre féminin incorrects");
                    }
                } else if (testCase.gender === 'male') {
                    if (result.includes('passionné') || result.includes('motivé') || result.includes('convaincu') || result.includes('ravi')) {
                        checks.push("✅ Accords de genre masculin corrects");
                    } else {
                        checks.push("❌ Accords de genre masculin incorrects");
                    }
                }
            } else {
                checks.push("✅ Accords de genre non requis");
            }
            
            // Vérifier la structure de la lettre
            const hasHeader = result.includes(testCase.formData.name.trim());
            const hasGreeting = result.includes('Madame, Monsieur,') || result.includes('Dear Hiring Manager,');
            const hasClosing = result.includes('Cordialement,') || result.includes('Sincerely,');
            
            if (hasHeader && hasGreeting && hasClosing) {
                checks.push("✅ Structure de lettre correcte");
            } else {
                checks.push("❌ Structure de lettre incorrecte");
            }
            
            // Afficher les résultats
            checks.forEach(check => console.log(check));
            
            // Compter les tests réussis
            const passedChecks = checks.filter(check => check.startsWith('✅')).length;
            const totalChecks = checks.length;
            
            if (passedChecks === totalChecks) {
                console.log(`\n🎉 TEST RÉUSSI: ${passedChecks}/${totalChecks} vérifications passées`);
                passedTests++;
            } else {
                console.log(`\n⚠️  TEST PARTIEL: ${passedChecks}/${totalChecks} vérifications passées`);
            }
            
            // Afficher un extrait de la lettre générée
            console.log("\n📄 Extrait de la lettre générée:");
            console.log(result.substring(0, 200) + "...");
            
        } catch (error) {
            console.log(`❌ ERREUR: ${error.message}`);
        }
    });
    
    // Résumé final
    console.log("\n" + "=".repeat(60));
    console.log(`📊 RÉSUMÉ FINAL: ${passedTests}/${totalTests} tests réussis`);
    
    if (passedTests === totalTests) {
        console.log("🎉 TOUS LES TESTS SONT PASSÉS ! Le générateur fonctionne parfaitement.");
    } else {
        console.log(`⚠️  ${totalTests - passedTests} test(s) ont échoué. Vérifiez les problèmes ci-dessus.`);
    }
    
    console.log("=".repeat(60));
}

// Exécuter les tests
runTests(); 