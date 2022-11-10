import { useState, useEffect, useCallback } from "react";

export const useCaptcha = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, []);

  const handleLoaded = (_: any) => {
    (window as any).grecaptcha.ready(async (_: any) => {
      const token = await (window as any).grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        {
          action: "contact",
        }
      );
      setToken(token);
    });
  };
  // }, []);

  return token;
};
