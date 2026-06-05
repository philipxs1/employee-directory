const baseUrl ='./data.json'


export const fetchApi =async () => {
    const res = await fetch(baseUrl)

    if (!res.ok) {
        return console.log("response was unsuccesfull")
    }

    const data = res.json()
    return data
}