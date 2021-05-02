export default async function request() {
    return await fetch(`https://api.spacexdata.com/v3/launches`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
        });
}
