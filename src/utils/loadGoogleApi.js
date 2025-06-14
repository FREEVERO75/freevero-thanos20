export const loadGoogleApi = apiKey => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve(window.google);
      return;
    }

    const existingScript = document.getElementById('google-maps');
    if (existingScript) {
      existingScript.onload = () => resolve(window.google);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.id = 'google-maps';
    script.async = true;
    script.defer = true;

    script.onload = () => resolve(window.google);
    script.onerror = reject;

    document.body.appendChild(script);
  });
};
