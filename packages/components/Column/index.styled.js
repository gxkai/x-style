import styled from 'vue-styled-components';
const StyledColumn = styled('div', { styled: Object })`
    ${props => props.styled}
`;
export default {
    name: 'StyledColumn',
    instance: StyledColumn
};
