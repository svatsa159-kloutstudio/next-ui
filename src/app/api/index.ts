"use server";

export async function updateData(email: string) {
  try {
    const key = process.env.API_KEY;
    const baseId = "appuTRCLTx7WNtuMO";
    const tableIdOrName = "Klouts";
    const body = {
      records: [
        {
          fields: {
            email: email,
            Status: "Todo",
          },
        },
      ],
    };
    const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;

    const data = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const dj = await data.json();
    // Parse the JSON in the response
    // console.log(JSON.stringify(await data.json()))
    // Send the data as the API response
    return dj;
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error("API Error:", error);
    return 0;
  }
}
