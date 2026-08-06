import alert from './modules/alert.js'

document.addEventListener('DOMContentLoaded', () => {

  const input = document.getElementById('url')
  const clearBtn = document.getElementById('clear')
  const actionBtn = document.getElementById('actionBtn')

  if (!input || !clearBtn) return

  const toggleClearButton = () => clearBtn.style.display = input.value.length ? 'flex' : 'none'

  // Atualiza o botão principal
  const updateActionButton = () => {
    if (!input.value.trim().length) {
      actionBtn.dataset.action = 'encurtar'
      actionBtn.textContent = 'ENCURTAR'
    }
  }

  input.addEventListener('input', () => { toggleClearButton(); updateActionButton() })

  clearBtn.addEventListener('click', () => {
    input.value = ''

    toggleClearButton()
    updateActionButton()

    input.focus()
  })

  actionBtn.addEventListener('click', async () => {
    const action = actionBtn.dataset.action

    if (action === 'encurtar') {
      try {
        const form = document.querySelector('form')

        if (!form.reportValidity()) return

        actionBtn.disabled = true
        actionBtn.textContent = 'ENCURTANDO...'

        const { data } = await axios.post('/encurtar', { url: input.value })

        // coloca a URL encurtada no input
        input.value = data.shortUrl

        // muda o botão para copiar
        actionBtn.dataset.action = 'copiar'
        actionBtn.textContent = 'COPIAR'

        toggleClearButton()

        alert.create('Link encurtado com sucesso!', 'success')

      } catch (error) {
        console.error(error)

        alert.create(error.message, 'danger')

        actionBtn.textContent = 'ENCURTAR'
      } finally {
        actionBtn.disabled = false
      }
      return
    }

    if (action === 'copiar') {
      try {
        await navigator.clipboard.writeText(input.value)

        alert.create('Link copiado com sucesso!', 'success')
      } catch {
        alert.create('Erro ao copiar o link', 'danger')
      }
    }

  })

  toggleClearButton()
})
