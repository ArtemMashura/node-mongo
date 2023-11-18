const Student = require('../model/Student')

const handleDeleteOneStudent = async (req, res) => {
    const filter = req.body  // ця конструкція дозволяє нам шукати не тільки за айдішником, а за усім чим захочеться (і що вкажуть у тілі запита)
    try {
        const result = await Student.findOneAndDelete(filter)  // якщо документ був знайден та видален то result буде дорівнювати документу
        if (result === null){
            res.status(204)
        }
        else {
            res.status(202).json({'result': result})
        }
    } catch (err){
        console.log(err.message)
        res.status(404).json({"error": err})
    }
}

module.exports = {handleDeleteOneStudent}