// @flow
import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topContainer: {
    height: 100,
    alignSelf: 'stretch',
    padding: 20,
    flexDirection: 'row',
    marginTop: 30,
  },
  leftContainer: {
    flex: 1,
    padding: 5,
  },
  rightContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  textInputStyle: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(133,133,133,0.3)',
    padding: 5,
  },
  createButtonContainer: {
    backgroundColor: 'rgb(106,192,67)',
    padding: 15,
  },
  createTextStyle: {
    color: 'white',
    fontFamily: 'Arial-BoldMT',
  },
  flatListContainer: {
    width: '100%',
    flex: 1,
    padding: 20,
  },
  flatList: {
    width: '100%',
    flex: 1,
  },
  flatListItem: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(133,133,133,0.3)',
    alignItems: 'center',
  },
  foodName: {
    flex: 1 / 2,
    fontFamily: 'Arial-BoldMT',
  },
  dateCreated: {
    flex: 1,
  },
  deleteItemContainer: {
    flex: 1 / 6,
    alignSelf: 'center',
  },
  listHeader: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
  },
  loaderContainer: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    height: height,
  },
  nothingTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nothingText: {
    fontFamily: 'Arial-BoldMT',
  },
  contentStyle: {
    paddingBottom: 10,
  },
  tryAgainButton: {
    backgroundColor: 'rgb(48, 117, 255)',
    padding: 5,
  },
  whiteColorText: {
    color: 'white',
  },
})
