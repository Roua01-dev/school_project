import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) return res.status(404).json({ msg: "No user found " });
  const match = await argon2.verify(user.password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Password incorrect" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ uuid, name, email, role });
};


export const Me = async (req, res) => {
  if (!req.session.userId)
    return res.status(401).json({ msg: "You are not logged in" });
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role"],
    where: {
      uuid: req.session.userId,
    }
  });
  if (!user) return res.status(404).json({ msg: "The user was not found" });
  res.status(200).json(user);
};



export const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Error while logging out" });
    
    // Supprimer le cookie de session
    res.clearCookie('connect.sid');

    res.status(200).json({ msg: "Logged out successfully" });
  });
};
