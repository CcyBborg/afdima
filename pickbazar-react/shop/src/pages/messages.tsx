import Card from '@/components/ui/cards/card';
import { useTranslation } from 'next-i18next';
import MyMessages from '@/components/messages/my-messages';
import Seo from '@/components/seo/seo';
import { useUser } from '@/framework/user';
import DashboardLayout from '@/layouts/_dashboard';
export { getStaticProps } from '@/framework/general.ssr';

const MessagesPage = () => {
  const { me } : any = useUser();
  if (!me) return null;
  return (
    <>
      <Seo noindex={true} nofollow={true} />
      <Card className="w-full shadow-none sm:shadow">
        <MyMessages />
      </Card>
    </>
  );
};

MessagesPage.authenticationRequired = true;

MessagesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default MessagesPage;
