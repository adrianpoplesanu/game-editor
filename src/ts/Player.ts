import { TileType } from "./TileTypeEnum";

export class Player {
    value : number;
    path : string;

    constructor() {
        console.log("Player::constructor");
        this.value = TileType.Player;
        this.path = "assets/Player.png";
    }
}