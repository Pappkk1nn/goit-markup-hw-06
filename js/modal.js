(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
    function showModal(element) {
      // Get the modal element
      var modal = document.getElementById(element.dataset.modal);
    
      // Show the modal
      modal.style.display = "block";
    }
    $('[data-modal-close]').click(function() {
      // Get the modal element
      var modal = $(this).closest('.modal');
    
      // Hide the modal
      modal.hide();
    });
  })();