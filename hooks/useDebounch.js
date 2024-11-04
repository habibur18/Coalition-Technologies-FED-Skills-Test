import { useEffect, useRef } from "react";

const useDebounce = (fn, delay = 1000) => {
  const timer = useRef();

  const debouncedFunction = (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fn(...args), delay);
  };

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  return debouncedFunction;
};

export default useDebounce;
