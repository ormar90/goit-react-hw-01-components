import PropTypes from 'prop-types';
import { StatisticsCard, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ data }) => {
    return (
        <StatisticsCard>
            <Title>Upload stats</Title>

            <StatList>
                {data.map((item) => {
                    return (
                        <StatItem key={item.id}>
                            <Label>{item.label}</Label>
                            <Percentage>{item.percentage}%</Percentage>
                        </StatItem>
                    )
                })}
            </StatList>
        </StatisticsCard>
    );
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ), 
}