import { Menu, Item, Separator } from 'react-contexify'

const ToolTip = (props: any) => {
    
  return (
    <Menu id={props.id} theme='dark' className='tooltip-menu' >
        <Item id='1' onClick={props.handleDelete}  >
          Delete
        </Item>
        <Separator />
        <Item id='2' onClick={props.handleSpam}  >
          Spam
        </Item>
      </Menu>
  )
}

export default ToolTip