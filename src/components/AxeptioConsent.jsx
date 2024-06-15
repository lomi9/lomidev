"use client"

import Script from 'next/script';
import { useEffect } from 'react';

const AxeptioConsent = ({ clientId }) => {
  useEffect(() => {
    const checkAxeptioSDK = () => {
      if (window.axeptioSDK && typeof window.axeptioSDK.init === 'function') {
        window.axeptioSDK.init();
      } else {
        setTimeout(checkAxeptioSDK, 100); // Check every 100ms
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

    checkAxeptioSDK();

    return () => {
      // Cleanup if needed when the component unmounts
    };
  }, [clientId]);

  return (
    <Script
      strategy="afterInteractive"
      src="https://static.axept.io/sdk-slim.js"
      onLoad={() => console.log("Axeptio SDK loaded successfully")}
    />
  );
};

export default AxeptioConsent;
