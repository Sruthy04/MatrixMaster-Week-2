function enableSubmitOnNonEmpty() {
 let inputs = document.getElementsByClassName('required');
 let btn = document.querySelector('input[type="submit"]');
 let isValid = true;
 for (var i = 0; i < inputs.length; i++) {
  let changedInput = inputs[i];
  if (changedInput.value.trim() === "" || changedInput.value === null) {
   isValid = false;
   break;
  }
 }
 btn.disabled = !isValid;
}