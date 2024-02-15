"use client";
import React from "react";

export default function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (callback: any) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener("change", callback);
      return () => {
        matchMedia.removeEventListener("change", callback);
      };
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  return React.useSyncExternalStore(subscribe, getSnapshot);
}
