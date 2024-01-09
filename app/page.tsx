import { FaChevronDown, FaChevronRight, FaHouseChimney, FaMagnifyingGlass, FaQuestion, FaWallet } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { GoHome, GoQuestion } from "react-icons/go";
import { BiNotepad } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { RiCaravanLine } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { VscGraph } from "react-icons/vsc";
import { HiBanknotes } from "react-icons/hi2";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";

const navbarItems = [
  { title: "Home", icon: GoHome },
  { title: "Orders", icon: BiNotepad },
  { title: "Products", icon: HiOutlineSquares2X2 },
  { title: "Delivery", icon: RiCaravanLine },
  { title: "Marketing", icon: TfiAnnouncement },
  { title: "Analytics", icon: VscGraph },
  { title: "Payouts", icon: HiBanknotes },
  { title: "Discounts", icon: TbDiscount2 },
  { title: "Audience", icon: MdOutlinePeopleAlt },
  { title: "Appearance", icon: IoColorPaletteOutline },
  { title: "Plugins", icon: IoFlashOutline },
]

const table = [
  'Order ID', 'Status', 'Transaction ID', 'Refund Date'
]

const tableItems = [
  {
    orderId: '#281209',
    status: 'Successful',
    tId: '131634495747',
    date: 'Today, 08:45 PM',
    amount: '₹1,125.00',
  },
  {
    orderId: '#281208',
    status: 'Processing',
    tId: '131634495747',
    date: 'Yesterday, 3:00 PM',
    amount: '₹1,125.00',
  },
  {
    orderId: '#281207',
    status: 'Successful',
    tId: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    orderId: '#281206',
    status: 'Successful',
    tId: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    orderId: '#281205',
    status: 'Successful',
    tId: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  },
  {
    orderId: '#281204',
    status: 'Successful',
    tId: '131634495747',
    date: '12 Jul 2023, 03:00 PM',
    amount: '₹1,125.00',
  }
]

export default function Home() {
  return (
    <div className='flex flex-row'>
      <div className='w-[224px] h-screen bg-[#1E2640] relative text-white'>
        <div className='flex flex-col items-center gap-6 px-4 py-[10px]'>
          <div className='w-[192px] h-[42px] flex gap-3 relative'>
            <div className='w-[39px] h-[39px] rounded-md bg-white flex items-center justify-center'>
              <p className='text-[6px] text-gray-500'> Nishyam </p>
            </div>

            <div className='flex flex-col gap-1 px-0.5'>
              <p className='text-sm font-medium'> Nishyan </p>
              <p className='text-xs text-gray-400 underline'> Visit store </p>
            </div>

            <div className='absolute self-center right-0'>
              <FaChevronDown size={20} color='white' />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            { navbarItems.map(item => (
              <div className={`w-[208px] flex flex-row rounded py-2 px-4 gap-3 ${item.title === 'Payouts' && 'bg-white/10'}`}>
                <item.icon size={20} />
                <p className='text-sm font-medium'> {item.title} </p>
              </div>
            ))}
          </div>
        </div>

        <div className='w-[192px] h-[54px] py-[6px] px-[12px] bg-[#353C53] rounded absolute bottom-4 left-4 flex flex-row'>
          <div className='w-[149px] h-[42px] flex flex-row gap-3 items-center justify-center'>
            <div className='bg-white/10 flex items-center justify-center p-1.5 rounded w-9 h-9'>
              <FaWallet color='white' />
            </div>

            <div className='flex flex-col gap-[2px] w-[101px] h[42px]'>
              <p className='text-[12px] leading-4'> Available Credits </p>
              <p className='font-medium text-base'> 222.0 </p>
            </div>
          </div>
        </div>
      </div>

      <div className=' w-[1216px] h-screen'>
        <nav className='h-16 py-3 px-8 border-b-[1px] flex flex-row items-center gap-4'>
          <div className='w-[360px] h-[28px] flex flex-row items-center gap-4'>
            <h5 className='font-medium text-xl'> Payouts </h5>

            <div className='h-4 flex flex-row gap-1.5 text-[#4d4d4d] items-center'>
              <GoQuestion size={14} />
              <p className='text-[12px]'> How it works? </p>
            </div>
          </div>

          <div className='w-[400px] h-[40px] flex flex-row gap-2 py-[9px] px-4 items-center rounded-md bg-[#F2F2F2] text-black/50'>
            <FaMagnifyingGlass size={14} />
            <p className='text-[15px]'> Search features, tutorials, etc. </p>
          </div>
          
          <div className='w-[360px] h-[40px] flex flex-row justify-end gap-3 text-[#4D4D4D]'>
            <div className='rounded-full h-10 w-10 bg-[#F2F2F2] flex items-center justify-center'>
              <GrAnnounce size={20} />
            </div>

            <div className='rounded-full h-10 w-10 bg-[#F2F2F2] flex items-center justify-center'>
              <IoMdArrowDropdown size={25} />
            </div>
          </div>
        </nav>

        <div className='top-[96px] left-[256px] pt-8 pl-8'>
          <div className='w-[1152px] h-[794px]'>
            <div className='w-full h-[214px] flex flex-col gap-8'>
              <div className='h-[36px] flex flex-row justify-between items-center'>
                <p className='text-xl font-medium'> Overview </p>
                <button className='w-[137px] h-[36px] flex flex-row gap-4 justify-center items-center rounded border-[1px]'>
                  <p className='text-base'> This Month </p>
                  <FaChevronDown size={16} />
                </button>
              </div>

              <div className='flex flex-row h-[154px] gap-5'>
                <div className='h-[154px] w-[370.67px] bg-[#146EB4] rounded-lg flex flex-col relative'>
                  <div className='h-[118px] p-5'>
                    <div className='h-[78px] flex flex-col gap-4 text-white'>
                      <div className='flex flex-row items-center gap-2 font-light'>
                        <p> Next Payout </p>
                        <GoQuestion size={14} />
                      </div>

                      <div className='flex flex-row justify-between items-center'>
                        <p className='text-3xl font-medium'> ₹2,312.23 </p>

                        <div className='flex flex-row gap-1 items-center text-white'>
                          <p className='underline underline-offset-2 font-medium text-sm'> 23 Orders </p>
                          <FaChevronRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='absolute bottom-0 h-[36px] flex flex-row text-white text-sm justify-between w-full bg-[#0E4F82] py-2 px-6 rounded-lg'>
                    <p> Next payout date: </p>
                    <p className='font-medium'> Today, 04:00PM </p>
                  </div>
                </div>

                <div className='h-[118px] w-[370.67px] flex flex-col p-5 shadow-[0px_2px_6px_0px_#1A181E0A] rounded'>
                  <div className='h-[78px] w-[330.67px] flex flex-col gap-4 items-stretch'>
                    <div className='flex flex-row items-center gap-2 text-[#4D4D4D]'>
                      <p> Amount Pending </p>
                      <GoQuestion size={14} />
                    </div>

                    <div className='flex flex-row justify-between items-baseline'>
                      <p className='text-3xl font-medium'> ₹92,312.20 </p>

                      <div className='flex flex-row gap-1 items-center text-sky-600'>
                        <p className='underline underline-offset-2 font-semibold text-sm'> 13 Orders </p>
                        <FaChevronRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className='h-[118px] w-[370.67px] flex flex-col p-5 shadow-[0px_2px_6px_0px_#1A181E0A] rounded'>
                  <div className='h-[78px] w-[330.67px] flex flex-col gap-4 items-stretch'>
                    <div className='flex flex-row items-center gap-2 text-[#4D4D4D]'>
                      <p> Amount Processed </p>
                      <GoQuestion size={14} />
                    </div>

                    <div className='flex flex-row justify-between items-baseline'>
                      <p className='text-3xl font-medium'> ₹23,92,312.19 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='h-[548px] w-full flex flex-col gap-6'>
                <div className='h-20 w-[252px] flex flex-col gap-6'>
                  <p className='font-medium text-xl'> Transactions | This Month </p>

                  <div className="flex flex-row h-8 gap-3">
                    <div className='rounded-[40px] py-[6px] px-4 bg-[#146EB4] text-white'>
                      <p className='text-sm font-medium'> Payouts (22) </p>
                    </div>

                    <div className='rounded-[40px] py-[6px] px-4 bg-[#E6E6E6] text-[808080]'>
                      <p className='text-sm font-medium'> Refunds (2) </p>
                    </div>
                  </div>
                </div>

                <div className='p-3 pb-2 rounded-lg h-[400px] shadow-[0px_2px_6px_0px_#1A181E0A]'>
                  <div className='flex flex-col h-[92px] gap-3'>
                    <div className='h-10 flex flex-row items-center justify-between'>
                      <div className='w-[248px] h-full flex flex-row items-center gap-2 py-2.5 px-4 border-[1px] rounded-md text-black/60'>
                        <FaMagnifyingGlass size={14} />
                        <p className='text-sm'> Order ID or transaction ID </p>
                      </div>

                      <div className='h-8 flex flex-row items-center gap-3'>
                        <button className='flex flex-row items-center gap-3 py-[5px] px-3 text-black/60 border-[1px] rounded-md'>
                          <p className='text-base'> Sort </p>
                          <RiArrowUpDownLine />
                        </button>

                        <button className='h-[36px] w-[36px] flex items-center justify-center text-black/60 border-[1px] rounded-md'>
                          <MdOutlineFileDownload size={20} />
                        </button>
                      </div>
                    </div>

                    <div className='rounded-md flex flex-row items-center justify-between py-2.5 px-3 h-10 bg-[#F2F2F2]'>
                      { table.map((item, index) => (
                        <p className='w-[150.67px] text-sm font-medium' key={index}> {item} </p>
                      ))}

                      <p className='w-[150.67px] text-sm font-medium text-right'> Order Amount </p>
                    </div>
                  </div>

                  { tableItems.map((item, index) => (
                    <div className='rounded-md h-[48px] border-b-[1px] flex flex-row items-center justify-between py-3.5 px-3'>
                      <p className='w-[150.67px] text-sm text-sky-600 font-medium' key={index}> {item.orderId} </p>

                      <div className='w-[150.67px] flex flex-row items-center gap-2'>
                        <div className={`h-2 w-2 rounded-full ${item.status === 'Successful' ? 'bg-green-500' : 'bg-neutral-500'}`}/>
                        <p className='text-sm' key={index}> {item.status} </p>
                      </div>

                      <p className='w-[150.67px] text-sm text-[#4D4D4D]' key={index}> {item.tId} </p>
                      <p className='w-[150.67px] text-sm text-[#4D4D4D]' key={index}> {item.date} </p>
                      <p className='w-[150.67px] text-sm text-right'> {item.amount} </p>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
