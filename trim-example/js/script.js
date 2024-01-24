const carName = "     B     M     W    ";

// trim()
// will remove for you the spaces
// and show you a beautiful string

// Expected : BMW

const trimmedCarName = carName.trim().replace(/[^a-zA-Z0-9]/g, '');

console.log("trimmedCarName:",trimmedCarName);
