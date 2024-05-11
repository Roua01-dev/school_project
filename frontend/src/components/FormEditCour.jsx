import React, { useState ,useEffect} from 'react'
import { useNavigate ,useParams} from "react-router-dom";
import axios from 'axios';


const FormEditCour = () => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    const getCoursById=async()=>{
      try{
        const response=await axios.get(`http://localhost:5000/cours/${id}`);
        setName(response.data.name);
        setDescription(response.data.description);
        setFile(response.data.file);


      }catch(error){
        setMsg(error.response.data.msg);

      }
    }
getCoursById();
  },[id]);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('file', file, file.name);

    try {
      const response = await axios.patch(`http://localhost:5000/cours/${id}`, formData, {
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
    <h2>Modifier Nouveau Cour</h2>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={updateProduct}>
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
              <label className="label">Description</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={description}
                    onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Upload File</label>
              <div className="control">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
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
}

export default FormEditCour
