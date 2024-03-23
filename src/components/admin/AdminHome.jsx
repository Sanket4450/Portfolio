import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AdminDataCard } from './AdminDataCard'
import { AdminButton } from './AdminButton'
import { userDetails } from '../../data/user'
import { messageIcons } from '../../data/messages'
import { getAdminRootData } from '../../api/admin'

export const AdminHome = () => {
  const theme = useSelector((state) => state.theme.value)
  const [homeData, setHomeData] = useState({})

  // useEffect(() => {
  //   getAdminRootData().then((data) => setHomeData(data))
  // }, [])

  return (
    <section>
      <h1 className="text-3xl text-center font-bold text-primary py-5">Admin Dashboard</h1>
      <h1 className=" text-4xl sm:text-5xl font-semibold text-theme-primary py-10">Hello, {userDetails.name}</h1>
      <section>
        <div className=" flex sm:max-lg:hidden max-lg:flex-col justify-around items-center max-sm:space-y-10">
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.messageIconDark : messageIcons.messageIconLight}
            title="Total Messages"
            count={homeData.messagesCount ?? 'N/A'}
          />
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.unreadMessageIconDark : messageIcons.unreadMessageIconLight}
            title="Unread Messages"
            count={homeData.unreadMessagesCount ?? 'N/A'}
          />
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.readMessageIconDark : messageIcons.readMessageIconLight}
            title="Read Messages"
            count={homeData.readMessagesCount ?? 'N/A'}
          />
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.messageReplyIconDark : messageIcons.messageReplyIconLight}
            title="Total Replies"
            count={homeData.repliesCount ?? 'N/A'}
          />
        </div>
        <div className=" hidden sm:max-lg:block space-y-10">
          <div className=" flex justify-around">
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.messageIconDark : messageIcons.messageIconLight}
              title="Total Messages"
              count={homeData.messagesCount ?? 'N/A'}
            />
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.unreadMessageIconDark : messageIcons.unreadMessageIconLight}
              title="Unread Messages"
              count={homeData.unreadMessagesCount ?? 'N/A'}
            />
          </div>
          <div className=" flex justify-around">
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.readMessageIconDark : messageIcons.readMessageIconLight}
              title="Read Messages"
              count={homeData.readMessagesCount ?? 'N/A'}
            />
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.messageReplyIconDark : messageIcons.messageReplyIconLight}
              title="Total Replies"
              count={homeData.repliesCount ?? 'N/A'}
            />
          </div>
        </div>
        <div className=" flex max-sm:flex-col justify-evenly items-center max-sm:space-y-5 my-20">
          <AdminButton text="View Messages" navigatePath="/admin/messages" />
          <AdminButton text="View Replies" navigatePath="/admin/replies" />
          <AdminButton text="Logout" navigatePath="#" />
        </div>
      </section>
    </section>
  )
}
