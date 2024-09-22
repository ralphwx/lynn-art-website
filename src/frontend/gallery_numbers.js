
let romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX"];

/**
 * Returns the roman numeral representation of [number + 1]
 */
function numberToRoman(number) {
    if(number < 0 || number >= 20) {
        return "";
    }
    return romans[number];
}

export {numberToRoman};
