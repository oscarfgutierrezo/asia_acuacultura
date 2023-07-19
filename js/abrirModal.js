const abrirModal = ( btnId, modalId ) => {
  const modal = document.getElementById(modalId);
  const openBtns = document.querySelectorAll(`.${btnId}`);
  const closeModalBtn = modal.querySelector('.close-modal-btn');
  const form = modal.querySelector('form');
  const submitBtn = form.querySelector('button[type="submit"]');
  console.log(submitBtn);

  const abrirModal = () => {
    modal.classList.add('flex');
    modal.classList.remove('hidden');
  }

  const cerrarModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  const recargarPagina = () => {
    console.log("prueba");
    if (form.checkValidity()) {
      setTimeout(() => {
        window.location.reload()
      }, 3000);
    }
  }

  /* Botones */
  closeModalBtn.addEventListener("click", cerrarModal);
  openBtns.forEach( btn => {
    btn.addEventListener("click", abrirModal);
  })
  submitBtn.addEventListener("click", recargarPagina);
}

abrirModal("modal-form-home-btn", "modal-form-home");