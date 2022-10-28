import { API_URL } from '$env/static/private'
import axios from 'axios'

export async function load() {
	const { data: featuredForms } = await axios.get(`${API_URL}/forms/fetch`)
	return { featuredForms }
}
