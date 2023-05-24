const usermodel = require("../model/uModel");
exports.addUser = (req, res) => {

  const user = new usermodel(req.body);
  user
    .save()
    .then((data) => {
      console.log('data');
      
        res.json({
        message: "users Added SuccessFully",
        status: 200,
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        message: "Err Saving",
        status: 401,
        data: err,
      });
    });
};
exports.getAllUsers = (req, res) => {
  usermodel
    .find()
    .then((data) => {
      res.json({
        message: "Users retrieved SuccessFully",
        status: 200,
        data: data,
      });
    })
    .catch(() => {
      res.json({
        message: "Err retriveing",
        status: 401,
        data: err,
      });
    });
};
exports.getUserById = (req, res) => {
    usermodel.findById({_id:req.params.id}).then((data)=>{
        res.json({
            message: "User Feteched SuccessFully",
            status: 200,
            data: data,
          });
    }).catch((err)=>{
        res.json({
            message: "Error  feteching ",
            status: 401,
            data: data,
          });
    })
};
