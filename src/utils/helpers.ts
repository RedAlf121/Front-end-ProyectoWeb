
export const getErrorMessage = (err) => {
  switch (err.code) {
    case 'ERR_BAD_REQUEST':
      return 'Usuario o contraseña incorrectos'
    case 'ERR_UNAUTHORIZED':
      return 'Usuario sin autorización'
    default:
      return 'Error desconocido'
  }
}


