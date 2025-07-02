export function SuccessObjectResponse(data){
    return {
        success : true,
        data : data
    }
}

export function SuccessArrayResponse(data , count){
    return {
        success : true , 
        data : data , 
        count : count
    }
}