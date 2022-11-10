const { Router} = require('express');
const router = Router();
const path = require('path')

//Raiz
router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'form.html'))
})
module.exports = router;