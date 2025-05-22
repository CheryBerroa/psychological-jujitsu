export const sampleAi = {
  name: "MindBender",
  getNextCard: (hand, targets, opponentPlays) => {
    const nextTarget = targets[targets.length - 1];
    
    // Define royals
    const royals = hand.filter(card => card > 10);

    // MindBender twists logic to stay unpredictable but intentional

    // If target is high, act low to bait
    if (nextTarget >= 10) {
      const lowOptions = hand.filter(c => c <= 5);
      if (lowOptions.length > 0) {
        return Math.max(...lowOptions); // best bait
      }
      if (royals.length > 0) {
        return Math.min(...royals); // pretend to burn a weak royal
      }
    }

    // If target is mid (6–9), play chaos — shuffle psychological pressure
    if (nextTarget >= 6 && nextTarget < 10) {
      const near = hand.filter(c => Math.abs(c - nextTarget) <= 2);
      if (near.length > 0) {
        return near[Math.floor(Math.random() * near.length)];
      }
      return hand[Math.floor(Math.random() * hand.length)];
    }

    // If target is low, overpower it subtly
    if (nextTarget < 6) {
      const overplay = hand.filter(c => c > nextTarget);
      if (overplay.length > 0) {
        return Math.min(...overplay); // pressure softly
      }
      return Math.min(...hand); // fallback
    }

    // Final fallback
    return hand[Math.floor(Math.random() * hand.length)];
  }
};
