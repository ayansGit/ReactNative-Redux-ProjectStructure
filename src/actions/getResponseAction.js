import { LOADING } from "./types"

export const loading = (value) =>{
    return {
        type: LOADING,
        loading: value
    }
}

export const onSuccess = (response, type) =>{
    return {
        type: type,
        payload: response
    }
}

export const onFailure = (error, type) =>{
    return {
        type: type,
        payload: error
    }
}