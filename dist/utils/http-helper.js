"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.created = exports.badRequest = exports.noContent = exports.ok = void 0;
const ok = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        body: data
    };
});
exports.ok = ok;
const noContent = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 204,
        body: null
    };
});
exports.noContent = noContent;
const badRequest = () => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 400,
        body: null
    };
});
exports.badRequest = badRequest;
const created = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 201,
        body: {
            message: "sucessful"
        }
    };
});
exports.created = created;
const notFound = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 404,
        body: {
            message: "not found"
        }
    };
});
exports.notFound = notFound;
