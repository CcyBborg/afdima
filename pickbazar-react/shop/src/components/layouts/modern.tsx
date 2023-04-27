import Banner from '@/components/banners/banner';
import PromotionSliders from '@/components/promotions/promotions';
import Categories from '@/components/categories/categories';
import { Element } from 'react-scroll';
import ProductGridHome from '@/components/products/grids/home';
import FilterBar from './filter-bar';
import type { HomePageProps } from '@/types';
import SidebarFilter from '../search-view/sidebar-filter';

export default function Modern({ variables }: HomePageProps) {
  return (
    <>
      <PromotionSliders variables={variables.types} />
      <div className="flex flex-1 bg-gray-100">
        <div style={{ position: 'relative', top: 0 }}>
        <div className="sticky top-0 z-10 hidden w-80 shrink-0 lg:block py-6 px-5">
        <SidebarFilter />
        </div>
        </div>
        <main className="block w-full lg:mt-6 xl:overflow-hidden ltr:xl:pl-0 ltr:xl:pr-5 rtl:xl:pr-0 rtl:xl:pl-5">
          <div className="border border-border-200">
            <Banner layout="compact" variables={variables.types} />
          </div>
          <FilterBar variables={variables.categories} />
          <Element name="grid" className="px-4 xl:px-0">
            <ProductGridHome className="py-6" variables={variables.products} />
          </Element>
        </main>
      </div>
    </>
  );
}
