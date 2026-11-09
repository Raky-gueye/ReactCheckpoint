import React, { useMemo, useState } from "react";
import Navigation from "./Navbar";
import Header from "./Headers";
import CardComponent from "./Card";
import { Container } from "react-bootstrap";

const services = [
  {
    id: 1,
    title: "Développement web",
    category: "Web",
    description: "Conception de sites web modernes, accessibles et adaptés à tous les écrans.",
    icon: "💻",
    tags: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Applications mobiles",
    category: "Mobile",
    description: "Création d'expériences mobiles simples et agréables pour les utilisateurs.",
    icon: "📱",
    tags: ["Flutter", "Mobile"],
  },
  {
    id: 3,
    title: "Développement backend",
    category: "Backend",
    description: "Développement d'API et de services pour connecter les applications aux données.",
    icon: "⚙️",
    tags: ["Node.js", "API REST"],
  },
  {
    id: 4,
    title: "Bases de données",
    category: "Backend",
    description: "Organisation et gestion des données avec des bases relationnelles.",
    icon: "🗄️",
    tags: ["PostgreSQL", "MySQL"],
  },
  {
    id: 5,
    title: "Interfaces utilisateur",
    category: "Web",
    description: "Création d'interfaces claires, cohérentes et faciles à utiliser.",
    icon: "🎨",
    tags: ["UI", "Bootstrap"],
  },
  {
    id: 6,
    title: "Maintenance applicative",
    category: "Support",
    description: "Amélioration continue, correction de bugs et évolution des applications.",
    icon: "🛠️",
    tags: ["Qualité", "Support"],
  },
];

const categories = ["Tous", "Web", "Mobile", "Backend", "Support"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredServices = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "Tous" || service.category === activeCategory;
      const searchableContent = [
        service.title,
        service.description,
        service.category,
        ...service.tags,
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = searchableContent.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="app-shell">
      <Navigation />
      <main>
        <Header />
        <Container className="services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORER</p>
              <h2>Nos services</h2>
              <p className="section-description">
                Des solutions numériques pensées pour accompagner vos projets.
              </p>
            </div>
            <span className="results-count">
              {filteredServices.length} service{filteredServices.length > 1 ? "s" : ""}
            </span>
          </div>

          <div className="toolbar">
            <label className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Rechercher un service ou une technologie..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Rechercher un service"
              />
            </label>

            <div className="category-filters" aria-label="Filtrer par catégorie">
              {categories.map((category) => (
                <button
                  className={activeCategory === category ? "filter-button active" : "filter-button"}
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredServices.length > 0 ? (
            <div className="services-grid">
              {filteredServices.map((service) => (
                <CardComponent key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="empty-state" role="status">
              <span className="empty-icon" aria-hidden="true">🔎</span>
              <h3>Aucun service trouvé</h3>
              <p>Essayez un autre mot-clé ou choisissez une autre catégorie.</p>
              <button
                className="reset-button"
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("Tous");
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </Container>
      </main>

      <footer className="site-footer">
        <Container>
          <p>ServiceHub · Projet de démonstration réalisé avec React.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
