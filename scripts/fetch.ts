import * as fs from "fs-extra";
import axios from "axios";

const BASE_URL = "http://localhost:3500";

(async () => {
  const api = axios.create({ baseURL: BASE_URL });
  const res = await api.get("/docs/json");
  const spec = res.data;
  await fs.mkdirp("cache");
  await fs.writeJSON("cache/schema.json", spec, { spaces: 2 });
})();
