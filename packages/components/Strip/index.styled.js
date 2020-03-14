import styled from 'vue-styled-components';
const StyledStrip = styled('div', { styled: Object })`
    ${props => props.styled}
`;
export default {
    name: 'StyledStrip',
    instance: StyledStrip
};
