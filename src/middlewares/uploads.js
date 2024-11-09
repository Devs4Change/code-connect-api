import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const userAvatarUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVE_FILES_ORG_API_ACCESS_TOKEN,
        relativePath: "/CodeConnect/users/*"
    }),
    preservePath: true
})

export const courseVideoUpload = multer({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVE_FILES_ORG_API_ACCESS_TOKEN,
        relativePath: "/CodeConnect/courses/*"
    }),
    preservePath: true
})