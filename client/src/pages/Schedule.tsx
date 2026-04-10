import { useSchedule } from "@/hooks/use-conference"
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/ui/card"
import { Clock, MapPin, User, Calendar } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

const tracksData = [
  {
    id: 1,
    title: "TRACK 1",
    chairs: ["Dr. K.Chidambarathanu", "Dr. S. Selvi"],
    coChairs: ["Dr. Lalitha S"],
    venue1: "First Floor Seminar Hall",
    venue2: "RJ Block",
    paperIds: "2 13 41 42 98 350 424 436 449 452 526 599 635 647 760",
    color: "teal",
    radius: "lg:rounded-tl-[3.5rem]"
  },
  {
    id: 2,
    title: "TRACK 2",
    chairs: ["Dr. Sandra Johnson", "Dr. Prathusha Laxmi B"],
    coChairs: ["Dr. Therasa P R"],
    venue1: "Second Floor Seminar Hall",
    venue2: "RJ Block",
    paperIds: "785 808 821 916 1011 1052 1108 1151 1312 1403 1409 1457 1533 1570 1613",
    color: "slate",
    radius: ""
  },
  {
    id: 3,
    title: "TRACK 3",
    chairs: ["Dr. S. Thanga Ramya", "Dr. A. Thilagavathi"],
    coChairs: ["Dr. G Vasuki Devi"],
    venue1: "Second Floor Idea Lab",
    venue2: "RJ Block",
    paperIds: "1623 1628 1670 1682 1685 1700 1729 1731 1769 1831 1832 1897 1903 1904 1907",
    color: "teal",
    radius: "lg:rounded-tr-[3.5rem]"
  },
  {
    id: 4,
    title: "TRACK 4",
    chairs: ["Dr. M. Sheerin Banu", "Dr. P. Kavitha"],
    coChairs: ["Dr. Mohanaprakash T A"],
    venue1: "First Floor Co-Workspace",
    venue2: "RJ Block",
    paperIds: "1957 1961 2005 2018 2034 2069 2070 2084 2175 2211 2223 2235 2323 2345 2404",
    color: "slate",
    radius: ""
  },
  {
    id: 5,
    title: "TRACK 5",
    chairs: ["Dr. T. Suresh", "Dr. Udhaya Sankar S M"],
    coChairs: ["Dr. Ramesh T"],
    venue1: "Second Floor Corporate",
    venue2: "Centre, RJ Block",
    paperIds: "2412 2529 2556 2630 2649 2719 2801 2809 2819 2919 3036 3184 3234 3260 3318",
    color: "teal",
    radius: ""
  },
  {
    id: 6,
    title: "TRACK 6",
    chairs: ["Dr. P. Ezhumalai", "Dr. B. Jaison"],
    coChairs: ["Dr. Geetha R"],
    venue1: "Seminar Hall 1",
    venue2: "SV Block",
    paperIds: "3342 3354 3408 3423 3516 3518 3530 3547 3549 3553 3555 3560 3576 3604 3621",
    color: "slate",
    radius: ""
  },
  {
    id: 7,
    title: "TRACK 7",
    chairs: ["Dr. G. Amudha", "Dr. Manikannan K"],
    coChairs: ["Dr. Lakshmi Haritha M"],
    venue1: "Seminar Hall 2",
    venue2: "SV Block",
    paperIds: "3625 3717 3758 3835 3865 3928 3957 4044 4074 4157 4211 4243 4490 4596 4597",
    color: "teal",
    radius: "lg:rounded-bl-[3.5rem]"
  },
  {
    id: 8,
    title: "TRACK 8",
    chairs: ["Dr. C.S. Anita", "Dr. R. Raja Guru"],
    coChairs: ["Dr. Chithambaramaní R"],
    venue1: "Seminar Hall 3",
    venue2: "SV Block",
    paperIds: "4691 4711 4790 4818 4837 4929 5006 5016 5046 5093 5103 5210 5274 5291 5564",
    color: "slate",
    radius: ""
  },
  {
    id: 9,
    title: "TRACK 9",
    chairs: ["Dr. K. Balasubadra", "Dr. Abitha Kumari D"],
    coChairs: ["Dr. Karthikeyan M P"],
    venue1: "Seminar Hall",
    venue2: "New Block",
    paperIds: "5569 5612 5651 5767 5769 6100 6178 6184 6280 6290 6297 6300 6301 6302",
    color: "teal",
    radius: "lg:rounded-br-[3.5rem]"
  }
];export default function Schedule() {
  const { data: schedule, isLoading } = useSchedule()

  const scheduleByDay =
    schedule?.reduce((acc, item) => {
      if (!acc[item.day]) acc[item.day] = []
      acc[item.day].push(item)
      return acc
    }, {} as Record<string, typeof schedule>) || {}

  const days = Object.keys(scheduleByDay)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24 pb-20">
      <div className="container mx-auto px-6 space-y-20">

        <SectionHeader
          title="Conference Schedule"
          subtitle="Program Agenda & Important Deadlines"
        />

        {/* ================================================= */}
        {/* 🔥🔥 EXTRAORDINARY IMPORTANT DATES SECTION 🔥🔥 */}
        {/* ================================================= */}

        <section className="space-y-10">

          <div className="flex items-center gap-3 text-primary text-2xl font-bold">
            <Calendar className="w-7 h-7" />
            Important Dates
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                label: "Full Paper Submission - Deadline",
                date: "10.03.2026",
                color: "from-blue-600 to-indigo-700"
              },
              {
                label: "Notification of Acceptance",
                date: "31.03.2026",
                color: "from-purple-600 to-violet-700"
              },
              {
                label: "Last Date For Registration",
                date: "10.04.2026",
                color: "from-emerald-600 to-green-700"
              }
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-3xl p-10 text-center text-white shadow-2xl bg-gradient-to-br ${item.color}
                hover:scale-105 transition-all duration-300`}
              >
                <p className="uppercase tracking-widest text-sm opacity-90 mb-4">
                  {item.label}
                </p>

                <h3 className="text-4xl font-extrabold drop-shadow-lg line-through decoration-red-500 decoration-4">
                  {item.date}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/* 🔥 NORMAL DAILY SCHEDULE (Your old content) */}
        {/* ================================================= */}

        {isLoading ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-32 w-full rounded-xl" />
            ))}
          </div>
        ) : days.length === 0 ? (
          <div className="max-w-[1100px] mx-auto relative px-4 xl:px-0">
            <div className="mb-10 flex flex-col items-center text-center">
              <h2 className="text-[2.5rem] leading-[1.1] font-black tracking-widest text-[#0ba9a3]">TRACK</h2>
              <h2 className="text-[2rem] leading-[1.1] font-bold tracking-widest text-[#6c7e96]">DETAILS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10 shadow-2xl rounded-3xl bg-white/50 p-2 border border-slate-100/50 backdrop-blur-sm">
              {/* Optional RMKMATE'26 text on the right side on large screens */}
              <div className="hidden xl:flex absolute -right-24 top-0 bottom-0 bg-white/80 backdrop-blur-md rounded-r-[3rem] w-24 items-center justify-center shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)] border border-l-0 border-white">
                <div className="rotate-90 whitespace-nowrap text-[#0ba9a3] font-black tracking-[0.3em] text-[2.5rem] opacity-90 drop-shadow-sm">
                  RMKMATE'26
                </div>
              </div>

              {tracksData.map((track) => (
                <div 
                  key={track.id} 
                  className={`
                    p-6 px-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 flex flex-col h-full
                    rounded-2xl ${track.radius}
                    ${track.color === 'teal' ? 'bg-[#12b3aa]' : 'bg-[#6f8296]'}
                  `}
                >
                  <h3 className="text-white text-[28px] font-extrabold italic tracking-widest mb-6 uppercase drop-shadow">
                    {track.title}
                  </h3>
                  
                  <div className="flex-1 space-y-5">
                    <div>
                      <div className="text-[#ffee00] font-semibold text-[13px] mb-0.5 uppercase tracking-wide opacity-95">Chair</div>
                      {track.chairs.map(chair => (
                        <div key={chair} className="text-white font-medium text-[15px]">{chair}</div>
                      ))}
                    </div>
                    
                    <div>
                      <div className="text-[#ffee00] font-semibold text-[13px] mb-0.5 uppercase tracking-wide opacity-95">Co-Chair</div>
                      {track.coChairs.map(chair => (
                        <div key={chair} className="text-white font-medium text-[15px]">{chair}</div>
                      ))}
                    </div>

                    <div className="bg-[#ffee00] text-black font-bold text-center py-2 px-3 rounded-[10px] my-5 text-[14px] leading-snug shadow-md">
                      {track.venue1}
                      {track.venue2 && <><br />{track.venue2}</>}
                    </div>

                    <div>
                      <div className="text-[#ffee00] font-semibold text-[13px] mb-1.5 uppercase tracking-wide opacity-95">Paper IDs</div>
                      <p className="text-white text-[13.5px] font-medium leading-[1.6] tracking-widest break-words opacity-95">
                        {track.paperIds}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto space-y-14">

            {days.map((day) => (
              <div key={day}>

                {/* Day Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary text-white px-6 py-2 rounded-xl font-bold shadow-md">
                    {day}
                  </div>
                  <div className="flex-1 h-px bg-slate-300" />
                </div>

                <div className="space-y-6">

                  {scheduleByDay[day].map((item) => (
                    <Card
                      key={item.id}
                      className="p-7 shadow-md hover:shadow-xl transition-all border-l-4 border-primary rounded-xl"
                    >
                      <div className="flex flex-col md:flex-row gap-6">

                        {/* Time */}
                        <div className="md:w-36 font-mono text-primary font-semibold text-lg flex items-center gap-2">
                          <Clock size={18} />
                          {item.time}
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2">{item.event}</h3>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">

                            {item.location && (
                              <div className="flex items-center gap-1">
                                <MapPin size={14} />
                                {item.location}
                              </div>
                            )}

                            {item.speakerId && (
                              <div className="flex items-center gap-1">
                                <User size={14} />
                                Keynote Speaker
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  )
}
