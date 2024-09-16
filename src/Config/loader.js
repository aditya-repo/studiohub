export async function clientDetailsLoader({ params }) {
    const clientId = params.clientId;
    const response = await fetch(API_URLS.GET_CLIENT_DETAILS(clientId));

    if (!response.ok) {
        throw new Error("Failed to load client data");
    }

    const data = await response.json();
    return data;
}