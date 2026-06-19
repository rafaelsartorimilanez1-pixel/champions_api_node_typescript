import HttpResponse from "../models/httpResponse-model"


export const ok = async (data:any): Promise<HttpResponse> => {
    return{
        statusCode: 200,
        body: data
    }
}

export const noContent = async(): Promise<HttpResponse> => {
    return{
        statusCode: 204,
        body: null
    }
}

export const badRequest = async(): Promise<HttpResponse> => {
    return{
        statusCode: 400,
        body: null
    }
}
export const created = async(data: any): Promise<HttpResponse> => {
    return{
        statusCode: 201,
        body: {
            message: "sucessful"
        }
    }
}

export const notFound = async(data: any): Promise<HttpResponse> => {
    return{
        statusCode: 404,
        body: {
            message: "not found"
        }
    }
}