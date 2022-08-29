const result = document.getElementById('result')

// -----------------------------------------------------------------------------------
import CalcProbability from './tools/calcProbability/index.js'

const calcProbability = new CalcProbability()

const valueOfAllBranchProbability = calcProbability.calcTwoPairsProbability(13, 0)
const valueOfProbability = calcProbability.sumOfAllBrachProbabilitise(valueOfAllBranchProbability)

// -----------------------------------------------------------------------------------
import calculateNumOfProbability from './tools/calculateNumOfProbability/index.js'

const [numberOfAllPhase, sumOfAllPhase] = calculateNumOfProbability
console.log()

// -----------------------------------------------------------------------------------
result.innerHTML += `
  <div>一次翻完的機率為${valueOfProbability}</div>
  <div>共有${sumOfAllPhase}個節點</div>
  <div>${numberOfAllPhase[26].length}個分支</div>
  `

// -----------------------------------------------------------------------------------
import ProbabilityLayOut from './tools/probabilityLayOut/index.js'

const probabilityLayOut = new ProbabilityLayOut()


probabilityLayOut.probabilityGrowth(0, probabilityLayOut.probabilityLines);

probabilityLayOut.renderObjOnRoot(probabilityLayOut.probabilityLines);