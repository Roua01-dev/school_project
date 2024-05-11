import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import Cours from  './pages/Cours';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import AddCour from './pages/AddCour';
import EditCour from './pages/EditCour';
import NotesEtudiant from './pages/NotesEtudiant';
import Emploi from './pages/Emploi';
import Stage from './pages/Stage';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/users/add' element={<AddUser/>}></Route>
      <Route path='/users/edit/:id' element={<EditUser/>}></Route>
      <Route path='/cours' element={<Cours/>}></Route>
      <Route path='/cours/add' element={<AddCour/>}></Route>
      <Route path='/cours/edit/:id' element={<EditCour/>}></Route>
      <Route path='/NotesEtudiant' element={<NotesEtudiant/>}></Route>
      <Route path='/Emploi' element={<Emploi/>}></Route>
      <Route path='/Stages' element={<Stage/>}></Route>
      
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
