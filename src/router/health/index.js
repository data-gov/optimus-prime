import { getLastCommit } from 'git-last-commit'
import { Router } from 'express'
import moment from 'moment'

const router = Router()

let lastCommit
const birthTime = dateTimeNow()

getLastCommit((err, commit) => {
  if (err) {
    console.error(err)
    lastCommit = {}
  } else {
    const { shortHash, subject } = commit
    lastCommit = { hash: shortHash, message: subject }
  }
})

function dateTimeNow () {
  return moment()
}

function getUptime () {
  return dateTimeNow().diff(birthTime, 'minutes')
}

export default router.get('/', function (req, res) {
  const healthCheck = {
    lastCommit,
    upTime: getUptime(),
    birthTime: birthTime.format('MMMM Do YYYY, h:mm:ss a')
  }

  res.status(200).json(healthCheck)
})
