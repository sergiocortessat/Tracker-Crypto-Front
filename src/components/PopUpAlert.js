/* eslint-disable no-unused-vars */
const customAlert = (message) => {
  const alert = document.querySelector('.alert');
  alert.classList.remove('not-display');
  alert.classList.add('display');
  alert.innerHTML = message;
  setTimeout(() => {
    alert.classList.remove('display');
    alert.classList.add('not-display');
  }, 3000);
};

export default customAlert;
