import Cour from '../models/CoursModel.js';
import User from '../models/UserModel.js';
import { Op } from 'sequelize';
import Matiere from '../models/MatiereModel.js';

export const getCours = async (req, res) => {
  try {
    let response;
    if (req.role === 'enseignant') {
      response = await Cour.findAll({
        where: { userId: req.userId },
        attributes: ['uuid', 'name', 'description', 'horaire', 'fichier', 'userId', 'matiereId'],
        include: [
          { model: User, attributes: ['id', 'name', 'email'] },
          { model: Matiere, attributes: ['id', 'name'] }
        ]
      });
    } else if (req.role === 'admin') {
      response = await Cour.findAll({
        attributes: ['uuid', 'name', 'description', 'horaire', 'fichier', 'userId', 'matiereId'],
        include: [
          { model: User, attributes: ['id', 'name', 'email'] },
          { model: Matiere, attributes: ['id', 'name'] }
        ]
      });
    } else { // Pour les étudiants
      response = await Cour.findAll({
        attributes: ['uuid', 'name', 'description', 'horaire', 'fichier'],
        include: [
          { model: User, attributes: ['id', 'name', 'email'] },
          { model: Matiere, attributes: ['id', 'name'] }
        ]
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};





export const getCourById = async (req, res) => {
  try {
    const cour = await Cour.findOne({
      where: {
        uuid: req.params.id
      }
    });
    if (!cour) return res.status(404).json({ msg: "No course found" });

    let response;
    if (req.role === "admin") {
      response = await Cour.findOne({
        attributes: ['uuid', 'name', 'description', 'horaire', 'fichier', 'userId', 'matiereId'],
        where: {
          id: cour.id
        },
        include: [{ model: User, attributes: ['id', 'name', 'email'] }]
      });
    } else {
      response = await Cour.findOne({
        attributes: ['uuid', 'name', 'description', 'horaire', 'fichier', 'userId', 'matiereId'],
        where: {
          [Op.and]: [{ id: cour.id }, { userId: req.userId }]
        },
        include: [{
          model: User,
          attributes: ['id', 'name', 'email']
        }],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createCour = async (req, res) => {
    const { name, description } = req.body;
    const file = req.file; // Assuming you're using multer or similar middleware for file upload
    const userId = req.userId; // Assuming you have userId available in the request
  
    try {
      console.log('Creating a new course...');
      console.log('Name:', name);
      console.log('Description:', description);
      console.log('User ID:', userId);
      console.log('File:', file);
  
      const newCourse = new Cour({
        name: name,
        description: description,
        fichier: file.filename, // Assuming you want to store the filename in the database
        userId: userId,
        matiereId: "1",
        horaire:"12/08/2024"
      });
  
      await newCourse.save();
  
      res.status(201).json({ msg: "Course created successfully" });
    } catch (error) {
      console.error('Error creating course:', error);
      res.status(500).json({ msg: "Failed to create course" });
    }
  };

// export const createCour = async (req, res) => {
//   const { name, description,file } = req.body;

//   try {
//     console.log('hello wil upload your file');
//     console.log(name,description,req.userId,file);
//     await Cour.create({
//       name: name,
//       description: description,
//     //   horaire: horaire,
//       fichier: file,
//       userId: req.userId,
//     //   matiereId: req.matiereId
//     });
//     res.status(201).json({ msg: "Course created successfully" });
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// };

export const updateCour = async (req, res) => {
  try {
    const cour = await Cour.findOne({
      where: { uuid: req.params.id }
    });
    if (!cour) return res.status(404).json({ msg: 'No course found' });
    const { name, description, horaire, fichier } = req.body;
    if (req.role === "admin") {
      await Cour.update({ name, description, horaire, fichier }, {
        where: { id: cour.id }
      });
    } else {
      if (req.userId !== cour.userId) return res.status(403).json({ msg: "You are not the owner of this course" });
      await Cour.update({ name, description, horaire, fichier }, {
        where: {
          [Op.and]: [{ id: cour.id }, { userId: req.userId }]
        }
      });
    }
    res.status(200).json({ msg: "Updated Successfully!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteCour = async (req, res) => {
  try {
    const cour = await Cour.findOne({
      where: { uuid: req.params.id }
    });
    if (!cour) return res.status(404).json({ msg: 'No course found' });

    if (req.role === "admin") {
      await Cour.destroy({
        where: { id: cour.id }
      });
    } else {
      if (req.userId !== cour.userId) return res.status(403).json({ msg: "You are not the owner of this course" });
      await Cour.destroy({
        where: {
          [Op.and]: [{ id: cour.id }, { userId: req.userId }]
        }
      });
    }
    res.status(204).json({ msg: "Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
