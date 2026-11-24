// Is Escape someone else's to handle? Already handled, held with a modifier, mid-composition (an
// IME), or typed into a field.
export function escapeIsTaken(event: KeyboardEvent): boolean {
  const target = document.activeElement;
  return (
    event.defaultPrevented ||
    event.isComposing ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    (target instanceof HTMLElement &&
      (target.isContentEditable || target.matches("input, textarea, select")))
  );
}

