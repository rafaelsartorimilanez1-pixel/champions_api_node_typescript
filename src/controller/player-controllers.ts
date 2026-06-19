import {Request, Response } from "express"
import * as PlayerServices from "../services/players-services"
import * as status from "../utils/http-helper";
import StatisticsPlayerModel from "../models/statistics-model"

export const getPlayer = async (req:Request, res:Response)=>{

    const httpResponse: any = await PlayerServices.getPlayerService();

    if (httpResponse && typeof (httpResponse as any).statusCode === 'number') {
        res.status((httpResponse as any).statusCode).json((httpResponse as any).body);
    } else {
        res.status(200).json(httpResponse);
    }
}

export const getPlayerById = async (req:Request, res:Response) => {

    const idParam = req.params.id

    const id = parseInt(Array.isArray(idParam) ? idParam[0] : idParam)

    const httpResponse: any = await PlayerServices.getPlayerByIdService(id)

    if (httpResponse && typeof (httpResponse as any).statusCode === 'number') {
        res.status((httpResponse as any).statusCode).json((httpResponse as any).body);
    } else {
        res.status(200).json(httpResponse);
    }
}

export const postPlayer = async (req:Request, res:Response) => {
    const bodyValue = req.body

    const httpResponse: any = await PlayerServices.createPlayerService(bodyValue)

    if (httpResponse && typeof (httpResponse as any).statusCode === 'number') {
        res.status((httpResponse as any).statusCode).json((httpResponse as any).body);
    } else if (httpResponse) {
        res.status(201).json(httpResponse);
    } else {
        const response = await status.badRequest();
        res.status(response.statusCode).json(response.body);
    }
    
}

export const deletePlayer = async (req:Request, res:Response) =>{
    const id = req.params.id

    if(Array.isArray(id)){
        return res.status(400).json({message: "Invalid ID"})
    }

    const numericId = parseInt(id);

    const httpResponse = await PlayerServices.deletePlayerService(numericId);

    if (httpResponse && typeof (httpResponse as any).statusCode === 'number') {
        res.status((httpResponse as any).statusCode).json((httpResponse as any).body);
    } else {
        res.status(200).json(httpResponse);
    }
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (Array.isArray(id)) {
        return res.status(400).json({ message: "Invalid ID" });
    }

    const numericId = parseInt(id);

    const bodyValue: StatisticsPlayerModel = req.body;

    const httpResponse = await PlayerServices.updatePlayerService(numericId,bodyValue);

    if (httpResponse && typeof (httpResponse as any).statusCode === 'number') {
        return res.status((httpResponse as any).statusCode).json((httpResponse as any).body);
    }

    return res.status(200).json(httpResponse);
}