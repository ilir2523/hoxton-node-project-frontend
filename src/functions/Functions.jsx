export function validateUser(setUser) {
    if (localStorage.token) {
        fetch('http://localhost:4001/validate', {
            headers: {
                Authorization: localStorage.token
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    console.log('Validation failed.')
                } else {
                    setUser(data)
                }
            })
    }
}

export function signIn(email, password, setUser) {
    fetch('http://localhost:4001/sign-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                localStorage.token = data.token
                setUser(data.user) // data === { user, token }
            }
        })
}

export function signUp(email, password, name, setUser) {
    fetch('http://localhost:4001/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                alert(data.error)
            } else {
                localStorage.token = data.token
                setUser(data.user) // data === { user, token }
            }
        })
}

export function signOut(setUser) {
    localStorage.removeItem('token')
    setUser(null)
}

export function calculateItemPrice(order) {
    let total = 0
    total = total + order.item.price * order.quantity
    return total.toFixed(2)
}

export function calculateTotalPrice(basketItems) {
    let total = 0
    for (const order of basketItems) {
        total = total + order.item.price * order.quantity
    }
    return total.toFixed(2)
}

export function postOrder(itemId, orderId, userId, quantity) {
    fetch('http://localhost:4001/orderItems', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            itemId: itemId,
            quantity: quantity,
            orderId: orderId
        })
    }).then(resp => resp.json())

    fetch('http://localhost:4001/deleteBasketItems', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: userId,
            itemId: itemId
        })
    }).then(resp => resp.json())
}

export function postToBasketItems(itemId, userId) {
    fetch('http://localhost:4001/basketItems', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            itemId: itemId,
            quantity: 1,
            userId: userId
        })
    }).then(resp => resp.json())
}

export function handleChange(item, e) {
    if (Number(e.target.value) > 0) {
        fetch(`http://localhost:4001/basketItemsQty`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: item.userId,
                itemId: item.itemId,
                quantity: Number(e.target.value)
            })
        })
    } else if (Number(e.target.value) === 0) {
        fetch('http://localhost:4001/deleteBasketItems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: item.userId,
                itemId: item.itemId,
            })
        })
    }
    // let basketItemsQty = JSON.parse(JSON.stringify(basketItems))
    // const itemFound = basketItemsQty.find(function (basketItem) {
    //     return basketItem.id === item.id
    // })
    // itemFound.quantity = Number(e.target.value)

    // if (itemFound.quantity === 0) {
    //     basketItemsQty = basketItemsQty.filter(function (basketItem) {
    //         return basketItem.quantity > 0
    //     })
    // }

    // setBasketItems(basketItemsQty)
}