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

export function calculateTotalPrice(orders) {
    let total = 0
    for (const order of orders) {
        total = total + order.item.price * order.quantity
    }
    return total.toFixed(2)
}

export function postOrder(itemId, orderId) {
    fetch('http://localhost:4001/orderItems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        itemId: itemId,
        quantity: 1,
        orderId: orderId
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