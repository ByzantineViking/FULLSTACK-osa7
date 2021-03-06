import React, { useState, useImperativeHandle } from 'react'
import { Button } from 'semantic-ui-react'
// eslint-disable-next-line react/display-name
const Togglable = React.forwardRef((props, ref) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
            toggleVisibility
        }
    })

    return (
        <div>
            <div style={hideWhenVisible}>
                <Button onClick={toggleVisibility}>
                    {props.buttonLabel}
                </Button>
            </div>
            <div style={showWhenVisible}>
                <div style={{ marginBottom:'5px' }}>
                    {props.children}
                </div>
                <Button onClick={toggleVisibility}>cancel</Button>
            </div>
        </div>
    )
})

export default Togglable
