"use client"

import Script from 'next/script'; 

const AxeptioConsent = () => {
  return (
    <Script
      strategy="afterInteractive"
      src="https://static.axept.io/sdk-slim.js"
      onLoad={() => {
        window.axeptioSettings = {
          clientId: process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID,
          cookiesVersion: process.env.NEXT_PUBLIC_AXEPTIO_COOKIES_VERSION,
        };

        window.axeptioSDK.on("cookies:complete", function (choices) {
          console.log("The user made his choices:", choices);
        });

        window.axeptioSDK.init();
      }}
    />
  );
};

export default AxeptioConsent;
