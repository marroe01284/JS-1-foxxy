import {userName} from "./user.js";
import {greetUser, signUpUser} from "./utils.js"; // named export

// import greetUser from "./utils.js"; // default export


signUpUser(userName);
greetUser(userName);