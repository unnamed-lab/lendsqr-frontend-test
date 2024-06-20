export const fetchDataFromApi = async () => {
    console.log("start fetching")
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/1d1fc87a-dff7-4f55-9188-d66b73a41edc",
      {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      },
    );

    if (response) {
      const data = await response.json();
      console.log(data)
      localStorage.setItem("lendsqr", JSON.stringify(data));
    }
  } catch (error) {
    console.error(error);
  }
};
