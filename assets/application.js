// Put your application javascript here
let ShopJS = {
    updateQuantity(line, qty){
        fetch('/cart/change.js', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ quantity: qty, line: line})
        })
        .then(res => res.json())
        .then(() => location.reload())
        .catch(err=> console.error('Error: ', err))
    }
}

window.ShopJS = ShopJS