import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

export default function useInfinityScroll(target: MutableRefObject<null>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isIntersected, setIsIntersected] = useState<boolean>(false);

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        setIsIntersected(entries.some((entry) => entry.isIntersecting));
      });
    }

    return observerRef.current;
  }, []);

  useEffect(() => {
    if (target.current) getObserver().observe(target.current);

    return () => {
      getObserver().disconnect();
    };
  }, [target, getObserver]);

  return isIntersected;
}
