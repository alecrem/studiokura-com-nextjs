import { teachers } from '@/data/teachers';
import type { NextApiRequest, NextApiResponse } from 'next';

export type TeacherData = {
  slug: string;
  name?: string;
  content?: string;
  images?: string[];
  thumbnailImage?: string;
};

const hiddenTeacherSlugs = new Set([
  'alejandro',
  'azuma',
  'watanabe',
  'tanaka',
  'nakajima',
  'moriyama',
  'sakai',
  'maki',
]);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<TeacherData[]>
) => {
  if (req.method !== 'GET') {
    res
      .status(405)
      .json([{ slug: 'error', content: `'${req.method}' method not allowed` }]);
    return;
  }

  try {
    const teachersData: TeacherData[] = teachers.filter(
      (teacher) => !hiddenTeacherSlugs.has(teacher.slug)
    );
    if (teachersData.length < 1)
      res.status(404).json([{ slug: 'error', content: 'Teacher not found' }]);
    res.status(200).json(teachersData);
  } catch (error: any) {
    res.status(500).json([{ slug: 'error', content: error }]);
    return;
  }
};
export default handler;
