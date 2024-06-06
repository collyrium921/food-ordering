async function sendHttpRequest(url, config){
    const response = await fetch(url, config);
    const resData = await response.json();

    if(!response.ok){
        throw new Error(
            resData.message || 'Something went wrong'
        )
    }
    return resData
}

export default function useHttp(){


}