import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation';

import en from '../messages/en.json';
import es from '../messages/es.json';
import zh from '../messages/zh.json';
import it from '../messages/it.json';
import pt from '../messages/pt.json';
import de from '../messages/de.json';
import fr from '../messages/fr.json';

const messagesMap: Record<string, any> = { en, es, zh, it, pt, de, fr };

export default getRequestConfig(async ({ requestLocale }) => {
    // next-intl 4.x pattern: requestLocale is a promise
    let locale = await requestLocale;

    if (!locale || !locales.includes(locale as any)) {
        locale = 'en';
    }

    console.log(`[i18n-static-debug] requestLocale resolved to: ${locale}`);

    return {
        locale,
        messages: messagesMap[locale] || messagesMap.en
    };
});
