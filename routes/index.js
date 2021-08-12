const express = require('express');
const router = express.Router();
const CurriculoController = require('../controllers/curriculo-controller');

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/curriculo', (req, res, next) => {
    const curriculoData = CurriculoController.getData();
    res.render('curriculo', curriculoData);
});

router.get('/MeuProjeto', function(req, res, next) {
    res.render('./Projetos/Meu Projeto/index');
});

router.get('/Projeto01', function(req, res, next) {
    res.render('./Projetos/Projeto 01/index');
});

router.get('/Projeto02', function(req, res, next) {
    res.render('./Projetos/Projeto 02/index');
});

module.exports = router;