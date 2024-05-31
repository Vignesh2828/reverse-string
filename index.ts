export const encode = (id: number): string => {
    return Buffer.from(id.toString(), 'binary').toString('base64')
  }
  
  export const decode = (id: string): string => {
    return Buffer.from(id, 'base64').toString('binary')
  }
  