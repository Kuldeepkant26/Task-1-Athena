const express = require('express')
const app = express();
const PORT = 8080
const cors = require('cors')

const candidateRoute = require('./Routes/candidates.js')

app.use(cors());




app.get('/', (req, res) => {
    res.send('root route working');
})

app.use('/api', candidateRoute)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})