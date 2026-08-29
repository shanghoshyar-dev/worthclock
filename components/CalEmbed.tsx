"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { site } from "@/lib/site";

export function CalEmbed() {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-[700px] w-full overflow-hidden rounded-lg border border-line bg-cream">
      <Cal
        namespace="discovery-call"
        calLink={site.calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
        }}
      />
    </div>
  );
}
