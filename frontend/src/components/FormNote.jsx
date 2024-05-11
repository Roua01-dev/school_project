import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Importez votre Navbar
import '../css/notes.css';
const NotesPage = () => {
  const [matieres, setMatieres] = useState([
    { nom: "Développement web", coeff: 2, ds: 12, tp: 14, examen: 15 },
    { nom: "Mini projet", coeff : 2,ds: 13, tp: 11, examen: 16 },
    { nom: "Bases de données",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Architectures parallèles",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Génie logiciel",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Bases de données",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Qualité et Audit",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Portails",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Anglais",coeff : 1, ds: 10, tp: 12, examen: 14 },
    { nom: "Francais",coeff : 1, ds: 10, tp: 12, examen: 14 },
  ]);

  const [moyenneSemestre, setMoyenneSemestre] = useState(14);
  const [moyenneGenerale, setMoyenneGenerale] = useState(13.5);
  const [resultat, setResultat] = useState("Admis");

  const calculerMoyenne = (matiere) => {
    return (matiere.ds*0.2 + matiere.tp*0.1+ matiere.examen*0.7) ;
  };

  return (
    <div>
      <Navbar /> {/* Intégrer la Navbar ici */}
      <div className="content"> {/* Wrapper pour le contenu de la page */}
        <h1>Mes évaluations et résultats</h1>
        <h2>Ci-dessous vos notes et résultats par semestre : </h2>
        <select className="semestre-select">
          <option value="semestre1">Semestre 1</option>
          <option value="semestre2">Semestre 2</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Matière</th>
              <th>Coefficient</th>
              <th>Note DS</th>
              <th>Note TP</th>
              <th>Note Examen</th>
              <th>Moyenne</th>
            </tr>
          </thead>
          <tbody>
            {matieres.map((matiere, index) => (
              <tr key={index}>
                <td>{matiere.nom}</td>
                <td>{matiere.coeff}</td>
                <td>{matiere.ds}</td>
                <td>{matiere.tp}</td>
                <td>{matiere.examen}</td>
                <td>{calculerMoyenne(matiere)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Résultat</h2>
        <table>
          <thead>
            <tr>
              <th>Moyenne du semestre</th>
              <th>Moyenne générale</th>
              <th>Résultat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{moyenneSemestre}</td>
              <td>{moyenneGenerale}</td>
              <td>{resultat}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotesPage;
