import {ViewToken} from 'react-native';
import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem: React.FC<ListItemProps> = React.memo(
  ({item, viewableItems}) => {
    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter(item => item.isViewable)
          .find(viewableItem => viewableItem.item.id === item.id),
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0.4),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.6),
          },
        ],
      };
    }, []);

    return (
      <Animated.View
        style={[
          {
            height: 80,
            width: '90%',
            marginTop: 20,
            borderRadius: 15,
            alignSelf: 'center',
            backgroundColor: '#26c351',
          },
          rStyle,
        ]}
      />
    );
  },
);

export default ListItem;

export {ListItem};
