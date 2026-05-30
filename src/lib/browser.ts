export type NavigatorConnectionInfo = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorWithConnection = Navigator & {
  connection?: NavigatorConnectionInfo;
};

export function getNavigatorConnection() {
  if (typeof navigator === "undefined") {
    return undefined;
  }

  return (navigator as NavigatorWithConnection).connection;
}

export function hasRuntimeConstraints(options?: { includeMotion?: boolean }) {
  if (typeof window === "undefined") {
    return false;
  }

  const connection = getNavigatorConnection();
  const saveData = connection?.saveData === true;
  const slowNetwork = /2g|slow-2g/.test(connection?.effectiveType ?? "");
  const lowCoreDevice = (navigator.hardwareConcurrency ?? 8) <= 4;
  const reducedMotion =
    options?.includeMotion === true &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return reducedMotion || saveData || slowNetwork || lowCoreDevice;
}
