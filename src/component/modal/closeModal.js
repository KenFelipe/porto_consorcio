export function closeModal() {
    const overlayId = 'overlay'

    const overlay = document.getElementById(overlayId)
    overlay.classList.remove('active')

    const activeModal = document.querySelector('.modal.active')
    activeModal.classList.remove('active')
}
