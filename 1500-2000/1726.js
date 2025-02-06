var tupleSameProduct = function(nums) {
    let productCount = new Map(), result = 0;

    for (let i = 0; i < nums.length; i++)
        for (let j = i+1; j < nums.length; j++) {
            let product = nums[i] * nums[j];
            result += 8 * (productCount.get(product) || 0);
            productCount.set(product, (productCount.get(product) || 0) + 1);
        }

    return result;
};
