import React from 'react';
import { Image} from 'react-native';
import { Container, Content, Form, Textarea, Footer, FooterTab, H1, Button, Left, Body, Icon, Text, Card, CardItem, Thumbnail, } from 'native-base';

function Detail(props) {
    return (
        <Container>

            <Content>

                <Card>

                    <CardItem>
                        <H1 style={{textAlign:'center'}}>Kursus React Native Terpopuler di Jakarta</H1>
                    </CardItem>

                    <CardItem>
                        <Text note style={{textAlign:'center', width:'100%'}}>Selasa 31 Desember 2019</Text>
                    </CardItem>

                    <CardItem cardBody>
                        <Image source={require('../images/banner-babastudio.webp')} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>

                    <CardItem>
                        <Text style={{textAlign:'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor nisi neque, ac tempor nibh porttitor at. Pellentesque eget posuere lorem. Donec imperdiet, purus ut volutpat porttitor, magna arcu iaculis urna, convallis rutrum lorem dolor porta tellus. Nunc aliquet libero arcu, id fringilla risus egestas quis. Pellentesque commodo nisl ac mauris gravida finibus. Proin porttitor finibus urna, non tristique nunc pharetra vitae. Ut cursus non nisi sed feugiat. Maecenas lacinia elit eu nunc blandit, nec luctus massa mattis. Praesent condimentum imperdiet sapien, interdum vestibulum dolor sagittis non. Vestibulum blandit, justo ac placerat porttitor, elit lacus cursus ex, quis lacinia felis orci in neque. In quis ligula venenatis, molestie metus eget, vehicula metus. Integer ornare, nibh a bibendum dapibus, nisl nibh tempus augue
                        </Text>
                    </CardItem>
                    
                </Card>

                <Card>

                    <CardItem>
                        <H1>Komentar</H1>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../images/paket-internet-marketing.webp')} />
                            <Body>
                                <Text>Reza Tri</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Form style={{width:'100%'}}>
                                <Textarea rowSpan={5} bordered placeholder="Masukkan Komentar" />
                            </Form>
                        </Left>
                    </CardItem>

                    <CardItem style={{alignSelf:'flex-end'}}>
                            <Button iconLeft >
                                <Icon name='send' />
                                <Text>Send</Text>
                            </Button>
                    </CardItem>

                </Card>

                <Card>

                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../images/paket-internet-marketing.webp')} />
                            <Body>
                                <Text>Reza Tri</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem>
                        <Text style={{textAlign:'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor nisi neque, ac tempor nibh porttitor at. Pellentesque eget posuere lorem. Donec imperdiet, purus ut volutpat porttitor, magna arcu iaculis urna, convallis rutrum lorem dolor porta tellus. Nunc aliquet libero arcu, id fringilla risus egestas quis. Pellentesque commodo nisl ac mauris gravida finibus.
                        </Text>
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

export default Detail;