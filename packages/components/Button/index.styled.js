import styled from "vue-styled-components";
const StyledButton = styled("a", { styled: Object, hoverStyled: Object })`
    ${props => props.styled}
    &:hover {
        ${props => props.hoverStyled}
    }
`;
export default {
    name: "StyledButton",
    instance: StyledButton
};
