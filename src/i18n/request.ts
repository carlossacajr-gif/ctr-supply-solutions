import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
    const activeLocale = locale || 'en';

    // Detailed logging for production build debugging
    console.log(`[i18n-debug] Requested locale: ${locale}`);
    console.log(`[i18n-debug] Active locale resolved: ${activeLocale}`);

    try {
        // Try to load messages from root messages folder
        const messages = (await import(`../../messages/${activeLocale}.json`)).default;
        console.log(`[i18n-debug] Successfully loaded messages for ${activeLocale}. Keys: ${Object.keys(messages).join(', ')}`);

        return {
            locale: activeLocale,
            messages
        };
    } catch (error) {
        console.error(`[i18n-debug] Error loading messages for ${activeLocale}:`, error);

        // Final fallback to English to prevent total failure
        try {
            const fallback = (await import(`../../messages/en.json`)).default;
            return {
                locale: 'en',
                messages: fallback
            };
        } catch (innerError) {
            console.error(`[i18n-debug] CRITICAL: Even fallback failed!`, innerError);
            return {
                locale: 'en',
                messages: {}
            };
        }
    }
});
