import OpenAI from "openai";

console.log("called");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
//const openai = new OpenAIApi(configuration);

export default openai;
