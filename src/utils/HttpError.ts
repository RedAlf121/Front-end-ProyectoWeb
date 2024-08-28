export default class HttpError extends Error {
  statusCode
  constructor(message, statusCode) {
    super(message)
    this.name = 'HttpError'
    this.statusCode = statusCode
  }
}

