let baseUrl = ''
if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://61.151.214.92:81/xhzs/'
} else {
  // baseUrl = 'http://61.151.214.92:81/xhzs'
  // baseUrl = 'http://10.4.4.33:81/xhzs'
  // baseUrl = 'http://127.0.0.1:10018/xhzs'
  // baseUrl = 'http://10.4.4.6:81/xhzs'
  // baseUrl = 'http://10.4.4.33:81/xhzs';
  baseUrl = 'http://10.4.4.5:81/xhzs-lrs';
}
export {baseUrl}