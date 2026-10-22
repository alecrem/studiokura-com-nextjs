import { type KindergartenFormData } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

const uri = process.env.KINDERGARTENS_FORM_API_URI || '';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json([{ slug: 'error', content: `'${req.method}' method not allowed` }]);
    return;
  }

  try {
    const reqFields: KindergartenFormData = JSON.parse(req.body);
    const formData = new FormData();
    formData.append('contact_type', reqFields.contact_type);
    formData.append('kindergarten', reqFields.kindergarten);
    formData.append('name', reqFields.name);
    formData.append('email', reqFields.email);
    formData.append('address', reqFields.address);
    formData.append('phone', reqFields.phone);
    formData.append('classroom1', reqFields.classroom1);
    formData.append('classroom2', reqFields.classroom2);
    formData.append('classroom3', reqFields.classroom3);
    formData.append('students', reqFields.students);
    formData.append('trial_date', reqFields.trial_date);
    formData.append('message', reqFields.message);
    const apiRequest = await fetch(uri, {
      method: 'POST',
      body: formData,
    });
    const apiResponse = await apiRequest.json().catch(() => null);
    if (!apiRequest.ok) {
      // Don't report success when the backend rejected or failed to save the inquiry
      res.status(502).json([
        {
          slug: 'error',
          content: apiResponse?.error ?? `upstream ${apiRequest.status}`,
        },
      ]);
      return;
    }
    res.status(200).json({
      message: 'ok',
      data: apiResponse,
    });
  } catch (error: any) {
    res.status(500).json([{ slug: 'error', content: error }]);
    return;
  }
};
export default handler;
