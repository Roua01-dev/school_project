import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) => {
  try {
    const response = await User.findAll({
        attributes:['uuid','name', 'email', 'role', "datenaiss","cin","password"]
    });
    res.status(200).json(response);

  }
   catch(error) 
   {res.status(500).json({msg:error.message})}
};

export const getUserById =async (req, res) => {
try{const id= req.params.id;
    const response=await User.findOne({
        where:{uuid:id},
    });
    res.status(200).json(response);}
    catch(error){res.status(500).json({msg: error.message})}
};

export const createUser = async(req, res) => {
    const {name,email,password,confPassword,role,datenaiss,cin}=req.body;
    if(password!==confPassword)return res.status(400).json({msg: 'Passwords do not match'});
    //hash password
    const hashedPwd= await argon2.hash(password);
    try{
        await User.create({
            name: name,
            email:email,
            password:hashedPwd,
             role:role,
            cin:cin,
            datenaiss:datenaiss

        })
        res.status(201).json({msg:'User created successfully!'});
    }catch(error){
        return res.status(400).json({ msg: error.message})
    }



};



export const updateUser = async (req, res) => {
    const user = await User.findOne({
        where: { uuid: req.params.id }
    });

    if (!user) {
        return res.status(404).json({ msg: "No user found" });
    }

    const { name, email, password, confPassword, role, datenaiss, cin } = req.body;

    let hashedPwd;
    if (password === "" || password === null) {
        hashedPwd = user.password;
    } else {
        hashedPwd = await argon2.hash(password);
    }

    if (password !== confPassword) {
        return res.status(400).json({ msg: 'Passwords do not match' });
    }

    try {
        await User.update({
            name: name,
            email: email,
            password: hashedPwd,
            role: role,
            cin: cin,
            datenaiss: datenaiss
        }, {
            where: { uuid: req.params.id } // Move the 'where' clause inside the 'update' method call
        });

        res.status(200).json({ msg: 'User updated successfully!' });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
}


export const deleteUser =async (req, res) => {
    const user=await User.findOne({
        where:{
            uuid:req.params.id,
        }
    });
    if(!user) return res.status(404).json({msg:"No user found"});
    try{
        await User.destroy({
            
            where:{id :user.id}

    
        })
        res.status(200).json({msg:'User Deleted'});
    }catch(error){
        return res.status(400).json({ msg: error.message})
    } 




};
