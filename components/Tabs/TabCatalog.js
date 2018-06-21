
import React, { Component } from "react";
// import { List } from "native-base";
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
    TextInput
} from 'react-native';

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
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://api-for-cafe.herokuapp.com/cafe/`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data1:  page === 1 ? res.data : [...this.state.data1, ...res.data],
          error: res.error || null,
          loading: false,
          refreshing: false,
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
        refreshing: true
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
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Поиск"
    containerStyle={{ backgroundColor: "#ffffff",borderTopWidth: 0, height: 50}}
    inputStyle={{backgroundColor: "#ffffff",fontSize : 16,}}
    icon={{ type: 'font-awesome', name: 'search' }}/>;
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
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0,marginTop: 0}} >
        <FlatList
          data1={this.state.data1}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.key}`}
              subtitle={item.key}
              avatar={{ uri: item.pictureURL}}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          // keyExtractor={item => item["-LF3W-hkn3LOy-OetTEr"]["adress"]}
         // убрать для отображения рамки снизу
           ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
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
