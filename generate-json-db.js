const allMarkdownContent = require('./contents/index.js')

const fs = require('fs-extra')
const path = require('path')

function generateData () {
  let resultObj = {
    claps: {},
    hits: {}
  }
  allMarkdownContent.map(item => {
    resultObj.claps[item] = 0
    resultObj.hits[item] = 0

    return item
  })

  writeFile(JSON.stringify(resultObj))
}

function writeFile (content) {
  const stream = fs.createWriteStream(path.resolve('./firebase-db-export.json'))
  stream.write(content)
  stream.end()
}

// run in first attempt
generateData()