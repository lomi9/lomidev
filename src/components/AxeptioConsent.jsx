"use client";
import Script from 'next/script';
import { useEffect } from 'react';

const AxeptioConsent = ({ clientId }) => {
  useEffect(() => {
    const initAxeptioSDK = () => {
      if (window.axeptioSDK) {
        window.axeptioSDK.init();
      }
    };

    window.axeptioSettings = {
      clientId: clientId,
      cookiesVersion: "lomi-dev-fr-EU",
      userCookiesDuration: 365, // Durée de vie du cookie en jours
      triggerGTMEvents: true,
      authorizedVendorsCookieName: "axeptio_authorized_vendors",
      jsonCookieName: "axeptio_cookies",
      apiUrl: "https://api.axept.io/v1"
    };

    document.addEventListener('axeptioSDKReady', initAxeptioSDK);

    return () => {
      document.removeEventListener('axeptioSDKReady', initAxeptioSDK);
    };
  }, [clientId]);

  return (
    <Script
      strategy="afterInteractive"
      src="https://static.axept.io/sdk-slim.js"
      onLoad={() => console.log("Axeptio SDK loaded successfully")}
      onError={(e) => console.error("Failed to load Axeptio SDK", e)}
    />
  );
};

export default AxeptioConsent;
