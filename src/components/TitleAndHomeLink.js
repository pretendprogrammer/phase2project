import React from 'react'
import { useHistory } from 'react-router'
import { Button, Header, Icon } from 'semantic-ui-react'

const TitleAndHomeLink = (props) => {
    const history = useHistory()
    return (
        <div style={{paddingBottom: '2%', backgroundColor: '#86BBD8'}}>
            <Header textAlign='center'>
                <Header.Content>Program Wars</Header.Content>
            </Header>
            <Button onClick={() => {
                props.clearSelections()
                history.push('/')
                }}>
                <Icon name='home' size='large'/>
            </Button>
        </div>
    )
}


export default TitleAndHomeLink