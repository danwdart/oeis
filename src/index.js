import fetch from 'node-fetch';

const ENDPOINT = 'https://oeis.org',
      SIZE = 6;

export const searchBySequence = (arrSequence, intStart = 0) => fetch(`${ENDPOINT}/search?fmt=json&q=${arrSequence.join(',')}&start=${intStart}`)
    .then(res => res.json());
export const searchByID = intID => fetch(`${ENDPOINT}/search?fmt=json&q=id:A${String(intID).padStart(SIZE, '0')}`)
    .then(res => res.json());
export const plot = (intID, bPng) => fetch(`${ENDPOINT}/A${String(intID).padStart(SIZE, '0')}/graph?png=${(bPng ? '1' : '0')}`)
    .then(res => res.text());
export const getSequence = intId => fetch(`${ENDPOINT}/A${String(intID)}/b${String(intID)}.txt`)
    .then(res => res.text());