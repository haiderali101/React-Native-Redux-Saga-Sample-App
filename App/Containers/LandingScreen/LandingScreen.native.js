// @flow
import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native'

import styles from './LandingScreen.style'
import moment from 'moment'
import _ from 'lodash'

class LandingScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Food Item',
  }

  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      foodName: '',
      showLoader: true,
    }
    this.deleteItemCheck = false
    this.createItemCheck = false
    this.foodListCheck = true
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getFoodList()
    }, 10)
  }

  componentWillReceiveProps(nextProps) {
    const foodListResponse = nextProps.foodListResponse
    const foodListError = _.get(foodListResponse, 'foodListData.error', null)
    const foodListIsFetching = _.get(foodListResponse, 'foodListData.isFetching', false)
    const foodList = _.get(foodListResponse, 'foodListData.Items', [])

    if (this.foodListCheck) {
      if (!foodListIsFetching && foodListError == null && _.size(foodList) > 0) {
        this.setState({ showLoader: false, dataSource: foodList })
        this.foodListCheck = false
        console.log(foodList)
      }
    }

    const createResponse = nextProps.createFoodDataResponse
    const createError = _.get(createResponse, 'error', null)
    const createIsFetching = _.get(createResponse, 'isFetching', false)

    if (this.createItemCheck) {
      if (!createIsFetching && createError == null) {
        this.createItemCheck = false
        this.foodListCheck = true
        nextProps.getFoodList()
        this.setState({ foodName: '' })
      }
    }

    const deleteResponse = nextProps.deleteFoodItemResponse
    const deleteError = _.get(deleteResponse, 'error', null)
    const deleteIsFetching = _.get(deleteResponse, 'isFetching', false)

    if (this.deleteItemCheck) {
      if (!deleteIsFetching && deleteError == null) {
        this.deleteItemCheck = false
        this.foodListCheck = true
        nextProps.getFoodList()
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderTopContainer()}
        {this._renderHeader()}
        {this._renderFoodList()}
        {this._renderActivityIndicator()}
      </SafeAreaView>
    )
  }

  _renderTopContainer = () => {
    return (
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Food Item Name"
            onChangeText={text => this.setState({ foodName: text })}
            value={this.state.foodName}
          />
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.createButtonContainer}
            onPress={() => {
              this.onPressCreateButton()
            }}>
            <Text style={styles.createTextStyle}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _renderHeader = () => {
    return (
      <View style={styles.listHeader}>
        <Text style={styles.foodName}>Name</Text>
        <Text style={styles.dateCreated}>Date Created</Text>
      </View>
    )
  }

  _renderFoodList = () => {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          removeClippedSubviews={false}
          style={styles.flatList}
          ContentContainerStyle={{ paddingBottom: 10 }}
          data={this.state.dataSource}
          extraData={this.props}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => item.foodId}
        />
      </View>
    )
  }

  _renderActivityIndicator = () => {
    if (this.state.showLoader) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      )
    }
  }

  renderRow = ({ item }) => {
    return (
      <FlatListItem
        item={item}
        onPress={item => {
          this.onPressDeleteItem(item)
        }}
      />
    )
  }

  onPressDeleteItem = item => {
    this.setState({ showLoader: true })
    this.deleteItemCheck = true
    this.props.deleteFoodItem(item.foodId)
  }

  onPressCreateButton = () => {
    let alphabetRejex = /^[a-zA-Z\s]*$/
    const { foodName } = this.state

    if (!alphabetRejex.test(foodName) || foodName == '') {
      alert('Invalid Food Name, You can only use Alphabets.')
      return
    }
    this.setState({ showLoader: true })
    this.createItemCheck = true

    payload = {
      foodId: Math.random().toString(),
      name: foodName,
      dateCreated: moment(new Date()).format('DD/MM/YYYY'),
    }
    this.props.createFoodItem(payload)
  }
}

class FlatListItem extends Component {
  render() {
    return (
      <View style={styles.flatListItem}>
        <Text style={styles.foodName}>{this.props.item.name}</Text>
        <Text style={styles.dateCreated}>{this.props.item.dateCreated}</Text>
        <TouchableOpacity
          style={styles.deleteItemContainer}
          onPress={() => {
            this.props.onPress(this.props.item)
          }}>
          <Image source={require('../../Assets/deleteIcon.png')} resizeMode={'center'} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default LandingScreen
