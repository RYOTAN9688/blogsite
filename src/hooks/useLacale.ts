import { ja } from '../components/ja';
import { en } from '../components/en';
import { useRouter } from 'next/dist/client/router';

export const useLocale = () => {
  const { locale } = useRouter();

  const t = locale === 'en' ? en : ja;

  return { locale, t };
};
