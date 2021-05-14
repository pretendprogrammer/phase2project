import React from 'react'
import { useHistory } from 'react-router'
import { Button, Header, Icon } from 'semantic-ui-react'

const TitleAndHomeLink = (props) => {
    const history = useHistory()
    return (
        <div>
            <Header textAlign='center'>
                <Header.Content>Program Wars</Header.Content>
            </Header>
            <Button onCLick={() => history.push('/')}>
                {/* <Button.Content hidden>Go Home</Button.Content>
                <Button.Content visible> */}
                    <Icon name='home' size='large'/>
                {/* </Button.Content> */}
            </Button>
        </div>
    )
}


export default TitleAndHomeLink