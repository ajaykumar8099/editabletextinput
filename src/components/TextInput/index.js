import {Component} from 'react'

import {
  AppContainer,
  CartContainer,
  Heading,
  InputContainer,
  Para,
  Input,
  Button,
} from './styledComponents'

class TextInput extends Component {
  state = {userInput: '', isActiveButtonClicked: false}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
  }

  onClickButton = () => {
    this.setState(prev => ({
      isActiveButtonClicked: !prev.isActiveButtonClicked,
    }))
  }

  render() {
    const {userInput, isActiveButtonClicked} = this.state
    const buttonText = isActiveButtonClicked ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CartContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isActiveButtonClicked ? (
              <Para>{userInput}</Para>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </CartContainer>
      </AppContainer>
    )
  }
}
export default TextInput
