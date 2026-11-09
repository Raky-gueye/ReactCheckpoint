import React from "react";

function CardComponent({ service }) {
  const { title, description, category, icon, tags } = service;

  return (
    <article className="service-card">
      <div className="card-topline">
        <span className="service-icon" aria-hidden="true">{icon}</span>
        <span className="category-label">{category}</span>
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="tag-list">
        {tags.map((tag) => (
          <span className="technology-tag" key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default CardComponent;
