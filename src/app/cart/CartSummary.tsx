import { Checkout, ShopperCurrency, StoreCurrency } from '@bigcommerce/checkout-sdk';
import /*React,*/ { FunctionComponent } from 'react';

import { withCheckout } from '../checkout';
// import { isBuyNowCart } from '../common/utility';
import OrderSummary from '../order/OrderSummary';

import mapToCartSummaryProps from './mapToCartSummaryProps';
import withRedeemable from './withRedeemable';
// import EditLink from './EditLink';
import { RedeemableProps } from './Redeemable';

export type WithCheckoutCartSummaryProps = {
    checkout: Checkout;
    cartUrl: string;
    storeCurrency: StoreCurrency;
    shopperCurrency: ShopperCurrency;
    storeCreditAmount?: number;
} & RedeemableProps;

const CartSummary: FunctionComponent<WithCheckoutCartSummaryProps> = ({
    cartUrl,
    ...props
}) => {
    // const headerLink = isBuyNowCart() ? null : <EditLink url={ cartUrl } />;

    return (
        withRedeemable(OrderSummary)({
            ...props,
            cartUrl,
            // headerLink,
        })
    );
};

export default withCheckout(mapToCartSummaryProps)(CartSummary);
