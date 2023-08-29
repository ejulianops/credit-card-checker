// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:

// task 3
const validateCred = card_array => {
    const digits = [];

    // push verification digit
    digits.push(card_array[card_array.length-1]);

    // push every other from last
    for (let i = card_array.length - 2; i >= 0; i -= 2) {
        if (card_array[i] * 2 > 9) {
            digits.push(card_array[i] * 2 - 9)
        } else {
            digits.push(card_array[i] * 2)
        };
    };

    // push every other from second to last
    for (let i = card_array.length - 3; i >= 0; i-= 2) {
        digits.push(card_array[i])
    }

    // return boolean at the sum being multiple of 10
    return digits.reduce((accumulator, current_value) => accumulator + current_value, 0) % 10 === 0;
};

// task 4
const findInvalidCards = credit_cards => credit_cards.filter(credit_card => validateCred(credit_card) === false);

// task 5
const idInvalidCardCompanies = invalid_numbers => {
    const companies = [];
    invalid_numbers.forEach(number => {
        if (number[0] === 3) {companies.push('Amex')}
        else if (number[0] === 4) {companies.push('Visa')}
        else if (number[0] === 5) {companies.push('Mastercard')}
        else if (number[0] === 6) {companies.push('Discover')}
        else {console.log("Company not found")}
    });

    const unique_companies = [];
    companies.forEach(number => {
        if (!unique_companies.includes(number)) {
            unique_companies.push(number)
        } 
    });
    return unique_companies;
};

console.log('task 3:', validateCred(valid1)); // valid card should return true
console.log('task 3:', validateCred(invalid1)); // invalid card, should return false
console.log('task 4:', findInvalidCards(batch)); // should return invalid card arrays
console.log('task 5:', idInvalidCardCompanies(findInvalidCards(batch))); // should return an array of unique companies
