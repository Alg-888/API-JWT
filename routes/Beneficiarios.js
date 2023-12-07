import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';

const router = express.Router();

router.get('/beneficiarios', function(req, res) {
    var url2 = "https://api-token-qd4y.onrender.com/api/users";

    request.get({
        url: url2,
        headers: { "Content-Type": "application/json" }
    }, (error, response, body) => {
        if (error) {
            return res.status(500).send('Error al obtener datos de la API');
        }

        const beneficiarios = JSON.parse(body);
        res.render('beneficiarios', { beneficiarios });
    });
});

export default router;
