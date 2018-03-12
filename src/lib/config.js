let baseUrl = ''
if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://61.151.214.92:81/xhzs'
} else {
  baseUrl = 'http://61.151.214.92:81/xhzs'
  // baseUrl = 'http://10.4.4.6:81/xhzs'
  // baseUrl = 'http://10.4.4.33:81/xhzs';
}
export {baseUrl}