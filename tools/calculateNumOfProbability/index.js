const allPhase = [[0]];

for (let phase = 0, allCardsNumber = 52, len = allCardsNumber / 2; phase < len; phase++) {
  const nextPhase = phase + 1;
  allPhase[nextPhase] = [];

  allPhase[phase].forEach(set => {
    if (set < 0) {
      console.log('ERROR: set less 0');
    };

    if (set !== 0) {
      allPhase[nextPhase].push(set - 2);
    };

    const restCards = allCardsNumber - (2 * phase);
    if (restCards < 0) {
      console.log('ERROR: restCards less 0');
    };
    if ((restCards - set) !== 0) {
      allPhase[nextPhase].push(set + 2);
    };
  });
}


const length = allPhase.map(phase => phase.length);
let sum = 0;
length.forEach(length => { sum += length });

export default [allPhase, sum]