const ProbabilityLayOut = function () {
  const that = this;

  that.probabilityLines = {
    cardsOfSinglePair: 0,
  };

  that.allCards = 52;

  // 生成機率鍊
  that.probabilityGrowth = function (phase, line) {
    const cardsOfSinglePair = line.cardsOfSinglePair;

    // 如果單對的張數不為零
    // 產生 takeSinglePair 的可能性
    if (cardsOfSinglePair !== 0) {
      line.takeSinglePair = {
        cardsOfSinglePair: cardsOfSinglePair - 2
      };

      that.probabilityGrowth(phase + 1, line.takeSinglePair);
    };
    // 如果兩對的張數不為零
    // 產生 takeTwoPairs 的可能性
    const restCards = that.allCards - (2 * phase),
      cardsOfTwoPairs = restCards - cardsOfSinglePair;

    if (cardsOfTwoPairs !== 0) {
      line.takeTwoPairs = {
        cardsOfSinglePair: cardsOfSinglePair + 2,
      };

      that.probabilityGrowth(phase + 1, line.takeTwoPairs);
    };
  };

  // 顯示計算結果
  that.renderObjOnRoot = function (obj) {
    const root = document.getElementById('root');

    root.appendChild(renderjson(obj));
  };
};

export default ProbabilityLayOut

