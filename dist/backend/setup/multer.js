"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploadOptions = void 0;
const multer_1 = __importDefault(require("multer"));
const system_1 = require("./system");
const fileUploadOptions = () => ({
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, system_1.joinPath('../upload'));
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1]);
        },
    }),
    limits: {
        fieldNameSize: 255,
        fileSize: 1024 * 1024 * 2,
    },
});
exports.fileUploadOptions = fileUploadOptions;
