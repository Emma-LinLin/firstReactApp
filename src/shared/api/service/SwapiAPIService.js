import http from "../SwapiAPI"

const getPlanet = (number) => {
    return http.get(`planets/${number}`)
}

const getDriver = (number) => {
    return http.get(`people/${number}`)
}

export default{
    getPlanet,
    getDriver
}