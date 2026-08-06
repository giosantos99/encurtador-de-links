export default class Alert {
  static close (element) {
    element.classList.remove('show')

    setTimeout(() => element.remove(), 150)
  }

  static create (message, type = 'primary') {
    const container = document.querySelector('.container-alert')

    if (!container) return

    const wrapper = document.createElement('div')

    wrapper.className = `alert alert-${type} alert-dismissible fade show`
    wrapper.role = 'alert'
    wrapper.innerHTML = `
      <div>${message}</div>
      <button type="button" class="btn-close" aria-label="Close"></button>
    `

    container.appendChild(wrapper)

    // timeout automático
    const timeout = setTimeout(() => Alert.close(wrapper), 4500)

    const closeBtn = wrapper.querySelector('.btn-close')

    // fechar manualmente
    closeBtn.addEventListener('click', () => {
      clearTimeout(timeout)
      Alert.close(wrapper)
    })
  }
}
