var express = require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

var router = express.Router();
var a = {
    albums: [{
        id: 1,
        name: 'Express',
        artistName: 'Carlos'
    }, {
        id: 12,
        name: 'Express',
        artistName: 'Carlos'
    }, {
        id: 3,
        name: 'Express',
        artistName: 'Carlos'
    }, {
        id: 4,
        name: 'Express',
        artistName: 'Carlos'
    }]
}


// Return a list of albums
router.get('/', async function (req, res, next) {
    const albums = await prisma.album.findMany()
    res.json(albums);
});

router.post('/', async (req, res) => {
    if (req.body.name != undefined) {
        const a = await prisma.album.create({
            data: {
                name: req.body.name,
                artist: "Carlos"
            }
        })
        res.send(a)
    } else {
        res.send("Cu")
    }
    
})
router.get('/:id', (req, res) => {
    res.send(req.params)
})

module.exports = router;