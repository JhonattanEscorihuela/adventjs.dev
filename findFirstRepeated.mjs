function findFirstRepeated(gifts) {
    // Code here
    let objeto = {};
    let min = 0;

    for (let index = 0; index < gifts.length; index++) {
        objeto[gifts[index]] = 0;
    }

    for (let index = 0; index < gifts.length; index++) {
        objeto[gifts[index]]++;
        if (objeto[gifts[index]] > 1) {
            min = index
            return gifts[min]
        }
    }

    return -1;
}


const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1


const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3)