// let cpuVersion = 145.4
// let softwareVersion = 23.45
// let updateVersion = 1.234





// const mainCore = {
//     getMainInfo (kerbin,cpuVersion) {
//        return kerbin.name + ' ' + cpuVersion;
//     },
//     getAdditionalInfo(softwareVersion) {
//        return softwareVersion 
//     },
//     updateRobot(kerbin,updateVersion) {
//       return kerbin.name + ' ' + 'robot is updated to' + ' ' + updateVersion
//     },
//   };
  
//   const navigationCore = {
//     getCoords (kerbin) {
//       return 'x = ' + kerbin.coords.x + ' ' + 'y = ' + kerbin.coords.y;
//     },
//     __proto__:mainCore
//   };
  
//   const movementCore = {
//     setTargetCoords (kerbin) {

//     },
//     __proto__:navigationCore
//   };

//   const kerbin = {
//     name: "Kerbin",
//     coords: {
//       x:3,
//       y:2
//     },
//     target: {
//       coords:{
//         x:2,
//         y:3
//       }
//     },
//     __proto__:movementCore
//   };
//   mainCore.getMainInfo(kerbin,cpuVersion);
  
//   console.log(kerbin.getCoords);
//   console.log(kerbin.updateRobot);
//   console.log(kerbin.getAdditionalInfo);
//   console.log(kerbin.getMainInfo);

  





// const robot = {
//   wheels: 4,
//   name: "roberto",
//   serialNumber: 123,
//   coords: {
//     x: 0,
//     y: 0,
//   },
//   weight: 40,
// };

//  let obj = {}
  
// function omitMethod(robot) {
//    obj.name = robot.name;
//    obj.serialNumber = robot.serialNumber
//    return obj
// }

// omitMethod(robot);
// console.log(obj);

// robot.omit(["coords", "wheels", "weight"]) ===
//   {
//     name: "roberto",
//     serialNumber: 123,
//   };

// console.log(robot);



class Robot {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
  }
  goRight() {
    return  this.y = -1;
  }
  goLeft() {}
  goForward() {}
  goBack() {}

}


const robot1 = new Robot('Roberto');
robot1.goRight()
console.log(robot1);