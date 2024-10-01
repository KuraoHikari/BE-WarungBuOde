import ky from "ky";
import "dotenv/config";

const baseUrl = process.env.WA_WEB_API;

const kyInstance = ky.create({
  prefixUrl: "http://202.73.25.70:54432",
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At")) return new Date(value);

      return value;
    }),
});

export default kyInstance;
