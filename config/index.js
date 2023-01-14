const config = {
  GOOGLE_ANALYTICS_ID:
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'DO_NOT_TRACK_LOCALHOST',
  API_HOST_URL:
    process.env.NODE_ENV === 'production'
      ? 'https://api.esummit.in/'
      : 'http://localhost:8000',
};

export default config;
