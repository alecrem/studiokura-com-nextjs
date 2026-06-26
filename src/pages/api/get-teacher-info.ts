import { teachers } from '@/data/teachers';
import type { NextApiRequest, NextApiResponse } from 'next';

export type TeacherData = {
  slug: string;
  name?: string;
  content?: string;
  images?: string[];
  thumbnailImage?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TeacherData>
) => {
  const args = req.query;
  if (req.method !== 'GET') {
    res
      .status(405)
      .json({ slug: 'error', content: `'${req.method}' method not allowed` });
    return;
  }
  if (!Object.hasOwn(args, 'teacherid')) {
    res
      .status(400)
      .json({ slug: 'error', content: `Bad request: missing parameter` });
    return;
  }

  const teacherid = args['teacherid'] as string;

  try {
    const teacherData: TeacherData[] = teachers.filter(
      (teacher: TeacherData) => teacher.slug == teacherid
    );
    if (teacherData.length < 1)
      res.status(404).json({ slug: 'error', content: 'Teacher not found' });
    res.status(200).json(teacherData[0]);
  } catch (error: any) {
    res.status(500).json({ slug: 'error', content: error });
    return;
  }
};
export default handler;
