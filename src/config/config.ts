import dotenv from 'dotenv'
import convict from 'convict'
dotenv.config()

// Define a schema
const config = convict({
  server: {
    port: {
      doc: 'The port to bind.',
      format: 'Number',
      default: 3000,
      env: 'PORT'
    }
    // env: {
    //   doc: 'The application environment.',
    //   format: ['production', 'development', 'test'],
    //   default: 'development',
    //   env: 'NODE_ENV'
    // }
  }
})

// Perform validation
config.validate()

export default config.getProperties()
