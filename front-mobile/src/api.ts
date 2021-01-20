import axios from "axios";


const API_URL = 'https://bodegami-sds2.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`)
}

export function fetchProducts() {
  return axios(`${API_URL}/products`)
}

// export function makeOrders() {
//   return axios(`${API_URL}/neworder`);
// }

export function confirmDelivery(orderId: number ) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}