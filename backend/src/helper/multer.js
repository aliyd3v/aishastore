const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!fs.existsSync(path.resolve(__dirname, '..', '..', 'storage'))) {
            fs.mkdirSync(path.resolve(__dirname, '..', '..', 'storage'))
        }
        cb(null, path.resolve(__dirname, '..', '..', 'storage'))
    },
    filename: (req, file, cb) => {
        cb(null, Math.floor(Math.random() * 1000000) + '-' + Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage }).single('image')

module.exports = upload