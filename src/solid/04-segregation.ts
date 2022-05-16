
interface Bird {
    eat():void;
}

interface FlyingBird {
    fly():void;
}

interface RunningBird {
    run():void;
}

interface SwimmerBird {
    swin():void;
}

class Tucan implements Bird, FlyingBird {
    
    public fly():void{};
    public eat():void{};

}

class Humminbird implements Bird, FlyingBird {

    public fly():void{};
    public eat():void{};
    
}

class Ostrich implements Bird, RunningBird {

    public eat():void{};
    public run():void{};

}


class Penguin implements Bird, SwimmerBird {

    public eat():void{};
    public swin():void{};

}