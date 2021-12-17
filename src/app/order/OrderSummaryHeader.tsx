import React, { FunctionComponent } from 'react';

import { TranslatedString } from '../locale';

const OrderSummaryHeader: FunctionComponent = ({ children }) => (
    <div>
        <header className="cart-header">
            <h3 className="cart-title optimizedCheckout-headingSecondary">
                <TranslatedString id="cart.cart_heading" />
            </h3>
        { children }
        </header>
        <div style={{ padding: "0.5rem 1.5rem" }}>
            <TranslatedString id="cart.cart_sub_heading" />
        </div>
    </div>
    
);

export default OrderSummaryHeader;
