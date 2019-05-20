export class Cookie {

  static cookieMap() {
    let cookie_map = {}
    document.cookie.split(';').forEach(cookie_str => {
      const key_value = cookie_str.split('=')

      if (!key_value[0]) {
        return cookie_map;
      }

      cookie_map[key_value[0].trim()] = key_value[1].trim()
    })

    return cookie_map;
  }

  static getHeaders() {
    const map = Cookie.cookieMap()
    return  { 
      headers: {
        uid: map['uid'],
        client: map['client'],
        'access-token': map['access-token'],
      }
    }
  }
}
