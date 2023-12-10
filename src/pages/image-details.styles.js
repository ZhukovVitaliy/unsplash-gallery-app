import styled from 'styled-components';

export const ImageDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const ImageTitle = styled.h2`
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
  max-width: 50%;
  padding-left: 20px;
`;

export const TagsContainer = styled.div`
  margin-top: 15px;
`;

export const Tag = styled.span`
  margin-right: 5px;
  padding: 3px 8px;
  background-color: #f0f0f0;
  border-radius: 3px;
  font-size: 12px;
`;
