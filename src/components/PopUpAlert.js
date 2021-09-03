const customAlert = (message, type) => {
  const alert = document.querySelector('.alert');
  if (type === 'green') {
    alert.classList.remove('not-display');
    alert.classList.add('display');
    alert.classList.add('green');
    alert.innerHTML = message;
    setTimeout(() => {
      alert.classList.remove('display');
      alert.classList.remove('green');
      alert.classList.add('not-display');
    }, 3000);
  } else {
    alert.classList.remove('not-display');
    alert.classList.add('display');
    alert.classList.add('red');
    alert.innerHTML = message;
    setTimeout(() => {
      alert.classList.remove('display');
      alert.classList.remove('red');
      alert.classList.add('not-display');
    }, 3000);
  }
};

export default customAlert;
