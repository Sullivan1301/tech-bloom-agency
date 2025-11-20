import { useEffect } from 'react';

// Composant pour intégrer Google Analytics et Facebook Pixel
// À configurer avec les IDs réels lors du déploiement

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4
    // Remplacez 'G-XXXXXXXXXX' par votre ID Google Analytics
    const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
    
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      // Script Google Analytics
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}');
      `;
      document.head.appendChild(script2);
    }

    // Facebook Pixel
    // Remplacez 'XXXXXXXXXXXXXXX' par votre ID Facebook Pixel
    const FB_PIXEL_ID = import.meta.env.VITE_FB_PIXEL_ID || '';
    
    if (FB_PIXEL_ID && typeof window !== 'undefined') {
      const script3 = document.createElement('script');
      script3.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FB_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script3);

      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"/>`;
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
};

export default Analytics;

