import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) =>{
    res.send("Hehe")
});

export {router as currentUserRouter};