import multer from 'multer'

export const uploadMiddleware = multer({
  dest: 'public/uploads',
})
