import axios from 'axios';

export const customLinAxios = axios.create({
  baseURL: 'https://dev-api.plaync.com/l2m/v1.0', // 리니지2m 기본 서버 주소 입력
  headers: {
    Authorization: 'Bearer eyJraWQiOiI5OGI5NmVmYy05NjA5LTRiNTktYjZkOC05OGI4ZmI2MjdlZDgiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOiIyMjYwMzBFRS1EMTVGLUUwMTEtOUEwNi1FNjFGMTM1RTk5MkYifQ.KCkrqQlouTEy1vmylwnytUM1h7PLwIXRdgk6hq433VgF_4gZkjdvScpq7tV8P555bA8hcwnZcj7wiNIdCsnBtBItKb5nOy0SUgxD5OBQyhpruDRZquMBcReqRNLuQpPTTJWw5YZNu6qEtputgWtton8tdbZpTTo2quZeTc1rwT77PPqGIvQqW9DGT3N7ZWQKkmzS4XJA78CYF67OL9cbhSKshiXhkNyFuzNUma_oqmsVCopvtuHSadw9XQR_eZI8fqNHIhL6RHO0eECvnF5hM06-O8NUkXrlSPIF8cSsHjH3O4Rh5GyNc_jRQyF2kk7LFecuGtHjivW4AYNgTiUaxA',
    // contentType: 'application/json',
  },
});
