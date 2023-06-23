/* eslint-disable react/jsx-key */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/index'
import { Container, Grid } from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Provider from '../../../New folder/sirclo-test/src/provider/index'
import { toast } from 'react-toastify'
import MUIDataTable from 'mui-datatables'

const Home: NextPage = () => {
  const [topTracks, setTopTracks] = useState([])
  const [topArtist, setTopArtist] = useState([])
  useEffect(() => {
    const Tracks = async () => {
      try {
        const returnedData = await Provider.getTopTracks()
        setTopTracks(returnedData.tracks.track)
        const trackCount: number = returnedData?.tracks?.track?.length
      } catch (error: any) {
        if (error.response?.data.message === undefined) {
          toast.error('API is down, please try again letter')
        } else {
          toast.error(error.response?.data.message)
        }
      }
    }
    const Artists = async () => {
      try {
        const returnedData = await Provider.getTopArtist()
        setTopArtist(returnedData.artists.artist)
      } catch (error: any) {
        if (error.response?.data.message === undefined) {
          toast.error('API is down, please try again letter')
        } else {
          toast.error(error.response?.data.message)
        }
      }
    }

    Tracks(), Artists()
  }, [])

  const columns = [
    {
      name: 'name',
      label: 'Song Title',
    },
    {
      name: 'playcount',
      label: 'Total Play Count',
    },
    {
      name: 'listeners',
      label: 'Total Listeners',
    },
    {
      name: 'url',
      label: 'URL',
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <>
              <a href={value} target="_blank" rel="noreferrer">
                {value}
              </a>
            </>
          )
        },
      },
    },
  ]

  const columns1 = [
    {
      name: 'name',
      label: 'Artist',
    },
    {
      name: 'playcount',
      label: 'Total Play Count',
    },
    {
      name: 'listeners',
      label: 'Total Listeners',
    },
    {
      name: 'url',
      label: 'URL',
      options: {
        customBodyRender: (value: any, tableMeta: any) => {
          return (
            <>
              <a href={value} target="_blank" rel="noreferrer">
                {value}
              </a>
            </>
          )
        },
      },
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const handleSearch = async () => {
    const apiKey = '525a029a365bb4ba4700c7a4c1058c19'
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${apiKey}&format=json`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setResults(data.results.artistmatches.artist)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const [searchTerm1, setSearchTerm1] = useState('')
  const [results1, setResults1] = useState([])

  const handleSearch1 = async () => {
    const apiKey = '525a029a365bb4ba4700c7a4c1058c19'
    const url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTerm1}&api_key=${apiKey}&format=json`

    try {
      const response = await fetch(url)
      const data = await response.json()
      setResults1(data.results.trackmatches.track)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <Head>
        <title>Home - SIRCLO</title>
        <meta name="description" content="SIRCLO" />
      </Head>

      <Navbar
        setBackgroundColor="#fff"
        setPosition="relative"
        setLogoFilter="#1F96CC"
        setTextColor="#fff"
        setShadow="5"
      />
      <main className={styles.home}>
        <section className={styles.categorySection}>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.categoryContainer}
            >
              <Grid md={12} className={styles.categoryTitle}>
                <span className={styles.colorBlack}>Our</span> Feature
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#topTracks">
                  <a>Top Tracks</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#topArtists">
                  <a>Top Artists</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#searchArtists">
                  <a>Search Artists</a>
                </Link>
              </Grid>
              <Grid md="auto" className={styles.categoryContent}>
                <Link href="#searchTracks">
                  <a>Search Tracks</a>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.topTracks}
              id="topTracks"
            >
              <Grid md={12} className={styles.topTracksTitle}>
                <span>Top Tracks</span>
              </Grid>
              <MUIDataTable
                data={topTracks}
                columns={columns}
                options={{
                  selectableRows: 'none',
                  rowsPerPage: 10,
                  rowsPerPageOptions: [10, 15, 20],
                  elevation: 0,
                  pagination: true,
                  enableNestedDataAccess: '.',
                  textLabels: {
                    body: {
                      noMatch: 'No Data',
                    },
                  },
                }}
                title={undefined}
              />
            </Grid>
          </Container>
        </section>
        <section>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              className={styles.topTracks}
              id="topArtists"
            >
              <Grid md={12} className={styles.topTracksTitle}>
                <span>Top Artist</span>
              </Grid>
              <MUIDataTable
                data={topArtist}
                columns={columns1}
                options={{
                  selectableRows: 'none',
                  rowsPerPage: 10,
                  rowsPerPageOptions: [10, 15, 20],
                  elevation: 0,
                  pagination: true,
                  enableNestedDataAccess: '.',
                  textLabels: {
                    body: {
                      noMatch: 'No Data',
                    },
                  },
                }}
                title={undefined}
              />
            </Grid>
          </Container>
        </section>
        <section>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.searchArtist}
            id="searchArtists"
          >
            <Grid md={12} className={styles.topTracksTitle}>
              <span>Search Artist</span>
            </Grid>
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '1000px',
                  height: '30px',
                  fontSize: '16px',
                  marginRight: '20px',
                }}
              />
              <button
                onClick={handleSearch}
                style={{
                  width: '100px',
                  height: '30px',
                  fontSize: '16px',
                }}
              >
                Search
              </button>
              <ul>
                {results.map((artist: any) => (
                  <li key={artist.name}>{artist.name}</li>
                ))}
              </ul>
            </div>
          </Grid>
        </section>
        <section>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={styles.searchArtist}
            id="searchTracks"
          >
            <Grid md={12} className={styles.topTracksTitle}>
              <span>Search Track</span>
            </Grid>
            <div>
              <input
                type="text"
                value={searchTerm1}
                onChange={(e) => setSearchTerm1(e.target.value)}
                style={{
                  width: '1000px',
                  height: '30px',
                  fontSize: '16px',
                  marginRight: '20px',
                }}
              />
              <button
                onClick={handleSearch1}
                style={{
                  width: '100px',
                  height: '30px',
                  fontSize: '16px',
                }}
              >
                Search
              </button>
              <ul>
                {results1.map((track: any) => (
                  <li key={track.name}>{track.name}</li>
                ))}
              </ul>
            </div>
          </Grid>
        </section>
      </main>
    </>
  )
}

export default Home
