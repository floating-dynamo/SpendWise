import ContainerPadding from '@/components/layouts/container-padding';
import PageTitle from '@/components/shared/page-title';
import { generateSectionItems } from '@/lib/utils';
import { Armchair } from 'lucide-react';

const HomePage = () => {
  return (
    <ContainerPadding>
      <PageTitle
        title='Home'
        icon={Armchair}
        iconColor='text-purple-600'
        subtitle='The only app you need to manage your money. Track spending, set budgets, and get insights.'
      />
      <div>
        <div className='mt-5 flex flex-col gap-8 items-center justify-center flex-wrap'>
          {generateSectionItems().map(({ title, body, img }) => {
            return (
              <div className={'py-5 flex flex-col border-2 p-5 rounded-md'} key={title}>
                <p className={'font-bold text-2xl sm:text-5xl tracking-tighter py-2'}>{title}</p>
                <p className='py-5 sm:w-1/2 text-muted-foreground'>{body}</p>
                <img src={img} alt={title} className='w-72 my-12 mx-auto' />
              </div>
            );
          })}
        </div>
      </div>
    </ContainerPadding>
  );
};

export default HomePage;
