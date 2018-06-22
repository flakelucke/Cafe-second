
import React, { Component } from "react";
import { List, ListItem, SearchBar } from "react-native-elements";
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    Text,
    FlatList,
    ImageBackground,
    Alert,
    TouchableOpacity,
    AsyncStorage,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { Spinner,} from 'native-base';
export default class TabCatalog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data1: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      loadspin: true,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://api-for-cafe.herokuapp.com/cafe/`;
    this.setState({ loading: true });
    //Можно через SetTimeout
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data1:  page === 1 ? res.data : [...this.state.data1, ...res.data],
          error: res.error || null,
          loading: false,
          refreshing: false,
          loadspin: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  //обновление данных в списке
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  //загрузка элементов списка
  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  renderHeader = () => {
    return <View>
    <SearchBar placeholder="Поиск"
      containerStyle={{ backgroundColor: "#ffffff",borderTopWidth: 0, height: 50}}
      inputStyle={{backgroundColor: "#ffffff",fontSize : 16,}}
      icon={{ type: 'font-awesome', name: 'search' }}/>
      {this.state.loadspin && (
      <ActivityIndicator animating size="large" />
      )}
    </View>
    ;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" hidesWhenStopped={this.state.loading} />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,marginTop: 0}} >
        <FlatList
          data={this.state.data1}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this._handlePress()}
              title={`${item.adress} ${item.description}`}
              subtitle={item.name}
              avatar={{ uri: item.pictureURL}}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.name}
          // убрать для отображения рамки снизу
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          //бесконечная прокрутка
          // onEndReached={this.handleLoadMore}
          // onEndThreshold={50}
	//Левый свайп
		//renderLeftHiddenRow={data =>
              //<Button full onPress={() => alert(data)}>
                //<Icon active name="information-circle" />
              //</Button>}
		//leftOpenValue={75}
        />
     </List>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    home : {
      width: 25,
      height: 25,
      marginLeft : 8,
    },
  });
