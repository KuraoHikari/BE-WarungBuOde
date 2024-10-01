import ky from "ky";
import "dotenv/config";

const baseUrl = process.env.WA_WEB_API;

const kyInstance = ky.create({
  prefixUrl: baseUrl,
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At")) return new Date(value);

      return value;
    }),
});

export default kyInstance;
