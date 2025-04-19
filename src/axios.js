import axios from "axios"

const API_URL = "http://localhost:5000/api/tasks/"

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

export const fetchTodo = async () => {
  try {
    const response = await axiosInstance.get("/")
    return response.data
  } catch (err) {
    throw new Error("Failed to fetch tasks")
  }
}

export const createTodo = async (description) => {
  try {
    const response = await axiosInstance.post("/", { description })
    return response.data
  } catch (err) {
    throw new Error("Failed to create task")
  }
}

export const updateTodo = async (id, updates) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updates)
    return response.data
  } catch (err) {
    throw new Error("Failed to update task")
  }
}

export const deleteTodo = async (id) => {
  try {
    await axiosInstance.delete(`/${id}`)
  } catch (err) {
    throw new Error("Failed to delete task")
  }
}

export default axiosInstance