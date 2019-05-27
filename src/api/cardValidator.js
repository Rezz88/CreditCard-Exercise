const valid = require('card-validator');

const confirmCard = async (creditCard) => {
  const validNumber = await valid.number(creditCard.cardNumber);
  const validExpMonth = await valid.expirationMonth(creditCard.date);
  const validExpYear = await valid.expirationYear(creditCard.year);
  const validCvv = await valid.cvv(creditCard.cvc);

  return {
    cardNumber: validNumber.isValid,
    month: validExpMonth.isValid,
    year: validExpYear.isValid,
    cvv: validCvv.isValid
  };
};

export default confirmCard;