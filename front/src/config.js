const Config = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      host: process.env.REACT_APP_DEV_HOST,
      // host: process.env.REACT_APP_PROD_HOST,
    }
  } else if (process.env.NODE_ENV === 'production') {
    return {
      host: process.env.REACT_APP_PROD_HOST,
    }
  }
  return {}
}

export const Configs = Config()
