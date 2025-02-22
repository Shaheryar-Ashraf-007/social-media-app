import React from 'react'
import FriendRequest from './FriendRequest'
import Birthdays from './Birthdays'
import Ad from './Ad'
import UserInfoCard from './UserInfoCard'
import UserMediaCard from './UserMediaCard'

const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-6'>
      {userId ?(
        <>
        <UserInfoCard userId={userId} />
        <UserMediaCard userId={userId} />
        </>
      ):null}
      <FriendRequest/>
      <Birthdays/>
      <Ad size='md'/>

    </div>
  )
}

export default RightMenu