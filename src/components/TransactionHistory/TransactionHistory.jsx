import PropTypes from 'prop-types'
import {Table,Thead,Tbody,Th,Tr ,Td } from './TransactionHistory.styled'

export const TransactionHistory = ({transactions}) => {
	// console.log(transactions);
	return (
		<Table className="transaction-history">
			<Thead>
				<tr>
					<Th>Type</Th>
					<Th>Amount</Th>
					<Th>Currency</Th>
				</tr>
			</Thead>
			
			<Tbody>
				{transactions.map(({ id, type, amount, currency }) => (
					<Tr
						key={id}
						id={id}
						type={type}
						amount={amount}
						currency={currency}>
					<Td>{type}</Td>
					<Td>{amount}</Td>
					<Td>{currency}</Td>
				</Tr>
				))}
				
			</Tbody>
		</Table>
	);
};

TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.string.isRequired,
			currency: PropTypes.string.isRequired,
		})
	)
	
	
}





// TransactionHistory.propTypes = {
// 	id: PropTypes.string.isRequired,
// 	type: PropTypes.string.isRequired,
// 	amount: PropTypes.string.isRequired,
// 	currency: PropTypes.string.isRequired,
	
// }
	
