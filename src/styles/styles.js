import styled from 'styled-components';
import { MAIN_COLOR, WHITE } from '../constants/colors';

export const CardContainer = styled.div`
  min-height: ${props => props.height || 'auto'};
  width: ${props => props.width || '70%'};
  background-color: ${props => props.background || WHITE};
  border: 1px solid ${props => props.borderColor || WHITE};
  border-radius: ${props => props.borderRadius || '0.75rem'};
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
`;
