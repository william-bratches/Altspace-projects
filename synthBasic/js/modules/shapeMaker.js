Modules.ShapeMaker = (function() {
  function createCube(scale) {
    var scaler = scale || 50;
    var materialCreator = new THREE.MTLLoader.MaterialCreator();
  	materialCreator.crossOrigin = 'anonymous';
  	var url = 'models/cube/altspace-logo.jpg';
  	//hosted: 'https://sdk.altvr.com/examples/models/share/cube/altspace-logo.jpg';
  	var texture = materialCreator.loadTexture(url);
  	var geometry = new THREE.BoxGeometry(1, 1, 1);
  	var material = new THREE.MeshBasicMaterial({color:'#ffffff', map: texture});
  	var cube = new THREE.Mesh(geometry, material);
    cube.scale.multiplyScalar(scaler);
    return cube;
  }
  return {
    createCube: createCube,
  }
})();
