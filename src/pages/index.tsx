import AdminLayout from '@/components/AdminLayout';
import { Stack } from '@mantine/core';

// Page.getLayout = function getLayout(page: any) {
//   return <AdminLayout>{page}</AdminLayout>;
// };

export default function Page() {
  return (
    <Stack gap={'xl'} align="center" justify="center" className="min-h-screen">
      <div className="text-5xl">Why im so</div>
      <div className="text-7xl font-bold"> Handsome </div>
    </Stack>
  );
}
