import React, {ReactNode} from 'react';
import {Card, CardItem, Body} from 'native-base';
import PropTypes from 'prop-types';

export default function SymptomCard(props: any) {
    const {
        key,
        cardObject,
        ...props,
    } = props;

    return (
        <Card key={key} {...props}>
            {!!cardObject.header && (
                <CardItem header>{cardObject.header}</CardItem>
            )}
            {!!cardObject.body && (
                <CardItem>
                    <Body>{cardObject.body}</Body>
                </CardItem>
            )}
            {!!cardObject.footer && (
                <CardItem footer>{cardObject.footer}</CardItem>
            )}
        </Card>
    );
}

SymptomCard.propTypes = {
    key: PropTypes.string || PropTypes.number,
    cardObject: PropTypes.any.isRequired,
};
