"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing time functions from utils
const utils_1 = require("./utils");
// Importing project configuration
const config_json_1 = __importDefault(require("./config.json"));
// Displaying project name
console.log(`📍 Project: ${config_json_1.default.projectName}`);
// Displaying local time
console.log(`🕒 Local Time: ${(0, utils_1.getLocalTime)()}`);
// Displaying UTC time
console.log(`🌐 UTC Time: ${(0, utils_1.getUTCTime)()}`);
