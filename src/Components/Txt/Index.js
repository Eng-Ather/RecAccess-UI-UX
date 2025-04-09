import { Text } from 'react-native';
import React from 'react';
import Typography from '../../Constants/Typography';

const Txt = ({
  size = 24,
  weight = '700',
  color = Typography.primaryColor,
  textalign = 'center',
  mt ,
  mr ,
  mb ,
  ml ,
  lh ,
  children,
}) => {
  const allStyles = [
    { color },
    { fontSize: size },
    { fontWeight: weight.toString() },
    { textAlign: textalign },
    { marginTop: mt },
    { marginRight: mr },
    { marginBottom: mb },
    { marginLeft: ml },
    { lineHeight: lh },
  ];

  return <Text style={allStyles}>{children}</Text>;
};

export default Txt;