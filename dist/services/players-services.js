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
exports.updatePlayerService = exports.deletePlayerService = exports.createPlayerService = exports.getPlayerByIdService = exports.getPlayerService = void 0;
const PlayerRepository = __importStar(require("../repositories/players-repository"));
const HttpResponse = __importStar(require("../utils/http-helper"));
const getPlayerService = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield PlayerRepository.findAllPlayers();
    let response = null;
    if (data) {
        response = yield HttpResponse.ok(data);
    }
    else {
        response = yield HttpResponse.noContent();
    }
    return response;
});
exports.getPlayerService = getPlayerService;
const getPlayerByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield PlayerRepository.findPlayerById(id);
    let response = null;
    if (data) {
        response = yield HttpResponse.ok(data);
    }
    else {
        response = yield HttpResponse.noContent();
    }
    return response;
});
exports.getPlayerByIdService = getPlayerByIdService;
const createPlayerService = (player) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(player).length === 0) {
        return HttpResponse.noContent();
    }
    yield PlayerRepository.insertPlayer(player);
    return HttpResponse.created(player);
});
exports.createPlayerService = createPlayerService;
const deletePlayerService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = null;
    const isDeleted = yield PlayerRepository.deleteOnePlayer(id);
    if (isDeleted) {
        response = HttpResponse.ok({
            message: "Jogador removido com sucesso"
        });
    }
    else {
        response = HttpResponse.badRequest();
    }
    return response;
});
exports.deletePlayerService = deletePlayerService;
const updatePlayerService = (id, statistics) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield PlayerRepository.findAndModifyPlayer(id, statistics);
    return response;
});
exports.updatePlayerService = updatePlayerService;
