export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    uri: process.env.DATABASE_URL,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
});
