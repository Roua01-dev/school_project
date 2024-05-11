import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [datenaiss, setDatenaiss] = useState("");
  const [cin, setCin] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
        setRole(userData.role);
        setCin(userData.cin);
        if (userData.datenaiss) {
          const formattedDate = new Date(userData.datenaiss).toISOString().split('T')[0];
          setDatenaiss(formattedDate);
        }
      } catch (error) {
        setMsg("Erreur lors de la récupération des détails de l'utilisateur.");
      }
    };
  
    getUserDetails();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    if (!password || !confPassword || !datenaiss) {
      setMsg("Veuillez remplir tous les champs requis.");
      return;
    }
    if (password !== confPassword) {
      setMsg("Le mot de passe et la confirmation du mot de passe ne correspondent pas.");
      return;
    }
    try {
      await axios.patch(`http://localhost:5000/user/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
        datenaiss: datenaiss,
        cin: cin
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("Erreur lors de la mise à jour de l'utilisateur.");
      }
    }
  };

  return (
    <div>
      <h1 className='title'>Utilisateurs</h1>
      <h2>Modifier un Utilisateur</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nom</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Mot de passe</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                   
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirmer le mot de passe</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="****"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Rôle</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="etudiant">Etudiant</option>
                      <option value="enseignant">Enseignant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Date de Naissance</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={datenaiss}
                    onChange={(e) => setDatenaiss(e.target.value)}
                    placeholder="Date de Naissance"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">CIN</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={cin}
                    onChange={(e) => setCin(e.target.value)}
                    placeholder="CIN"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Mettre à jour
                  </button>
                </div>
              </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditUser;
