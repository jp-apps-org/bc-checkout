import { noop } from 'lodash';

export default function navigateToOrderConfirmation(location = window.location): Promise<never> {
    // const url = `${location.pathname.replace(/\/$/, '')}/order-confirmation`;
    // location.replace(url);

    let url = "https://store.homefi.pr/order-confirmation";
    const urlParams = new URLSearchParams(window.location.search);
    const locale = urlParams.get('locale');

    if(locale) {
        url = `https://store.homefi.pr/${locale}/order-confirmation`;
    }

    location.replace(url);
    return new Promise(noop);
}
