import React, { Component } from 'react';
import { Button, Alert, Text, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Blink from './components/Blink';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  _onPressButton(){
    Alert.alert('You tapped the button!');
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    let data = [
      {
          "_id": "59c29a8cdf400171aee97fc3",
          "age": 32,
          "name": "Lawanda Glover",
          "gender": "female"
      },
      {
          "_id": "59c29a8cbe416466af30d678",
          "age": 22,
          "name": "Kaufman Miranda",
          "gender": "male"
      },
      {
          "_id": "59c29a8c8c5826592ea2d137",
          "age": 28,
          "name": "Bell Blake",
          "gender": "male"
      },
      {
          "_id": "59c29a8cf816141a732e1fbb",
          "age": 25,
          "name": "Norton Cherry",
          "gender": "male"
      },
      {
          "_id": "59c29a8c87a3a0401ac66e5c",
          "age": 28,
          "name": "Christian Middleton",
          "gender": "female"
      },
      {
          "_id": "59c29a8c193e9675a475d0df",
          "age": 27,
          "name": "Hewitt Barron",
          "gender": "male"
      },
      {
          "_id": "59c29a8cbbec18183339ac05",
          "age": 24,
          "name": "Augusta Pennington",
          "gender": "female"
      },
      {
          "_id": "59c29a8cfa0a3296c3fb8c42",
          "age": 40,
          "name": "Katrina Thornton",
          "gender": "female"
      },
      {
          "_id": "59c29a8c4772ada15e2fe4fa",
          "age": 35,
          "name": "Duke Macias",
          "gender": "male"
      },
      {
          "_id": "59c29a8cbb620336a4381946",
          "age": 37,
          "name": "Angela Herring",
          "gender": "female"
      },
      {
          "_id": "59c29a8c7153859dc4d2bbdf",
          "age": 31,
          "name": "Reyna Myers",
          "gender": "female"
      },
      {
          "_id": "59c29a8cf2bed65996c391c2",
          "age": 37,
          "name": "Cheri Wilder",
          "gender": "female"
      },
      {
          "_id": "59c29a8cdd567c25e8f117eb",
          "age": 39,
          "name": "Dale Solomon",
          "gender": "male"
      },
      {
          "_id": "59c29a8c2a05b4531278cfd5",
          "age": 25,
          "name": "Jacquelyn Farmer",
          "gender": "female"
      },
      {
          "_id": "59c29a8c4c55c79a62c2f7b2",
          "age": 33,
          "name": "Berger Mcmahon",
          "gender": "male"
      },
      {
          "_id": "59c29a8c1b08d61fe9ee974b",
          "age": 22,
          "name": "Frost Gutierrez",
          "gender": "male"
      },
      {
          "_id": "59c29a8c7a0ef3b1e9518a8d",
          "age": 24,
          "name": "Simpson Fry",
          "gender": "male"
      },
      {
          "_id": "59c29a8ca03b5493a68059b8",
          "age": 21,
          "name": "Elba Dickerson",
          "gender": "female"
      },
      {
          "_id": "59c29a8c08485a8eeec1f602",
          "age": 30,
          "name": "Laura Ayers",
          "gender": "female"
      },
      {
          "_id": "59c29a8cbd51d6be9cb14443",
          "age": 36,
          "name": "Lucille West",
          "gender": "female"
      },
      {
          "_id": "59c29a8c18086ca61e31dff4",
          "age": 33,
          "name": "Sondra Norton",
          "gender": "female"
      },
      {
          "_id": "59c29a8c414daede9cd8e6c2",
          "age": 24,
          "name": "Darla Hampton",
          "gender": "female"
      },
      {
          "_id": "59c29a8c148e37f2d37ece61",
          "age": 20,
          "name": "Dejesus Pena",
          "gender": "male"
      },
      {
          "_id": "59c29a8c78f2fcde89fef3fd",
          "age": 25,
          "name": "Chase Winters",
          "gender": "male"
      },
      {
          "_id": "59c29a8c5ad0a77c763f0b9d",
          "age": 31,
          "name": "Reed Arnold",
          "gender": "male"
      },
      {
          "_id": "59c29a8c1612ed458943fc57",
          "age": 35,
          "name": "Chan Montoya",
          "gender": "male"
      },
      {
          "_id": "59c29a8c3c7f3ebc3d98c6e5",
          "age": 30,
          "name": "Mcdaniel Carver",
          "gender": "male"
      },
      {
          "_id": "59c29a8c2c40ce645ef5f834",
          "age": 25,
          "name": "Yates Foreman",
          "gender": "male"
      },
      {
          "_id": "59c29a8cf800a4b0b82facc0",
          "age": 26,
          "name": "Tanisha Robbins",
          "gender": "female"
      },
      {
          "_id": "59c29a8c9bce254e67236fbe",
          "age": 23,
          "name": "Celina Deleon",
          "gender": "female"
      },
      {
          "_id": "59c29a8cbee630911dada4c5",
          "age": 30,
          "name": "Gayle Holman",
          "gender": "female"
      },
      {
          "_id": "59c29a8cf2393baed2a72de8",
          "age": 33,
          "name": "Gates Sexton",
          "gender": "male"
      },
      {
          "_id": "59c29a8c7d0538e27e93afe5",
          "age": 33,
          "name": "Letha Townsend",
          "gender": "female"
      },
      {
          "_id": "59c29a8c9025870671acb050",
          "age": 38,
          "name": "Bates Rodriquez",
          "gender": "male"
      },
      {
          "_id": "59c29a8c7bd924e73604c128",
          "age": 39,
          "name": "Denise Houston",
          "gender": "female"
      },
      {
          "_id": "59c29a8caf5215f0d7daf514",
          "age": 38,
          "name": "Rodriquez Maynard",
          "gender": "male"
      },
      {
          "_id": "59c29a8c5e20900c2703ad1e",
          "age": 28,
          "name": "Dorothea Rivas",
          "gender": "female"
      },
      {
          "_id": "59c29a8c4c1898fbda7067c9",
          "age": 40,
          "name": "Sims Sawyer",
          "gender": "male"
      },
      {
          "_id": "59c29a8cde934a1ce59f20f0",
          "age": 36,
          "name": "Jayne Hurley",
          "gender": "female"
      },
      {
          "_id": "59c29a8c4244781939169af6",
          "age": 36,
          "name": "Oneal Burgess",
          "gender": "male"
      },
      {
          "_id": "59c29a8cbf307b0ca46dc178",
          "age": 27,
          "name": "Henrietta Lindsey",
          "gender": "female"
      },
      {
          "_id": "59c29a8c08b2d5fbbe771bac",
          "age": 34,
          "name": "Jillian Blankenship",
          "gender": "female"
      },
      {
          "_id": "59c29a8c0f4bdd9d584f99f7",
          "age": 28,
          "name": "Tasha Lang",
          "gender": "female"
      },
      {
          "_id": "59c29a8c9983e1fa97e70866",
          "age": 36,
          "name": "Mullins Webb",
          "gender": "male"
      },
      {
          "_id": "59c29a8c061530957b30d7a3",
          "age": 38,
          "name": "Melanie Norman",
          "gender": "female"
      },
      {
          "_id": "59c29a8cdb9ba3faa27fb3e1",
          "age": 25,
          "name": "Shauna Mitchell",
          "gender": "female"
      },
      {
          "_id": "59c29a8c097b6f6fb29edcf2",
          "age": 29,
          "name": "Byrd Gallagher",
          "gender": "male"
      },
      {
          "_id": "59c29a8c6e8b75f735e02589",
          "age": 21,
          "name": "Sellers Hogan",
          "gender": "male"
      },
      {
          "_id": "59c29a8c5e9e336411268e41",
          "age": 31,
          "name": "Bullock Watson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c21e31069f909f2dd",
          "age": 25,
          "name": "Strong Hancock",
          "gender": "male"
      },
      {
          "_id": "59c29a8ce1cb15abc689f4a4",
          "age": 29,
          "name": "Cross Ferguson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c8c5f6b9446092f60",
          "age": 27,
          "name": "Mccormick Rhodes",
          "gender": "male"
      },
      {
          "_id": "59c29a8cf10f3a032c25b9cf",
          "age": 20,
          "name": "Harrell Dale",
          "gender": "male"
      },
      {
          "_id": "59c29a8c93d451cb59400328",
          "age": 22,
          "name": "Davidson Bentley",
          "gender": "male"
      },
      {
          "_id": "59c29a8c82b4813419da2890",
          "age": 33,
          "name": "Nunez Bates",
          "gender": "male"
      },
      {
          "_id": "59c29a8c0b5c9b2b9d6736af",
          "age": 37,
          "name": "Alisha House",
          "gender": "female"
      },
      {
          "_id": "59c29a8c67209d727df51b21",
          "age": 26,
          "name": "Byers Chan",
          "gender": "male"
      },
      {
          "_id": "59c29a8c550eb3293a1bfa8b",
          "age": 34,
          "name": "Morgan Duran",
          "gender": "male"
      },
      {
          "_id": "59c29a8ce41be5314c36f008",
          "age": 21,
          "name": "Berry Jacobson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c2b5784dbfc01c922",
          "age": 25,
          "name": "Hannah Cummings",
          "gender": "female"
      },
      {
          "_id": "59c29a8c20eca0566a761b89",
          "age": 34,
          "name": "Cunningham Patton",
          "gender": "male"
      },
      {
          "_id": "59c29a8c8bf4df5ee48de0b6",
          "age": 32,
          "name": "Carroll Lawson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c6e744d49141010ef",
          "age": 27,
          "name": "Joseph Hanson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c0863ab94e48569cf",
          "age": 33,
          "name": "Thelma Cabrera",
          "gender": "female"
      },
      {
          "_id": "59c29a8c6d2afe2121bcd792",
          "age": 33,
          "name": "Juliana Gomez",
          "gender": "female"
      },
      {
          "_id": "59c29a8c8689141aba20a917",
          "age": 33,
          "name": "Rebekah Garrett",
          "gender": "female"
      },
      {
          "_id": "59c29a8c2abaf5a60864dc42",
          "age": 21,
          "name": "Patton Kidd",
          "gender": "male"
      },
      {
          "_id": "59c29a8c6ba1eee9201726a5",
          "age": 20,
          "name": "Florence Petty",
          "gender": "female"
      },
      {
          "_id": "59c29a8c8bb9cb32888cde03",
          "age": 20,
          "name": "Preston Figueroa",
          "gender": "male"
      },
      {
          "_id": "59c29a8ce6a6fd12eece861f",
          "age": 24,
          "name": "Abby Woods",
          "gender": "female"
      },
      {
          "_id": "59c29a8cb251a241410f74a7",
          "age": 34,
          "name": "Raquel Bean",
          "gender": "female"
      },
      {
          "_id": "59c29a8cb95cbb4dcd96d336",
          "age": 30,
          "name": "Zamora Phelps",
          "gender": "male"
      },
      {
          "_id": "59c29a8c02933eb87da9d117",
          "age": 22,
          "name": "Lillian Richardson",
          "gender": "female"
      },
      {
          "_id": "59c29a8cc9d1dcaa03d90402",
          "age": 20,
          "name": "Soto Chen",
          "gender": "male"
      },
      {
          "_id": "59c29a8cf0c3db8ac34c66a7",
          "age": 28,
          "name": "Phyllis Woodward",
          "gender": "female"
      },
      {
          "_id": "59c29a8c0c9055481195ba91",
          "age": 33,
          "name": "Duncan Cotton",
          "gender": "male"
      },
      {
          "_id": "59c29a8cb35c1b600950fc91",
          "age": 23,
          "name": "Hayden Woodard",
          "gender": "male"
      },
      {
          "_id": "59c29a8c9d851b8e734b0c0f",
          "age": 40,
          "name": "Gaines Freeman",
          "gender": "male"
      },
      {
          "_id": "59c29a8c9084ecbab0f2bcbc",
          "age": 35,
          "name": "Maria Cohen",
          "gender": "female"
      },
      {
          "_id": "59c29a8c8fa44fc3a648496f",
          "age": 25,
          "name": "Hensley Butler",
          "gender": "male"
      },
      {
          "_id": "59c29a8c5f6b1c1c29f4c184",
          "age": 29,
          "name": "Irene Hewitt",
          "gender": "female"
      },
      {
          "_id": "59c29a8c723bd49996b70cda",
          "age": 31,
          "name": "Nina Merritt",
          "gender": "female"
      },
      {
          "_id": "59c29a8c21249652c3ca4c5b",
          "age": 31,
          "name": "Vicky Graves",
          "gender": "female"
      },
      {
          "_id": "59c29a8cab2cf082c2b0b02c",
          "age": 21,
          "name": "Spence Giles",
          "gender": "male"
      },
      {
          "_id": "59c29a8c6b3af19c9f6d1ba8",
          "age": 33,
          "name": "Corina Farley",
          "gender": "female"
      },
      {
          "_id": "59c29a8ce99373a08ca1d366",
          "age": 27,
          "name": "Lang Morrow",
          "gender": "male"
      },
      {
          "_id": "59c29a8c972a286e63e8fb73",
          "age": 20,
          "name": "Jordan Montgomery",
          "gender": "male"
      },
      {
          "_id": "59c29a8cfbb90ad36a32efa2",
          "age": 29,
          "name": "Patty Mercado",
          "gender": "female"
      },
      {
          "_id": "59c29a8c1b32a21bf0394d1e",
          "age": 35,
          "name": "Harris Wong",
          "gender": "male"
      },
      {
          "_id": "59c29a8ca3da649fe02ca769",
          "age": 40,
          "name": "Duran Peters",
          "gender": "male"
      },
      {
          "_id": "59c29a8c73968366e413a2ce",
          "age": 32,
          "name": "Harvey Bradley",
          "gender": "male"
      },
      {
          "_id": "59c29a8cdda651a6688251c2",
          "age": 31,
          "name": "Veronica Fleming",
          "gender": "female"
      },
      {
          "_id": "59c29a8c17d40bf801b3e312",
          "age": 36,
          "name": "Colette Gentry",
          "gender": "female"
      },
      {
          "_id": "59c29a8c99dbacbe94c37445",
          "age": 20,
          "name": "Concetta Craft",
          "gender": "female"
      },
      {
          "_id": "59c29a8cd82d30ebab1cf751",
          "age": 36,
          "name": "Knox Williamson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c883a0dc21934243e",
          "age": 34,
          "name": "Shannon Avery",
          "gender": "male"
      },
      {
          "_id": "59c29a8c730ab94c0a7ddfd0",
          "age": 23,
          "name": "Herminia Bond",
          "gender": "female"
      },
      {
          "_id": "59c29a8c46d22b50ff7b19ed",
          "age": 37,
          "name": "Kelly Lane",
          "gender": "female"
      },
      {
          "_id": "59c29a8ca050658c52cf10e6",
          "age": 31,
          "name": "Bradley Sharpe",
          "gender": "male"
      },
      {
          "_id": "59c29a8c64fd3ee62ceccf98",
          "age": 21,
          "name": "Lourdes Finley",
          "gender": "female"
      },
      {
          "_id": "59c29a8c9550bef9543e2cc6",
          "age": 33,
          "name": "Etta Lester",
          "gender": "female"
      },
      {
          "_id": "59c29a8c8a0af1e343e6fa39",
          "age": 33,
          "name": "Lambert Ferrell",
          "gender": "male"
      },
      {
          "_id": "59c29a8c5625f401a2577ca9",
          "age": 37,
          "name": "Leach Mcleod",
          "gender": "male"
      },
      {
          "_id": "59c29a8c38dbd05239c8ea6b",
          "age": 34,
          "name": "Sonya Trujillo",
          "gender": "female"
      },
      {
          "_id": "59c29a8ceb07f61b4a4914f1",
          "age": 37,
          "name": "Sherrie Mays",
          "gender": "female"
      },
      {
          "_id": "59c29a8c141370ab4cd6aa42",
          "age": 33,
          "name": "Nona Roman",
          "gender": "female"
      },
      {
          "_id": "59c29a8c857d8116ff1d9226",
          "age": 20,
          "name": "Aimee Hendricks",
          "gender": "female"
      },
      {
          "_id": "59c29a8cf8648bfdb5736f56",
          "age": 21,
          "name": "Navarro Huber",
          "gender": "male"
      },
      {
          "_id": "59c29a8c26f1e9af94ed2fd9",
          "age": 39,
          "name": "Sonia Forbes",
          "gender": "female"
      },
      {
          "_id": "59c29a8c163f68f7d78c6be5",
          "age": 23,
          "name": "Owens Knapp",
          "gender": "male"
      },
      {
          "_id": "59c29a8ccf3ce674fe61f7e3",
          "age": 37,
          "name": "Katheryn Mcfarland",
          "gender": "female"
      },
      {
          "_id": "59c29a8cc2ead8d9b380d357",
          "age": 39,
          "name": "Jaime Reynolds",
          "gender": "female"
      },
      {
          "_id": "59c29a8c3c9a17eed5e01ef8",
          "age": 35,
          "name": "York James",
          "gender": "male"
      },
      {
          "_id": "59c29a8cffa48ae14e9f6758",
          "age": 40,
          "name": "Marylou Anthony",
          "gender": "female"
      },
      {
          "_id": "59c29a8c2da24757f7c1f15d",
          "age": 30,
          "name": "Eaton Nolan",
          "gender": "male"
      },
      {
          "_id": "59c29a8c00a9597ac3717124",
          "age": 39,
          "name": "Alissa Fernandez",
          "gender": "female"
      },
      {
          "_id": "59c29a8c9ae1194fa46f8f39",
          "age": 37,
          "name": "Mckenzie Golden",
          "gender": "male"
      },
      {
          "_id": "59c29a8c7d121a49f0af1714",
          "age": 35,
          "name": "Madelyn Stephenson",
          "gender": "female"
      },
      {
          "_id": "59c29a8c05605146af4f9e0d",
          "age": 28,
          "name": "Nadine Mcguire",
          "gender": "female"
      },
      {
          "_id": "59c29a8c1c71a4f5a547df8a",
          "age": 20,
          "name": "Dunlap Cantrell",
          "gender": "male"
      },
      {
          "_id": "59c29a8cc790b29fbc9302b3",
          "age": 36,
          "name": "Mcintosh Lucas",
          "gender": "male"
      },
      {
          "_id": "59c29a8cfdcd5a18be494a08",
          "age": 26,
          "name": "Lynnette Mcclain",
          "gender": "female"
      },
      {
          "_id": "59c29a8c6da562b564e7781d",
          "age": 28,
          "name": "Rhea Good",
          "gender": "female"
      },
      {
          "_id": "59c29a8c4352f3ab39b52ac0",
          "age": 39,
          "name": "Willa Sanders",
          "gender": "female"
      },
      {
          "_id": "59c29a8c5968f9d71271a672",
          "age": 36,
          "name": "Summer Preston",
          "gender": "female"
      },
      {
          "_id": "59c29a8c5eacc84b0e94c3a4",
          "age": 23,
          "name": "Nell Mueller",
          "gender": "female"
      },
      {
          "_id": "59c29a8ca8a5ee744ca46049",
          "age": 30,
          "name": "Stephens Stevenson",
          "gender": "male"
      },
      {
          "_id": "59c29a8c034095e8ca199570",
          "age": 27,
          "name": "Dyer Bishop",
          "gender": "male"
      },
      {
          "_id": "59c29a8c8230c457416bbb51",
          "age": 21,
          "name": "Cindy Campos",
          "gender": "female"
      },
      {
          "_id": "59c29a8c8953998a8c38c546",
          "age": 21,
          "name": "Blackburn Hinton",
          "gender": "male"
      },
      {
          "_id": "59c29a8caba98e853472da1a",
          "age": 28,
          "name": "Stewart Hopper",
          "gender": "male"
      },
      {
          "_id": "59c29a8c72a08f8c16aa15ee",
          "age": 38,
          "name": "Eve Lowery",
          "gender": "female"
      },
      {
          "_id": "59c29a8c4e2e6e3ac05b4c5b",
          "age": 39,
          "name": "Ayala Prince",
          "gender": "male"
      },
      {
          "_id": "59c29a8c4666eb6603c9587c",
          "age": 26,
          "name": "Rivera Potter",
          "gender": "male"
      }
  ];
    return (
      <ScrollView>
        {data.map(function(i, key){
         return (<Text style={{ padding: 10, fontSize: 20, color: '#d05d05' }} key={i._id}>
            {i.name + ' ' + i.age + ' ' + i.gender}
          </Text>)
        })}
      </ScrollView>
      // <View style={{ flex: 1 }}>
      //   <View style={{ flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
      //     <TextInput
      //       style={{ height: 40 }}
      //       placeholder="Hey What's Your Name"
      //       onChangeText={(text) => this.setState({ text })}
      //     />
      //     <Text style={{ padding: 10, fontSize: 20 }}>
      //       {this.state.text === '' ? '' : 'Hello ' + this.state.text + ' have a 🍕'}
      //     </Text>
      //   </View>
      //   <View style={{ flex: 2, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
      //     <Blink text='I love to blink' />
      //     <Button onPress={this._onPressButton} title="Tap that"/>
      //   </View>
      //   <View style={{ flex: 3, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
      //     <Image source={pic} style={{ width: 193, height: 110, margin: 20 }} />
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  }
});
