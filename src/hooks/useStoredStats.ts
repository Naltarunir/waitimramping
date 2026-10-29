import { useEffect, useState } from "react";
import type { specialization } from "@data/class";
import { loadStoredStats, type StatsCardOptions } from "@components/StatsCard/StatsCard";

// the stats card can't restore these: a collapsed config section never mounts it
export const useStoredStats = (
    spec: specialization | undefined,
    fields: (keyof StatsCardOptions)[] | undefined,
    apply: (restored: Partial<StatsCardOptions>) => void,
): boolean => {
    const [ready, setReady] = useState(false);

    // biome-ignore lint/correctness/useExhaustiveDependencies: restore once per spec, not on every render
    useEffect(() => {
        const restored = loadStoredStats(spec, fields);
        if (Object.keys(restored).length > 0) apply(restored);
        setReady(true);
    }, [spec?.key]);

    return ready;
};
