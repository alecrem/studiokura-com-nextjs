import type { NextApiRequest, NextApiResponse } from 'next'
import { type FormData } from '@/utils'

const uri = process.env.CONTACT_FORM_API_URI || ''

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json([{ slug: 'error', content: `'${req.method}' method not allowed` }])
    return
  }

  try {
    const reqFields = JSON.parse(req.body)
    const formData = new FormData()
    formData.append('name', reqFields.name)
    formData.append('email', reqFields.email)
    formData.append('message', reqFields.message)
    const apiRequest = await fetch(uri, {
      method: 'POST',
      body: formData
    })
    const apiResponse = await apiRequest.json()
    res.status(200).json({
      message: 'ok',
      data: apiResponse
    })
  } catch (error: any) {
    res.status(500).json([{ slug: 'error', content: error }])
    return
  }
}
export default handler
