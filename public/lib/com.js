export const GET = async function (path, handler = function (res) {}) {
  let response = await fetch(path, {
    method: "GET",
    credentials: "same-origin",
  });
  return handler(response);
};

export const POST = async function (path, data = JSON.stringify({}), handler = function (res) {}) {
  let response = await fetch(path, {
    method: "POST",
    mode: "same-origin",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return handler(response);
};
