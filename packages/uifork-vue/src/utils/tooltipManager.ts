// Global tooltip manager to coordinate tooltip delays

let isTooltipVisible = false;
let lastTooltipShownAt = 0;
const COOLDOWN_TIME = 1000;

export function registerTooltipShow() {
  isTooltipVisible = true;
  lastTooltipShownAt = Date.now();
}

export function registerTooltipHide() {
  isTooltipVisible = false;
}

export function shouldSkipDelay(): boolean {
  const timeSinceLastTooltip = Date.now() - lastTooltipShownAt;
  return isTooltipVisible || timeSinceLastTooltip < COOLDOWN_TIME;
}
