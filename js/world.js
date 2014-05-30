// Worlds are initiated with objects with three lists: modelTypes, modelInstances, and entities.
// Each object in modelTypes is of the form {name: ,layers: }.
// Each object in modelInstances is of the form {name: ,x: ,y: ,z: }.
// Each object in entities is of the form {type: ,x: ,y: ,z: }.
// The object also has a "name" property.
// Worlds (not the initializer objects) have viewX, viewY, and viewZ properties.

game.World = function(args) {
    this.name = args.name;
    this.viewX = 0;
    this.viewY = 0;
    this.viewZ = 0;
};