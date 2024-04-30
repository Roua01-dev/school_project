import { response } from "express";
import Cour from "../models/CoursModel.js";
import User from "../models/UserModel.js";
import {Op } from "sequelize";

export const getCours=async(req,res)=>{
    try{
        let response;
        if(req.role==="admin")
        {
            response=await Cour.findAll({
                attributes:['uuid','name','description','horaire'],
                include :[{model:User
                ,attributes:['id','name','email']}]
            })
        }
        else{
            response=await  Cour.findOne({
                attributes:['uuid','name','description','horaire'],

                where:{userId: req.userId},
                include:[{
                    model:User,
                    attributes:['id','name','email']
                }],
            });
        }
        res.status(200).json(response);
    }

    catch(error){res.status(500).json({msg:error.message})}

}

export const getCourById=async(req,res)=>{
    try{
        const cour=await Cour.findOne({
            where:{
                uuid:req.params.id
            }
        })
        if(!cour)return  res.status(404).json({msg:"No course found"});



        let response;
        if(req.role==="admin")
        {
            response=await Cour.findOne({
                attributes:['uuid','name','description','horaire'],
                where:{
                    id:cour.id
                },
                include :[{model:User
                ,attributes:['id','name','email']}]
            })
        }
        else{
            response=await  Cour.findOne({
                attributes:['uuid','name','description','horaire'],

                where:{
                    [Op.and]:[{id:cour.id},{userId:req.userId}]
                },

                include:[{
                    model:User,
                    attributes:['id','name','email']
                }],
            });
        }
        res.status(200).json(response);
    }

    catch(error){res.status(500).json({msg:error.message})}


}

export const createCour=async(req,res)=>{
    const {name,description,horaire}=req.body;

    try{
        await Cour.create({
            name:name,
            description:description,
            horaire:horaire,
            userId:req.userId
        


        });
        res.status(500).json({msg:"Cours Created Successsfuly"});

    }catch(error){res.status(500).json({msg:error.message});}

}

export const updateCour=async(req,res)=>{
   try{ const cour=await Cour.findOne({
        where: {uuid: req.params.id}
    })
    if(!cour)return  res.status(400).json({msg:'No course found'});
    const {name,description,horaire}=req.body;
    if (req.role==="admin"){
        await Cour.update({name,description,horaire},{
            where:{id:Cour.id}
        })
    }
    else{
        if(req.userId!==cour.userId) return res.status(403).json({msg:"You are not the owner of this course"});
        await Cour.update({name,description,horaire},{
            where:{
                [Op.and]:[{id:cour.id},{userId:req.userId}]
            }
        })
    }
    res.status(200).json({msg: "Updated Successfully!"})
}catch(error){
    res.status(500).json({msg: error.message});
}
}
export const deleteCour=async(req,res)=>{
    try{ const cour=await Cour.findOne({
        where: {uuid: req.params.id}
    })
    if(!cour)return  res.status(400).json({msg:'No course found'});
    const {name,description,horaire}=req.body;
    if (req.role==="admin"){
        await Cour.destroy({name,description,horaire},{
            where:{id:Cour.id}
        })
    }
    else{
        if(req.userId!==cour.userId) return res.status(403).json({msg:"You are not the owner of this course"});
        await Cour.destroy({name,description,horaire},{
            where:{
                [Op.and]:[{id:cour.id},{userId:req.userId}]
            }
        })
    }
    res.status(200).json({msg: "deleted Successfully!"})
}catch(error){
    res.status(500).json({msg: error.message});
}
}
