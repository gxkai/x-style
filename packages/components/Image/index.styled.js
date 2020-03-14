import styled from 'vue-styled-components';
const StyledImage = styled('div', { styled: Object })`
    ${props => props.styled}
`;
export default {
    name: 'StyledImage',
    instance: StyledImage
};
