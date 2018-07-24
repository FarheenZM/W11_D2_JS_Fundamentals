const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park, dino;

  beforeEach(function () {
    park = new Park("Dino Park", 100);
    dino = new Dinosaur("t-rex", "carnivore", 50);
    dino2 = new Dinosaur("rapter", "carnivore", 70);
    dino3 = new Dinosaur("t-rex", "herbivore", 30);
  });

  it('should have a name', function(){
    assert.strictEqual(park.name, "Dino Park");
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 100);
  });

  it('should have a collection of dinosaurs', function(){
    assert.strictEqual(park.dinosaurs.length, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurs(dino);
    assert.strictEqual(park.dinosaurs.length, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurs(dino);
    park.removeDinosaurs(dino);
    assert.strictEqual(park.dinosaurs.length, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaurs(dino);
    park.addDinosaurs(dino2);
    park.addDinosaurs(dino3);
    let attractiveDino = park.findDinoThatAttractsMostVisitors();

    assert.strictEqual(attractiveDino, dino2);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaurs(dino);
    park.addDinosaurs(dino2);
    park.addDinosaurs(dino3);

    let dinosOfSameSpecies = park.findAllDinosOfParticularSpecies("t-rex");

    assert.strictEqual(dinosOfSameSpecies.length, 2);

  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaurs(dino);
    park.addDinosaurs(dino2);
    park.addDinosaurs(dino3);

    park.removeAllDinosOfParticularSpecies("t-rex");
    console.log(park.dinosaurs);
    assert.strictEqual(park.dinosaurs.length, 1);

  });

  it('should calculate the total number of visitors per day', function(){
    park.addDinosaurs(dino);
    park.addDinosaurs(dino2);
    park.addDinosaurs(dino3);
    let totalVisitorsPerDay = park.calculateTotalNoOfVisitorsPerDay();
    assert.strictEqual(totalVisitorsPerDay, 150);
  });

  it('should calculate the total number of visitors per year', function(){
    park.addDinosaurs(dino3);
    assert.strictEqual(park.calculateTotalNoOfVisitorsPerYear(), 10950);
  });

  it('should calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaurs(dino3);
    assert.strictEqual(park.calculateTotalRevenueForOneYear(), 1095000);
  });

});
