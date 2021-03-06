import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useDispatch } from 'react-redux';

import { actionModal } from '~/store/modules/modal/actions';

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
  const dispatch = useDispatch();

  const [offset, setOffSet] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
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
    }
  }, [isVisible, offset.y, opacity]);

  useEffect(() => {
    function resetState() {
      if (!isVisible) {
        setOffSet(new Animated.ValueXY({ x: 0, y: 100 }));
        setOpacity(new Animated.Value(0));
      }
    }
    resetState();
  }, [isVisible]);

  function backdrop() {
    dispatch(actionModal());
  }

  return (
    <>
      {isVisible && (
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
