export default interface GameInterface {
    id: number;
    onEnd?: (win: boolean) => void;
}