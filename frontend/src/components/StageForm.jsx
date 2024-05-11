// stages.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import '../css/stages.css';
const StagesForm = () => {
  // Exemple de données d'offres de stage
  const offres = [
    {
      titre: 'Développeur Web Full Stack',
      description: 'Nous recherchons un développeur web Full Stack pour rejoindre notre équipe et contribuer au développement de projets passionnants. Le poste comprend la conception, le développement et la maintenance de sites web dynamiques.',
      societe: 'ABC Technologies',
      adresse: '123 Rue de la Technologie, Ville',
      contact: '54180161'
    },
    {
      titre: 'Ingénieur DevOps',
      description: 'Nous recherchons un ingénieur DevOps pour gérer l\'infrastructure et les déploiements de nos applications cloud. Le poste comprend la configuration et automatisation des processus de déploiement.',
      societe: 'XYZ Solutions',
      adresse: '456 Avenue de Innovation, Ville',
      contact: '99632587'
    },
    {
        titre: 'Développeur Mobile',
        description: 'Nous recherchons un développeur mobile passionné pour rejoindre notre équipe de développement. Le poste comprend la conception, le développement et la maintenance d\'applications mobiles pour iOS et Android.',
        societe: 'MobileTech Inc.',
        adresse: '789 Boulevard des Applications, Ville',
        contact: '98525874'
      },
      {
        titre: 'Analyste en Sécurité Informatique',
        description: 'Nous recherchons un analyste en sécurité informatique pour renforcer notre équipe de cybersécurité. Le poste comprend l\'identification et la résolution des vulnérabilités de sécurité.',
        societe: 'SecureNet Solutions',
        adresse: '1010 Rue de la Sécurité, Ville',
        contact: '52368741'
      },
    // Ajouter d'autres offres ici...
  ];

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h1 className="stages-title">Offres de Stage en Informatique</h1>
        <div className="offres-container">
          {offres.map((offre, index) => (
            <div key={index} className="offre">
              <h2 className="offre-titre">{offre.titre}</h2>
              <p className="offre-description">{offre.description}</p>
              <p className="offre-details">Déposé par : {offre.societe}</p>
              <p className="offre-details">Adresse : {offre.adresse}</p>
              <p className="offre-details">Contact : {offre.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StagesForm;
