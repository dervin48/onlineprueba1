function sendWhatsApp(product) {
    const phoneNumber = "54190783";
    const message = `Hola, estoy interesado en el producto: ${product}. ¿Está disponible?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
