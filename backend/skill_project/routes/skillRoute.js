const express = require('express');
const router = express.Router();
const Skill = require('../models/skillModel');

router.post('/add-skills/', async (req, res) => {
    try {
        console.log(JSON.stringify(req.body));
        const { domain, skills } = req.body;
        const newSkill = new Skill({ domain, skills });
        console.log(newSkill);
        await newSkill.save();
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/get-skills/', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
