
 const login = async (params)=>{
    try {
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            body: JSON.stringify(params),
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}

const register = async (params)=>{
    try {
        const res = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            body: JSON.stringify(params),
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}


export {
    login,register
}