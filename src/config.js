const config = {
  apiBaseUrl: "http://localhost:8080",
  appName: "SPLISH SPLASH",
  logging: true,
  persistence: true,
  auth: {
    tokenStorageKey: "SPLISH_SPLASH_TOKEN"
  },
  search: {
    initialPage: 1,
    imagesPerPage: 5
  },
  slider: {
    autoPlay: true,
    interval: 10000
  }
};

export default config;
