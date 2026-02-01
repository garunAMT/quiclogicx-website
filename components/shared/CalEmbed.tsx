'use client'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export const CalEmbed = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#ff6bff"}, "dark": {"cal-brand":"#ff6bff"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <Cal
      namespace="30min"
      calLink="anurag-tripathi/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: 'light' }}
    />
  );
};
