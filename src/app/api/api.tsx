const qs = require("qs");

const HOST = process.env.NEXT_PUBLIC_APP_URL;

const fetchData = async (collection: string, queries: {}): Promise<any> => {
  try {
    const query = qs.stringify(queries, {
      encodeValuesOnly: true,
      encode: false,
    });

    const path = `${HOST}/api/${collection}?${query}`;

    const req = await fetch(path);

    const res = await req.json();

    return res.data;
  } catch (err) {
    throw err;
  }
};

export default fetchData;
