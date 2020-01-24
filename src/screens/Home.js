import React from 'react';
import { Image } from 'react-native';
import { Container, Content, H3, Footer, FooterTab, Button, Left,Text, Card, CardItem} from 'native-base';


class App extends React.Component {
    constructor(props){
        super(props)
        console.log(props.navigation.state.routeName)
    }

    render() {
        return (
            <Container>

                <Content>

                    <Card>

                        <CardItem cardBody>
                            <Image source={require('../images/banner-babastudio.webp')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>

                        <CardItem>
                            <Left>
                                <H3>Kursus React Native Terpopuler di Jakarta</H3>
                            </Left>
                            <Button onPress={() => this.props.navigation.navigate('Detail')}>
                                <Text>READ MORE</Text>
                            </Button>
                        </CardItem>
                        
                    </Card>

                </Content>

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
            );
        }
    }

export default App;