const precioOriginal = 120;
const porcentajeDescuento = 18;

const coupons = [
    {
        name: "MINSALE",
        discount: 15,
    },
    {
        name: "MIDSALE",
        discount: 25
    },
    {
        name:"MAXSALE",
        discount: 50
    }

]



function calcularPreioConDescuento (precio, descuento) {
    const cantidadDescuento = precio * (descuento/100);
    const precioConDescuento = precio - cantidadDescuento;
    return precioConDescuento;
}

//Interacción con HTML

//Calcula el precio con descuento
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const valueDiscount = inputDiscount.value;

    const discountPrice = calcularPreioConDescuento(valuePrice, valueDiscount);

    const resultP = document.getElementById("ResultP")

    resultP.innerText = `El precio con descuento del ${valueDiscount}% es de $${discountPrice}`

}

//Calcula el precio introduciendo un cupón
function onClickButtonDiscountCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    const couponIsValid = function(coupon) {
        return coupon.name === valueCoupon
    };

    const userCoupon = coupons.find(couponIsValid);


    if (!userCoupon){
        alert(`El cupón ${valueCoupon} es inválido`)
    } else {
        const couponDiscount = userCoupon.discount;
        const discountPrice = calcularPreioConDescuento(valuePrice, couponDiscount);

        const resultCP = document.getElementById("ResultCP")

        resultCP.innerText = `Este cupón aplica descuento del ${couponDiscount}%, el precio final es de $${discountPrice}`
    }
}



