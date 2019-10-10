import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../store/actions';
import {Header, ImageList} from '../uikit';


class HomeScreen extends Component {


  onFetchData = (newPhotos) => {
    this.props.fetchData(newPhotos);
  }


  render() {
    const {navigation, data} = this.props;
    return (
      <ScrollView>
        <Header />
        <ImageList onFetchData={this.onFetchData()} navigation={navigation} data={data}/>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.fetchedData.data
  }
}

export default connect(mapStateToProps, {fetchData})(HomeScreen);


