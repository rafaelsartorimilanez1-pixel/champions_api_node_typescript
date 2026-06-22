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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClubByIdRepositories = exports.postClubRepositories = exports.findClubById = exports.findAllClubs = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const findAllClubs = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield promises_1.default.readFile("./src/data/clubs.json", "utf-8");
    const clubs = JSON.parse(data);
    return clubs;
});
exports.findAllClubs = findAllClubs;
const findClubById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield promises_1.default.readFile("./src/data/clubs.json", "utf-8");
    const clubs = JSON.parse(data);
    const findClub = clubs.find(e => e.id === id);
    return findClub || null;
});
exports.findClubById = findClubById;
const postClubRepositories = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const database = yield promises_1.default.readFile("./src/data/clubs.json", "utf-8");
    const clubs = JSON.parse(database);
    clubs.push(data);
    yield promises_1.default.writeFile("clubs.json", JSON.stringify(clubs, null, 2));
    return data;
});
exports.postClubRepositories = postClubRepositories;
const deleteClubByIdRepositories = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const database = yield promises_1.default.readFile("./src/data/clubs.json", "utf-8");
    const clubs = JSON.parse(database);
    const index = clubs.findIndex(p => p.id === id);
    if (index === -1)
        return false;
    clubs.splice(index, 1);
    yield promises_1.default.writeFile("./src/data/clubs.json", JSON.stringify(clubs, null, 2));
    return true;
});
exports.deleteClubByIdRepositories = deleteClubByIdRepositories;
