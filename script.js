// Base de données des compétences
const competences = {
	Langages: {
		description: [
			"Langage de structuration web moderne, maîtrisé pour créer des interfaces accessibles et sémantiques.",
			"CSS3 : Feuilles de style avancées pour des designs modernes et responsives avec animations et transitions.",
			"JavaScript : Programmation interactive côté client et manipulation du DOM pour des expériences utilisateur dynamiques.",
			"PHP : Développement backend procédural pour la gestion de données et l'interfaçage avec bases de données.",
		],
		contexte:
			"Utilisé dans tous mes projets web, notamment pour l'application React.js chez Maubeuge et les sites WordPress.",
		projets: [
			"Application React.js - Intégration API (Maubeuge 2024): https://agglo-maubeuge.fr",
			"Sites WordPress avec templates personnalisés",
			"Interfaces responsives pour différents supports",
			"Optimisation SEO et design - La Fabrique Documentaire",
			"Responsive design pour applications web",
			"Animations et micro-interactions",
			"Application React.js avec intégration API Power Apps",
			"Scripts d'automatisation pour workflows documentaires",
			"Interfaces dynamiques pour la gestion de contenu",
			"Scripts de traitement de données SNCF Réseaux",
			"Modules WordPress personnalisés",
			"Interfaces de gestion documentaire",
		],
	},
	Frameworks: {
		description: [
			"Symfony, React.js, Next.js : Frameworks modernes pour le développement web full-stack et front-end.",
		],
		contexte:
			"Création de chartes graphiques cohérentes et optimisation de l'expérience utilisateur.",
		projets: [
			"Optimisation SEO et design - La Fabrique Documentaire",
			"Responsive design pour applications web",
			"Animations et micro-interactions",
			"Application complète avec API Power Apps (Maubeuge)",
			"Composants réutilisables pour interfaces admin",
			"Intégration avec services externes",
		],
	},
	BDD: {
		description: [
			"Gestion de bases de données relationnelles, optimisation des requêtes et architecture de données.",
		],
		contexte:
			"Stockage et organisation de données documentaires et géomatiques.",
		projets: [
			"Base de données géomatique ArcGIS (SNCF)",
			"Systèmes de gestion documentaire",
			"Optimisation de bases WordPress",
		],
	},
	WordPress: {
		description: [
			"CMS leader mondial, maîtrisé pour création, maintenance et sécurisation de sites web.",
		],
		contexte:
			"Développement de sites institutionnels et optimisation pour différents publics.",
		projets: [
			"Site La Fabrique Documentaire (maintenance, SEO, sécurité)",
			"Sites pour collectivités et associations",
			"Formations WordPress pour équipes",
		],
	},
	RechercheDocumentaire: {
		displayName: "Recherche Documentaire",
		description: [
			"Développement backend procédural pour la gestion de données et l'interfaçage avec bases de données.",
		],
		contexte:
			"Création de solutions web dynamiques et gestion de contenus administratifs.",
		projets: [
			"Scripts de traitement de données SNCF Réseaux",
			"Modules WordPress personnalisés",
			"Interfaces de gestion documentaire",
		],
	},
	TechnologiesInformation: {
		displayName: "Technologies de l'Information",
		description: [
			"Gestion de bases de données relationnelles, optimisation des requêtes et architecture de données.",
		],
		contexte:
			"Stockage et organisation de données documentaires et géomatiques.",
		projets: [
			"Base de données géomatique ArcGIS (SNCF)",
			"Systèmes de gestion documentaire",
			"Optimisation de bases WordPress",
		],
	},
	ProprieteIntellectuelle: {
		displayName: "Propriété Intellectuelle",
		description: [
			"Connaissance des droits d'auteur, licences et gestion des contenus numériques.",
		],
		contexte:
			"Développement d'applications web modernes avec gestion d'état et composants réutilisables.",
		projets: [
			"Application complète avec API Power Apps (Maubeuge)",
			"Composants réutilisables pour interfaces admin",
			"Intégration avec services externes",
		],
	},
	Normesstandards: {
		displayName: "Normes & Standards",
		description: [
			"Connaissance approfondie des normes web (W3C, RGAA) et meilleures pratiques d'accessibilité.",
		],
		contexte:
			"Framework React full-stack pour applications web optimisées avec rendu côté serveur.",
		projets: [
			"Sites web optimisés pour le référencement",
			"Applications avec génération statique",
			"Prototypes d'applications e-learning",
		],
	},

	AdobeSuite: {
		displayName: "Adobe Suite",
		description: [
			"Suite créative professionnelle : Photoshop, InDesign, After Effects pour supports visuels et vidéo.",
		],
		contexte:
			"Création de supports de formation et de communication visuelle impactante.",
		projets: [
			"Supports d'information The Good Start",
			"Visuels pour formations iconographiques",
			"Contenus vidéo pédagogiques",
		],
	},
	SEO: {
		description: [
			"Optimisation pour moteurs de recherche, amélioration de la visibilité et du trafic web.",
		],
		contexte:
			"Stratégies de référencement pour organismes publics et entreprises.",
		projets: [
			"Optimisation SEO La Fabrique Documentaire",
			"Amélioration visibilité sites institutionnels",
			"Formation aux bonnes pratiques SEO",
		],
	},
	CommunityManagement: {
		displayName: "Community Management",
		description: [
			"Gestion de communautés en ligne, animation de réseaux sociaux et engagement digital.",
		],
		contexte:
			"Développement de stratégies d'engagement pour différents secteurs.",
		projets: [
			"Stratégies réseaux sociaux (formation Doranco)",
			"Animation communautés professionnelles",
			"Campagnes d'engagement digital",
		],
	},
	Canva: {
		description: [
			"Outil de design accessible pour création rapide de supports visuels professionnels.",
		],
		contexte:
			"Autonomie dans la création graphique pour supports de formation et communication.",
		projets: [
			"Supports de formation standardisés",
			"Visuels pour réseaux sociaux",
			"Templates pour équipes non-graphistes",
		],
	},
	CommunicationDigitale: {
		displayName: "Communication Digitale",
		description: [
			"Stratégies de communication omnicanale adaptées aux publics et objectifs métier.",
		],
		contexte:
			"Conception de stratégies de communication pour organismes variés.",
		projets: [
			"Stratégies communication (École des Métiers)",
			"Plans de communication digitale",
			"Formation aux outils de communication",
		],
	},
	GestionAgile: {
		displayName: "Gestion Agile",
		description: [
			"Méthodologies Agile et Kanban pour gestion de projets collaboratifs et itératifs.",
		],
		contexte:
			"Organisation de projets complexes avec équipes multidisciplinaires.",
		projets: [
			"Gestion projet application Maubeuge",
			"Workflow documentaire SNCF (méthodologie Kanban)",
			"Coordination équipes pluridisciplinaires",
		],
	},
	SecteurPublic: {
		displayName: "Secteur Public",
		description: [
			"10+ années d'expérience dans l'administration : DILA, SNCF Réseaux, collectivités.",
		],
		contexte:
			"Compréhension des enjeux publics, processus administratifs et contraintes réglementaires.",
		projets: [
			"Documentation en ligne vie-publique.fr (DILA)",
			"Systèmes documentaires SNCF Réseaux",
			"Application métier Communauté d'Agglomération Maubeuge",
		],
	},
	EnseignementSuperieur: {
		displayName: "Enseignement Supérieur",
		description: [
			"Expérience en université avec publics étudiants et chercheurs, valorisation des collections.",
		],
		contexte:
			"Adaptation pédagogique pour publics académiques et accompagnement à la recherche.",
		projets: [
			"Valorisation collections Université Paris-Descartes",
			"Recherches documentaires spécialisées",
			"Création de produits documentaires académiques",
		],
	},
	RechercheInnovation: {
		displayName: "Recherche & Innovation",
		description: [
			"Travail avec chercheurs et ingénieurs ONERA dans l'aérospatial, environnement technique pointu.",
		],
		contexte:
			"Support documentaire pour projets de recherche de pointe et innovation technologique.",
		projets: [
			"Documentation technique aérospatiale (ONERA)",
			"Veille technologique spécialisée",
			"Support recherche documentaire scientifique",
		],
	},
	CollectivitésTerritoriales: {
		displayName: "Collectivités Territoriales",
		description: [
			"Développement d'outils numériques pour services publics locaux et citoyens.",
		],
		contexte:
			"Compréhension des besoins territoriaux et contraintes des services publics de proximité.",
		projets: [
			"Application React.js/Power Apps (Maubeuge)",
			"Digitalisation de processus administratifs",
			"Solutions web pour services citoyens",
		],
	},
	StartupsPME: {
		displayName: "Startups / PME",
		description: [
			"Accompagnement de structures agiles avec ressources limitées, adaptabilité et polyvalence.",
		],
		contexte:
			"Support communication et développement pour entreprises en croissance.",
		projets: [
			"Communication digitale The Good Start",
			"Solutions web La Fabrique Documentaire",
			"Stratégies de visibilité pour PME",
		],
	},
	FormationProfessionnelle: {
		displayName: "Formation Professionnelle",
		description: [
			"Objectif principal : concevoir et animer des formations en digital learning adaptées aux adultes.",
		],
		contexte:
			"Transmission de compétences techniques avec pédagogie adaptée aux professionnels en activité.",
		projets: [
			"Recherche contrat d'apprentissage ingénierie pédagogique",
			"Formations informelles équipes (WordPress, outils)",
			"Conception supports pédagogiques",
		],
	},
};

console.log(
	"🎯 DONNÉES CHARGÉES:",
	Object.keys(competences).length,
	"compétences"
);

// Fonction pour obtenir le label de catégorie
function getCategorieLabel(categorie) {
	const labels = {
		technique: "💻 Compétence Technique",
		communication: "🎨 Communication & Design",
		publics: "👥 Publics & Secteurs",
	};
	return labels[categorie] || "🔧 Compétence";
}

function ouvrirPopup(nomCompetence, categorie, niveau) {
    console.log("🚀 Ouverture popup pour:", nomCompetence);

    const comp = competences[nomCompetence];
    if (!comp) {
        console.error("❌ Compétence non trouvée:", nomCompetence);
        return;
    }

    const displayName = comp.displayName || nomCompetence.replace(/_/g, " ");

    // Remplir les éléments
    document.getElementById("modal-title").textContent = displayName;
    document.getElementById("modal-category").textContent = getCategorieLabel(categorie);
    document.getElementById("modal-niveau-text").textContent = niveau;
    
    document.getElementById("modal-description").innerHTML = comp.description
        .map((desc) => `<li>${desc}</li>`)
        .join("");
    
    document.getElementById("modal-contexte").textContent = comp.contexte;
    
    document.getElementById("modal-projets").innerHTML = comp.projets
        .map((projet) => {
            const urlRegex = /(https?:\/\/[^\s]+)/g;
            const projetAvecLiens = projet.replace(
                urlRegex,
                '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
            );
            return `<li>${projetAvecLiens}</li>`;
        })
        .join("");

    // Ouvrir la modale
    MicroModal.show("modal-competence");
    
    // Animer la barre après ouverture
    setTimeout(() => {
        const niveauFill = document.getElementById("modal-niveau-fill");
        if (niveauFill) {
            niveauFill.style.width = niveau + "%";
        }
    }, 300);
}

// Fonction pour fermer la modale
function fermerPopup() {
	const modal = document.getElementById("modal-competence");
	if (modal) {
		modal.style.display = "none";
		modal.classList.remove("is-open");
		document.body.style.overflow = "";
		console.log("🔒 Modal fermée");
	}
}

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
	console.log("🚀 Initialisation du système de compétences");
	console.log("📚 Compétences chargées:", Object.keys(competences).length);

	// Gérer aussi les éléments avec data-micromodal-trigger
	const triggers = document.querySelectorAll(
		'[data-micromodal-trigger="modal-competence"]'
	);
	console.log("🎯 Triggers data-micromodal trouvés:", triggers.length);

	triggers.forEach(function (trigger, i) {
		trigger.style.cursor = "pointer";

		trigger.addEventListener("click", function (e) {
			e.preventDefault();
			e.stopPropagation();

			const nom = trigger.getAttribute("data-competence");
			const cat = trigger.getAttribute("data-categorie") || "";
			const niv = parseInt(trigger.getAttribute("data-niveau")) || 0;

			console.log("🖱️ Clic data-trigger:", nom);
			ouvrirPopup(nom, cat, niv);
		});

		console.log(
			"✓ Data-trigger configuré:",
			trigger.getAttribute("data-competence")
		);
	});

	// Gestion de la fermeture avec Escape
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") {
			fermerPopup();
		}
	});

	// Fermeture par clic sur overlay
	const modal = document.getElementById("modal-competence");
	if (modal) {
		modal.addEventListener("click", function (e) {
			if (e.target === modal || e.target.classList.contains("modal__overlay")) {
				fermerPopup();
			}
		});
	}

	console.log("✅ Système initialisé - Compatible onclick ET data-attributes");
});

// Test manuel
window.test = function (nom = "HTML5") {
	ouvrirPopup(nom, "technique", 85);
};

console.log("💡 Commandes disponibles:");
console.log("- test('HTML5') : Tester HTML5");
console.log("- ouvrirPopup('CSS3', 'technique', 90) : Tester CSS3");
console.log("- fermerPopup() : Fermer la modal");
