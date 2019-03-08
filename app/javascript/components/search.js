import Typed from 'typed.js';

const loadDynamicSearchText = () => {
  new Typed('#banner-typed-text', {
    strings: ['Change your life and drink only the best', 'Are you feeling lucky today?'],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicSearchText };
