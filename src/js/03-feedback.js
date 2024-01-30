import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector("input[name='email']");
const message = form.querySelector("textarea[name='message']");

const saveToStorage = () => {
  const state = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

const loadFromStorage = () => {
  const stored = localStorage.getItem('feedback-form-state');
  if (stored) {
    const state = JSON.parse(stored);
    email.value = state.email;
    message.value = state.message;
  }
};

const submitAction = event => {
  event.preventDefault();
  console.log('Form Data:', {
    email: email.value,
    message: message.value,
  });
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
};

form.addEventListener('input', throttle(saveToStorage), 500);
form.addEventListener('change', saveToStorage);
form.addEventListener('submit', submitAction);
loadFromStorage();
