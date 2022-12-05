import AxiosInstance from "./AxiosInstance";

export function post(resource, postValue) {
  return AxiosInstance.post(resource, postValue)
}

export function get(resource) {
  return AxiosInstance.get(resource)
}

export function patch(resource, newValue) {
  return AxiosInstance.patch(resource, newValue)
}

export function deleteData(resource) {
  return AxiosInstance.delete(resource)
}