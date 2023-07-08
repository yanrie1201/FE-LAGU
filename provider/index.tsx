import axios from 'axios'

const getTopTracks = async () => {
  const request = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=525a029a365bb4ba4700c7a4c1058c19&format=json`
  )
  return request.data
}

const getTopArtist = async () => {
  const request = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=525a029a365bb4ba4700c7a4c1058c19&format=json`
  )
  return request.data
}

export default {
  getTopTracks,
  getTopArtist,
}
