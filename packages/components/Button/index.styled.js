import styled from 'vue-styled-components';
const StyledButton = styled('a', { styled: Object })`
    ${props => props.styled}
`;
export default {
    name: 'StyledButton',
    instance: StyledButton
};
