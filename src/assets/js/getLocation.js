import BMap from "BMap";

let getLocation = function(val) {
  return new Promise(function(resolve, reject) {
    var map = new BMap.Map(val);
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 11);

    myCity.get(function(result) {
      resolve(result.name);
    });
  });
};

export default getLocation;
