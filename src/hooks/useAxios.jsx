import axios from 'axios'
import React, { useContext } from 'react'
import { FirebaseContext } from '../providers/Context'

const axiosInstance = axios.create({
    baseURL : 'http://localhost:5000'
})

export default function useAxios() {
    const {user} = useContext(FirebaseContext);

    axiosInstance.interceptors.request.use((config)=>{
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config
    })
  return axiosInstance
}
