import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../constants/colors';

export const CardContainer = styled.div`
  min-height: ${props => props.minHeight || 'auto'};
  height: ${props => props.height || '50vh'};
  width: ${props => props.width || '70%'};
  background-color: ${props => props.background || WHITE};
  border: 1px solid ${props => props.borderColor || WHITE};
  border-radius: ${props => props.borderRadius || '0.75rem'};
  border-top-left-radius: ${props => props.borderTopLeftRadius || '0.75rem'};
  border-top-right-radius: ${props => props.borderTopRightRadius || '0.75rem'};
  border-bottom-left-radius: ${props =>
    props.borderBottomLeftRadius || '0.75rem'};
  border-bottom-right-radius: ${props =>
    props.borderBottomRightRadius || '0.75rem'};
  padding: ${props => props.padding || '1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const MainLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem;
  background: ${MAIN_COLOR};
  box-sizing: border-box;
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;
