import { cpSync, existsSync, mkdirSync, rmSync, watch } from 'node:fs'
import { spawn } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const previewDir = join(root, '.preview')
const port = process.env.PORT ?? '4321'

function syncPreview() {
  rmSync(previewDir, { recursive: true, force: true })
  mkdirSync(previewDir, { recursive: true })

  const publicDir = join(root, 'public')
  if (existsSync(publicDir)) {
    cpSync(publicDir, previewDir, { recursive: true })
  }

  cpSync(join(root, 'prototypes/plutonien.html'), join(previewDir, 'index.html'))
}

function startServer() {
  const child = spawn(
    'npx',
    ['serve', previewDir, '-l', port],
    { stdio: 'inherit', shell: true, cwd: root },
  )

  child.on('exit', (code) => process.exit(code ?? 0))
  return child
}

syncPreview()
console.log(`Maquette Plutonien → http://localhost:${port}`)

const server = startServer()

for (const dir of ['prototypes', 'public']) {
  watch(join(root, dir), { recursive: true }, () => {
    syncPreview()
    console.log('Fichiers mis à jour — rechargez la page.')
  })
}

process.on('SIGINT', () => {
  server.kill('SIGINT')
  process.exit(0)
})
