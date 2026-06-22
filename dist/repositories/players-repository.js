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
exports.findAndModifyPlayer = exports.deleteOnePlayer = exports.insertPlayer = exports.findPlayerById = exports.findAllPlayers = void 0;
const database = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 79,
            Shooting: 93,
            Passing: 82,
            Dribbling: 87,
            Defending: 35,
            Physical: 77,
        },
    },
    {
        id: 3,
        name: "Kylian Mbappé",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 97,
            Shooting: 90,
            Passing: 80,
            Dribbling: 92,
            Defending: 36,
            Physical: 78,
        },
    },
    {
        id: 4,
        name: "Erling Haaland",
        club: "Manchester City",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 89,
            Shooting: 94,
            Passing: 66,
            Dribbling: 81,
            Defending: 45,
            Physical: 88,
        },
    },
    {
        id: 5,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 74,
            Shooting: 88,
            Passing: 94,
            Dribbling: 87,
            Defending: 65,
            Physical: 78,
        },
    },
    {
        id: 6,
        name: "Vinicius Junior",
        club: "Real Madrid",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 95,
            Shooting: 84,
            Passing: 79,
            Dribbling: 92,
            Defending: 29,
            Physical: 69,
        },
    },
    {
        id: 7,
        name: "Jude Bellingham",
        club: "Real Madrid",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 90,
            Pace: 80,
            Shooting: 86,
            Passing: 83,
            Dribbling: 88,
            Defending: 78,
            Physical: 84,
        },
    },
    {
        id: 8,
        name: "Harry Kane",
        club: "Bayern Munich",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 69,
            Shooting: 93,
            Passing: 84,
            Dribbling: 83,
            Defending: 49,
            Physical: 82,
        },
    },
    {
        id: 9,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 89,
            Shooting: 88,
            Passing: 81,
            Dribbling: 89,
            Defending: 45,
            Physical: 75,
        },
    },
    {
        id: 10,
        name: "Rodri",
        club: "Manchester City",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 66,
            Shooting: 80,
            Passing: 86,
            Dribbling: 81,
            Defending: 87,
            Physical: 84,
        },
    },
    {
        id: 11,
        name: "Neymar Jr",
        club: "Al Hilal",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 86,
            Shooting: 84,
            Passing: 87,
            Dribbling: 92,
            Defending: 37,
            Physical: 63,
        },
    },
    {
        id: 12,
        name: "Lautaro Martinez",
        club: "Inter Milan",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 82,
            Shooting: 89,
            Passing: 75,
            Dribbling: 85,
            Defending: 49,
            Physical: 84,
        },
    },
    {
        id: 13,
        name: "Bukayo Saka",
        club: "Arsenal",
        nationality: "England",
        position: "Winger",
        statistics: {
            Overall: 88,
            Pace: 88,
            Shooting: 85,
            Passing: 84,
            Dribbling: 89,
            Defending: 60,
            Physical: 70,
        },
    },
    {
        id: 14,
        name: "Pedri",
        club: "Barcelona",
        nationality: "Spain",
        position: "Midfielder",
        statistics: {
            Overall: 87,
            Pace: 80,
            Shooting: 74,
            Passing: 88,
            Dribbling: 90,
            Defending: 72,
            Physical: 69,
        },
    },
    {
        id: 15,
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 89,
            Pace: 52,
            Shooting: 20,
            Passing: 85,
            Dribbling: 40,
            Defending: 18,
            Physical: 86,
        },
    },
];
const findAllPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    return database;
});
exports.findAllPlayers = findAllPlayers;
const findPlayerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return database.find(player => player.id === id);
});
exports.findPlayerById = findPlayerById;
const insertPlayer = (player) => __awaiter(void 0, void 0, void 0, function* () {
    database.push(player);
});
exports.insertPlayer = insertPlayer;
const deleteOnePlayer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const index = database.findIndex(p => p.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
});
exports.deleteOnePlayer = deleteOnePlayer;
const findAndModifyPlayer = (id, statistics) => __awaiter(void 0, void 0, void 0, function* () {
    const playerIndex = database.findIndex(p => p.id === id);
    if (playerIndex === -1) {
        return undefined;
    }
    database[playerIndex].statistics = statistics;
    return database[playerIndex];
});
exports.findAndModifyPlayer = findAndModifyPlayer;
