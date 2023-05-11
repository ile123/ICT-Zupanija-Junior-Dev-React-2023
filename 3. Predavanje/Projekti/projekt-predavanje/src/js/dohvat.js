const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
 
async function dohvatiKorisnika() {
  await sleep(3000);
  return { ime: "Sara", godine: 21, aktivan: false };
}
 
export default dohvatiKorisnika;