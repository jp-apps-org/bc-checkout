import { noop } from 'lodash';

export default function navigateToOrderConfirmation(location = window.location): Promise<never> {
    // const url = `${location.pathname.replace(/\/$/, '')}/order-confirmation`;
    // location.replace(url);

    location.replace("http://100.26.223.23:3000/order-confirmation");
    return new Promise(noop);
}
