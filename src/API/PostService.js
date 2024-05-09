import axios from "axios"
import React from "react"
export default class PostService {
    
    static async getAll(limit,page) {
        const responce = await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params: {
                _limit: limit,
                _page: page
            }
        })


            return responce
                
    }
    
}