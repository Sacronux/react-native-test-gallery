import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../store/actions';
import {Header, ImageList} from '../uikit';


// const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

class HomeScreen extends Component {
  // state = {
  //   data: []
  // }
  // componentDidMount = async() => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     this.setState({data});
  //   } catch (error) {
  //     throw error
  //   }
  // } 

  onFetchData = (newPhotos) => {
    this.props.fetchData(newPhotos);
  }


  render() {
    console.log(this.props)
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


