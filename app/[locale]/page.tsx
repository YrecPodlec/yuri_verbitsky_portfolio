import {useTranslations} from "next-intl";
import Button98 from "@/app/[locale]/shared/ui/button/Button98";
import Navbar from "@/app/[locale]/widgets/Navbar/Navbar";

export default function Home() {
    const t = useTranslations('HomePage')
  return (
      <main>
          <Navbar />
          <p>{t('title')}</p>
      </main>
  );
}
