import * as ClubRepositories from "../repositories/clubs-repositories"
import * as HttpResponse from "../utils/http-helper"
import { ClubModel } from "../models/club-models"

export const getClubsService = async () => {
    const clubs = await ClubRepositories.findAllClubs()

    return clubs
}

export const getClubsByIdService = async (id: number) => {
    const club = await ClubRepositories.findClubById(id)

    return club
}

export const postClubsService = async (data:ClubModel ) => {

    // Verifica se o req não está vazio
    if(Object.keys(data).length === 0){
        throw new Error("Dados inválidos")
    }

    const club = await ClubRepositories.postClubRepositories(data)

    return club
}

export const deleteClubServices = async (id:number) => {

    const deleteClub = await ClubRepositories.deleteClubByIdRepositories(id)

    return deleteClub
}

