
declare var PokerEvaluator: PokerEvaluator.IPokerEvaluator;

export = PokerEvaluator;
export as namespace PokerEvaluator;

declare namespace PokerEvaluator {
    export interface IPokerEvaluator {
        eval: (e: string[]) => IHand;
        evalHand: (e: string[]) => IHand;
        evalCard: (e: string) => any;
    }

    export interface IHand {
        handType: any,
        handRank: any,
        value: any,
        handName: string
    }

}
