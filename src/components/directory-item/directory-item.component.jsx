import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer 
      onClick={onNavigateHandler}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onNavigateHandler()}
    >
      <BackgroundImage $imageUrl={imageUrl} aria-hidden="true" />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

DirectoryItem.propTypes = {
  category: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired,
};

export default DirectoryItem;