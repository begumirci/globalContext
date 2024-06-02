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

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2011);
  const inputRef = useRef(null);

  useEffect(() => {
    let url = `
    https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`;

    async function fetchData() {
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
    }
    fetchData();

    inputRef.current.focus();
  }, [selectedYear]);

  return (
    <Container maxWidth='lg'>
      <Box sx={{ flexGrow: 1 }}>
        {isLoading && <Loading />}
        {!isLoading && (
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
            <Stack direction='column'>
              <TextField
                inputRef={inputRef}
                label='Surname'
                variant='outlined'
              />
            </Stack>
            <Stack direction='column'>
              <TextField label='Name' variant='outlined' />
            </Stack>
          </Stack>
        )}
      </Box>
    </Container>
  );
}

export default App;
