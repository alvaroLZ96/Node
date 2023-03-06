const axios = require('axios');

const getFirstPaintingName = async () => {
  const response = await axios.get('https://localhost:8080/api/paintings');
  return response.data[0].name;
};

const postPainting = async () => {
  const response = await axios.get('https://localhost:8080/api/paintings');
  return response.status[0].status;
};

/* const getFirstPaintingName = require('./index');
const axios = require('axios'); */

jest.mock('axios');

test('returns the name of the first painting', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'La Gioconda',
        date: '1500s',
      },
      {
        name: 'Las Tres Gracias',
        date: '1639',
      },
    ],
  });

  const name = await getFirstPaintingName();
  expect(name).toEqual('La Gioconda');
});

test('post a new painting FAIL', async () => {
  axios.post.mockResolvedValue({
    data: [
      {
        name: 'La Gioconda',
        date: '1500s',
      },
      {
        name: 'Las Tres Gracias',
        date: '1639',
      },
    ],
    status: [
      {
        status: 200,
      },
    ],
  });

  const status = await postPainting();
  expect(status).toEqual(200);
});

test('Get successful result of the API call', async () => {
  const apiUrl = 'https://rickandmortyapi.com/api/character';
  await axios
    .get(apiUrl)
    .then((r) => {
      expect(r.data).toBeDefined();
      expect(r.data.results.length).toBeGreaterThan(0);
      expect(r.status).toBeGreaterThanOrEqual(200);
      expect(r.status).toBeLessThan(300);
    })
    .catch((e) => {
      fail(`Expected successful response`);
    });
});
