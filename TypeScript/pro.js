function orderfood(foodItem) {
    return new Promise((resolve, reject) => {
        console.log(`Ordering ${foodItem}...`);
        setTimeout(() => {
            if (foodItem) {
                resolve(`${foodItem} has been ordered successfully!`);
            } else {
                reject('No food item specified.');
            }
        }, 2000);
    });
}

// Example usage:
orderfood('Pizza')
    .then(message => console.log(message))
    .catch(error => console.error(error));