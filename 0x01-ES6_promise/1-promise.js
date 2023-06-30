export default function getFullResponseFromAPI(success) {
  const result = new Promise((myResolve, myReject) => {
    if (success) {
      myResolve({ status: 200, body: 'success' });
    } else {
      myReject(new Error('The fake API is not working currently'));
    }
  });
  return result;
}
