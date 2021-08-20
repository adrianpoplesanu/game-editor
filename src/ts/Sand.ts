import { TileType } from "./TileTypeEnum";

export class Sand {
    value : number;

    constructor() {
        console.log("Sand::constructor");
        this.value = TileType.Sand;
    }
}