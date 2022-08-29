const CalcProbability = function () {
  const that = this

  that.calcBranchesProbabilities = function (numOfTwoPairs, numOfOnePair, ownProbability) {
    // 如果機率計算為 0 return []
    if (ownProbability === 0) {
      return []
    }

    // 如果沒有排 return [1]
    if ((numOfOnePair + numOfTwoPairs) === 0) {
      return [1]
    }

    const twoPairBranch = that.calcTwoPairsProbability(numOfTwoPairs, numOfOnePair)
    const onePairBranch = that.calcOnePairProbability(numOfTwoPairs, numOfOnePair)
    const allBranches = [...twoPairBranch, ...onePairBranch]

    return allBranches.map(probability => probability * ownProbability)
  }

  that.calcOnePairProbability = function (numOfTwoPairs, numOfOnePair) {
    const totalCards = (4 * numOfTwoPairs) + (2 * numOfOnePair)
    const ownProbability = ((2 * numOfOnePair) / totalCards) * (1 / (totalCards - 1))

    return that.calcBranchesProbabilities(numOfTwoPairs, numOfOnePair - 1, ownProbability)
  }

  that.calcTwoPairsProbability = function (numOfTwoPairs, numOfOnePair) {
    const totalCards = (4 * numOfTwoPairs) + (2 * numOfOnePair)
    const ownProbability = ((4 * numOfTwoPairs) / totalCards) * (3 / (totalCards - 1))

    return that.calcBranchesProbabilities(numOfTwoPairs - 1, numOfOnePair + 1, ownProbability)
  }

  that.sumOfAllBrachProbabilitise = function (probabilities) {
    let sum = 0

    probabilities.forEach(probability => sum += probability)

    return sum
  }
}

export default CalcProbability