import express, { Request, Response, NextFunction } from "express"
import "dotenv/config"
import { Express } from "express-serve-static-core"

export const options = async (app: Express) => {
  // Endpoint to check status
  app.get("/status", (_req: Request, res: Response) => {
    res.status(200).end()
  })

  // parse encoded requests
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Start app
  const port = process.env.PORT || 5000

  app.listen(port, () => {
    console.log("Server running on port: ", port)
  })

  // neater error handling
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
      },
    })
  })

  return app
}
