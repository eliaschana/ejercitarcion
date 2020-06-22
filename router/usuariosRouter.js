const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');


router.get("/", async (req, res, next) => {
    try {
        const usuarios = await usuariosController.getUsuarios();
        res.status(200).json(usuarios);
    } catch (e) {
        res.status(500).json(e);
        next(e);
    }
});

router.get("/:id", async (req, res, next) => {

  const id = req.params.id;
  try {
      const usuario = await usuariosController.getUsuario(id);
      if (usuario !==undefined)
        res.status(200).json(usuario);
      else
        res.status(404).json("Not Found")
  } catch (e) {
      res.status(500).json(e);
      next(e);
  }
});


router.post("/", async(req, res, next) => {
  try {
      const usuarioAdd = await usuariosController.addUsuario(req.body);
      res.status(201).json({ status: 'success', message: `${usuarioAdd} usuario agregado.`, usaurio: req.body })
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});

router.put("/:id", async(req, res, next) => {
  try {
       const id = req.params.id;
      const usuarioUp = await usuariosController.updateUsuario(req.body,id);
      if(usuarioUp===1){
      const{nombre,apellido,edad,tiene_registro}=req.body
      res.status(201).json({ status: 'success', message: `${usuarioUp} usuario actualizado.`, usaurio:{id,nombre,apellido,edad,tiene_registro}})}
      else
      res.status(404).json("Not Found")
  } catch (e) {
    res.status(500).json(e);
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {

  const id = req.params.id;
  try {
      const removeUsuario = await usuariosController.removeUsuario(id);
      if (removeUsuario === 1)
        res.status(200).json({status: 'success', message: `${removeUsuario} usuario borrado.`});
      else
        res.status(404).json("Not Found")
  } catch (e) {
      res.status(500).json(e);
      next(e);
  }
});

router.delete("/", async (req, res, next) => {
  try {
      const removeUsuario = await usuariosController.removeUsuarios();
      if (removeUsuario >= 1)
        res.status(200).json({status: 'success', message: `${removeUsuario} usuario borrado.`});
      else if(removeUsuario===0)
        res.status(200).json("tabla vacia")
  } catch (e) {
      res.status(500).json(e);
      next(e);
  }
});

module.exports = router;