"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_1 = require("./logger");
const __prod__1 = require("./__prod__");
async function Mailer(to, subject, text) {
    const mailer = nodemailer_1.default.createTransport({
        host: __prod__1.env.SMTP,
        port: parseInt(__prod__1.env.SMTP_PORT),
        secure: true,
        auth: {
            user: __prod__1.env.SMTP_USER,
            pass: __prod__1.env.SMTP_PASS,
        },
    });
    let info = await mailer
        .sendMail({
        to,
        subject,
        text,
        from: __prod__1.env.SMTP_USER,
    })
        .catch((err) => {
        throw err;
    });
    logger_1.logger.info(`Message Sent : ${info.messageId}`);
    logger_1.logger.info(`Preview URL : ${nodemailer_1.default.getTestMessageUrl(info)}`);
    return mailer;
}
exports.Mailer = Mailer;
