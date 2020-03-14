import styled from 'vue-styled-components';
const StyledText = styled('div', { styled: Object })`
    ${props => props.styled}
`;
export default {
    name: 'StyledText',
    instance: StyledText
};
