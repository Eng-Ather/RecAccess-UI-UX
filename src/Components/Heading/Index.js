
import { Text } from 'react-native';
import React from 'react';

const Heading = ({
  size = 24,
  weight = '700',
  color = 'black',
  textalign = 'center',
  mt = 2,
  mr = 2,
  mb = 2,
  ml = 2,
  lh = 36,
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

export default Heading;
