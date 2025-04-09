export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackUTMParams = () => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = {
    source: urlParams.get("utm_source"),
    medium: urlParams.get("utm_medium"),
    campaign: urlParams.get("utm_campaign"),
    term: urlParams.get("utm_term"),
    content: urlParams.get("utm_content"),
  };

  if (Object.values(utmParams).some((param) => param !== null)) {
    trackEvent("Traffic Source", "UTM Parameters", JSON.stringify(utmParams));

    // Store in localStorage for future page views
    localStorage.setItem("utm_params", JSON.stringify(utmParams));
  }
};
