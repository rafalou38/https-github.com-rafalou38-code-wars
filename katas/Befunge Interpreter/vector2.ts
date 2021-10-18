class Vector2{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    add(vec: Vector2){
        this.x += vec.x;
        this.y += vec.y;
    }
}