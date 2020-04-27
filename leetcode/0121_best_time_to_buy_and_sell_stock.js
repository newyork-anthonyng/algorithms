// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxPrice) {
      maxPrice = prices[i] - minPrice;
    }
  }

  return maxPrice;
}

let input = [7,1,5,3,6,4];
let output = maxProfit(input);
console.log(output);
