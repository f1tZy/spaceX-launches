export default async function request() {
    const res = await fetch(`https://api.spacexdata.com/v4/launches`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        });
    return await res.json();
}
