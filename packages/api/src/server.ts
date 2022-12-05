import { sequelize } from './config/database'
import { TinyHttpAdapter } from '@bubojs/tinyhttp'
import { app, AppOptions } from '@bubojs/api'
import { JwtAuth } from '@bubojs/catalog'
import { errorsMiddleware } from '@bubojs/http-errors'
import { AclManager } from '@bubojs/catalog'
import { cors } from '@tinyhttp/cors'
import { default as morgan } from 'morgan'

export const startServer = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const adapter = new TinyHttpAdapter()
      console.log('*________________________________*')
      console.log('| -> Connecting to Database      |')
      await sequelize.authenticate()
      await sequelize.sync({ alter: true })
      console.log('| -> Starting Server             |')
      const appOptions: AppOptions = {
        errorMiddleware: errorsMiddleware({ debugOnClient: false, skipClientError: true, debugOnServer: true }),
        port: 3000,
        fileExtension: import.meta.url.endsWith('ts') ? 'ts' : 'js'
      }
      adapter.app.use(
        JwtAuth.TokenStrategyMiddlewareBuilder('abcdefghijklmnopqrstuvwxyz123', async (id: string) => {
          //TODO
        })
      )
      adapter.app.use(
        cors({
          origin: 'http://localhost:8080',
          credentials: true,
          allowedHeaders: ['Accept', 'Authorization', 'Content-Type', 'Referer', 'Origin', 'Host']
        })
      )
      morgan.token('tiny_url', function getUrl(req) {
        return (req as any)?.path
      })
      adapter.app.use(
        morgan('[:date[iso]] method=:method path=:tiny_url status=:status response-time=:response-time ms')
      )
      adapter.app.options('*', cors())
      const server = await app.initHttpModule(adapter, appOptions)
      AclManager.applyRights()
      console.log('| -> Server Started              |')
      console.log('*________________________________*')
      resolve(server)
    } catch (err) {
      reject(err)
    }
  })
}
