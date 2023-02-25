import React from 'react';
import Blog from '../../components/Blog';
import Col from '../../components/Layout/col';
import Container from '../../components/Layout/container';
import Row from '../../components/Layout/row';
import { BlogsContainerWrapper } from './styles';

const BlogsContainer = ({ bg, className, items, grid }) => {
  return (
    <BlogsContainerWrapper bg={bg} className={className}>
      <Container>
        <Row gap={4} cols={5}>
          {items?.map((item) => (
            <Col {...grid} key={item.id}>
              <Blog
                url=""
                category={item.category}
                title={item.title}
                desc={item.desc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </BlogsContainerWrapper>
  );
};

export default BlogsContainer;
