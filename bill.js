function calculate() {
    var price = document.getElementById('price').value;
    var quantity = document.getElementById('quantity').value;
    var disc = document.getElementById('disc').value;
    var gst = document.getElementById('gst').value;

    var discount = (disc / price) * 100;
    var gst_value = (price * gst) / 100;
    var payment = (((price * quantity) - disc) + gst_value).toFixed(2);

    document.getElementById('payment').innerHTML = "Total" + " " + payment;

}