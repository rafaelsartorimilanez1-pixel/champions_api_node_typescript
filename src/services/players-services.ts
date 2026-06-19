import PlayerModel from "../models/player-model";
import StatisticsPlayerModel from "../models/statistics-model"
import * as PlayerRepository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"



export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();    
    let response = null
    
    if(data){
        response = await HttpResponse.ok(data)
    }else {
        response = await HttpResponse.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);

    let response = null;

    if(data){
        response = await HttpResponse.ok(data)
    }else{
        response = await HttpResponse.noContent()
    }

    return response
}

export const createPlayerService = async (player: PlayerModel) => {
    
    if (Object.keys(player).length === 0) {
        return HttpResponse.noContent();
    }

    await PlayerRepository.insertPlayer(player);

    return HttpResponse.created(player);
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);
    
    if(isDeleted){
        response = HttpResponse.ok({
            message: "Jogador removido com sucesso"
        });
    }else{
        response = HttpResponse.badRequest();
    }

    return response
}

export const updatePlayerService = async (id: number, statistics:StatisticsPlayerModel) =>{
    const response = await PlayerRepository.findAndModifyPlayer(id, statistics)

    return response;
}