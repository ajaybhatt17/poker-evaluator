

declare class PokerEvaluator {

    eval: (e: string[]) => Hand;
    evalHand: (e: string[]) => Hand;
    evalCard: (e: string) => any;
}

interface Hand {
    handType: any,
    handRank: any,
    value: any,
    handName: string
}

export = PokerEvaluator;
export as namespace PokerEvaluator;
