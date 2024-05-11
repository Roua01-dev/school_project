import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddCour = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', file, file.name);

    try {
      const response = await axios.post('http://localhost:5000/cours', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response data:', response.data);
      setMsg('File uploaded successfully');
      navigate('/cours'); // Redirect after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
      console.log('Response data:', error.response.data);
      setMsg('Error uploading file');
    }
  };

  return (
    <div>
      <h1 className="title">Cours</h1>
      <h2>Ajouter Nouveau Cour</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={handleSubmit}>
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
                    required // Ensure name field is required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required // Ensure description field is required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Télécharger un fichier</label>
                <div className="control">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required // Ensure file field is required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
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

export default FormAddCour;
