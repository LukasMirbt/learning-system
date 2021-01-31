import React, { useLayoutEffect } from "react";

import { debounce } from "lodash";

const useResizeListener = (onResizeCallback: () => void) => {
  useLayoutEffect(() => {
    const debouncedOnResize = debounce(onResizeCallback, 250);

    window.addEventListener("resize", debouncedOnResize);

    return () => {
      window.removeEventListener("resize", debouncedOnResize);
    };
  }, [onResizeCallback]);
};

export default useResizeListener;
