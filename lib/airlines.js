export async function getAllAirlinesIds() {
  const res = await fetch(`http://localhost:3000/api/airlines`)
  const allAirlinesData = await res.json()
  return allAirlinesData.map(airline => {
    return {
      params: {
        id: airline.iata
      }
    }
  })
}

export async function getAirlineData(id) {
  const res = await fetch(`http://localhost:3000/api/find-airline?iata=${id}`)
  const airlineData = await res.json()
  console.log(airlineData)
  return airlineData
}