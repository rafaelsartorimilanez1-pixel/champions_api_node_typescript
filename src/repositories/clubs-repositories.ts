import {ClubModel} from "../models/club-models"

import fs from 'fs/promises';

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    
    const clubs:ClubModel[] = JSON.parse(data)

    return clubs;
}

export const findClubById = async (id:number): Promise<ClubModel | null> => {

    const data = await fs.readFile("./src/data/clubs.json", "utf-8")

    const clubs:ClubModel[] = JSON.parse(data);

    const findClub = clubs.find(e => e.id === id);

    return findClub || null
}

export const postClubRepositories = async (data:ClubModel) => {
    
    const database = await fs.readFile("./src/data/clubs.json", "utf-8")

    const clubs:ClubModel[] = JSON.parse(database);

    clubs.push(data);

    await fs.writeFile("clubs.json", JSON.stringify(clubs, null, 2))

    return data
}

export const deleteClubByIdRepositories = async (id:number) => {

    const database = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs:ClubModel[] = JSON.parse(database);

    const index = clubs.findIndex(p => p.id === id)

    if(index === -1) return false
    
    clubs.splice(index, 1)

    await fs.writeFile("./src/data/clubs.json", JSON.stringify(clubs, null, 2))

    return true
}

