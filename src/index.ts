import express from "express"
import { options } from "./options"

const startServer = async (): Promise<void> => {
  const app = express()
  await options(app)
}

startServer()
