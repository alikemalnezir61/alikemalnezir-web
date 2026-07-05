"use client";

import { useEffect } from "react";
import { track, TrackEventName } from "@/lib/track";

export function TrackView({
  eventName,
  params,
}: {
  eventName: TrackEventName;
  params?: Record<string, unknown>;
}) {
  useEffect(() => {
    track(eventName, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
