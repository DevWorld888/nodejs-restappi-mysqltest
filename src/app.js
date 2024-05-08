import express from 'express'
import employeesRouters from './routes/employes.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(express.json())
app.use(indexRoutes)
app.use('/api',employeesRouters)
app.use((req,res,next)=>{
    res.status(400).json({
        message:'Not found'
    })
})

export default app