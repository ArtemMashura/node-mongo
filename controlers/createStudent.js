const Student = require('../model/Student')

const handleCreateStudent = async (req, res) => {
    const { id, firstName, lastName, group, rate} = req.body;
    try {
        const result = await Student.create({
            id: id,
            firstName: firstName,
            lastName: lastName,
            group: group,
            rate: rate
        })
        console.log(result)
        res.status(201).json({'success': `New student ${firstName} created`})
    } catch (err){
        console.log(err.message)
        res.status(404).json({"error": err})
    }
}

module.exports = {handleCreateStudent}