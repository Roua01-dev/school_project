import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [datenaiss, setDatenaiss] = useState("");
  const [cin, setCin] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      // Vérifier si les mots de passe correspondent
      if (password !== confPassword) {
        throw new Error("Les mots de passe ne correspondent pas.");
      }

      await axios.post("http://localhost:5000/users", {
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
      setMsg(error.message);
    }
  };

  return (
    <div>
      <h1 className='title'>Users</h1>
      <h2>Ajouter Nouveau Utilisateur</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
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
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
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
              {/* Champ pour la date de naissance */}
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
                  Sauvegarder
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

export default FormAddUser;
