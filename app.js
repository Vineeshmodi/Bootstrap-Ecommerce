var toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map(function (toastEl) {
  // Creates an array of toasts (it only initializes them)
  return new bootstrap.Toast(toastEl); // No need for options; use the default options
});

function showToast() {
  toastList[0].show();
}

//Enable tooltips
var tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

function goToProductDetail() {
  window.location.href = "/product.html";
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
