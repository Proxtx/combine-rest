let f;
try {
  f = fetch;
} catch (e) {
  f = (await import("node-fetch")).default;
}

export const genCombine = async (url, module, genModule) => {
  let dataUrl = new URL(url);
  dataUrl.pathname += "data";
  return await genModule(async (body) => {
    return await Fetch(dataUrl, body);
  }, module);
};

const Fetch = async (url, json = {}, headers = {}, options = {}) => {
  return await (
    await f(url, {
      ...{
        method: "POST",
        headers: {
          ...{
            "Content-Type": "application/json",
          },
          ...headers,
        },
        body: JSON.stringify(json),
      },
      ...options,
    })
  ).json();
};
