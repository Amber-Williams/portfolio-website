const serverSideCache = new Map<string, { data: any[]; timestamp: number }>()
const CACHE_DURATION = 60 * 60 * 1000 * 24 // 24 hours

export const getCache = (key: string) => {
  const cached = serverSideCache.get(key)
  const now = Date.now()
  if (cached && now - cached.timestamp < CACHE_DURATION) {
    return cached.data
  } else if (cached) {
    deleteCache(key)
  }
  return null
}

export const setCache = (key: string, data: any) => {
  serverSideCache.set(key, { data, timestamp: Date.now() })
}

export const deleteCache = (key: string) => {
  serverSideCache.delete(key)
}
