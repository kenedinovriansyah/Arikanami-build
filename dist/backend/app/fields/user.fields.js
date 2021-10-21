"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageF = exports.NotificationF = exports.UpdatePrivacyF = exports.UpdateF = exports.PasswordF = exports.ResetF = exports.RegisterF = exports.LoginF = void 0;
const class_validator_1 = require("class-validator");
class LoginF {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginF.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], LoginF.prototype, "password", void 0);
exports.LoginF = LoginF;
class RegisterF {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RegisterF.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RegisterF.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], RegisterF.prototype, "confirmation", void 0);
exports.RegisterF = RegisterF;
class ResetF {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ResetF.prototype, "email", void 0);
exports.ResetF = ResetF;
class PasswordF {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PasswordF.prototype, "old", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PasswordF.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PasswordF.prototype, "confirmation", void 0);
exports.PasswordF = PasswordF;
class UpdateF {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateF.prototype, "first_name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateF.prototype, "last_name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateF.prototype, "headline", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateF.prototype, "biograpy", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateF.prototype, "language", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateF.prototype, "website", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateF.prototype, "twitter", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateF.prototype, "facebook", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateF.prototype, "youtube", void 0);
exports.UpdateF = UpdateF;
class UpdatePrivacyF {
}
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], UpdatePrivacyF.prototype, "logged", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], UpdatePrivacyF.prototype, "show_course", void 0);
exports.UpdatePrivacyF = UpdatePrivacyF;
class NotificationF {
}
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationF.prototype, "instructor", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationF.prototype, "promotions", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationF.prototype, "announcements", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationF.prototype, "promotional_email", void 0);
exports.NotificationF = NotificationF;
class MessageF {
}
__decorate([
    class_validator_1.IsBoolean(),
    __metadata("design:type", Boolean)
], MessageF.prototype, "active_message", void 0);
exports.MessageF = MessageF;
