const Student = require('../model/Student')

const handleGetAllStudents = async (req, res) => {
    const sortBy = req.body
    let filter = {};
    if (sortBy.group){
        switch (sortBy.groupParam){
            case 'less':
                filter.group = {$lt: sortBy.group}
                break;
            case 'lessOrEqual':
                filter.group = {$lte: sortBy.group}
                break;
            case 'equal':
                filter.group = {$eq: sortBy.group}
                break;
            case 'greaterOrEqual':
                filter.group = {$gte: sortBy.group}
                break;
            case 'greater':
                filter.group = {$gt: sortBy.group}
                break;
            default:
                filter.group = {$eq: sortBy.group}
                break;
        }
    }
    if (sortBy.rate){
        switch (sortBy.rateParam){
            case 'less':
                filter.rate = {$lt: sortBy.rate}
                break;
            case 'lessOrEqual':
                filter.rate = {$lte: sortBy.rate}
                break;
            case 'equal':
                filter.rate = {$eq: sortBy.rate}
                break;
            case 'greaterOrEqual':
                filter.rate = {$gte: sortBy.rate}
                break;
            case 'greater':
                filter.rate = {$gt: sortBy.rate}
                break;
            default:
                filter.rate = {$eq: sortBy.rate}
                break;
        }
    }
    try {
        
        const result = await Student.find(filter)
        res.status(202).json({'students': result})
    } catch (err){
        console.log(err.message)
        res.status(404).json({"error": err})
    }
}

module.exports = {handleGetAllStudents}