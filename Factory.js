
function Motorcycle options ) {


  this.handleBars = options.handelBars || 4;
  this.color = options.color || "Black";
  this.size = options.size || "big";
  this.gas = options.gas || "premium";

}


function Bicycle( options){   //passes options thru the function

  this.type = options.type || "mountain bike";
  this.color = options.color || "white";
  this.condition = options.condition || "pre_owned";
}




function TwoWheelFactory() {}


TwoWheelFactory.prototype.vehicleClass = Motorcycle;


TwoWheelFactory.prototype.createVehicle = function ( options ) {

  if( options.vehicleType === "Motorcycle" ){
    this.vehicleClass = Motorcycle;
  }else{
    this.vehicleClass = Bicycle;
  }

  return new this.vehicleClass( options );

};


var MotorcycleFactory = new TwoWheelFactory();
var Motorcycle = MotorcycleFactory.createVehicle( { 
            vehicleType: "Motorcycle", 
            color: "red", 
            wheels: "2" } );




console.log( Motorcycle instanceof Motorcycle ); 


console.log( Motorcycle );