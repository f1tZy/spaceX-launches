export default async function request(offset) {
    return await fetch(`https://api.spacexdata.com/v3/launches?limit=6&offset=${offset}`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        });
}
