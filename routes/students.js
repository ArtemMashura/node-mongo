const express = require('express');
const router = express.Router();
const createStudent = require('../controlers/createStudent');
const getAllStudents = require('../controlers/getAllStudents');
const getOneStudent = require('../controlers/getOneStudent');
const editOneStudent = require('../controlers/editOneStudent')
const deleteOneStudent = require('../controlers/deleteOneStudent')


router.get("/", getAllStudents.handleGetAllStudents)

router.post("/*", createStudent.handleCreateStudent);

router.get("/*", getOneStudent.handleGetOneStudent)

router.put("/*", editOneStudent.handleEditOneStudent)

router.delete("/*", deleteOneStudent.handleDeleteOneStudent)

module.exports = router;