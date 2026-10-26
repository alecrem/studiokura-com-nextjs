import type { NextApiRequest, NextApiResponse } from 'next';

const apiUri = (process.env.API_URI ?? '').replace(/\/+$/, '');

type PinResponseData = {
  status: string;
  error?: string;
  classTimes?: string;
};

interface StringToStringObjectProps {
  [index: string]: string;
}
const classTypeIds: StringToStringObjectProps = {
  adults: '1',
  kids: '2',
  programming: '3',
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<PinResponseData>
) => {
  const args = req.query;
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ status: 'error', error: `'${req.method}' method not allowed` });
    return;
  }
  if (!Object.hasOwn(args, 'classtype')) {
    res
      .status(400)
      .json({ status: 'error', error: `Bad request: missing parameter` });
    return;
  }

  const classtype = args['classtype'] as string;
  const classTypeId: string = classTypeIds[classtype];
  const backendUrl = `${apiUri}/public/class-types/${classTypeId}/class-times`;

  try {
    const classTimes = fetch(backendUrl).then((res) => {
      if (!res.ok) throw new Error(`upstream ${res.status}`);
      return res.json();
    });

    let resultBody = {
      status: 'success',
      classTimes: await classTimes,
    };
    res.status(200).json(resultBody);
  } catch (error: any) {
    res.status(500).json({ status: 'failed', error });
  }
};
export default handler;
