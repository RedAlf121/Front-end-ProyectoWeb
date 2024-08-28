export default class EmailError extends Error {
  constructor(message) {
    super(message)
    this.name = 'EmailError'
  }
}

