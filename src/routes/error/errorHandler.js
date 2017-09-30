export function errorHandler (err, req, res) {
  res.locals.message = err.message
  res.status(err.status || 500).json({ error: err })
}
