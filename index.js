import { viewsDir, publicDir } from './src/utils/tools.js'

import EncurtadorController from './src/controllers/encurtador-controller.js'
import UrlController from './src/controllers/url-controller.js'

import "dotenv/config"
import express from 'express'

const port = process.env.PORT ?? 3000
const app = express()

app.set('views', viewsDir)
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(publicDir))

app.get('/', UrlController.fetchUrl)

app.post('/encurtar', EncurtadorController.encurtarLink)

app.listen(
  port,
  () => console.log(`Server is running on http://localhost:${port}...`)
)
