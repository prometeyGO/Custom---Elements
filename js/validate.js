new JustValidate('.form__item', {
  rules: {
    name: {
      required: true,
      minLenght: 1
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },

    mail: {
      required: true,
      email: true
    },
  },

  messages: {
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
    mail: 'Вы не ввели e-mail'
  },
});
