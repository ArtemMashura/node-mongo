const Student = require('../model/Student')

const handleGetOneStudent = async (req, res) => {
    const filter = req.body  // ця конструкція дозволяє нам шукати не тільки за айдішником, а за усім чим захочеться (і що вкажуть у тілі запита)
    try {                    
        const result = await Student.findOne(filter)
        res.status(202).json({'students': result})
    } catch (err){
        console.log(err.message)
        res.status(404).json({"error": err})
    }
}

module.exports = {handleGetOneStudent}