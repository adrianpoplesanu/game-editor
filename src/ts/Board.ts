import { Player } from "./Player";
import { Bomb } from "./Bomb";
import { Info } from "./Info";
import { Sand } from "./Sand";

export class Board {
    player : Player;
    bomb : Bomb;
    info : Info;
    sand : Sand;
    width : number;
    height : number

    constructor(width : number, height : number) {
        console.log("Board::constructor");
        this.player = new Player();
        this.bomb = new Bomb();
        this.info = new Info();
        this.sand = new Sand();
        this.width = width;
        this.height = height;
    }

    loadFile(path : string) {

    }

    saveFile(path : string) {

    }
}