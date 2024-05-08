import { Router } from "express";
const router = Router()
import {createEmployee, deleteEmployee, getEmploye, getEmployes, updateEmployee} from '../controllers/employees.controllers.js'

router.get('/employes',getEmployes)

router.get('/employes/:id',getEmploye)

router.post('/employes',createEmployee)

// router.put('/employes/:id',updateEmployee)
router.patch('/employes/:id',updateEmployee)

router.delete('/employes/:id',deleteEmployee)

export default router