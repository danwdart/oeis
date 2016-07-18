import fetch from 'node-fetch';
import zerofill from 'zero-fill';

const ENDPOINT = 'https://oeis.org',
      SIZE = 6;

export let searchBySequence = (arrSequence, intStart = 0) => fetch(ENDPOINT + '/search?fmt=json&q=' + arrSequence.join(',') + '&start=' + intStart)
    .then((res) => res.json());
export let searchByID = (intID) => fetch(ENDPOINT + '/search?fmt=json&q=id:A'+zerofill(SIZE, intID))
    .then((res) => res.json());
export let plot = (intID, bPng) => fetch(ENDPOINT + '/A' + zerofill(SIZE, intID) + '/graph?png=' + (bPng ? '1' : '0'))
    .then((res) => res.text());
