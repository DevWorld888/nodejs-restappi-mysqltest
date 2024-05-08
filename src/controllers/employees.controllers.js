import { pool } from '../db.js'
export const getEmployes = async (req, res) => {
    try {
        // throw new Error('My error')
        const [rows] = await pool.query('SELECT * FROM employee')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }
}
export const getEmploye = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id= ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        console.log(rows);
        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }


}

export const createEmployee = async (req, res) => {
    try {
        console.log('bosy', req.body);
        const { name, salary } = req.body
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }

}
export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { name, salary } = req.body
        console.log(id, name, salary);
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?),salary= IFNULL(?) WHERE id = ?', [name, salary, id])
        console.log('result', result);
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'employee not found'
        })
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }

}
export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        console.log('res', result);
        if (result.affectedRows <= 0) return res.status(404).json({
            meesage: 'employee not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'something goes wrong'
        })
    }

}