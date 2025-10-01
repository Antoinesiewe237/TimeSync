// Importing time functions from utils
import { getLocalTime, getUTCTime } from './utils';

// Importing project configuration
import config from './config.json';

// Displaying project name
console.log(`📍 Project: ${config.projectName}`);

// Displaying local time
console.log(`🕒 Local Time: ${getLocalTime()}`);

// Displaying UTC time
console.log(`🌐 UTC Time: ${getUTCTime()}`);
