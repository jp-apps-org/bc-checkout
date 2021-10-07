import { noop } from 'lodash';

export default function navigateToOrderConfirmation(location = window.location): Promise<never> {
    // const url = `${location.pathname.replace(/\/$/, '')}/order-confirmation`;
    // location.replace(url);

    location.replace("https://store.homefi.pr/order-confirmation");
    return new Promise(noop);
}
