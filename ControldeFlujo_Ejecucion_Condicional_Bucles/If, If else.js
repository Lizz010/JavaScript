//EXERCISES WITH IF, IF ELSE

const insurance_cost = 20;

let shippingCost = 10;
let isOrderValid = true;
let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

/** calcular costos de envío*/
if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) {
    shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
    shippingCost = shippingCost - 5;
} else if (userAge < 21) {
    isOrderValid = false;
}

/** tomar en cuenta la aseguranza */
if (isOrderValid && addInsurance && !hasPromoCode) {
    shippingCost += insurance_cost = 20;
}

/** mostrar mensaje */
if (isOrderValid) {
    console.log(shippingCost);
} else {
    console.log("No se puede ordenar si es menor que 21");
}

