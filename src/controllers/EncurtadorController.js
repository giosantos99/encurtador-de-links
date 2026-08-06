import axios from "axios"

export default class EncurtadorController {
  static async encurtarLink (req, res) {
    try {
      const { url } = req.body || {}

      const { data } = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`) ?? {}

      return res
        .status(200)
        .json({ shortUrl: data })

    } catch (error) {

      return res
        .status(500)
        .json({ error: error.response?.data || error.message })
    }
  }
}
