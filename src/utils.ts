// Returns the current local time as a formatted string
export function getLocalTime(): string {
  return new Date().toLocaleString();
}

// Returns the current UTC time as a formatted string
export function getUTCTime(): string {
  return new Date().toUTCString();
}
