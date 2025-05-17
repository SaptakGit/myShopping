const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'uploads/products/')
    },
    filename:(req, file, cb) => {
        const uniqueName = Date.now()+'-'+req.body.productName+path.extname(file.originalname); 
        cb(null,uniqueName)
    }
});

const upload = multer({
    storage:storage,
    limits: {fileSize: 5 * 1024 * 1024},
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png/;
        const ext = allowedTypes.test(path.extname(file.originalname).toLocaleLowerCase());
        const mime = allowedTypes.test(file.mimetype);
        if(ext && mime){
            return cb(null, true);
        }
        cb(new Error('Only JPEG/PNG images are allowed'))
    }
});

module.exports = upload;