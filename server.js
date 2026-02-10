import app from './app.js'
const PORT = process.env.PORT || 3000
console.log(process)
console.log(process.env)
app.listen(PORT, () => console.log(`App is running on port ${PORT}`))