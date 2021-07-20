/**
 * 
 * Write your Gladiator class in this file!!
 * 
 */

 class Gladiator {
     constructor(name, weapon){
         this.name = name;
         if(weapon.toLowerCase() === "spear" || 
         weapon.toLowerCase() === "club" || weapon.toLowerCase() === "trident"){
             this.weapon = weapon;
         } else {
             throw Error("That weapon is not allowed!");
         }
     }

    

 }