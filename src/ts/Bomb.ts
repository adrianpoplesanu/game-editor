import { TileType } from "./TileTypeEnum";

export class Bomb {
    value : number;

    constructor() {
        console.log("Bomb::constructor");
        this.value = TileType.Bomb;
    }
}