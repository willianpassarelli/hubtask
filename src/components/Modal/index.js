import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Box,
  HeaderModal,
  TitleModal,
  CloseModal,
  BodyModal,
  Description,
  ButtonsModal,
  Button,
  TextButton,
} from './styles';

export default function Modal({
  isVisible,
  close,
  onPressButton,
  textButton,
  description,
  title,
}) {
  const [visible, setVisible] = useState(isVisible);
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
      }),
    ]).start();
  }, [offset.y, opacity]);

  function backdrop() {
    setVisible(!visible);
  }

  return (
    <>
      {visible && (
        <Container>
          <Box
            style={[
              { transform: [...offset.getTranslateTransform()] },
              { opacity },
            ]}
          >
            <HeaderModal>
              <TitleModal>{title}</TitleModal>
              {close && (
                <CloseModal onPress={backdrop}>
                  <Icon name="close" size={24} color="#444" />
                </CloseModal>
              )}
            </HeaderModal>
            <BodyModal>
              <Description>{description}</Description>
            </BodyModal>
            <ButtonsModal>
              <Button onPress={onPressButton}>
                <TextButton>{textButton}</TextButton>
              </Button>
            </ButtonsModal>
          </Box>
        </Container>
      )}
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPressButton: PropTypes.func.isRequired,
  textButton: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  close: PropTypes.bool,
};

Modal.defaultProps = {
  isVisible: false,
  close: false,
};
