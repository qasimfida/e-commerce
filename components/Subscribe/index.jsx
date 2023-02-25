import React from 'react';
import Button from '../Button';
import Col from '../Layout/col';
import Container from '../Layout/container';
import Row from '../Layout/row';
import { Content, Label, Left, Para, Right, SubscribeWrapper } from './styles';

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <Container>
        <Row>
          <Col xs={12}>
            <Content>
              <Left>
                <Label>WRITE YOUR EMAIL HERE</Label>
                <Para>
                  We’ll never share your email address with a third-party.
                </Para>
              </Left>
              <Right>
                <Button shape="rounded" size="sm" variant="ghost_white">
                  SUBSCRIBE
                </Button>
              </Right>
            </Content>
          </Col>
        </Row>
      </Container>
    </SubscribeWrapper>
  );
};

export default Subscribe;
