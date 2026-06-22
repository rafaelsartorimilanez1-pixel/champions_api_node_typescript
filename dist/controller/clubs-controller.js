"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteClubById = exports.postClub = exports.getClubById = exports.getClubs = void 0;
const ClubServices = __importStar(require("../services/clubs-services"));
const getClubs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clubs = yield ClubServices.getClubsService();
    if (clubs) {
        return res.status(200).json(clubs);
    }
    return res.status(204).send();
});
exports.getClubs = getClubs;
const getClubById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Conversão do ID em tipo numérico
    const rawId = req.params.id;
    const id = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10);
    const club = yield ClubServices.getClubsByIdService(id);
    if (club) {
        return res.status(200).json(club);
    }
    return res.status(404).send();
});
exports.getClubById = getClubById;
const postClub = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const club = yield ClubServices.postClubsService(data);
    res.status(201).json(club);
});
exports.postClub = postClub;
const deleteClubById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rawId = req.params.id;
    const id = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10);
    const deleteClub = yield ClubServices.deleteClubServices(id);
    if (deleteClub) {
        return res.status(200).json({ message: "club deletado com sucesso!" });
    }
    return res.status(404).json({ message: "id não encontrado" });
});
exports.deleteClubById = deleteClubById;
