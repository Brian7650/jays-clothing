import PropTypes from 'prop-types';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return (
    {
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
      [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType] || BaseButton
  );
};

const Button = ({ children, buttonType = BUTTON_TYPE_CLASSES.base, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPE_CLASSES)),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;