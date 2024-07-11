const apiBase = 'https://fakestoreapi.com/products';

async function fetchProduct(productId) {
    const url = `${apiBase}/${productId}`;  //$ - template literal => allow to embed an expression within a string

    // use await keyword whenever fetching data or working with database
    try {
        const response = await fetch(url); // fetch the url and store data in response variable
        const data = await response.json(); // convert response to json
        return data;
    } catch (error) {
        console.error(`Error fetching product ${productId}:`, error);
        throw error;
    }
}

async function fetchProductsInfo(productIds) {     //async function takes an array of productID as argument
    try {
        //maps each productID in the array to the promise returned by the fetchProduct function
        const promises = productIds.map(productId => fetchProduct(productId).catch(error => error));  

        const results = await Promise.allSettled(promises);

        const productsInfo = results.map(result => {
            if (result.status === 'fulfilled') {
                return result.value;
            } else {
                console.error('Failed to fetch product:', result.reason);
                return { error: `Failed to fetch product: ${result.reason}` };
            }
        });

        return productsInfo;
    } catch (error) {
        console.error('Error fetching products info:', error);
        throw error;
    }
}


const productIds = [1, 2, 3, 4, 5];  //array of productID

fetchProductsInfo(productIds)    //calling fetchProductsInfo function with parameter productIds
    .then(productsInfo => {
        console.log('Fetched products information:', productsInfo);  
    })
    .catch(error => {
        console.error('Failed to fetch products information:', error);
    });
