// Base de données des compétences
const competences = {
	Langages: {
		description: [
			"HTML5 : Langage de structuration web.",
			"CSS3 : Feuilles de style avancées pour des designs modernes et responsives avec animations et transitions.",
			"JavaScript : Programmation interactive côté client et manipulation du DOM pour des expériences utilisateur dynamiques.",
			"PHP : Développement backend procédural pour la gestion de données et l'interfaçage avec bases de données.",
		],
		contexte: "Utilisés dans tous mes projets web.",
		projets: [
			"Responsive design pour applications web",
			"Animations et micro-interactions",
			"Dépôts GitHub : https://github.com/myriam-braconier",
		],
	},
	Frameworks: {
		description: [
			"Symfony, React.js, Next.js : Frameworks modernes pour le développement web full-stack et front-end.",
		],
		contexte:
			"Création d'une application pour tablette avec Power Apps et projet tutoré.",
		projets: [
			"Application complète avec API/React dans Power Apps (Maubeuge)",
			"Projet tutoré: Symfony : https://docs.google.com/document/d/12m6p3-MM4O9wO35dEXvAAFExPC90UzmIPBwARCIRP3E/edit?usp=sharing",
			"Projet personnel : Next.js et Api Express: Concrete Vibes : https://concrete-vibes.up.railway.app/synthetisers",
		],
	},
		Microsoft: {
			displayName: "Outils Microsoft",
		description: [
			"suite Microsoft Office, 365 et PowerApps",
		],
		contexte:
			"Création d'une application pour tablette avec PowerApps.",
		projets: [
			"Application complète avec API/React dans Power Apps (Maubeuge) : https://github.com/myriam-braconier/camvs-powerapps ",

		],
	},
	BDDAPI: {
		displayName: "BDD et API",
		description: [
			"Gestion de bases de données relationnelles et noSQL, optimisation des requêtes et architecture de données.",
		],
		contexte:
			"Stockage et organisation de données documentaires et géomatiques.",
		projets: [
			"Base de données géomatique ArcGIS (SNCF)",
			"Systèmes de gestion documentaire",
			"intégration d'une API météo",
			"Création d'une API personnalisée",
		],
	},
	WordPress: {
		description: [
			"CMS leader mondial, maîtrisé pour création, maintenance et sécurisation de sites web.",
		],
		contexte: "Développement d'un site institutionnel'",
		projets: [
			"Optimisation SEO et design - La Fabrique Documentaire (maintenance, SEO, sécurité)",
		],
	},
	RechercheDocumentaire: {
		displayName: "Recherche Documentaire",
		description: [
			"Veille informationnelle",
			"Recherche bibliographique spécialisée",
			"Curation de contenus scientifiques",
			"Formation aux outils de recherche",
			"Évaluation de sources d'information",
		],
		contexte:
			"Au sein d'organismes de recherches, université, centres de documentation et bibliothèques",
		projets: ["Libguides : université Descartes", "ONERA", "Eurocontrol"],
	},
	TechnologiesInformation: {
		displayName: "Technologies de l'Information",
		description: [
			"Systèmes de Gestion de Bases de Données documentaires",
			"Architecture de systèmes d'information documentaire",
			"Utilisation d'interfaces de recherche avancée",
			"Intégration de métadonnées et standards bibliographiques",
			"Solutions de GED (Gestion Électronique de Documents)",
		],
		contexte:
			"Stockage et organisation de données documentaires / Gestion des Prêts.",
		projets: [
			"Onera: Système de gestion documentaire aéronautique: Cadic Intégral",
			"Eurocontrol: Base documentaire contrôle aérien européen: Soutron",
		],
	},
	ProprieteIntellectuelle: {
		displayName: "Propriété Intellectuelle",
		description: [
			"Connaissance des droits d'auteur, licences et gestion des contenus numériques",
			"Gestion des licences Creative Commons et Open Source",
			"Formation aux enjeux du droit numérique",
		],
		contexte:
			"Organismes publics, entreprises culturelles, maisons d'édition, plateformes numériques et institutions académiques nécessitant une expertise juridique en propriété intellectuelle",

		projets: [
			"Plateforme de gestion des droits - Adobe Stock",
			"Guide gastronomique Michelin",
		],
	},
	Normesstandards: {
		displayName: "Normes & Standards",
		description: [
			"Connaissance des normes web (W3C, RGAA) et meilleures pratiques d'accessibilité",
			"Application des standards de métadonnées (MARC)",
			"Respect des normes ISO documentation (ISO 690)",
			"Conformité réglementaire (RGPD, accessibilité numérique)",
		],
		contexte:
			"Projets de transformation numérique nécessitant le respect des standards techniques et réglementaires, dans les secteurs public, privé et associatif",
		projets: [
			"Migration catalogue Eurocontrol : Dipmaker vers Souton Global",
		],
	},

	AdobeSuite: {
		displayName: "Adobe Suite",
		description: [
			"Suite créative professionnelle : Photoshop, InDesign, Première pour supports visuels et vidéo.",
		],
		contexte: "Création de supports de communication visuelle impactante.",
		projets: [
			"Supports d'information The Good Start",
			"Visuels pour formations iconographiques",
			"Contenus vidéo institutionnels pour l'association Communication et Démocratie : https://www.communication-democratie.org/fr/",
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
	Maquettage: {
		displayName: "Maquettage",
		description: ["Figma"],
		contexte: "Conception de maquette d'applications",
		projets: ["Prototypes pour sites web"],
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
		],
	},
	CommunicationDigitale: {
		displayName: "Communication Digitale",
		description: [
			"Stratégies de communication omnicanale adaptées aux publics et objectifs métier.",
		],
		contexte:
			"Conception et développement de stratégies de communication pour les associations",
		projets: [
			"Stratégies communication (École des Métiers de l'Information)",
			"Stratégies réseaux sociaux (formation Doranco et Ecole des Métiers de l'Information)",
			"Plans de communication digitale",
			"Calendrier éditorial pour les réseaux",
		],
	},
	GestionAgile: {
		displayName: "Gestion Agile",
		description: [
			"Méthodologies Agile et Kanban pour gestion de projets collaboratifs et itératifs.",
		],
		contexte:
			"Organisation de projets complexes avec équipes techniques (informatique et énergie).",
		projets: ["Workflow documentaire SNCF et EDF"],
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
			"Solutions web pour services citoyens",
		],
	},
	StartupsPME: {
		displayName: "Startups / PME",
		description: [
			"Accompagnement de structures avec ressources limitées, adaptabilité et polyvalence.",
		],
		contexte:
			"Support communication et développement pour entreprises en croissance.",
		projets: [
			"Communication digitale The Good Start",
			"Solutions web La Fabrique Documentaire",
		],
	},
	FormationProfessionnelle: {
		displayName: "Formation Professionnelle",
		description: [
			"Objectif principal : concevoir et animer des formations en digital learning adaptées aux adultes.",
			"AI Coding: Claude Code",
		],
		contexte:
			"Transmission de compétences techniques avec pédagogie adaptée aux professionnels en activité.",
		projets: [
			"Recherche contrat d'apprentissage ingénierie pédagogique",
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
	document.getElementById("modal-category").textContent =
		getCategorieLabel(categorie);
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
	// IMPORTANT: Initialiser MicroModal
	MicroModal.init({
		onShow: (modal) => console.log("Modal ouverte"),
		onClose: (modal) => console.log("Modal fermée"),
		disableScroll: false,
		debugMode: true,
	});

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

