import { TileType } from "./TileTypeEnum";

export class Info {
    value : number;

    constructor() {
        console.log("Info::constructor");
        this.value = TileType.Info;
    }
}