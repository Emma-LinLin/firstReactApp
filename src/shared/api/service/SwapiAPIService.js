import http from "../SwapiAPI"

const getPlanet = (number) => {
    return http.get(`planets/${number}`)
}

const getDriver = (number) => {
    return http.get(`people/${number}`)
}

const getAllShips = () => {
    return http.get(`starships/?page=1`)
}

export default{
    getPlanet,
    getDriver,
    getAllShips
}