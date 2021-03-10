export function WS (): string {
  console.log(process.env.NODE_ENV)
  const ws: string = process.env.NODE_ENV == 'development' ? 'http://192.168.17.115:3000' : 'http://47.94.252.72:3000'
  return ws
}