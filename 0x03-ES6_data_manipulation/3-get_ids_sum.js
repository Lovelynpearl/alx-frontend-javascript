export default function getStudentIdsSum(array) {
  const sumOfIds = array.reduce((acc, val) => acc + val.id, 0);
  return sumOfIds;
}
