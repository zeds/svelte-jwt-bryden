import {browser} from '$app/env'

function browserGet(key) {
  if(browser) {
    const item = localStorage.getItem(key)
    if(item) {
      // return JSON.parse(item)
      return item
    }
  }
  return null
}

export function browserSet(key, value) {
  if(browser) {
    localStorage.setItem(key, value)
  }
}

export async function post(fetch, url, body) {
  let customError = true
  try {
    let headers = {}
    if(!(body instanceof FormData)) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(body)
    }
    const token = browserGet('jwt')
    if(token) {
      headers['Authorization'] = 'Bearer ' + token
    }
    const res = await fetch(url, {
      method: 'POST',
      body,
      headers
    })
    if(res.ok) {
      try {
        const json = await res.json()
        return json
      } catch(err) {
        throw { id: '', message: 'Any unknown error has occured'}
      }
    }
  } catch(err) {
    throw customError ? err : {id: '', message: 'An unknown error has occured' }
  }
}