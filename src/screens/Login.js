import React, { Component } from "react"
import { View } from "react-native"
import { Container, Form, Item, Label, Button, Content, Header, Input, Text } from "native-base"
import { connect } from 'react-redux';
import { loginAction } from "../actions/loginAction"
import { LOGIN } from "../actions/types"




class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formdata: {
                username: '',
                password: '',
                device_token: '12345',
                device_type: 'android'
            },
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.login(this.state.formdata)
    }

    render() {
        console.log("LoginResult",this.props.result)
        return (
            <Container>
                <Header>
                    <Text style={{ color: "#ffffff", alignSelf: "center" }}>Login</Text>
                </Header>

                <Content>

                    <Form style={{ flex: 1, marginRight: 15 }}>

                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input

                                onChangeText={(text) => this.setState({
                                    formdata: {
                                        ...this.state.formdata,
                                        username: text
                                    }
                                })}
                                autoCorrect={false}
                                autoCapitalize='none' />
                        </Item>

                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input

                                onChangeText={(text) => this.setState({
                                    formdata: {
                                        ...this.state.formdata,
                                        password: text
                                    }
                                })}
                                secureTextEntry={true}
                                autoCorrect={false}
                                autoCapitalize='none' />
                        </Item>

                    </Form>

                    <Button style={{ marginTop: 25, margin: 15 }} block onPress={this.handleSubmit}>
                        <Text style={{ color: "#ffffff" }} uppercase={false}>Submit</Text>
                    </Button>

                    <Text>{this.props.response.status}</Text>
                    <Text>{this.props.error ? "Error": null}</Text>
                    <Text>{this.props.loading ? "Loading": "Loaded"}</Text>

                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading.isLoading,
        response: state.response.loginData,
        error: state.response.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (formdata) => {
            dispatch(loginAction(formdata))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
