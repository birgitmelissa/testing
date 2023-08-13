// Import a single thing
import { add, subtract, multiply, speedOfLightMetersPerSecond, divide, square} from "./lib.js";

// Import multiple things
// import { subtract, multiply } from "./lib.js";

// Importing something that is not a function works the same
// import { speedOfLightMetersPerSecond } from "./lib.js";

console.log(add(3, 4));

console.log(subtract(5, 2));

console.log(multiply(10, 4));

console.log(divide(6, 3));

console.log(square(4));

console.log(`The speed of light: ${speedOfLightMetersPerSecond} m/s.`);