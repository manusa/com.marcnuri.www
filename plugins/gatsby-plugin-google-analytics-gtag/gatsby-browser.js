
const sendPageView = ({trackingId}) => () => {
  if (!window.gtag) {
    return;
  }
  const options = {
    send_to: `${trackingId}`
  };
  if (location) {
    options.page_path = `${location.pathname}${location.search}${location.hash}`;
  }
  window.gtag('event', 'page_view', options);
};

export const onRouteUpdate = ({location}, {trackingId}) => {
  // Minimum delay for reactHelmet's requestAnimationFrame
  const reactHelmetRequestAnimationDelay = 32;
  setTimeout(sendPageView({location, trackingId}), reactHelmetRequestAnimationDelay);
};
