import styled from 'styled-components';

export const SubscribeWrapper = styled.div`
  background-image: url('/images/subscribe.png');
  height: 128px;
  background-position: top-center;
  background-size: cover;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 128px;
  gap: 20px;
`;

export const Left = styled.div`
  flex: 11;
`;

export const Label = styled.div`
  font-size: 12px;
  line-height: 15px;
  border-bottom: 1px solid white;
  padding-bottom: 13px;
  margin-bottom: 13px;
  color: #f2f2f2;
`;

export const Para = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Right = styled.div`
  flex: 1;
`;
