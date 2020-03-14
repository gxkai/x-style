import styled from 'vue-styled-components';
const StyledBox = styled('div', { styled: Object })`
    ${props => props.styled}
`;
export default {
    name: 'StyledBox',
    instance: StyledBox
};
