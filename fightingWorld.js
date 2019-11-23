class Creature {
    constructor(props) {
        this.name = props.name;
        this.attack = props.attack;
        this.hitpoints = props.hitpoints;
        this.maxHitpoints = props.hitpoints;
    }

    getHitpoints() {
        return this.hitpoints
    }
    setHitpoints(newHitpoints) {
        if(newHitpoints > this.maxHitpoints) {
            this.hitpoints = maxHitpoints;
            console.log(`${this.name} hitpoints were increased to the maximum on current level`);               
        } else if(newHitpoints <= 0) {
            this.hitpoints = 0;
            console.log(`${this.name} commit suicide`);
        }
    }
    getTotalHitpoints() {
        return this.maxHitpoints
    }
    setTotalHitpoints(newMaxHitpoints) {
        if(newMaxHitpoints <= 0) {
            this.hitpoints = 0;
            this.maxHitpoints = 0;
            console.log(`${this.name} commit suicide`);
        } else if(newMaxHitpoints < this.hitpoints) {
            this.hitpoints = newMaxHitpoints;
            this.maxHitpoints = newMaxHitpoints;
        } else {
            this.maxHitpoints = newMaxHitpoints;
        }
    }
    getAttack() {
        return this.attack;
    }
    setAttack(newAttack) {
        this.attack = newAttack;
    }
    fight(defender) {
        if(defender.hitpoints === 0) {
            console.log(`you can't attack ${defender.hitpoints}, because he is dead`)
        } else if(this.hitpoints === 0) {
            console.log(`you can't attack enemy, because ${this.name} is dead`)
        } else if(defender.block) {
            console.log(`${defender.name} block this attack`);
            if(this.rage) {
                this.rage--;
            }
        } else {
            let mult = 1;
            if(this.rage) {
                mult = 2;
                this.rage--;
            }
            defender.hitpoints -= this.attack * mult;
            if(defender.hitpoints <= 0) {
                defender.hitpoints = 0;
                console.log(`${defender.name} was killed by ${this.name}`);
                this.win(defender);
            }
        }
    }
    isAlive() {
        return !!this.hitpoints
    }
    win(defender) {
        console.log(`${this.name} won the battle`)
    }
}

class Champion extends Creature {
    constructor(props) {
        super(props);
        this.block = 0;
    }

    rest() {
        let restore  = 5;
        this.hitpoints += restore;
        if(this.hitpoints > this.maxHitpoints) {
            this.hitpoints = this.maxHitpoints;
            console.log(`${this.name} increase hitpoints to maximum and now they are equal to ${this.hitpoints}`)
        } else {
            console.log(`${this.name} increase hitpoints by ${restore} and now they are equal to ${this.hitpoints}`)
        }
    }
    defence() {
        this.block = 1;
    }
    win(defender) {
        super.win(defender);
        this.attack++;
        console.log(`${this.name} killed ${defender.name} and now he became more powerful, his damage increased and is now equal to ${this.attack}`);
    }
}

class Monster extends Creature {
    constructor(props) {
        super(props);
        this.rage = 0;
    }

    enrage() {
        this.rage = 2;
    }
    win(defender) {
        super.win(defender);
        this.maxHitpoints += Math.floor(defender.maxHitpoints * 0.1);
        this.hitpoints += Math.floor(defender.maxHitpoints * 0.25);
        if(this.hitpoints > this.maxHitpoints) {
            this.hitpoints = this.maxHitpoints;
        }
        console.log(`${this.name} ate ${defender.name} and now his hitpoints equal to ${this.hitpoints}, maxHitpoints equal to ${this.maxHitpoints}`);
    }
}

let heracles = new Champion({name: 'Heracles', attack: 10, hitpoints: 50});
let boar = new Monster({name: 'Erymanthian Boar', attack: 5, hitpoints: 100});

// heracles.fight(boar);
// boar.getHitpoints();
// boar.enrage();
// heracles.fight(boar);
// boar.getHitpoints();
// boar.fight(heracles);
// heracles.getHitpoints();
// heracles.fight(boar);
// heracles.fight(boar);
// heracles.fight(boar);
// heracles.fight(boar);
// heracles.fight(boar);
// heracles.fight(boar);
// heracles.fight(boar);
// heracles.fight(boar);
// boar.isAlive();
// heracles.getAttack();
// heracles.getHitpoints();
// heracles.rest();
// heracles.getHitpoints();