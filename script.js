//js
var Sports = {
    "type": "Baseball",
    "team": "Twins",
    "physics": "Photons",
    "storage": []
  };
  var froze = Object.freeze(Sports);
  var sealed = Object.seal(Sports);
  var physics = "Electrons";
  function SportAction() {
    this.returnSport = function() {
      return this.type + '3 ' + this.team;
    }
  };
  function switchPhysics(state) {
    return this.physics + ' are in many smartphones. ' + 'We are currently in a ' + state;
  }
  var switches = switchPhysics.bind(this, 'Black Hole Era');
  
  function PrintTypeWithArgument(b) {
    return 'Printing this.type with arguments: ' + this.type + ' ' + this.team + ' ' + b * b;
  }
  var photons = switchPhysics.bind(Sports, 'Black Hole Era');
  
  var mult = PrintTypeWithArgument.bind(Sports, 3333);

  var newSport = new SportAction();
  //mocha
  mocha.setup('bdd');
  const { assert } = chai;
  describe('Instance should inherit object constructor', () => {
    it('Should be an object instance', () => {
      assert.instanceOf(newSport, SportAction, 'newSport is an instance of SportAction');
    })
    it('Sports should not be empty', () => {
      assert.isNotEmpty(Sports);
    })
    it('Storage should be empty', () => {
      assert.isEmpty(Sports.storage);
    })
    it('Object is not frozen', () => {
      assert.frozen(froze);
    })
    it('Object is sealed', () => {
      assert.sealed(sealed);
    })
  })
  describe('Test instance call Sports', () => {
    it('Should call Sports object this reference', () => {
      assert.equal(newSport.returnSport.call(Sports), "Baseball3 Twins")
    })
    it('Should return photon method', () => {
      assert.equal(photons(), 'Photons are in many smartphones. We are currently in a Black Hole Era')
    })
    it('Should return mult() method', () => {
      assert.equal(mult(), "Printing this.type with arguments: Baseball Twins 11108889");
    })
    it('Should return switches() method', () => {
      assert.equal(switches(), 'Electrons are in many smartphones. We are currently in a Black Hole Era');
    })
  })
  mocha.run();
  