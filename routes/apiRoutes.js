const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todo list
router.get("/all", (req, res)=>{
   db.Todo.findAll().then(todos=> res.send(todos));
});


// get specific todo
router.get("/find/:id", (req,res)=>{
  db.Todo.findAll({
      where: {
          id: req.params.id,
      }
  }).then(todo => res.send(todo))  
})


// delete specific todo
router.delete("/delete/:id", (req,res)=>{
    db.Todo.destroy({
        where:{
            id: req.params.id
        }
    }).then(()=>{
        res.send("Success")
    })
})

// put specific todo
router.put("/edit", (req,res)=>{
    db.Todo.update({
        text: req.body.text
    },{
        where: {
            id: req.body.id
        }
    }).then(()=>{
        res.send("Edit Success")
    });
});


// post new todo
router.post("/new", (req,res)=>{
    db.Todo.create({
        text: req.body.text
    }).then(submitedTodo => res.send(submitedTodo));
});

module.exports = router;