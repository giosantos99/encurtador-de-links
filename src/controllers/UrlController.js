import fs from 'fs/promises'
import path from 'path'

import { dataDir } from '../Utils/tools.js'
import { json } from 'stream/consumers'

export default class UrlController {
  static async fetchUrl (req, res) {
    const filePath = path.join(dataDir, 'urls.json')

    const file = await fs.readFile(filePath, 'utf-8')

    const urls = JSON.parse(file)

    const urlsPrincipais = urls
      .sort((a, b) => b.hits - a.hits)
      .slice(0, 5)
      .map(({ hits, ...url }) => ({
        ...url,
        hits,
        hitsFormatado: hits.toLocaleString('pt-BR')
      })
    )

    const total = urlsPrincipais
      .reduce((acc, url) => url.hits + acc, 0)
      .toLocaleString('pt-BR')

    res.render('index', {
      urls: urlsPrincipais,
      total
    })
  }
}
