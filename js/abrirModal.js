const abrirModal = ( btnId, modalId ) => {
  const modal = document.getElementById(modalId);
  const openBtns = document.querySelectorAll(`.${btnId}`);
  const closeModal = modal.querySelector('.close-modal-btn')

  console.log(openBtns);

  const abrirModal = () => {
    modal.classList.add('flex');
    modal.classList.remove('hidden');
  }

  const cerrarModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  /* openBtn.addEventListener("click", abrirModal); */
  closeModal.addEventListener("click", cerrarModal);
  openBtns.forEach( btn => {
    btn.addEventListener("click", abrirModal);
  })
}

abrirModal("modal-form-home-btn", "modal-form-home");