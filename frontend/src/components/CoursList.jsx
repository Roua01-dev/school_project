import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const CoursList = () => {
  const [cours, setCours] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getCours();
  }, []);

  const getCours = async () => {
    const response = await axios.get("http://localhost:5000/cours");
    setCours(response.data);
  };

  const deleteCour = async (coursId) => {
    try {
      await axios.delete(`http://localhost:5000/cours/${coursId}`);
      getCours();
    } catch (error) {
      console.error("Erreur lors de la suppression du cours :", error);
      // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions appropriées.
    }
  };

  return (
    <div>
      <h1 className="title">Supports de cours</h1>
      <h2 className="subtitle">Liste des matières</h2>

      {user && (user.role === "admin" || user.role === "enseignant") && (
        <Link to={"/cours/add"} className="button is-primary mb-2">
          Add New
        </Link>
      )}

      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ficher</th>
            <th>Ajouté par</th>
            <th>Créé à</th>
            {user && (user.role === "admin" || user.role === "enseignant")&& <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {cours.map((cour) => (
            <tr key={cour.uuid}>
              <td>{cour.name}</td>
              <td>
                <a
                  href={`http://localhost:5000/coursFiles/${cour.fichier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cour.fichier}
                </a>
              </td>
              <td>{cour.user.name}</td>
              <td>{new Date(cour.horaire).toLocaleDateString()}</td>
              {user && (user.role === "admin" || user.role === "enseignant") && (
                <td>
                  <Link
                    to={`/cours/edit/${cour.uuid}`}
                    className="button is-small is-info"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => deleteCour(cour.uuid)}
                    className="button is-small is-danger"
                  >
                    Supprimer
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursList;
