"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.user = void 0;
const supertest_1 = __importDefault(require("supertest"));
const faker_1 = __importDefault(require("faker"));
const main_1 = require("../main");
const expect_1 = __importDefault(require("expect"));
const system_1 = require("../setup/system");
const mocha_1 = require("mocha");
const headline = ['Architect', 'Engineer', 'Content Creator', 'Designer'];
const language = ['Indonesia', 'English', 'Mandarin'];
exports.user = false;
exports.token = false;
try {
    exports.user = JSON.parse(system_1.readPath('../../tests/user.txt'));
}
catch (_a) { }
try {
    exports.token = system_1.readPath('../../tests/token.txt');
}
catch (_b) { }
describe('super::unittest-user', () => {
    mocha_1.it('Create', async () => {
        await supertest_1.default(main_1.app.app)
            .post('/api/v1/user/next/create')
            .set('Content-Type', 'application/json')
            .send({
            email: faker_1.default.internet.email(),
            password: 'yourpassword',
            confirmation: 'yourpassword',
        })
            .expect(201)
            .then((res) => {
            expect_1.default(res.body.status).toEqual(201);
            expect_1.default(res.body.message).toEqual('Accounts has been created');
        });
    });
    if (exports.user) {
        mocha_1.it('Login accounts', async () => {
            await supertest_1.default(main_1.app.app)
                .post('/api/v1/user/next/login')
                .set('Content-Type', 'application/json')
                .send({
                email: exports.user.email,
                password: 'yourpassword',
            })
                .expect(200)
                .then((res) => {
                system_1.writePath('../../tests/token.txt', res.body.data);
                expect_1.default(res.body.status).toEqual(200);
            });
        });
        mocha_1.it('Reset accounts', async () => {
            await supertest_1.default(main_1.app.app)
                .post('/api/v1/user/next/reset')
                .set('Content-Type', 'application/json')
                .send({ email: exports.user.email })
                .expect(200)
                .then((res) => {
                expect_1.default(res.body.status).toEqual(200);
                expect_1.default(res.body.message).toEqual('Accounts has been reset');
            });
        });
        if (exports.token) {
            mocha_1.it('All', async () => {
                await supertest_1.default(main_1.app.app)
                    .get('/api/v1/user')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.data).not.toEqual(null);
                });
            });
            mocha_1.it('Detail', async () => {
                await supertest_1.default(main_1.app.app)
                    .get(`/api/v1/user/${exports.user.id}`)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.data).not.toEqual(null);
                });
            });
            mocha_1.it('Me', async () => {
                await supertest_1.default(main_1.app.app)
                    .get('/api/v1/user/next/me')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.data).not.toEqual(null);
                });
            });
            mocha_1.it('Update Password', async () => {
                await supertest_1.default(main_1.app.app)
                    .post('/api/v1/user/next/password')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .send({
                    old: 'yourpassword',
                    password: 'yourpassword',
                    confirmation: 'yourpassword',
                })
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.message).toEqual('Password has been updated');
                });
            });
            mocha_1.it('Update Accounts', async () => {
                await supertest_1.default(main_1.app.app)
                    .post('/api/v1/user/next/updated')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .send({
                    first_name: faker_1.default.name.firstName(),
                    last_name: faker_1.default.name.lastName(),
                    headline: faker_1.default.random.arrayElement(headline),
                    biograpy: faker_1.default.lorem.text(),
                    language: faker_1.default.random.arrayElement(language),
                    website: faker_1.default.internet.url(),
                    twitter: 'twitter',
                    facebook: 'facebook',
                    youtube: 'youtube',
                })
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.message).toEqual('Profile has been updated');
                });
            });
            mocha_1.it('Update privacy accounts', async () => {
                await supertest_1.default(main_1.app.app)
                    .post('/api/v1/user/next/privacy')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .send({
                    logged: faker_1.default.random.boolean(),
                    show_course: faker_1.default.random.boolean(),
                })
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.message).toEqual('Profile has been updated');
                });
            });
            mocha_1.it('Update Avatar Accounts', async () => {
                await supertest_1.default(main_1.app.app)
                    .post('/api/v1/user/next/avatar')
                    .set('Content-Type', 'multipart/form-data')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .attach('file', system_1.joinPath('../../Screen Shot 2021-10-20 at 05.57.17.png'))
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.message).toEqual('Profile has been updated');
                });
            });
            mocha_1.it('Update notification settings accounts', async () => {
                await supertest_1.default(main_1.app.app)
                    .post('/api/v1/user/next/notification')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .send({
                    instructor: faker_1.default.random.boolean(),
                    promotions: faker_1.default.random.boolean(),
                    announcements: faker_1.default.random.boolean(),
                    promotional_email: faker_1.default.random.boolean(),
                })
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.message).toEqual('Profile has been updated');
                });
            });
            mocha_1.it('Update message settings accounts', async () => {
                await supertest_1.default(main_1.app.app)
                    .post('/api/v1/user/next/message')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${exports.token}`)
                    .send({
                    active_message: faker_1.default.random.boolean(),
                })
                    .expect(200)
                    .then((res) => {
                    expect_1.default(res.body.status).toEqual(200);
                    expect_1.default(res.body.message).toEqual('Profile has been updated');
                });
            });
        }
        else
            mocha_1.it.skip('token is invalid or not have token');
    }
    else
        mocha_1.it.skip('user not have data');
});
