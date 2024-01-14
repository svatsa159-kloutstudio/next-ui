'use server'

export async function getData() {
    try {
        const key = process.env.API_KEY;
        const baseId = 'appuTRCLTx7WNtuMO';
        const tableIdOrName = 'Klouts';

        const apiUrl = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;

        const data = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${key}`
            }
        })
        const dj = await data.json();
        // Parse the JSON in the response
        // console.log(JSON.stringify(await data.json()))
        // Send the data as the API response
        return dj;
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('API Error:', error);
        return 0;
    }
}