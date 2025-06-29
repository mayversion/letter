// Script pour générer toutes les lettres possibles et les sauvegarder dans un fichier
// Permet de vérifier si toutes les sélections utilisateur sont bien intégrées

const fs = require('fs');

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

// Simulation de la fonction generateLocalLetter pour les tests
function generateLocalLetter(formData, language = 'fr', gender = '') {
    const personalInfo = {
        name: formData.name || 'Candidat',
        age: formData.age || '',
        target: formData.target || 'ce poste',
        gender: gender || 'not-specified'
    };

    // Extract all user selections
    const selectedLanguages = formData.languages ? formData.languages.split(', ').filter(lang => lang.trim()) : [];
    const selectedInterests = formData.interests ? formData.interests.split(', ').filter(interest => interest.trim()) : [];
    const selectedGoals = formData.goals ? formData.goals.split(', ').filter(goal => goal.trim()) : [];
    const selectedMotivations = formData.motivation ? formData.motivation.split(', ').filter(mot => mot.trim()) : [];
    const selectedAchievements = formData.achievements ? formData.achievements.split(', ').filter(ach => ach.trim()) : [];
    const selectedExperience = formData.experience ? formData.experience.split(', ').filter(exp => exp.trim()) : [];
    const selectedQualifications = formData.qualifications ? formData.qualifications.split(', ').filter(qual => qual.trim()) : [];

    const safeGenderAgreement = (adjective, gender) => {
        if (!gender || gender === 'not-specified') return adjective;
        
        const baseForm = adjective.replace(/\(e\)$/, '');
        if (gender === 'female') {
            return baseForm.endsWith('é') ? baseForm + 'e' : baseForm + 'e';
        }
        return baseForm;
    };

    const formatFrenchList = (items) => {
        if (items.length === 0) return '';
        if (items.length === 1) return items[0];
        if (items.length === 2) return `${items[0]} et ${items[1]}`;
        return `${items.slice(0, -1).join(', ')} et ${items[items.length - 1]}`;
    };

    const formatEnglishList = (items) => {
        if (items.length === 0) return '';
        if (items.length === 1) return items[0];
        if (items.length === 2) return `${items[0]} and ${items[1]}`;
        return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
    };

    // Language mappings
    const languageMapping = {
        'français': { fr: 'français', en: 'French' },
        'anglais': { fr: 'anglais', en: 'English' },
        'espagnol': { fr: 'espagnol', en: 'Spanish' },
        'allemand': { fr: 'allemand', en: 'German' },
        'italien': { fr: 'italien', en: 'Italian' },
        'portugais': { fr: 'portugais', en: 'Portuguese' },
        'chinois': { fr: 'chinois', en: 'Chinese' },
        'japonais': { fr: 'japonais', en: 'Japanese' },
        'arabe': { fr: 'arabe', en: 'Arabic' },
        'russe': { fr: 'russe', en: 'Russian' }
    };

    // Interest mappings
    const interestMapping = {
        'lecture': { fr: 'la lecture', en: 'reading' },
        'voyage': { fr: 'les voyages', en: 'traveling' },
        'sport': { fr: 'le sport', en: 'sports' },
        'musique': { fr: 'la musique', en: 'music' },
        'cinéma': { fr: 'le cinéma', en: 'cinema' },
        'cuisine': { fr: 'la cuisine', en: 'cooking' },
        'photographie': { fr: 'la photographie', en: 'photography' },
        'art': { fr: 'l\'art', en: 'art' },
        'technologie': { fr: 'la technologie', en: 'technology' },
        'nature': { fr: 'la nature', en: 'nature' },
        'bénévolat': { fr: 'le bénévolat', en: 'volunteering' },
        'écriture': { fr: 'l\'écriture', en: 'writing' }
    };

    // Goal mappings
    const goalMapping = {
        'développement professionnel': { fr: 'mon développement professionnel', en: 'my professional development' },
        'apprentissage continu': { fr: 'l\'apprentissage continu', en: 'continuous learning' },
        'contribution sociale': { fr: 'contribuer à la société', en: 'contributing to society' },
        'innovation': { fr: 'l\'innovation', en: 'innovation' },
        'leadership': { fr: 'développer mes compétences de leadership', en: 'developing my leadership skills' },
        'expertise technique': { fr: 'approfondir mon expertise technique', en: 'deepening my technical expertise' },
        'collaboration': { fr: 'travailler en équipe', en: 'working in teams' },
        'impact positif': { fr: 'avoir un impact positif', en: 'having a positive impact' }
    };

    // Motivation mappings
    const motivationMapping = {
        'défis intellectuels': { fr: 'les défis intellectuels', en: 'intellectual challenges' },
        'travail d\'équipe': { fr: 'le travail d\'équipe', en: 'teamwork' },
        'innovation': { fr: 'l\'innovation', en: 'innovation' },
        'apprentissage': { fr: 'l\'apprentissage continu', en: 'continuous learning' },
        'impact social': { fr: 'avoir un impact social positif', en: 'having a positive social impact' },
        'développement personnel': { fr: 'mon développement personnel', en: 'personal development' },
        'excellence': { fr: 'l\'excellence', en: 'excellence' },
        'collaboration': { fr: 'la collaboration', en: 'collaboration' }
    };

    // Achievement mappings
    const achievementMapping = {
        'projet réussi': { fr: 'la réussite d\'un projet complexe', en: 'successfully completing a complex project' },
        'prix académique': { fr: 'l\'obtention d\'un prix académique', en: 'receiving an academic award' },
        'leadership': { fr: 'l\'exercice de responsabilités de leadership', en: 'exercising leadership responsibilities' },
        'innovation': { fr: 'l\'innovation dans mon domaine', en: 'innovation in my field' },
        'collaboration': { fr: 'la collaboration efficace en équipe', en: 'effective team collaboration' },
        'résolution de problèmes': { fr: 'la résolution de problèmes complexes', en: 'solving complex problems' },
        'communication': { fr: 'l\'amélioration de mes compétences de communication', en: 'improving my communication skills' },
        'adaptabilité': { fr: 'ma capacité d\'adaptation', en: 'my adaptability' }
    };

    // Experience mappings
    const experienceMapping = {
        'stage': { fr: 'un stage', en: 'an internship' },
        'projet personnel': { fr: 'un projet personnel', en: 'a personal project' },
        'travail étudiant': { fr: 'un travail étudiant', en: 'student work' },
        'bénévolat': { fr: 'du bénévolat', en: 'volunteer work' },
        'projet académique': { fr: 'un projet académique', en: 'an academic project' },
        'compétition': { fr: 'une compétition', en: 'a competition' },
        'formation': { fr: 'une formation', en: 'training' },
        'aucune expérience': { fr: 'aucune expérience professionnelle', en: 'no professional experience' }
    };

    // Qualification mappings
    const qualificationMapping = {
        'diplôme': { fr: 'mon diplôme', en: 'my degree' },
        'certification': { fr: 'ma certification', en: 'my certification' },
        'compétences techniques': { fr: 'mes compétences techniques', en: 'my technical skills' },
        'soft skills': { fr: 'mes compétences relationnelles', en: 'my soft skills' },
        'langues': { fr: 'mes compétences linguistiques', en: 'my language skills' },
        'projets': { fr: 'mes projets', en: 'my projects' },
        'réseau': { fr: 'mon réseau professionnel', en: 'my professional network' },
        'passion': { fr: 'ma passion', en: 'my passion' }
    };

    const detectLanguage = () => {
        const target = formData.target?.toLowerCase() || '';
        if (target.includes('france') || target.includes('français') || target.includes('paris')) return 'fr';
        if (target.includes('canada') || target.includes('quebec') || target.includes('montreal')) return 'fr';
        if (target.includes('belgique') || target.includes('bruxelles')) return 'fr';
        if (target.includes('suisse') || target.includes('genève')) return 'fr';
        return 'en';
    };

    const currentLanguage = detectLanguage();

    const generateHeaderFR = () => {
        const date = new Date().toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        return `${personalInfo.name}
${personalInfo.age ? `${personalInfo.age} ans` : ''}
${date}`;
    };

    const generateHeaderEN = () => {
        const date = new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        return `${personalInfo.name}
${personalInfo.age ? `${personalInfo.age} years old` : ''}
${date}`;
    };

    const generateIntroFR = () => {
        const passionate = safeGenderAgreement('passionné', personalInfo.gender);
        const motivated = safeGenderAgreement('motivé', personalInfo.gender);
        
        let intro = `Étudiant${personalInfo.gender === 'female' ? 'e' : ''} ${passionate} et ${motivated}, je soumets ma candidature pour ${personalInfo.target}.`;
        
        // Add languages if selected
        if (selectedLanguages.length > 0) {
            const languageTexts = selectedLanguages
                .map(lang => languageMapping[lang]?.fr)
                .filter(Boolean);
            if (languageTexts.length > 0) {
                const languageList = formatFrenchList(languageTexts);
                intro += ` Ma maîtrise de ${languageList} constitue un atout supplémentaire pour ce poste.`;
            }
        }
        
        // Add interests if selected
        if (selectedInterests.length > 0) {
            const interestTexts = selectedInterests
                .map(interest => interestMapping[interest]?.fr)
                .filter(Boolean);
            if (interestTexts.length > 0) {
                const interestList = formatFrenchList(interestTexts);
                intro += ` Mes centres d'intérêt, notamment ${interestList}, témoignent de ma curiosité intellectuelle et de ma capacité d'adaptation.`;
            }
        }
        
        return intro;
    };

    const generateIntroEN = () => {
        let intro = `As a passionate and motivated student, I am submitting my application for ${personalInfo.target}.`;
        
        // Add languages if selected
        if (selectedLanguages.length > 0) {
            const languageTexts = selectedLanguages
                .map(lang => languageMapping[lang]?.en)
                .filter(Boolean);
            if (languageTexts.length > 0) {
                const languageList = formatEnglishList(languageTexts);
                intro += ` My proficiency in ${languageList} constitutes an additional asset for this position.`;
            }
        }
        
        // Add interests if selected
        if (selectedInterests.length > 0) {
            const interestTexts = selectedInterests
                .map(interest => interestMapping[interest]?.en)
                .filter(Boolean);
            if (interestTexts.length > 0) {
                const interestList = formatEnglishList(interestTexts);
                intro += ` My interests, particularly ${interestList}, demonstrate my intellectual curiosity and adaptability.`;
            }
        }
        
        return intro;
    };

    const generateExperienceFR = () => {
        if (selectedExperience.length === 0) {
            return `Bien que je n'aie pas encore d'expérience professionnelle significative, mon parcours académique et mes projets personnels m'ont permis de développer des compétences précieuses.`;
        }

        const experienceTexts = selectedExperience
            .map(exp => experienceMapping[exp]?.fr)
            .filter(Boolean);

        if (experienceTexts.length === 0) {
            return `Bien que je n'aie pas encore d'expérience professionnelle significative, mon parcours académique et mes projets personnels m'ont permis de développer des compétences précieuses.`;
        }

        const experienceList = formatFrenchList(experienceTexts);
        return `Mon expérience inclut ${experienceList}, ce qui m'a permis de développer des compétences pratiques et une compréhension approfondie du domaine.`;
    };

    const generateExperienceEN = () => {
        if (selectedExperience.length === 0) {
            return `Although I do not yet have significant professional experience, my academic background and personal projects have allowed me to develop valuable skills.`;
        }

        const experienceTexts = selectedExperience
            .map(exp => experienceMapping[exp]?.en)
            .filter(Boolean);

        if (experienceTexts.length === 0) {
            return `Although I do not yet have significant professional experience, my academic background and personal projects have allowed me to develop valuable skills.`;
        }

        const experienceList = formatEnglishList(experienceTexts);
        return `My experience includes ${experienceList}, which has allowed me to develop practical skills and a deep understanding of the field.`;
    };

    const generateSkillsFR = () => {
        let section = '';
        
        // Add qualifications if selected
        if (selectedQualifications.length > 0) {
            const qualificationTexts = selectedQualifications
                .map(qual => qualificationMapping[qual]?.fr)
                .filter(Boolean);
            if (qualificationTexts.length > 0) {
                const qualificationList = formatFrenchList(qualificationTexts);
                section += `Mes principales qualifications incluent ${qualificationList}. `;
            }
        }

        // Add achievements if selected
        if (selectedAchievements.length > 0) {
            const achievementTexts = selectedAchievements
                .map(ach => achievementMapping[ach]?.fr)
                .filter(Boolean);
            if (achievementTexts.length > 0) {
                const achievementList = formatFrenchList(achievementTexts);
                section += `Je suis particulièrement fier${personalInfo.gender === 'female' ? 'e' : ''} de ${achievementList}, qui démontrent ma capacité à mener des projets à terme et à obtenir des résultats concrets.`;
            }
        }

        // Add goals if selected
        if (selectedGoals.length > 0) {
            const goalTexts = selectedGoals
                .map(goal => goalMapping[goal]?.fr)
                .filter(Boolean);
            if (goalTexts.length > 0) {
                const goalList = formatFrenchList(goalTexts);
                section += ` Mon objectif principal est de poursuivre ${goalList} dans un environnement stimulant.`;
            }
        }

        return section || 'Mes compétences et ma motivation constituent mes principaux atouts pour ce poste.';
    };

    const generateSkillsEN = () => {
        let section = '';
        
        // Add qualifications if selected
        if (selectedQualifications.length > 0) {
            const qualificationTexts = selectedQualifications
                .map(qual => qualificationMapping[qual]?.en)
                .filter(Boolean);
            if (qualificationTexts.length > 0) {
                const qualificationList = formatEnglishList(qualificationTexts);
                section += `My main qualifications include ${qualificationList}. `;
            }
        }

        // Add achievements if selected
        if (selectedAchievements.length > 0) {
            const achievementTexts = selectedAchievements
                .map(ach => achievementMapping[ach]?.en)
                .filter(Boolean);
            if (achievementTexts.length > 0) {
                const achievementList = formatEnglishList(achievementTexts);
                section += `I am particularly proud of ${achievementList}, which demonstrate my ability to carry projects to completion and achieve concrete results.`;
            }
        }

        // Add goals if selected
        if (selectedGoals.length > 0) {
            const goalTexts = selectedGoals
                .map(goal => goalMapping[goal]?.en)
                .filter(Boolean);
            if (goalTexts.length > 0) {
                const goalList = formatEnglishList(goalTexts);
                section += ` My main goal is to pursue ${goalList} in a stimulating environment.`;
            }
        }

        return section || 'My skills and motivation constitute my main assets for this position.';
    };

    const generateMotivationFR = () => {
        if (selectedMotivations.length === 0) {
            return `Ce qui m'attire particulièrement dans cette opportunité, c'est la possibilité de contribuer au développement de votre entreprise tout en continuant à apprendre et à évoluer professionnellement.`;
        }

        const motivationTexts = selectedMotivations
            .map(mot => motivationMapping[mot]?.fr)
            .filter(Boolean);

        const motivationList = formatFrenchList(motivationTexts);
        const convinced = safeGenderAgreement('convaincu', personalInfo.gender);
        
        return `Ce qui m'attire particulièrement dans cette opportunité, c'est ${motivationList}. Je suis ${convinced} que votre environnement de travail correspondrait parfaitement à mes aspirations professionnelles et me permettrait de m'épanouir pleinement.`;
    };

    const generateMotivationEN = () => {
        if (selectedMotivations.length === 0) {
            return `What particularly attracts me to this opportunity is the possibility of contributing to your company's development while continuing to learn and grow professionally.`;
        }

        const motivationTexts = selectedMotivations
            .map(mot => motivationMapping[mot]?.en)
            .filter(Boolean);

        const motivationList = formatEnglishList(motivationTexts);
        
        return `What particularly attracts me to this opportunity is ${motivationList}. I am convinced that your work environment would perfectly match my professional aspirations and allow me to flourish fully.`;
    };

    const generateClosingFR = () => {
        const delighted = safeGenderAgreement('ravi', personalInfo.gender);
        return `Je serais ${delighted} de pouvoir vous rencontrer lors d'un entretien afin de vous exposer plus en détail mes motivations et de découvrir les enjeux spécifiques du poste. Je vous remercie de l'attention que vous porterez à ma candidature et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Cordialement,
${personalInfo.name}`;
    };

    const generateClosingEN = () => {
        return `I would be delighted to meet with you for an interview to discuss my motivations in more detail and discover the specific challenges of the position. Thank you for the attention you will give to my application and I remain at your disposal.

Sincerely,
${personalInfo.name}`;
    };

    // Assemblage final selon la langue
    if (currentLanguage === 'fr') {
        return [
            generateHeaderFR(),
            '',
            'Madame, Monsieur,',
            '',
            generateIntroFR(),
            '',
            generateExperienceFR(),
            '',
            generateSkillsFR(),
            '',
            generateMotivationFR(),
            '',
            generateClosingFR()
        ].filter(section => section !== '').join('\n');
    } else {
        return [
            generateHeaderEN(),
            '',
            'Dear Hiring Manager,',
            '',
            generateIntroEN(),
            '',
            generateExperienceEN(),
            '',
            generateSkillsEN(),
            '',
            generateMotivationEN(),
            '',
            generateClosingEN()
        ].filter(section => section !== '').join('\n');
    }
}

// Fonction pour générer toutes les lettres et les sauvegarder
function generateAllLetters() {
    console.log("🚀 GÉNÉRATION DE TOUTES LES LETTRES DE TEST...\n");
    
    let allLetters = "";
    let testNumber = 1;
    
    testCases.forEach((testCase) => {
        console.log(`📝 Génération du test ${testNumber}: ${testCase.name}`);
        
        try {
            const result = generateLocalLetter(testCase.formData, testCase.language, testCase.gender);
            
            // Ajouter les informations du test
            allLetters += `\n${"=".repeat(80)}\n`;
            allLetters += `TEST ${testNumber}: ${testCase.name}\n`;
            allLetters += `${"=".repeat(80)}\n\n`;
            
            // Ajouter les données utilisées
            allLetters += `📋 DONNÉES UTILISÉES:\n`;
            allLetters += `Nom: ${testCase.formData.name}\n`;
            allLetters += `Âge: ${testCase.formData.age}\n`;
            allLetters += `Cible: ${testCase.formData.target}\n`;
            allLetters += `Genre: ${testCase.gender || 'Non spécifié'}\n`;
            allLetters += `Langue: ${testCase.language}\n`;
            allLetters += `Langues sélectionnées: ${testCase.formData.languages || 'Aucune'}\n`;
            allLetters += `Intérêts sélectionnés: ${testCase.formData.interests || 'Aucun'}\n`;
            allLetters += `Objectifs sélectionnés: ${testCase.formData.goals || 'Aucun'}\n`;
            allLetters += `Motivations sélectionnées: ${testCase.formData.motivation || 'Aucune'}\n`;
            allLetters += `Réalisations sélectionnées: ${testCase.formData.achievements || 'Aucune'}\n`;
            allLetters += `Expérience sélectionnée: ${testCase.formData.experience || 'Aucune'}\n`;
            allLetters += `Qualifications sélectionnées: ${testCase.formData.qualifications || 'Aucune'}\n\n`;
            
            // Ajouter la lettre générée
            allLetters += `📄 LETTRE GÉNÉRÉE:\n`;
            allLetters += `${result}\n\n`;
            
            testNumber++;
            
        } catch (error) {
            allLetters += `❌ ERREUR: ${error.message}\n\n`;
            console.log(`❌ Erreur dans le test ${testNumber}: ${error.message}`);
            testNumber++;
        }
    });
    
    // Ajouter un résumé
    allLetters += `\n${"=".repeat(80)}\n`;
    allLetters += `RÉSUMÉ: ${testCases.length} lettres générées\n`;
    allLetters += `Date: ${new Date().toLocaleString()}\n`;
    allLetters += `${"=".repeat(80)}\n`;
    
    // Sauvegarder dans un fichier
    const filename = 'test-results.txt';
    fs.writeFileSync(filename, allLetters, 'utf8');
    
    console.log(`\n✅ ${testCases.length} lettres générées et sauvegardées dans '${filename}'`);
    console.log(`📁 Tu peux maintenant ouvrir le fichier '${filename}' pour vérifier si toutes les sélections utilisateur sont bien intégrées.`);
    
    return filename;
}

// Exécuter la génération
const filename = generateAllLetters();
console.log(`\n🎯 Vérifie maintenant le fichier '${filename}' pour voir si toutes les sélections utilisateur sont intégrées !`); 