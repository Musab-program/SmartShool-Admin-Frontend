export const api = {
  get: async <T>(url: string): Promise<T> => {
    const res = await fetch(url, { credentials: "include" })
    if (!res.ok) throw new Error(`GET ${url} failed`)
    return res.json()
  },
  post: async <T>(url: string, body: unknown): Promise<T> => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(`POST ${url} failed`)
    return res.json()
  },
}



