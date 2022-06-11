import * as conf from '../config/config'
import axios from 'axios'

export const GetPaypalAccessToken = async (): Promise<string> => {
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data: { access_token } } = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token',
    params,
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: conf.PAYPAL_API_CLIENT ?? '',
        password: conf.PAYPAL_API_SECRET ?? ''
      }
    }
  )
  return access_token
}
