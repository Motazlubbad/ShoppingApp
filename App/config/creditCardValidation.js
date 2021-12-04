const clearCardNumber = text => {
  text = text
    .replace('-', '')
    .replace(' ', '')
    .replace('(', '')
    .replace(')', '')
    .replace('_', '');
  return text;
};

const validateCreditCardNumber = cardNumber => {
  cardNumber = clearCardNumber(cardNumber);
  cardNumber = cardNumber.split(' ').join('');
  if (
    parseInt(cardNumber) <= 0 ||
    !/\d{15,16}(~\W[a-zA-Z])*$/.test(cardNumber) ||
    cardNumber.length > 16
  ) {
    return false;
  }

  var carray = [];
  for (var i = 0; i < cardNumber.length; i++) {
    carray[carray.length] = cardNumber.charCodeAt(i) - 48;
  }
  carray.reverse();
  var sum = 0;
  for (var i = 0; i < carray.length; i++) {
    var tmp = carray[i];
    if (i % 2 !== 0) {
      tmp *= 2;
      if (tmp > 9) {
        tmp -= 9;
      }
    }
    sum += tmp;
  }
  return sum % 10 === 0;
};

export default validateCreditCardNumber;
