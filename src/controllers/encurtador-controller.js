
import axios from "axios"

export default class EncurtadorController {
  static async encurtarLink(req, res) {
    try {
      const { url } = req.body || {}

      if (!url) {
        return res.status(400).json({
          error: "A URL é obrigatória."
        })
      }

      // Verifica se a URL é válida
      try {
        new URL(url)
      } catch {
        return res.status(400).json({
          error: "Informe uma URL válida."
        })
      }

      const { data } = await axios.post(
        "https://api.tinyurl.com/create",
        {
          url
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.TINYURL_API_TOKEN}`,
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )

      return res.status(200).json({
        shortUrl: data.data.tiny_url
      })

    } catch (error) {
      return res.status(error.response?.status || 500).json({
        error: error.response?.data || error.message
      })
    }
  }
}
