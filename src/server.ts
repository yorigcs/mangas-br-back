import app from './configExpress/app'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listen on port ${PORT}`))
