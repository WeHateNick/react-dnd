export function observe (cb) {
  setInterval(() => cb([
    Math.floor(Math.random() * 8),
    Math.floor(Math.random() * 8)
  ]), 500);
}