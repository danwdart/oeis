import oeis from '../../src';

oeis.searchBySequence([1,1,2,3,5])
    .then((text) => console.log('Sequence', (text.greeting ? 'Success' : 'Failure')));

oeis.searchByID(42)
    .then((text) => console.log('ID', (text.greeting ? 'Success' : 'Failure')));

oeis.plot(42, false)
    .then((text) => console.log('Plot HTML', (text.includes('<html>') ? 'Success' : 'Failure')));

oeis.plot(42, true)
    .then((text) => console.log('Plot PNG', (text.includes('PNG') ? 'Success' : 'Failure')));
