import { useState } from "react";

export function useToggle(
  initialValue: boolean
): [boolean, () => void, (force: boolean) => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleFn = () => setValue((prev) => !prev);

  const forceToggleFn = (force: boolean) => setValue(force);

  return [value, toggleFn, forceToggleFn];
}
