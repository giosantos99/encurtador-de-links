import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const srcDir = path.join(__dirname, '..')

const dataDir = path.join(srcDir, 'data')
const viewsDir = path.join(srcDir, 'views')
const publicDir = path.join(srcDir, '..', 'public')
const rootDir = path.join(srcDir, '..')

export {
  rootDir,
  dataDir,
  publicDir,
  viewsDir
}