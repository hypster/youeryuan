let baseUrl = ''
if (process.env.NODE_ENV == 'production') {
  baseUrl = '';
} else {
  baseUrl = 'http://10.4.4.33:81/xhzs';
}
export {baseUrl}