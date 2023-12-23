import { defer } from '@defer/client'

const greet: (name: string) => Promise<any> = async (name) => {
  console.log(`Hello ${name}!`)
}

export default defer(greet)
