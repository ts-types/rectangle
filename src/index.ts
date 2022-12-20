import { Coordinate2D } from "@ts-types/coordinate-2d";

export interface Rectangle extends Coordinate2D {

    /**
     * The width of the origin.
     */
    width: number;

    /**
     * The height of the origin.
     */
    height: number;

}