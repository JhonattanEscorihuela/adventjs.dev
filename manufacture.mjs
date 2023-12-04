function manufacture(gifts, materials) {
    // Code here
    let out = [];
    let res = [];

    for (let i = 0; i < gifts.length; i++) {
        out.push(gifts[i].split('').map(c => materials.split('').includes(c)));
    }

    out = out.map(c => !c.includes(false))

    for (let i = 0; i < out.length; i++) {
        if (out[i] === true) {
            res.push(gifts[i])
        }
    }

    return res
}


// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// console.log(manufacture(gifts, materials)); // ["puzzle"]

// const gifts = ['tren', 'oso', 'pelota']
// const materials = 'tronesa'

// console.log(manufacture(gifts, materials));


const gifts = ['libro', 'ps5']
const materials = 'psli'

console.log(manufacture(gifts, materials));