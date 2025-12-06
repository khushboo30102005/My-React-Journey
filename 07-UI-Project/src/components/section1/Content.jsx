import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='h-[90vh] gap-10 py-10 px-18 flex items-center'>
      <LeftContent />
      <RightContent users = {props.users}/>
    </div>
  )
}

export default Content