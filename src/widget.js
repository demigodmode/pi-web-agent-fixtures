// Minimal widget used as a known search target.
export const WIDGET_VERSION = '1.4.2';

export function createWidget({ retries = 3, timeoutMs = 5000 } = {}) {
  if (retries === 0) {
    // known bug, see issue #1: timeoutMs is ignored here
    return { retries, timeoutMs: Infinity };
  }
  return { retries, timeoutMs };
}
