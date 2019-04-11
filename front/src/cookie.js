const CookieMap = () => {
  let cookie_map = {}
  document.cookie.split(';').forEach(cookie_str => {
    const key_value = cookie_str.split('=')
    cookie_map[key_value[0].trim()] = key_value[1].trim()
  })

  return cookie_map;
}

export const Cookie = CookieMap
