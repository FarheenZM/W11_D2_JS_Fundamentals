const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaurs = function(dinosaur){
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurs = function(dinosaur){
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.findDinoThatAttractsMostVisitors = function(){
  var attractiveDino = this.dinosaurs[0];

  for(var dino of this.dinosaurs){
    if(dino.guestsAttractedPerDay > attractiveDino.guestsAttractedPerDay){
      attractiveDino = dino;
    }
  }
  return attractiveDino;
}

Park.prototype.findAllDinosOfParticularSpecies = function(species){
  let foundDinos = [];

  for(var dino of this.dinosaurs){
    if(dino.species === species){
      foundDinos.push(dino);
    }
  }
  return foundDinos;

}

Park.prototype.removeAllDinosOfParticularSpecies = function(species){
  let removeDinos = [];
  for(var dino of this.dinosaurs){
    if(dino.species === species){
      removeDinos.push(dino);
    }
  }

  for(var dino of removeDinos){
    this.removeDinosaurs(dino);
  }

}

Park.prototype.calculateTotalNoOfVisitorsPerDay = function(){
  let totalVisitorsPerDay = 0;
  for(var dino of this.dinosaurs){
    totalVisitorsPerDay += dino.guestsAttractedPerDay;
  }
  return totalVisitorsPerDay;
}

Park.prototype.calculateTotalNoOfVisitorsPerYear = function(){
  let totalVisitorsPerDay = this.calculateTotalNoOfVisitorsPerDay();
  let totalVisitorsPerYear = (totalVisitorsPerDay * 365);
  return totalVisitorsPerYear;
}

Park.prototype.calculateTotalRevenueForOneYear = function(){
  let totalVisitorsPerYear = this.calculateTotalNoOfVisitorsPerYear();
  let totalRevenue = (totalVisitorsPerYear * this.ticketPrice);
  return totalRevenue;
}

module.exports = Park;
