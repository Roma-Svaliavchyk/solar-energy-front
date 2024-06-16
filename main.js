import axios from 'axios';
//const axios = require('axios');

axios.get('http://localhost:3003/order')
  .then(response => {
    console.log('Отримана відповідь від сервера:');
    console.log(response.data); // Вивести отримані дані у консоль
  })
  .catch(error => {
    console.error('Сталася помилка під час виконання запиту:', error);
  });
