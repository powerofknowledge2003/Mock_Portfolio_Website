const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: true,
    },
    skills: [
        {
            skill: {
                type: String,
            },
            proficiency: {
                type: Number,
                min: 0,
                max: 100
            }
        }
    ]
});

module.exports = mongoose.model('SkillDetail', SkillSchema);
