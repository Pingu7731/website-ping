
// export const getMyActivities = async () => {
//     const CHANNEL_ID = import.meta.env.VITE_SE_CHANNEL_ID;
//     const JWT_TOKEN = import.meta.env.VITE_SE_JWT_TOKEN;

//     const url = `https://api.streamelements.com/kappa/v2/sessions/${CHANNEL_ID}`;

//     const response = await fetch(url, {
//         headers: {
//             'Authorization': `Bearer ${JWT_TOKEN}`,
//             'Accept': 'application/json'
//         }
//     });

//     const data = await response.json();
//     console.log(data);
//     return data;
// };

export const getMyActivities = async () => {
    try {

        const response = await fetch('/api/stats');

        if (!response.ok) throw new Error('ProxyFailed');

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};