const express = require('express')
const router = express.Router();
const {setDir, getDir, resetList} = require('../Controllers/directoryControllers')
router.get('/getDir', (req, res) => {
    const data = getDir();
    if(data.length === 0){
        return res.status(500).json({msg : 'Can not get directory'})
    }
    res.status(200).json(data);
    resetList();
})

router.post('/setDir', (req, res) => {
    let tempPath = req.body.path;
    if(tempPath === '')
        return res.status(400).json({msg : 'Invalid Path'})
    tempPath = tempPath.replaceAll('\\', '/');
    setDir(tempPath);
    res.status(200).json({msg : 'Received Successfully!'})
});

module.exports = router;