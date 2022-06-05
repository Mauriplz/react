import { stringify } from 'query-string';
import { useSelector } from 'react-redux';

export const useFetch = () =>{
    
    const BASE_URL = 'http://localhost:4000/api';
    // const {token} = useSelector(state=>state.auth)

    const responseHandler = async ( response ) =>{
        const data = await response.json();
        if(!data.ok){
            throw new Error(data.msg);
        }   
        return data;
    }
    
    const getHeader = ( isPublic ) =>{
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');
        if(!isPublic){
            headers.set('x-token', localStorage.getItem('token'))
        }
    
        return headers
    }
    
    const get = async (endpoint, params, isPublic) =>{
        const url = `${BASE_URL}/${endpoint}${(params) ? `?${stringify(params)}` : ''}`;
        try{
    
            const resp = await fetch(url, {
                method : 'GET',
                headers : getHeader(isPublic)
            })
        
            return await responseHandler(resp)
    
        }catch(e){
            console.log(e)
        }
    }
    
    const post = async (endpoint, body, isPublic) =>{
        const url = `${BASE_URL}/${endpoint}`;
    
        try{
    
            const resp = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(body),
                headers : getHeader(isPublic)
            })
    
            return await responseHandler(resp)
    
        }catch(e){
            console.log(e)
        }
    }
    
    const put = async (endpoint, id, body, isPublic) =>{
        const url = `${BASE_URL}/${endpoint}/${id}`;
        try{
    
            const resp = await fetch(url, {
                method : 'PUT',
                body : JSON.stringify(body),
                headers : getHeader(isPublic)
            })
    
            return await responseHandler(resp)
    
        }catch(e){
            console.log(e)
        }
    }
    
    const patch = async (endpoint, id, body, isPublic) =>{
        const url = `${BASE_URL}/${endpoint}/${id}`;
        try{
    
            const resp = await fetch(url, {
                method : 'PATCH',
                body : JSON.stringify(body),
                headers : getHeader(isPublic)
            })
    
            return await responseHandler(resp)
    
        }catch(e){
            console.log(e)
        }
    }
    
    const del = async (endpoint, id, isPublic) =>{
        const url = `${BASE_URL}/${endpoint}/${id}`;
        try{
    
            const resp = await fetch(url, {
                method : 'DELETE',
                headers : getHeader(isPublic)
            })
    
            return await responseHandler(resp)
    
        }catch(e){
            console.log(e)
        }
    }

    return {
        get,
        post,
        patch,
        put,
        del
    }

}