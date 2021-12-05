import React from 'react';
import {StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Separator from '../Separator';
import {Text, Block} from '../../theme/index';
import {SIZES, COLORS} from '../../theme/theme';

const SelectorPopUp = ({isVisible, hideModal, onSelect, itemsList}) => {
  return (
    <Modal
      isVisible={isVisible}
      avoidKeyboard={true}
      backdropColor={COLORS.black}
      backdropOpacity={0.8}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationInTiming={200}
      animationOutTiming={200}
      style={{margin: 0}}
      backdropTransitionInTiming={200}
      backdropTransitionOutTiming={200}
      onBackdropPress={() => {
        hideModal();
      }}
      onSwipeComplete={() => {
        hideModal();
      }}>
      <Block padding={16} flex={0} style={styles.block} white>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
          data={itemsList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
                hideModal();
              }}>
              <Block padding>
                <Text size={SIZES.h2}>{item.title}</Text>
              </Block>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.index}
          ItemSeparatorComponent={Separator}
        />
      </Block>
    </Modal>
  );
};

export default SelectorPopUp;

const styles = StyleSheet.create({
  block: {
    height: '50%',
    marginTop: 'auto',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  input: {
    height: '100%',
    textAlignVertical: 'top',
    padding: 16,
  },
});
