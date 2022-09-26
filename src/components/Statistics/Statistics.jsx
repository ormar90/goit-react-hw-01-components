import PropTypes from 'prop-types';
import { StatisticsCard, Title, StatList, StatItem, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ data, title }) => {
    return (
        <StatisticsCard>
            {title && <Title>{title}</Title>}

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
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ), 
}