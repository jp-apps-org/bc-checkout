import React, { FunctionComponent } from 'react';

import { TranslatedString } from '../locale';

const OrderSummaryHeader: FunctionComponent = ({ children }) => (
    <header className="cart-header">
        <h3 className="cart-title optimizedCheckout-headingSecondary">
            <TranslatedString id="cart.cart_heading" />
        </h3>
        <div>
            <TranslatedString id="cart.cart_sub_heading" />
        </div>
       { children }
    </header>
);

export default OrderSummaryHeader;
