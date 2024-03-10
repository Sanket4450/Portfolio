import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AdminDataCard } from './AdminDataCard'
import { userDetails } from '../../data/user'
import { messageIcons } from '../../data/messages'

export const AdminHome = () => {
  const navigate = useNavigate()
  const theme = useSelector((state) => state.theme.value)

  return (
    <section>
      <h1 className="text-3xl text-center font-bold text-primary py-5">Admin Dashboard</h1>
      <h1 className=" text-4xl sm:text-5xl font-semibold text-theme-primary py-10">Hello, {userDetails.name}</h1>
      <section>
        <div className=" flex sm:max-lg:hidden max-lg:flex-col justify-around items-center max-sm:space-y-10">
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.messageIconDark : messageIcons.messageIconLight}
            title="Total Messages"
            count={285}
          />
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.unreadMessageIconDark : messageIcons.unreadMessageIconLight}
            title="Unread Messages"
            count={285}
          />
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.readMessageIconDark : messageIcons.readMessageIconLight}
            title="Read Messages"
            count={285}
          />
          <AdminDataCard
            icon={theme === 'dark' ? messageIcons.messageReplyIconDark : messageIcons.messageReplyIconLight}
            title="Total Replies"
            count={285}
          />
        </div>
        <div className=" hidden sm:max-lg:block space-y-10">
          <div className=" flex justify-around">
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.messageIconDark : messageIcons.messageIconLight}
              title="Total Messages"
              count={285}
            />
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.unreadMessageIconDark : messageIcons.unreadMessageIconLight}
              title="Unread Messages"
              count={285}
            />
          </div>
          <div className=" flex justify-around">
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.readMessageIconDark : messageIcons.readMessageIconLight}
              title="Read Messages"
              count={285}
            />
            <AdminDataCard
              icon={theme === 'dark' ? messageIcons.messageReplyIconDark : messageIcons.messageReplyIconLight}
              title="Total Replies"
              count={285}
            />
          </div>
        </div>
        <div className=" flex max-sm:flex-col justify-evenly items-center max-sm:space-y-5 my-20">
          <h2 className=" w-[70vw] sm:w-44 lg:w-64 text-center py-3 text-xl font-semibold hover:cursor-pointer text-bg-primary bg-text-theme-primary border-4 border-text-theme-primary rounded-md hover:text-primary hover:bg-primary transition duration-200" onClick={() => navigate('/admin/messages')}>
            View Messages
          </h2>
          <h2 className=" w-[70vw] sm:w-44 lg:w-64 text-center py-3 text-xl font-semibold hover:cursor-pointer text-bg-primary bg-text-theme-primary border-4 border-text-theme-primary rounded-md hover:text-primary hover:bg-primary transition duration-200">
            View Replies
          </h2>
          <h2 className=" w-[70vw] sm:w-44 lg:w-64 text-center py-3 text-xl font-semibold hover:cursor-pointer text-bg-primary bg-text-theme-primary border-4 border-text-theme-primary rounded-md hover:text-primary hover:bg-primary transition duration-200">
            Logout
          </h2>
        </div>
      </section>
    </section>
  )
}
