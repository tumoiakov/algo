function maxProfit(prices: number[]): number {
  let profit = 0,
    l = Infinity;

  for (let i = 0; i < prices.length; i++) {
    const currProfit = prices[i] - l;

    if (currProfit > 0) {
      profit += currProfit;
    }

    l = prices[i];
  }

  return profit;
}
