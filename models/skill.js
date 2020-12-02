const skills = [
    {id: 125223, skill: 'Programming Languages', acquired: true},
    {id: 129546, skill: 'Programming Frameworks', acquired: false},
    {id: 127854, skill: 'Data Structures', acquired: true},
    {id: 125325, skill: 'Algorithms', acquired: false},
    {id: 132157, skill: 'Problem Solving', acquired: true},
    {id: 126319, skill: 'Attention to Detail', acquired: true},
    {id: 125220, skill: 'Git', acquired: false},
    {id: 128520, skill: 'Github', acquired: true}
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function create(skill) {
    skill.id = Date.now()*1000000
    skill.acquired = true
    skills.push(skill)
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
}

function update(id, newSkill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills[idx].skill = newSkill.skill
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};