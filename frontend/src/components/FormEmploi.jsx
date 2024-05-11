

import React from 'react';
import Navbar from "../components/Navbar";
import { CSVLink } from 'react-csv';
import '../css/emploi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

const EmploiForm = () => {
  const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const seances = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6'];
  
const emploiEtudiant = [
  { jour: 'Lundi', seance: 'S1', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Lundi', seance: 'S2', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Lundi', seance: 'S3', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Lundi', seance: 'S4', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Lundi', seance: 'S5', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Lundi', seance: 'S6', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mardi', seance: 'S1', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mardi', seance: 'S2', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mardi', seance: 'S3', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mardi', seance: 'S4', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mardi', seance: 'S5', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mardi', seance: 'S6', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mercredi', seance: 'S1', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mercredi', seance: 'S2', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mercredi', seance: 'S3', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mercredi', seance: 'S4', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mercredi', seance: 'S5', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Mercredi', seance: 'S6', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Jeudi', seance: 'S1', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Jeudi', seance: 'S2', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Jeudi', seance: 'S3', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Jeudi', seance: 'S4', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Jeudi', seance: 'S5', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Jeudi', seance: 'S6', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Vendredi', seance: 'S1', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Vendredi', seance: 'S2', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Vendredi', seance: 'S3', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Vendredi', seance: 'S4', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Vendredi', seance: 'S5', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Vendredi', seance: 'S6', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Samedi', seance: 'S1', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Samedi', seance: 'S2', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Samedi', seance: 'S3', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Samedi', seance: 'S4', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Samedi', seance: 'S5', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },
  { jour: 'Samedi', seance: 'S6', matiere: 'Mathématiques', type: 'TD', enseignant: 'Professeur A', salle: 'G20' },

  
];

  const headers = [
    { label: 'Jour', key: 'jour' },
    { label: 'Séance', key: 'seance' },
    { label: 'Matière', key: 'matiere' },
    { label: 'Type', key: 'type' },
    { label: 'Enseignant', key: 'enseignant' },
    { label: 'Salle', key: 'salle' },
  ];

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h1 className="emploi-title">Emploi de 2ème année Génie Logiciel</h1>
        <div className="export-dropdown">
          <select className="semestre-select">
            <option value="semestre1">Semestre 1</option>
            <option value="semestre2">Semestre 2</option>
          </select>
          <CSVLink
            className="export-button"
            data={emploiEtudiant}
            headers={headers}
            filename={'emploi.csv'}
          >
            <FontAwesomeIcon icon={faFileExcel} style={{ marginRight: '0.5rem' }} /> Exporter en CSV
          </CSVLink>
        </div>
        <div className="emploi-container">
          <table className="emploi-table">
            <thead>
              <tr>
                <th>Jour</th>
                <th>Seance</th>
                <th>Matiere</th>
                <th>Type</th>
                <th>Prof</th>
                <th>Salle</th>
              </tr>
            </thead>
            <tbody>
              {joursSemaine.map(jour => (
                <React.Fragment key={jour}>
                  <tr className="jour-separator">
                    <td colSpan="6">{jour}</td>
                  </tr>
                  {seances.map(seance => {
                    const emploi = emploiEtudiant.find(emp => emp.jour === jour && emp.seance === seance);
                    return (
                      <tr key={`${jour}-${seance}`} className="emploi-row">
                        <td className="emploi-cell">{seance}</td>
                        <td className="emploi-cell">{emploi ? emploi.matiere : ''}</td>
                        <td className="emploi-cell">{emploi ? emploi.type : ''}</td>
                        <td className="emploi-cell">{emploi ? emploi.enseignant : ''}</td>
                        <td className="emploi-cell">{emploi ? emploi.salle : ''}</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmploiForm;
