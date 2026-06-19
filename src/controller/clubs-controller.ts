import { raw, Request, Response } from "express"
import * as ClubServices from "../services/clubs-services"
import * as HttpResponse from "../utils/http-helper"

export const getClubs = async (req:Request, res:Response) => {

    const clubs = await ClubServices.getClubsService()

    if (clubs) {
        return res.status(200).json(clubs)
    }

    return res.status(204).send()
}

export const getClubById = async (req:Request, res:Response) => {

    //Conversão do ID em tipo numérico
    const rawId = req.params.id
    const id = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10);

    const club = await ClubServices.getClubsByIdService(id);

    if (club) {
        return res.status(200).json(club)
    }

    return res.status(404).send()
}

export const postClub = async (req:Request, res:Response) => {
    const data = req.body

    const club = await ClubServices.postClubsService(data)

    res.status(201).json(club)
}

export const deleteClubById = async (req:Request, res:Response) => {

    const rawId = req.params.id
    const id = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10)

    const deleteClub = await ClubServices.deleteClubServices(id)

    if(deleteClub){
        return res.status(200).json({message: "club deletado com sucesso!"})
    }
    
    return res.status(404).json({message: "id não encontrado"})
}

