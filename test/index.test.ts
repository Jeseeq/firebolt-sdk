import { Firebolt } from "../src/index";

describe("integration test", () => {
  it("works", async () => {
    const firebolt = Firebolt({
      connectionOptions: {
        api_url: process.env.API_URL as string,
        username: process.env.FIREBOLT_USERNAME as string,
        password: process.env.FIREBOLT_PASSWORD as string,
        database: process.env.FIREBOLT_DATABASE as string,
        engine: process.env.FIREBOLT_ENGINE as string
      },
      loggerOptions: {},
      clientOptions: {}
    });

    const connection = await firebolt.createConnection();

    const rows = await connection.execute("SELECT COUNT(*) FROM lineitem");

    console.log(rows);
  });
});
