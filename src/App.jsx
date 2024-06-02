import './App.css';
import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { Loading } from './loading';
import { jsonPlaceholderAPI, hackerrankAPI } from './api/axios';
import axios from 'axios';

function App() {
  const inputRef = useRef(null);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2011);
  const [game, setGame] = useState({
    status: 'active', // null | active |passive
    id: 10,
  });

  useEffect(() => {
    async function fetchData() {
      /*
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result.data))
        .catch((err) => console.error(err.message ?? err))
        .finally(() =>
          setTimeout(() => {
            setIsLoading(false);
          }, 3000)
        );
      */
    }
    fetchData();

    hackerrankAPI
      .get(`football_competitions?year=${selectedYear}`)
      .then((result) => console.log(result));

    jsonPlaceholderAPI.get('posts/1').then(console.log);
    /*
      axios.get(
        `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`
      );
     */
    // inputRef.current.focus();
  }, [selectedYear]);

  return (
    <Container maxWidth='lg'>
      <Box sx={{ flexGrow: 1 }}>
        {isLoading && <Loading />}
        {game.status === null && (
          <Stack gap={5}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Select Year</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={selectedYear}
                label='Select Year'
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                {[2011, 2012, 2013, 2014, 2015, 2016].map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        )}
        {game.status === 'active' && (
          <Stack direction='column'>
            <TextField inputRef={inputRef} label='Active' variant='outlined' />
          </Stack>
        )}
        {game.status === 'passive' && (
          <Stack direction='column'>
            <TextField label='Passive' variant='outlined' />
          </Stack>
        )}
      </Box>
    </Container>
  );
}

export default App;
