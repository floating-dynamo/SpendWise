import ContainerPadding from '@/components/layouts/container-padding';
import CustomCard from '@/components/shared/custom-card';
import PageTitle from '@/components/shared/page-title';
import { GetSummaryResponse } from '@/lib/models';
import service from '@/services';
import { ChefHat, CreditCard, PieChart } from 'lucide-react';
import { useEffect, useState } from 'react';

const AnalyticsPage = () => {
  const [summary, setSummary] = useState<GetSummaryResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchSummary() {
      try {
        setLoading(true);
        const data = await service.getSummary();
        setSummary(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSummary();
  }, []);

  const PageTitleAnalytics = () => (
    <PageTitle
      title='Analytics'
      icon={PieChart}
      iconColor='text-orange-500'
      subtitle='Gain a deeper understanding of your money habits.'
    />
  );

  if (loading) {
    const NO_OF_CARDS = 8;
    return (
      <ContainerPadding>
        <PageTitleAnalytics />
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 py-5'>
          {Array(NO_OF_CARDS)
            .fill(0)
            .map((_item, idx) => (
              <CustomCard isSkeleton={true} key={idx} />
            ))}
        </div>
      </ContainerPadding>
    );
  }

  return (
    <ContainerPadding>
      <PageTitleAnalytics />
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 py-5'>
        <CustomCard
          isSkeleton={false}
          title='Total Expenses This Month'
          content={
            <>
              <div className='text-2xl font-bold'>₹{summary?.totalExpensesThisMonth}</div>
              <p className='text-xs text-muted-foreground'>
                {Math.floor(
                  (((summary?.totalExpensesThisMonth ?? 0) - (summary?.totalExpensesLastMonth ?? 0)) /
                    (summary?.totalExpensesLastMonth ?? 1)) *
                    100
                )}
                % from last month
              </p>
            </>
          }
          icon={CreditCard}
        />
        <CustomCard
          isSkeleton={false}
          title='Total Expenses This Year'
          content={
            <>
              <div className='text-2xl font-bold'>₹{summary?.totalExpensesThisYear}</div>
              <p className='text-xs text-muted-foreground'>
                {Math.floor(
                  (((summary?.totalExpensesThisYear ?? 0) - (summary?.totalExpensesLastYear ?? 0)) /
                    (summary?.totalExpensesLastYear ?? 1)) *
                    100
                )}
                % from last year
              </p>
            </>
          }
          icon={CreditCard}
        />
        <CustomCard
          isSkeleton={false}
          title='Most Expensive Catogery'
          content={
            <>
              <div className='text-2xl font-bold'>{summary?.mostExpensiveCategoryThisMonth}</div>
              <p className='text-xs text-muted-foreground'>
                It was {summary?.mostExpensiveCategoryLastMonth} last month
              </p>
            </>
          }
          icon={ChefHat}
        />
        <CustomCard
          isSkeleton={false}
          title='Total Expenses This Month'
          content={
            <>
              <div className='text-2xl font-bold'>₹45,231.89</div>
              <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
            </>
          }
          icon={CreditCard}
        />
      </div>
    </ContainerPadding>
  );
};

export default AnalyticsPage;
