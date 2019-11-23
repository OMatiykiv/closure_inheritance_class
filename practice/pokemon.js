class Charmander {
    constructor(size){
        this.height = size.height;
        this.weight = size.weight;
        this.specie = "Lizard Pokémon";
        this.type = "Fire";
    }
    getHeight() {
        return this.height;
    }
    getWeight() {
        return this.weight;
    }
    getSpecie() {
        return this.specie;
    }
    getType() {
        return this.type;
    }
    canWalk() {
        return true;
    }
    canFly() {
        return false;
    }
}

class Charmeleon extends Charmander {
    constructor(size) {
        super(size);
        this.specie = "Flame Pokémon";
    }
}

class Charizard extends Charmeleon {
    constructor(size) {
        super(size);
    }
    canFly() {
        return true;
    }
}

// var embury = new Charmander({ height: 1, weight: 15 });
// var mercury = new Charmeleon({ height: 2, weight: 45 });
// var morderbrand = new Charizard({ height: 10, weight: 200 });
           
// embury.getType(); // -> “Fire”
// embury.getType() === mercury.getType();
// mercury.getType() === morderbrand.getType(); // -> true

// embury.getSpecie(); // -> “Lizard Pokémon”
// mercury.getSpecie(); // -> “Flame Pokémon”
// morderbrand.getSpecie() === mercury.getSpecie(); // -> true

// embury.getHeight(); // -> 1
// morderbrand.canWalk(); // -> true (charizard was changed on morderbrand)

// embury.canFly(); // -> false
// embury.canFly() === mercury.canFly(); // -> true
// morderbrand.canFly(); // -> true
