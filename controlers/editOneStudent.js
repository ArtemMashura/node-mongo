const Student = require('../model/Student')

const handleEditOneStudent = async (req, res) => {
    const {filter, query} = req.body  // ця конструкція дозволяє нам шукати не тільки за айдішником, а за усім чим захочеться (і що вкажуть у тілі запита)
    try {
        const result = await Student.findOneAndUpdate(filter, {$set: query}, {new: true})  // new: true повертає у result документ після змін
        res.status(201).json({'students': result})                                         // чому дефолтна поведінка повертати старий документ у апдейті це дуже актуальне питання
    } catch (err){
        console.log(err.message)
        res.status(404).json({"error": err})
    }
}

module.exports = {handleEditOneStudent}