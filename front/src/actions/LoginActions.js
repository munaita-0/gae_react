export function loginStatus(bool) {
  if (bool) {
    return { type: 'LOGIN' }
  } else {
    return { type: 'LOGOUT' }
  }
}
