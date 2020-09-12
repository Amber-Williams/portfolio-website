import axios from 'axios'
import { isEmpty } from 'lodash'
import moment from 'moment'

interface PropertyProps {
  id: number
  images: string[]
  numberBedrooms: number
  address: string
  postcode: string
  features: string[]
  description: string
  price: string
  expired: boolean
  dateAdded: string
}

export const getAllProperties = async () => {
  return await axios.get(`http://localhost:5000/properties`).then(
    (response) => {
      const data: Array<PropertyProps> = response.data
      const status: number = response.status

      if (isEmpty(response.data)) {
        return {
          statusCode: 404,
          error: 'No properties listed',
        }
      }
      return {
        statusCode: status,
        properties: data,
        error: null,
      }
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.log(error)
      return {
        statusCode: 500,
        properties: null,
        error: error,
      }
    }
  )
}

export const getProperty = async (id) =>
  await axios.get(`http://localhost:5000/properties/${id}`).then(
    (response) => {
      const data: object = response.data
      const status: number = response.status

      return {
        statusCode: status,
        property: data,
        error: null,
      }
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.log(error)
      return {
        statusCode: 500,
        property: null,
        error: error,
      }
    }
  )
