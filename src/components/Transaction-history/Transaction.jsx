import PropTypes from 'prop-types';
import { TransactionTable, TransactionHead, TransactionHeader, TransactionBody, TransactionData } from "./Transactions.styled";

export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable>
            <TransactionHead>
                <tr>
                <TransactionHeader>Type</TransactionHeader>
                <TransactionHeader>Amount</TransactionHeader>
                <TransactionHeader>Currency</TransactionHeader>
                </tr>
            </TransactionHead>

            {transactions.map(({id, type, amount, currency}) => {
                return (
                    <TransactionBody key={id}>
                        <tr>
                        <TransactionData>{type}</TransactionData>
                        <TransactionData>{amount}</TransactionData>
                        <TransactionData>{currency}</TransactionData>
                        </tr>
                    </TransactionBody>
                )
            })}
        </TransactionTable>
    )
}

TransactionHistory.protoType = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
}