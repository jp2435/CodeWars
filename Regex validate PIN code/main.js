function validatePIN(pin) {
    if (/^(\d{4}|\d{6})$/.test(pin)) {
      return true;
    } else {
      return false;
    }
  }

const pin1 = "1234"
const pin2 = "12345"
const pin3 = "a234"