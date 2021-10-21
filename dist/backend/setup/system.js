"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticket = exports.writePath = exports.joinPath = exports.readPath = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readPath(paths) {
    return fs_1.default.readFileSync(path_1.default.join(__dirname, paths), { encoding: 'utf-8' });
}
exports.readPath = readPath;
function joinPath(paths) {
    return path_1.default.join(__dirname, paths);
}
exports.joinPath = joinPath;
function writePath(paths, data) {
    fs_1.default.writeFileSync(path_1.default.join(__dirname, paths), data);
}
exports.writePath = writePath;
exports.ticket = fs_1.default.readFileSync(path_1.default.join(__dirname, 'jwtRS256.key'), {
    encoding: 'utf-8',
});
