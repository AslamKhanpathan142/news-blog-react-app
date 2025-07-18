const fetch = require("node-fetch");

exports.handler = async (event) => {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const category = event.queryStringParameters.category || "general";

  try {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" }),
    };
  }
};