"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalTime = getLocalTime;
exports.getUTCTime = getUTCTime;
// Returns the current local time as a formatted string
function getLocalTime() {
    return new Date().toLocaleString();
}
// Returns the current UTC time as a formatted string
function getUTCTime() {
    return new Date().toUTCString();
}
