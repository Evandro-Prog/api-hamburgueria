import multer from 'multer'; // Middleware for handling multipart/form-data, which is primarily used for uploading files
import { extname, resolve } from 'node:path';
import { v4 } from 'uuid';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, file, callback) =>
            callback(null, v4() + extname(file.originalname)) // Generates a unique filename using UUID and the original file extension
    })

}