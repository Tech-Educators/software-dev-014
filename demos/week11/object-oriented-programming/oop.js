//in order to build objects, we need to create the template and give it instructions to build the objects based on that template

//I am declaring a class that will be my template object
//classes are capitalised by convention
class Biscuit {
  //to build my objects based on this template, I need a constructor
  // the constructor has parameters that will become the object properties
  constructor(biscuitName, biscuitCrunchiness, biscuitFlavour, biscuitTexture) {
    //we need to contextualise each biscuit instance to have its own properties and values
    //the keyword this represents each individual biscuit instance
    (this.name = biscuitName),
      (this.flavour = biscuitFlavour),
      (this.crunchiness = biscuitCrunchiness),
      (this.texture = biscuitTexture);
  }

  voiceline() {
    console.log(
      `This ${this.name} has a flavour of ${this.flavour}, a crunchiness of ${this.crunchiness}, and a ${this.texture} texture. How delightful!`
    );
  }
}

//I am going to instantiate objects --> I am going to use the template to create new objects

const custardCream = new Biscuit("custard cream", 6, "vanilla", "brittle");
console.log(custardCream);

const bourbon = new Biscuit("bourbon", 5, "chocolate", "crumbly");
console.log(bourbon);

//access a method in our object instances
console.log(bourbon.voiceline());
console.log(custardCream.voiceline());

//we want to create a new class called Cookie
//my Cookie class has the same properties as my Biscuit class
//I am building a hierarchy of classes: Biscuit is the class (parent), Cookie is the sub-class (child) --> Cookie is inheriting the properties from Biscuit
class Cookie extends Biscuit {
  constructor(
    biscuitName,
    biscuitCrunchiness,
    biscuitFlavour,
    biscuitTexture,
    cookiePrice
  ) {
    //here we are telling Cookie to inherit whatever was set up in the Biscuit class above
    super(biscuitName, biscuitCrunchiness, biscuitFlavour, biscuitTexture);
    //we need to specify the context for price because it does not exist in Biscuit
    this.price = cookiePrice;
  }
  slogan() {
    console.log(`${this.name} is the best cookie in the world`);
  }
}

//instantiate new Cookie objects
const chocolateChip = new Cookie("chocolate chip", 3, "chocolate", "chewy", 2);

console.log(chocolateChip.voiceline());
