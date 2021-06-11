class Player{
  constructor(name,type)
  {
    
      this.name=name;
      this.type=type;
      console.log('player',this);
  }

  introduce()
  {
      console.log(`Hi I am ${this.name},
      I am a ${this.type}`);
  }
}

class Wizard extends Player
{
    constructor(name,type)
    {
        super(name,type);
        console.log('wizard sas',this);
    }

    play()
    {
        console.log(`Wheee I am ${this.type}`);

    }
}

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  

const wizard1=new Wizard('Shelly','Healer');
wizard1.play();
wizard1.introduce();

/**
 * player Wizard { name: 'Shelly', type: 'Healer' }
wizard sas Wizard { name: 'Shelly', type: 'Healer' }
Wheee I am Healer
Hi I am Shelly,
 I am a Healer
 */

 mycar = new Model("Ford", "Mustang");
 console.log(mycar.show());