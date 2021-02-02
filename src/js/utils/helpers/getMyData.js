export const getMyData = async (endpoint) => {
  try {
    // console.log(endpoint);
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
