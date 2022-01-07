import { ja } from '../components/laungage/ja';
import { en } from '../components/laungage/en';
import { useRouter } from 'next/dist/client/router';

export const useLocale = () => {
  const { locale } = useRouter();

  const t = locale === 'en' ? en : ja;

  return { locale, t };
};
