/**
 * 
 * Write your Arena class in this file!
 * 
 */

class Arena {
    constructor(name) {
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    gladiators = []

    addGladiator(gladiator) {
        if(gladiator instanceof Gladiator){
            if(this.gladiators.length < 2){
                this.gladiators.push(gladiator)
            } 
            
        } else {
            throw Error("That's not a gladiator!")
        }
   
    }



    fight(){
        
        if(this.gladiators.length === 2){
            if (this.gladiators[0].name.toLowerCase() === "maximus"){
                this.gladiators.splice(1,1)
            
            }else if(this.gladiators[1].name.toLowerCase() === "maximus"){
                this.gladiators.splice(0,1)
            
            } else if(this.gladiators[0].weapon === this.gladiators[1].weapon){
                this.gladiators = []
            


            
            } else if (this.gladiators[0].weapon.toLowerCase() === "trident" && this.gladiators[1].weapon.toLowerCase() === "spear") {
                this.gladiators.splice(1,1);

            } else if (this.gladiators[1].weapon.toLowerCase() === "trident" && this.gladiators[0].weapon.toLowerCase() === "spear") {
                this.gladiators.splice(0,1);

            } else if (this.gladiators[0].weapon.toLowerCase() === "club" && this.gladiators[1].weapon.toLowerCase() === "trident") {
                this.gladiators.splice(1,1);

            } else if (this.gladiators[1].weapon.toLowerCase() === "club" && this.gladiators[0].weapon.toLowerCase() === "trident") {
                this.gladiators.splice(0,1);

            } else if (this.gladiators[0].weapon.toLowerCase() === "spear" && this.gladiators[1].weapon.toLowerCase() === "club") {
                this.gladiators.splice(1,1);

            } else if (this.gladiators[1].weapon.toLowerCase() === "spear" && this.gladiators[0].weapon.toLowerCase() === "club") {
                this.gladiators.splice(0,1);

            } else {
            this.gladiators.pop();
            }


        }

    }


    removeFromArena(gladiator){
        if(this.gladiators[0].name === gladiator){
            this.gladiators.splice(0, 1, "");
        }else if (this.gladiators[1] === gladiator){
            this.gladiators.splice(1, 1, "");
        } else {
            throw Error("No gladiator by that name!");
        }
    }

    entertained(){
        if(this.gladiators[0].name.toLowerCase() === "maximus" || this.gladiators[1].name.toLowerCase() === "maximus"){
            return true;
        }
    }

}

const Maximus = new Gladiator("Maximus", "club");
const Weasel = new Gladiator("Weasel", "trident")
const Coliseum = new Arena("Coliseum");
Coliseum.fight;
