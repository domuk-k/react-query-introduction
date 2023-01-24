/**
 * @param {string} url HTTP GET 요청의 경로. e.g. '/todos', '/todo'
 * @returns GET 요청에 대한 응답
 */
const createQueryFn = (url) => () =>
  fetch(url).then((response) => response.json());

export default createQueryFn;
